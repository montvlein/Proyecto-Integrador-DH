package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Config.JWTUtil;
import com.dh.DigitalBooking.Models.Entities.Auto;
import com.dh.DigitalBooking.Models.Entities.Roles.JWT;
import com.dh.DigitalBooking.Models.DTOs.UsuarioDTO;
import com.dh.DigitalBooking.Models.Entities.Roles.Rol;
import com.dh.DigitalBooking.Models.Entities.Roles.Usuario;
import com.dh.DigitalBooking.Models.Entities.Roles.googleAuth;
import com.dh.DigitalBooking.Repository.ORM.Roles.iRepositorioUsuario;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioAuto;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ServicioUsuario implements UserDetailsService {
    private iRepositorioUsuario repositorio;

    @Autowired
    private ServicioRol rol;

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private ServicioMail servicioMail;

    @Autowired
    private iRepositorioAuto repositorioAuto;

    @Autowired
    public void setRepositorio(iRepositorioUsuario repositorio){
        this.repositorio = repositorio;
    }

    public JWT.Response guardar(Usuario usuario) throws Exception {
        usuario.setRol(rol.buscarPorId(2l));
        usuario.setVerificado(false);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if (usuario.getContrasenia() != null) {
            String contraseniaEncriptada = passwordEncoder.encode(usuario.getContrasenia());
            usuario.setContrasenia(contraseniaEncriptada);
        }
        repositorio.save(usuario);
        JWT.Response token =new JWT.Response(jwtUtil.generarToken(loadUserByEmail(usuario.getEmail())));
        servicioMail.enviar(usuario.getEmail(), token.getToken() );
        return token;
    }

    public Usuario guardarUsuario(Usuario usuario) throws Exception {
        usuario.setRol(rol.buscarPorId(2l));
        usuario.setVerificado(false);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if (usuario.getContrasenia() != null) {
            String contraseniaEncriptada = passwordEncoder.encode(usuario.getContrasenia());
            usuario.setContrasenia(contraseniaEncriptada);
        }
        usuario = repositorio.save(usuario);
        return usuario;
    }

    public UsuarioDTO buscarPorId(Long id) throws Exception{
        UsuarioDTO buscado = null;
        if(repositorio.findById(id).isPresent()) {
            buscado = usuarioToDTO(repositorio.findById(id).get());
        }
        return buscado;
    }

    public UsuarioDTO buscarPorEmail(String email) {
        Usuario buscado = repositorio.findByEmail(email);
        UsuarioDTO resultado = null;
        if (buscado != null) {
            resultado = usuarioToDTO(buscado);
        }
        return resultado;
    }

    public Usuario actualizar(UsuarioDTO usuario) throws Exception{
        Usuario user = null;
        if (repositorio.findById(usuario.getId()).isPresent()) {
            user = repositorio.findById(usuario.getId()).get();
        }
        if (user != null){
            user.setNombre(usuario.getNombre());
            user.setApellido(usuario.getApellido());
            user.setCiudad(usuario.getCiudad());
            user.setEmail(usuario.getEmail());
            repositorio.save(user);
        }
        return user;
    }

    public void eliminar(Usuario usuario) throws Exception{
        repositorio.delete(usuario);
    }

    public void eliminarPorId(Long id){
        repositorio.deleteById(id);
    }

    public List<Usuario> listar() {
        return repositorio.findAll();
    }

    protected UsuarioDTO usuarioToDTO(Usuario usuario) {
        UsuarioDTO user = new UsuarioDTO();
        user.setId(usuario.getId());
        user.setNombre(usuario.getNombre());
        user.setApellido(usuario.getApellido());
        user.setEmail(usuario.getEmail());
        user.setVerificado(usuario.isVerificado());
        user.setCiudad(usuario.getCiudad());
        if (usuario.getRol().getNombre().equals("ROLE_ADMIN")) {
            user.setEsAdmin(true);
        }
        for (Auto auto : usuario.getFavoritos()){
            user.agregarFavorito(auto.getId());
        }
        return user;
    }

    private List<UsuarioDTO> usuarioToDTO(List<Usuario> listado) {
        List<UsuarioDTO> listadoDeAutos = new ArrayList<>();
        for (Usuario usuario : listado){
            listadoDeAutos.add(usuarioToDTO(usuario));
        }
        return listadoDeAutos;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = repositorio.findByEmail(email);
        if (usuario != null) {
            return new User(usuario.getEmail(),
                    usuario.getContrasenia(),
                    getAuthorities(usuario));
        } else {
            throw new UsernameNotFoundException("No se encontro usuario con mail: " + email);
        }
    }

    public UserDetails loadUserByEmail(String email) throws UsernameNotFoundException {
        return  loadUserByUsername(email);
    }

    public Set<? extends GrantedAuthority> getAuthorities(Usuario usuario) {
        Rol rol = usuario.getRol();
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(rol.getNombre()));
        return authorities;
    }

    public UsuarioDTO tokenInfo(String token) {
        String email = jwtUtil.extraerEmail(token);
        UsuarioDTO usuario = null;
        Usuario usuarioPorMail = repositorio.findByEmail(email);
        if (usuarioPorMail != null) usuario = usuarioToDTO(usuarioPorMail);
        return usuario;
    }

    public boolean validarMail(String token) {
        String email = jwtUtil.extraerEmail(token);
        Usuario usuario = repositorio.findByEmail(email);
        if (usuario != null) {
            usuario.setVerificado(true);
            repositorio.save(usuario);
            return usuario.isVerificado();
        }
        return false;
    }

    @Value("${googleAuth.cliente_id}")
    private String CLIENTE_ID;
    public googleAuth.Response validarGoogleCredential(googleAuth.Resquest token) throws Exception {

        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), GsonFactory.getDefaultInstance())
                .setAudience(Collections.singletonList(CLIENTE_ID)).build();
        GoogleIdToken idToken = verifier.verify(token.credential());

        String emailPayload;
        String apellidoPayload;
        String nombrePaykoad;

        try {
            GoogleIdToken.Payload payload = idToken.getPayload();
            emailPayload = payload.getEmail();
            apellidoPayload = (String) payload.get("family_name");
            nombrePaykoad = (String) payload.get("given_name");
        } catch (Exception e) {
            throw new Exception("Google Oauth Token Invalido: " + e.getMessage());
        }

        UsuarioDTO usuarioEnRepositorio = null;

        if (emailPayload != null) {
            usuarioEnRepositorio = buscarPorEmail(emailPayload);
        }

        if (usuarioEnRepositorio != null) return new googleAuth.Response(usuarioEnRepositorio, jwtUtil.generarToken(emailPayload));

        Usuario nuevoUsuario = new Usuario();
        nuevoUsuario.setNombre(nombrePaykoad);
        nuevoUsuario.setApellido(apellidoPayload);
        nuevoUsuario.setEmail(emailPayload);
        nuevoUsuario = guardarUsuario(nuevoUsuario);
        usuarioEnRepositorio = buscarPorEmail(nuevoUsuario.getEmail());
        return new googleAuth.Response(usuarioEnRepositorio, jwtUtil.generarToken(emailPayload));
    }

    public void agregarFavorito(Long usuarioId, Long autoId) {
        Optional<Usuario> usuario = repositorio.findById(usuarioId);
        Optional<Auto> auto = repositorioAuto.findById(autoId);
        if (usuario.isPresent() && auto.isPresent()) {
            usuario.get().agregarFavorito(auto.get());
            repositorio.save(usuario.get());
        }
    }

    public void eliminarFavorito(Long usuarioId, Long autoId) {
        Optional<Usuario> usuario = repositorio.findById(usuarioId);
        Optional<Auto> auto = repositorioAuto.findById(autoId);
        if (usuario.isPresent() && auto.isPresent()) {
            usuario.get().eliminarFavorito(auto.get());
            repositorio.save(usuario.get());
        }
    }
}

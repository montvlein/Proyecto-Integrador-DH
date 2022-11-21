package com.dh.DigitalBooking.Services.Roles;

import com.dh.DigitalBooking.Config.JWTUtil;
import com.dh.DigitalBooking.Models.Entities.Roles.JWT;
import com.dh.DigitalBooking.Models.DTOs.UsuarioDTO;
import com.dh.DigitalBooking.Models.Entities.Roles.Usuario;
import com.dh.DigitalBooking.Repository.ORM.Roles.iRepositorioUsuario;
import com.dh.DigitalBooking.Services.ServicioMail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
    public void setRepositorio(iRepositorioUsuario repositorio){
        this.repositorio = repositorio;
    }

    public JWT.Response guardar(Usuario usuario) throws Exception {
        usuario.setRol(rol.buscarPorId(2l));
        usuario.setVerificado(false);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String contraseniaEncriptada = passwordEncoder.encode(usuario.getContrasenia());
        usuario.setContrasenia(contraseniaEncriptada);
        repositorio.save(usuario);
        JWT.Response token =new JWT.Response(jwtUtil.generarToken(loadUserByEmail(usuario.getEmail())));
        servicioMail.enviar(usuario.getEmail(), token.getToken() );
        return token;
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

    public Usuario actualizar(Usuario usuario) throws Exception{
        Usuario user = null;
        if (repositorio.findById(usuario.getId()).isPresent()) {
            user = repositorio.findById(usuario.getId()).get();
        }
        if (user != null){
            user.setNombre(usuario.getNombre());
            user.setApellido(usuario.getApellido());
            user.setCiudad(usuario.getCiudad());
            user.setContrasenia(usuario.getContrasenia());
            user.setEmail(usuario.getEmail());
            user.setRol(usuario.getRol());
            user.setReservas(usuario.getReservas());
            guardar(user);
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

    private UsuarioDTO usuarioToDTO(Usuario usuario) {
        UsuarioDTO user = new UsuarioDTO();
        user.setId(usuario.getId());
        user.setNombre(usuario.getNombre());
        user.setApellido(usuario.getApellido());
        user.setEmail(usuario.getEmail());
        user.setVerificado(usuario.isVerificado());
        user.setCiudad(usuario.getCiudad());
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
                    new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("No se encontro usuario con mail: " + email);
        }
    }

    public UserDetails loadUserByEmail(String email) throws UsernameNotFoundException {
        return  loadUserByUsername(email);
    }

    public UsuarioDTO tokenInfo(String token) {
        String email = jwtUtil.extraerEmail(token);
        UsuarioDTO usuario = null;
        Usuario usuarioPorMail = repositorio.findByEmail(email);
        if (usuarioPorMail != null) usuario = usuarioToDTO(usuarioPorMail);
        return usuario;
    }
}

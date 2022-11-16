package com.dh.DigitalBooking.Services.Roles;

import com.dh.DigitalBooking.Config.JWTUtil;
import com.dh.DigitalBooking.Models.DTOs.AutoDTO;
import com.dh.DigitalBooking.Models.DTOs.LoginDTO;
import com.dh.DigitalBooking.Models.DTOs.UsuarioDTO;
import com.dh.DigitalBooking.Models.Entities.Auto;
import com.dh.DigitalBooking.Models.Entities.Roles.Rol;
import com.dh.DigitalBooking.Models.Entities.Roles.Usuario;
import com.dh.DigitalBooking.Repository.ORM.Roles.iRepositorioUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServicioUsuario {
    private iRepositorioUsuario repositorio;

    @Autowired
    private ServicioRol rol;

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    public void setRepositorio(iRepositorioUsuario repositorio){
        this.repositorio = repositorio;
    }

    public UsuarioDTO guardar(Usuario usuario) throws Exception{
        usuario.setRol(rol.buscarPorId(2l));
        usuario.setVerificado(false);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String contraseniaEncriptada = passwordEncoder.encode(usuario.getContrasenia());
        usuario.setContrasenia(contraseniaEncriptada);
        return usuarioToDTO(repositorio.save(usuario));
    }

    public String authenticar(LoginDTO data) {
        Usuario usuario = repositorio.findByEmail(data.getEmail());
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if (usuario != null && passwordEncoder.matches(data.getContrasenia(),usuario.getContrasenia())) {
            return jwtUtil.generarToken(usuario.getEmail());
        }
        return null;
    }

    public UsuarioDTO authenticar(String token) { //este metodo no funciona. Error JsonParseException
        String mail = jwtUtil.extraerNombre(token);
        Usuario usuario = repositorio.findByEmail(mail);
        UsuarioDTO user = null;
        if (usuario != null && jwtUtil.isTokenExpired(token)) {
            user = usuarioToDTO(usuario);
        }
        return user;
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
}

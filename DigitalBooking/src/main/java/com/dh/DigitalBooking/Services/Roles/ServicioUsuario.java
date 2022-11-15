package com.dh.DigitalBooking.Services.Roles;

import com.dh.DigitalBooking.Models.DTOs.AutoDTO;
import com.dh.DigitalBooking.Models.DTOs.UsuarioDTO;
import com.dh.DigitalBooking.Models.Entities.Auto;
import com.dh.DigitalBooking.Models.Entities.Roles.Usuario;
import com.dh.DigitalBooking.Repository.ORM.Roles.iRepositorioUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServicioUsuario {
    private iRepositorioUsuario repositorio;

    @Autowired
    public void setRepositorio(iRepositorioUsuario repositorio){
        this.repositorio = repositorio;
    }

    public UsuarioDTO guardar(Usuario usuario) throws Exception{
        return usuarioToDTO(repositorio.save(usuario));
    }

    public UsuarioDTO buscarPorId(Long id) throws Exception{
        UsuarioDTO buscado = null;
        if(repositorio.findById(id).isPresent()) {
            buscado = usuarioToDTO(repositorio.findById(id).get());
        }
        return buscado;
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

    public List<UsuarioDTO> listar() {
        return usuarioToDTO(repositorio.findAll());
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

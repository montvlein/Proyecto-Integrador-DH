package com.dh.DigitalBooking.Services.Roles;

import com.dh.DigitalBooking.Models.Entities.Roles.Usuario;
import com.dh.DigitalBooking.Repository.ORM.Roles.iRepositorioUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioUsuario {
    private iRepositorioUsuario repositorio;

    @Autowired
    public void setRepositorio(iRepositorioUsuario repositorio){
        this.repositorio = repositorio;
    }

    public Usuario guardar(Usuario usuario) throws Exception{
        return repositorio.save(usuario);
    }

    public Usuario buscarPorId(Long id) throws Exception{
        Usuario buscado = null;
        if(repositorio.findById(id).isPresent()) buscado = repositorio.findById(id).get();
        return buscado;
    }

    public Usuario actualizar(Usuario usuario) throws Exception{
        Usuario user = buscarPorId(usuario.getId());
        if (user != null){
            user.setNombre(user.getNombre());
            user.setApellido(user.getApellido());
            user.setCiudad(user.getCiudad());
            user.setContrasenia(user.getContrasenia());
            user.setEmail(user.getEmail());
            user.setRol(user.getRol());
            user.setReservas(user.getReservas());
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
}

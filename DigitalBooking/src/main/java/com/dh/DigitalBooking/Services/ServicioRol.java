package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Models.Entities.Roles.Rol;
import com.dh.DigitalBooking.Repository.ORM.Roles.iRepositorioRol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("ServicioRol")
public class ServicioRol {

    private iRepositorioRol repositorio;

    @Autowired
    public void setRepositorio(iRepositorioRol repositorio) {this.repositorio = repositorio;}

    public Rol guardar(Rol rol) throws Exception{
        return repositorio.save(rol);
    }

    public Rol buscarPorId(Long id) throws Exception{
    Rol buscado = null;
    if(repositorio.findById(id).isPresent()) buscado = repositorio.findById(id).get();
    return buscado;
    }


    public Rol actualizar (Rol rol) throws Exception {
        Rol rol1 = buscarPorId(rol.getId());
        if (rol1 != null) {
            rol1.setNombre(rol1.getNombre());
            guardar(rol1);
        }
        return rol1;
    }

    public void eliminarPorId(Long id) throws Exception {
        repositorio.deleteById(id);
    }

    public void eliminarRol(Rol rol) throws Exception {
    repositorio.delete(rol);
    }

    public List<Rol> listarRoles() throws Exception{
    return repositorio.findAll();
    }
}

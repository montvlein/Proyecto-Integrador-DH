package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Models.Entities.Auto;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioAuto;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioCategoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("ServicioAuto")
public class ServicioAuto {

    private iRepositorioAuto repositorio;

    @Autowired
    public void setRepositorio(iRepositorioAuto repositorio) {
        this.repositorio = repositorio;
    }

    public Auto guardar(Auto auto){return repositorio.save(auto);}

    public Auto buscarPorId(Long id){
        Auto buscado = null;
        if (repositorio.findById(id).isPresent()) buscado = repositorio.findById(id).get();
        return buscado;
    }

    public Auto actualizar(Auto auto){
        Auto autoBuscado = buscarPorId(auto.getId());
        if( autoBuscado != null) {
            autoBuscado.setCategoria(auto.getCategoria());
            autoBuscado.setCaracteristica(auto.getCaracteristica());
            autoBuscado.setCiudad(auto.getCiudad());
            autoBuscado.setImagenes(auto.getImagenes());
            autoBuscado.setPrecio(auto.getPrecio());
            autoBuscado.setDescripcion(auto.getDescripcion());
            guardar(autoBuscado);
        }
        return autoBuscado;
    }

    public void eliminar(Auto auto){
        repositorio.delete(auto);
    }

    public void eliminarPorId(Long id){
        repositorio.deleteById(id);
    }

    public List<Auto> listar(){
        return repositorio.findAll();
    }
}

package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Models.Entities.Caracteristica;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioCaracteristica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ServicioCaracteristica {
    private iRepositorioCaracteristica repositorio;

    @Autowired
    public void setRepositorio(iRepositorioCaracteristica repositorio) {
        this.repositorio = repositorio;
    }

    public Caracteristica guardar(Caracteristica caracteristica) {
        return repositorio.save(caracteristica);
    }

    public Caracteristica buscarPorId(Long id) {
        Caracteristica buscada = null;
        if (repositorio.findById(id).isPresent()) buscada = repositorio.findById(id).get();
        return buscada;
    }

    public Caracteristica actualizar(Caracteristica caracteristica){
        Caracteristica caractBuscada = buscarPorId(caracteristica.getId());
        if(caractBuscada != null){
            caractBuscada.setNombre(caracteristica.getNombre());
            caractBuscada.setDescripcion(caracteristica.getDescripcion());
            guardar(caractBuscada);
        }
        return caractBuscada;
    }

    public void eliminar(Caracteristica caracteristica){
    repositorio.delete(caracteristica);}

    public void eliminarPorId(Long id){
    repositorio.deleteById(id);}

    public List<Caracteristica> listar(){
    return repositorio.findAll();
    }

}




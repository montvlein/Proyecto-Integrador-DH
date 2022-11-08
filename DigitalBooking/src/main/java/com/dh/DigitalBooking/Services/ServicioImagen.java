package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Models.Entities.Auto;
import com.dh.DigitalBooking.Models.Entities.Imagen;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioAuto;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioImagenes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("ServicioImagen")
public class ServicioImagen {
    private iRepositorioImagenes repositorio;

    @Autowired
    public void setRepositorio(iRepositorioImagenes repositorio) {
        this.repositorio = repositorio;
    }

    public Imagen guardar(Imagen imagen){return repositorio.save(imagen);}

    public Imagen buscarPorId(Long id){
        Imagen buscado = null;
        if (repositorio.findById(id).isPresent()) buscado = repositorio.findById(id).get();
        return buscado;
    }

    public Imagen actualizar(Imagen imagen){
        Imagen imagenBuscada = buscarPorId(imagen.getId());
        if( imagenBuscada != null) {
            imagenBuscada.setTitulo(imagen.getTitulo());
            imagenBuscada.setUrl(imagen.getUrl());
            guardar(imagenBuscada);
        }
        return imagenBuscada;
    }

    public void eliminar(Imagen imagen){
        repositorio.delete(imagen);
    }

    public void eliminarPorId(Long id){
        repositorio.deleteById(id);
    }

    public List<Imagen> listarImagenes(){
        return repositorio.findAll();
    }
}

package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Models.DTOs.AutoDTO;
import com.dh.DigitalBooking.Models.Entities.Auto;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioAuto;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioCategoria;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public List<AutoDTO> listar(){
        List<Auto>  autos = repositorio.findAll();
        List<AutoDTO> listadoDeAutos = new ArrayList<>();
        ServicioImagen imagen = new ServicioImagen();
        for (Auto auto : autos){
            AutoDTO autoAgregar = new AutoDTO();
            autoAgregar.setId(auto.getId());
            autoAgregar.setCaracteristica(auto.getCaracteristica());
            autoAgregar.setDescripcion(auto.getDescripcion());
            autoAgregar.setDisponibleParaAlquilar(auto.isDisponibleParaAlquilar());
            autoAgregar.setCategoria(auto.getCategoria().getTitulo());
            autoAgregar.setPrecio(auto.getPrecio());
            autoAgregar.setCiudad(auto.getCiudad());
            autoAgregar.setCaracteristica(auto.getCaracteristica());
            autoAgregar.setImagenes(imagen.imagenesPorAuto(auto.getId()));
            listadoDeAutos.add(autoAgregar);
        }
        
        return listadoDeAutos;
    }
    


    // hacer un for y por cada auto crear un auto DTO con los datos que queremos,
    // agregarlos a una lista nueva y devolver una lista con los autos DTO

    public List<Auto> buscarAutoPorCategoria(String parametro) {
        return repositorio.buscarAutoPorCategoria(parametro);
    }

    public List<Auto> buscarAutoPorCiudad(String parametro) {
        
        return  repositorio.buscarAutoPorCiudad(parametro);
    }

    public List<Auto> buscarAutoPor(String tituloCategoria, String nombreProvincia) {
        return  repositorio.buscarAutoPor(tituloCategoria, nombreProvincia);
    }
}

package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Models.DTOs.AutoDTO;
import com.dh.DigitalBooking.Models.Entities.Auto;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioAuto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service("ServicioAuto")
public class ServicioAuto {

    private iRepositorioAuto repositorio;

    @Autowired
    ServicioImagen imagen;

    @Autowired
    public void setRepositorio(iRepositorioAuto repositorio) {
        this.repositorio = repositorio;
    }

    public Auto guardar(Auto auto){return repositorio.save(auto);}

    public AutoDTO buscarPorId(Long id){
        AutoDTO auto = null;
        if (repositorio.findById(id).isPresent()) {
            auto = autoToDTO(repositorio.findById(id).get());
        }
        return auto;
    }

    public Auto actualizar(Auto auto){
        Auto autoBuscado = null;
        if (repositorio.findById(auto.getId()).isPresent()) {
            autoBuscado = repositorio.findById(auto.getId()).get();
        }
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
        return autoToDTO(repositorio.findAll());
    }

    public List<AutoDTO> buscarAutoPorCategoria(String parametro) {
        return autoToDTO(repositorio.buscarAutoPorCategoria(parametro));
    }

    public List<AutoDTO> buscarAutoPorCiudad(String parametro) {
        return  autoToDTO(repositorio.buscarAutoPorCiudad(parametro));
    }

    public List<AutoDTO> buscarAutoPor(String tituloCategoria, String nombreProvincia) {
        return  autoToDTO(repositorio.buscarAutoPor(tituloCategoria, nombreProvincia));
    }

    private AutoDTO autoToDTO(Auto auto) {
        AutoDTO autoEntregable = new AutoDTO();
        autoEntregable.setId(auto.getId());
        autoEntregable.setNombre(auto.getNombre());
        autoEntregable.setImagenes(imagen.imagenesPorAuto(auto.getId()));
        autoEntregable.setCategoria(auto.getCategoria().getTitulo());
        autoEntregable.setDescripcion(auto.getDescripcion());
        autoEntregable.setDisponibleParaAlquilar(auto.isDisponibleParaAlquilar());
        autoEntregable.setPrecio(auto.getPrecio());
        autoEntregable.setCiudad(auto.getCiudad());
        autoEntregable.setCaracteristica(auto.getCaracteristica());
        return autoEntregable;
    }

    private List<AutoDTO> autoToDTO(List<Auto> listado) {
        List<AutoDTO> listadoDeAutos = new ArrayList<>();
        for (Auto auto : listado){
            listadoDeAutos.add(autoToDTO(auto));
        }
        return listadoDeAutos;
    }

    public List<AutoDTO> random() {
        Random random = new Random();
        List<AutoDTO> recomendados = new ArrayList<>();
        Long num;
        for (int i=0; i <7; i++) {
            num = random.nextLong(0, listar().size());
            recomendados.add(buscarPorId(num));
        }
        return recomendados;
    }
}

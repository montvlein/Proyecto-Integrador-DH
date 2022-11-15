package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Models.DTOs.CaracteristicaDTO;
import com.dh.DigitalBooking.Models.DTOs.ImagenDTO;
import com.dh.DigitalBooking.Models.Entities.Caracteristica;
import com.dh.DigitalBooking.Models.Entities.Imagen;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioCaracteristica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.Set;


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

    public CaracteristicaDTO caracteristicasPorAuto(Set<Caracteristica> caracteristica){
        CaracteristicaDTO caracteristicas = new CaracteristicaDTO();
        for (Caracteristica c : caracteristica) {
            if (c.getNombre().equals("modelo")) { caracteristicas.setModelo(c.getDescripcion());};
            if (c.getNombre().equals("consumo")) { caracteristicas.setConsumo(c.getDescripcion());};
            if (c.getNombre().equals("motor")) { caracteristicas.setTipoMotor(c.getDescripcion());};
            if (c.getNombre().equals("caja")) { caracteristicas.setCaja(c.getDescripcion());};
            if (c.getNombre().equals("puertas")) { caracteristicas.setPuertas(Integer.parseInt(c.getDescripcion()));};
        }
        return caracteristicas;
    }
}




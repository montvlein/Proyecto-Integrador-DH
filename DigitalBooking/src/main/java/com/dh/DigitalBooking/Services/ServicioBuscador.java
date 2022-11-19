package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Models.DTOs.AutoDTO;
import com.dh.DigitalBooking.Models.Entities.Auto;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioAuto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioBuscador {

    @Autowired
    private iRepositorioAuto repositorioProducto;

    @Autowired
    private ServicioAuto servicioProducto;

    public List<AutoDTO> buscarAutoPor(String tituloCategoria, String nombreProvincia, String fechas) {
        List<Auto> encontrados = null;
        if (nombreProvincia != null && tituloCategoria == null ) encontrados = repositorioProducto.buscarAutoPorCiudad(nombreProvincia);
        if (tituloCategoria != null && nombreProvincia == null ) encontrados = repositorioProducto.buscarAutoPorCategoria(tituloCategoria);
        if (nombreProvincia != null && tituloCategoria != null ) encontrados = repositorioProducto.buscarAutoPor(tituloCategoria, nombreProvincia);
        return  servicioProducto.autoToDTO(encontrados);
    }

}

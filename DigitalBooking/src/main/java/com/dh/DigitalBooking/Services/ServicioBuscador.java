package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Models.DTOs.AutoDTO;
import com.dh.DigitalBooking.Models.Entities.Auto;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioAuto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ServicioBuscador {

    @Autowired
    private iRepositorioAuto repositorioProducto;

    @Autowired
    private ServicioAuto servicioProducto;

    public List<Auto> buscarAutoPorFecha(String fechaInicio, String fechaFinal) {
        LocalDate fInicio = LocalDate.parse(fechaInicio , DateTimeFormatter.ISO_LOCAL_DATE);
        LocalDate fFinal = LocalDate.parse(fechaFinal, DateTimeFormatter.ISO_LOCAL_DATE);
        return repositorioProducto.buscarAutoPorFecha(fInicio, fFinal);
    }

    public List<Auto> buscarAutoPorCategoria_Ciudad(String tituloCategoria, String nombreProvincia) {
        List<Auto> encontrados = null;
        if (nombreProvincia != null && tituloCategoria == null ) encontrados = repositorioProducto.buscarAutoPorCiudad(nombreProvincia);
        if (tituloCategoria != null && nombreProvincia == null ) encontrados = repositorioProducto.buscarAutoPorCategoria(tituloCategoria);
        if (nombreProvincia != null && tituloCategoria != null ) encontrados = repositorioProducto.buscarAutoPor(tituloCategoria, nombreProvincia);
        return  encontrados;
    }

    public List<AutoDTO> buscarAutoPor(String tituloCategoria, String nombreProvincia, String fechaInicio, String fechaFinal) {
        List<Auto> encontrados = null;
        if (tituloCategoria != null || nombreProvincia != null ) encontrados = buscarAutoPorCategoria_Ciudad(tituloCategoria, nombreProvincia);
        if (fechaInicio != null || fechaFinal != null ) encontrados = buscarAutoPorFecha(fechaInicio, fechaFinal);
        return  servicioProducto.autoToDTO(encontrados);
    }

}

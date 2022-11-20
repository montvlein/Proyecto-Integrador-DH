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
    private iRepositorioAuto repositorio;

    @Autowired
    private ServicioAuto servicioProducto;


    public List<Auto> buscarAutoPorCategoria_Ciudad(String tituloCategoria, String nombreProvincia) {
        if (nombreProvincia != null ) return repositorio.buscarAutoPorCategoria_Ciudad(tituloCategoria, nombreProvincia);
        return  repositorio.buscarAutoPorCategoria(tituloCategoria);
    }

    public List<Auto> buscarAutoPorFecha_Ciudad(LocalDate fechaInicio, LocalDate fechaFinal, String nombreProvincia) {
        if ( nombreProvincia != null ) return repositorio.buscarAutoPorFecha_Ciudad(fechaInicio, fechaFinal, nombreProvincia);
        return repositorio.buscarAutoPorFecha(fechaInicio, fechaFinal);
    }

    public List<AutoDTO> buscarAutoPor(String tituloCategoria, String nombreProvincia, String fechaInicio, String fechaFinal) {
        List<Auto> encontrados = null;

        LocalDate fInicio = null;
        LocalDate fFinal = null;
        boolean rangoFechasValido = fechaInicio != null && fechaFinal != null;
        boolean provinciaValida = nombreProvincia != null;
        boolean categoriaValida = tituloCategoria != null;
        if ( rangoFechasValido ) {
            fInicio = StringToDate(fechaInicio);
            fFinal = StringToDate(fechaFinal);
        }

        if ( provinciaValida && categoriaValida && rangoFechasValido ) {
            encontrados = repositorio.buscarAutoPorFecha_Ciudad_Categoria(fInicio, fFinal, nombreProvincia, tituloCategoria);
            return  servicioProducto.autoToDTO(encontrados);
        }

        if ( provinciaValida ) encontrados = repositorio.buscarAutoPorCiudad(nombreProvincia);
        if ( categoriaValida ) encontrados = buscarAutoPorCategoria_Ciudad(tituloCategoria, nombreProvincia);
        if ( rangoFechasValido ) encontrados = buscarAutoPorFecha_Ciudad(fInicio, fFinal, nombreProvincia);
        if ( categoriaValida && rangoFechasValido ) encontrados = repositorio.buscarAutoPorFecha_Categoria(fInicio, fFinal, tituloCategoria);

        return  servicioProducto.autoToDTO(encontrados);
    }

    private LocalDate StringToDate(String fecha) {
        return LocalDate.parse(fecha , DateTimeFormatter.ISO_LOCAL_DATE);
    }
}

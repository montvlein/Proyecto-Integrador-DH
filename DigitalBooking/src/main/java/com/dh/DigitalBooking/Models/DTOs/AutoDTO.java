package com.dh.DigitalBooking.Models.DTOs;

import com.dh.DigitalBooking.Models.Entities.Caracteristica;
import com.dh.DigitalBooking.Models.Entities.Ciudad;
import com.dh.DigitalBooking.Models.Entities.Imagen;
import lombok.Getter;
import lombok.Setter;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Getter @Setter
public class AutoDTO {
    private Long id;
    private String nombre;
    private List<ImagenDTO> imagenes;
    private String categoria;
    private String descripcion;
    private boolean disponibleParaAlquilar;
    private float precio;
    private Ciudad ciudad;
    private CaracteristicaDTO caracteristica;
    private List<LocalDate> fechasConReserva = new ArrayList<>();
}
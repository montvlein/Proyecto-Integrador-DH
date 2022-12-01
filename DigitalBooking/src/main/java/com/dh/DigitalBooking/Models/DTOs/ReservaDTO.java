package com.dh.DigitalBooking.Models.DTOs;

import com.dh.DigitalBooking.Models.Entities.Auto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter @Setter
public class ReservaDTO {

    private Long id;
    private LocalTime horaComienzoReserva;
    private LocalDate fechaInicialReserva;
    private LocalDate fechaFinalReserva;
    private Long autoId;
    private Long clienteId;
}

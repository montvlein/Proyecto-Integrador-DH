package com.dh.DigitalBooking.Models.Entities.Roles;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime horaComienzoReserva;
    private LocalDateTime fechaInicialReserva;
    private LocalDateTime fechaFinalReserva;

}

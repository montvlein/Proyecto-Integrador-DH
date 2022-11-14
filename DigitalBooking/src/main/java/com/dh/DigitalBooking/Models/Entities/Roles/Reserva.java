package com.dh.DigitalBooking.Models.Entities.Roles;

import com.dh.DigitalBooking.Models.Entities.Auto;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
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

    @ManyToOne
    @JoinColumn(name= "auto_id")
    private Auto auto;

    @ManyToOne
    @JoinColumn(name = "reserva_id")
    private Reserva reserva;

}
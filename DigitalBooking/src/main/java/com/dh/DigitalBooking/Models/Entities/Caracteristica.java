package com.dh.DigitalBooking.Models.Entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="CARACTERISTICA")
public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String modelo;
    private int puertas;
    private String consumo;
    private String tipoMotor;
    private String caja;

}

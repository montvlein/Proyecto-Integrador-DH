package com.dh.DigitalBooking.Models.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String modelo;
    private int puertas;
    private String consumo;
    private String tipoMotor;
    private String caja;

    @OneToMany(mappedBy = "caracteristica")
    @JsonIgnore
    private Set<Auto> autos;
}

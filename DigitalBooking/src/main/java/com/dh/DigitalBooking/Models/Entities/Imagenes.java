package com.dh.DigitalBooking.Models.Entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "IMAGENES")
public class Imagenes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String url;

    // Join con Autos
    @ManyToOne
    @JoinColumn(name = "autoId" , nullable=false)
    private Auto auto;
}

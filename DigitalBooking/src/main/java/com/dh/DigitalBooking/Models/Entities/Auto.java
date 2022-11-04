package com.dh.DigitalBooking.Models.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@Entity
@Table(name = "AUTO")
public class Auto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Join con Imágenes (Un auto tiene muchas imágenes)
    @OneToMany(mappedBy = "auto")
    @JsonIgnore
    private Set<Imagenes> imagenes;

    // Join con Categoría (Un auto tiene una Categoría)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="categoria_id")
    private Categoria categoria;

    private String descripcion;
    private boolean disponibleParaAlquilar;
    private float precio;

    // Join con Ciudad (Un auto está en una Ciudad)
    @OneToOne(cascade= CascadeType.ALL)
    @JoinColumn(name="ciudad_id")
    private Ciudad ciudad;

    // Join con Características
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="caracteristicas_id")
    private Caracteristicas caracteristicas;

}
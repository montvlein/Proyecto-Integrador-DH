package com.dh.DigitalBooking.Models.Entities;

import com.dh.DigitalBooking.Models.Entities.Roles.Reserva;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;


@Getter
@Setter
@Entity
public class Auto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String descripcion;
    private boolean disponibleParaAlquilar;
    private float precio;

    @OneToMany(mappedBy = "auto")
    @JsonIgnore
    private Set<Imagen> imagenes;

    @ManyToOne
    @JoinColumn(name="categoria_id")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name="ciudad_id")
    private Ciudad ciudad;

    @ManyToMany
    @JoinTable(
            name = "caracteristica_auto",
            joinColumns = @JoinColumn(name = "auto_id"),
            inverseJoinColumns = @JoinColumn(name = "caracteristica_id")
    )
    private Set<Caracteristica> caracteristicas;

    @OneToMany(mappedBy = "auto")
    @JsonIgnore
    private Set<Reserva> reservas;

}
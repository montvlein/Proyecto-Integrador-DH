package com.dh.DigitalBooking.Models.Entities.Roles;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String apellido;
    private String email;
    private String contrasenia;
    private String ciudad;
    private boolean verificado;

    @OneToMany(mappedBy = "reserva")
    @JsonIgnore
    private Set<Reserva> reservas;

    @ManyToOne
    @JoinColumn(name = "rol_id")
    private Rol rol;
}

package com.dh.DigitalBooking.Models.Entities.Roles;

import com.dh.DigitalBooking.Models.Entities.Reserva;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
//@DiscriminatorColumn(name="reservas", discriminatorType = DiscriminatorType.INTEGER)
@Inheritance(strategy = InheritanceType.JOINED)
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

    @ManyToOne
    @JoinColumn(name = "rol_id")
    private Rol rol;

    @OneToMany(mappedBy = "cliente")
    @JsonIgnore
    private Set<Reserva> reservas;
}

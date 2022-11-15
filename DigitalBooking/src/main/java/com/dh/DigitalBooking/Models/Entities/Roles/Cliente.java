package com.dh.DigitalBooking.Models.Entities.Roles;

import com.dh.DigitalBooking.Models.Entities.Reserva;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter @Setter
//@Entity
public class Cliente extends Usuario {

//    @OneToMany(mappedBy = "cliente")
//    @JsonIgnore
//    private Set<Reserva> reservas;

}

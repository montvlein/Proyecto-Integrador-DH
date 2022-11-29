package com.dh.DigitalBooking.Models.DTOs;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UsuarioDTO {

    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String ciudad;
    private boolean verificado;
    private boolean esAdmin = false;

}

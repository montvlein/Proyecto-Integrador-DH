package com.dh.DigitalBooking.Models.Entities.Roles;

import com.dh.DigitalBooking.Models.DTOs.UsuarioDTO;
import lombok.Getter;
import lombok.Setter;

@Setter @Getter
public class googleAuthResponse {

    private UsuarioDTO usuario;
    private JWT.Response token;

}

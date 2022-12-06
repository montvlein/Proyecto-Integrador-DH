package com.dh.DigitalBooking.Models.Entities.Roles;

import com.dh.DigitalBooking.Models.DTOs.UsuarioDTO;
import lombok.Getter;
import lombok.Setter;

public class googleAuth {
        public record Resquest(String credential) {
    }

    @Getter
    public static class Response {
            private UsuarioDTO usuario;
            private String token;

        public Response(UsuarioDTO usuario, String token) {
            this.usuario = usuario;
            this.token = token;
        }
    }
}

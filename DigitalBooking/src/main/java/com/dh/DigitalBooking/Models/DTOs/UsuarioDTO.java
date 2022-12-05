package com.dh.DigitalBooking.Models.DTOs;

import java.util.HashSet;
import java.util.Set;

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
    private Set<Long> favoritos = new HashSet<>();

    public void agregarFavorito(Long autoId) {
        favoritos.add(autoId);
    }

    @Getter @Setter
    public static class Favorito {
        private String token;
        private Long autoId;
    }

}

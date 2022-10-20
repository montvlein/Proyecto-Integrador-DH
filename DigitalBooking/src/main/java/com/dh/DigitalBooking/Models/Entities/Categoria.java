package com.dh.DigitalBooking.Models.Entities;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Categoria {

    private String id ;
    private String Titulo;
    private String Descripcion ;
    private String urlImagen;

    public Categoria(){}

    public Categoria(String id, String Titulo, String Descipcion, String urlImagen){}
}

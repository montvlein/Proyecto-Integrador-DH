package com.dh.DigitalBooking.Models.Entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "CATEGORIAS")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String Titulo;
    private String Descripcion ;

    @Column(name = "url_img")
    private String urlImagen;

}

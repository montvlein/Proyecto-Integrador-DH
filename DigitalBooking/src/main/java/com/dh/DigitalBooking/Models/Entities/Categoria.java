package com.dh.DigitalBooking.Models.Entities;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import javax.persistence.*;
import java.sql.Blob;

@Getter
@Setter
@Entity
@Table(name = "CATEGORIA")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String Titulo;
    private String Descripcion ;

    @Column(name = "url_img")
    private String urlImagen;


}

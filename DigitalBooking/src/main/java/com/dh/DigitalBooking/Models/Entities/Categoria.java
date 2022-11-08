package com.dh.DigitalBooking.Models.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String titulo;
    private String descripcion ;

    @Column(name = "url_img")
    private String urlImagen;

    @OneToMany(mappedBy = "categoria")
    @JsonIgnore
    private Set<Auto> autos;
}

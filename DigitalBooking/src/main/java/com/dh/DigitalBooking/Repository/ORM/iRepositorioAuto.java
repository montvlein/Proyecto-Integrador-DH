package com.dh.DigitalBooking.Repository.ORM;

import com.dh.DigitalBooking.Models.Entities.Auto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface iRepositorioAuto extends JpaRepository<Auto, Long> {

    @Query("select a from Auto a where a.categoria.titulo = ?1")
    List<Auto> buscarAutoPorCategoria(String parametro);

    @Query("select a from Auto a where a.ciudad.provincia = ?1")
    List<Auto> buscarAutoPorCiudad(String parametro);

    @Query("select a from Auto a where a.categoria.Titulo = ?1 and a.ciudad.provincia = ?2")
    List<Auto> buscarAutoPor(String categoria, String ciudad);
}

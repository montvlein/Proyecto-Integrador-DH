package com.dh.DigitalBooking.Repository.ORM;

import com.dh.DigitalBooking.Models.Entities.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface iRepositorioImagenes extends JpaRepository<Imagen, Long> {

    @Query("select i from Imagen i where i.auto.id = ?1")
    List<Imagen> buscarPorAuto(Long id);
}

package com.dh.DigitalBooking.Repository.ORM;

import com.dh.DigitalBooking.Models.Entities.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface iRepositorioImagenes extends JpaRepository<Imagen, Long> {


    List<Imagen> buscarPorAuto(Long id);
}

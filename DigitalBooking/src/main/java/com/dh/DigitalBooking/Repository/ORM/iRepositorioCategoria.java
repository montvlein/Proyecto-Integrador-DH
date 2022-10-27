package com.dh.DigitalBooking.Repository.ORM;

import com.dh.DigitalBooking.Models.Entities.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface iRepositorioCategoria extends JpaRepository<Categoria, Long> {
}

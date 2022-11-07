package com.dh.DigitalBooking.Repository.ORM;

import com.dh.DigitalBooking.Models.Entities.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;

public interface iRepositorioCaracteristica extends JpaRepository<Caracteristica, Long> {
}

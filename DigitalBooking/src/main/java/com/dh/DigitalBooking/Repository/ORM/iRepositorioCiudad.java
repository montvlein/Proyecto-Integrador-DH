package com.dh.DigitalBooking.Repository.ORM;

import com.dh.DigitalBooking.Models.Entities.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface iRepositorioCiudad extends JpaRepository<Ciudad, Long> {
}

package com.dh.DigitalBooking.Repository.ORM;

import com.dh.DigitalBooking.Models.Entities.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

public interface iRepositorioReserva extends JpaRepository<Reserva,Long> {
}
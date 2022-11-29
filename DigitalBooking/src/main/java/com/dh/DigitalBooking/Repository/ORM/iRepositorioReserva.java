package com.dh.DigitalBooking.Repository.ORM;

import com.dh.DigitalBooking.Models.Entities.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface iRepositorioReserva extends JpaRepository<Reserva,Long> {

    List<Reserva> findByAutoId(Long id);

    List<Reserva> findByClienteId(Long id);
}

package com.dh.DigitalBooking.Repository.ORM;

import com.dh.DigitalBooking.Models.Entities.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface iRepositorioReserva extends JpaRepository<Reserva,Long> {

    @Query("select r from Reserva r where r.auto.id = ?1")
    List<Reserva> buscarPorAuto(Long id);
}

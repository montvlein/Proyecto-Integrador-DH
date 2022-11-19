package com.dh.DigitalBooking.Repository.ORM;

import com.dh.DigitalBooking.Models.Entities.Auto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.*;
import java.util.List;

@Repository
public interface iRepositorioAuto extends JpaRepository<Auto, Long> {

    @Query("select a from Auto a where a.categoria.titulo = ?1")
    List<Auto> buscarAutoPorCategoria(String parametro);

    @Query("select a from Auto a where a.ciudad.provincia = ?1")
    List<Auto> buscarAutoPorCiudad(String parametro);

    @Query("select a from Auto a where a.categoria.titulo = ?1 and a.ciudad.provincia = ?2")
    List<Auto> buscarAutoPorCategoria_Ciudad(String categoria, String ciudad);

    @Query("""
            select auto from Auto auto
            left join Reserva reserva
            on auto.id = reserva.auto.id
            where reserva.auto.id is null
            or reserva.auto.id is not null
            and reserva.fechaInicialReserva > ?1
            and reserva.fechaFinalReserva < ?2""")
    List<Auto> buscarAutoPorFecha(LocalDate fecha_inicio, LocalDate fecha_final);

    @Query("""
            select auto from Auto auto
            left join Reserva reserva
            on auto.id = reserva.auto.id
            where auto.ciudad.provincia = ?3
            and reserva.auto.id is null
            or reserva.auto.id is not null
            and reserva.fechaInicialReserva > ?1
            and reserva.fechaFinalReserva < ?2""")
    List<Auto> buscarAutoPorFecha_Ciudad(LocalDate fecha_inicio, LocalDate fecha_final, String provincia );

    @Query("""
            select auto from Auto auto
            left join Reserva reserva
            on auto.id = reserva.auto.id
            where auto.ciudad.provincia = ?3
            and auto.categoria.titulo = ?4
            and reserva.auto.id is null
            or reserva.auto.id is not null
            and reserva.fechaInicialReserva > ?1
            and reserva.fechaFinalReserva < ?2""")
    List<Auto> buscarAutoPorFecha_Ciudad_Categoria(LocalDate fecha_inicio, LocalDate fecha_final, String provincia, String Categoria );
}

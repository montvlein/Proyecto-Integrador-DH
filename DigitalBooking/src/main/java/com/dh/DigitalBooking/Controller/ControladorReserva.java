package com.dh.DigitalBooking.Controller;

import com.dh.DigitalBooking.Models.Entities.Reserva;
import com.dh.DigitalBooking.Services.ServicioReserva;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/reserva")
@Tag(name="RESERVA")
public class ControladorReserva {

    private ServicioReserva servicio;

    @Autowired
    public void setServicio(ServicioReserva servicio){
        this.servicio = servicio;
    }

    @Operation(summary = "Lista todas las reservas cargadas")
    @GetMapping("listarTodis")
    public ResponseEntity<?> listarTodos() throws Exception{
        return ResponseEntity.ok(servicio.listar());
    }

    @Operation(summary = "Borra una reserva por Id")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPorId(@PathVariable Long id) throws Exception{
        servicio.eliminarPorId(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Crea una reserva")
    @PostMapping("nuevi")
    public ResponseEntity<?> nuevaReserva(@RequestBody Reserva reserva) throws Exception{
        return ResponseEntity.ok(servicio.guardar(reserva));
    }

    @Operation(summary = "Busca una reserva por id")
    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) throws Exception{
        return ResponseEntity.ok(servicio.buscarPorId(id));
    }

    @Operation(summary = "Busca todas las reserva por id de un auto")
    @GetMapping("/listarPorAuto/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) throws Exception{
        return ResponseEntity.ok(servicio.buscarPorAutoId(id));
    }
}

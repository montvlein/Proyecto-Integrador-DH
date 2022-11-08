package com.dh.DigitalBooking.Controller;

import com.dh.DigitalBooking.Models.Entities.Caracteristica;
import com.dh.DigitalBooking.Services.ServicioCaracteristica;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/caracteristica")
@Tag(name="Caracteristicas")
public class ControladorCaracteristica {

    private ServicioCaracteristica servicio;

    @Autowired
    public void setServicio(ServicioCaracteristica servicio) {
        this.servicio = servicio;
    }

    @Operation(summary = "Lista todas las caracteristicas")
    @GetMapping("listarTodas")
    public ResponseEntity<?> listarTodas() throws Exception {
        return ResponseEntity.ok(servicio.listar());
    }

    @Operation(summary = "Crea y devuelve una nueva característica")
    @PostMapping("nuevaCaracteristica")
    public ResponseEntity<?> nuevaCaracteristica(@RequestBody Caracteristica c) throws Exception {
        return ResponseEntity.ok(servicio.guardar(c));
    }

    @Operation(summary = "Borra una característica pasada por id")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPorId(@PathVariable Long id) throws  Exception{
        servicio.eliminarPorId(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Actualiza la característica pasada por id con los datos pasados por el cuerpo")
    @PutMapping("/{id}")
    public ResponseEntity<?> editar(@RequestBody Caracteristica caracteristica) throws Exception {
        ResponseEntity<?> response = ResponseEntity.notFound().build();
        if (caracteristica.getId() != null && servicio.buscarPorId(caracteristica.getId())!= null){
            response = ResponseEntity.ok(servicio.actualizar(caracteristica));
        }
        return response;
    }

    @Operation(summary = "Devuelve la característica pasada por id")
    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(servicio.buscarPorId(id));
    }

}


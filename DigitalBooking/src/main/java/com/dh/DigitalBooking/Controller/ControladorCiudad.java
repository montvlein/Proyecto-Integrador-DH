package com.dh.DigitalBooking.Controller;

import com.dh.DigitalBooking.Models.Entities.Ciudad;
import com.dh.DigitalBooking.Services.ServicioCiudad;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/ciudad")
@Tag(name="CIUDAD")
public class ControladorCiudad {

    private ServicioCiudad servicio;

    @Autowired
    public void setServicio(ServicioCiudad servicio){this.servicio=servicio;}

    @Operation(summary = "Lista todas las ciudades")
    @GetMapping("listarTodis")
    public ResponseEntity<?> listarTodos() throws Exception{
        return ResponseEntity.ok(servicio.listarCiudades());
    }

    @Operation(summary = "Crea una ciudad y la devuelve")
    @PostMapping("nuevi")
    public ResponseEntity<?> nuevaCiudad(@RequestBody Ciudad ciudad) throws Exception{
        return ResponseEntity.ok(servicio.guardar(ciudad));
    }

    @Operation(summary = "Se le pasa un ID y borra la ciudad que matchea")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPorId(@PathVariable Long id) throws Exception{
        servicio.eliminarPorId(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Actualiza una ciudad específica con los datos pasados por el cuerpo de la request")
    @PutMapping("/{id}")
    public ResponseEntity<?> editarCiudad(@RequestBody Ciudad ciudad) throws Exception{
        ResponseEntity<?> response = ResponseEntity.notFound().build();
        if (ciudad.getId() != null && servicio.buscarPorId(ciudad.getId()) != null){
            response = ResponseEntity.ok(servicio.actualizar(ciudad));
        }
        return response;
    }

    @Operation(summary = "Devuelve la ciudad que matchea con el id")
    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) throws Exception{
        return ResponseEntity.ok(servicio.buscarPorId(id));
    }

}

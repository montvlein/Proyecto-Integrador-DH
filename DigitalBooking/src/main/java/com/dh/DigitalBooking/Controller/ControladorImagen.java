package com.dh.DigitalBooking.Controller;

import com.dh.DigitalBooking.Models.Entities.Ciudad;
import com.dh.DigitalBooking.Models.Entities.Imagen;
import com.dh.DigitalBooking.Services.ServicioImagen;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/imagen")
public class ControladorImagen {
    private ServicioImagen servicio;

    @Autowired
    public void setServicio(ServicioImagen servicio){this.servicio=servicio;}

    @Operation(summary = "Crea una imagen y la guarda")
    @PostMapping("nuevi")
    public ResponseEntity<?> nuevaImagen(@RequestBody Imagen imagen) throws Exception{
        return ResponseEntity.ok(servicio.guardar(imagen));
    }

    @Operation(summary = "Se le pasa un ID y borra la imagen que matchea")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPorId(@PathVariable Long id) throws Exception{
        servicio.eliminarPorId(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Actualiza una imagen específica con los datos pasados por el cuerpo de la request")
    @PutMapping("/{id}")
    public ResponseEntity<?> editarCiudad(@RequestBody Imagen imagen) throws Exception{
        ResponseEntity<?> response = ResponseEntity.notFound().build();
        if (imagen.getId() != null && servicio.buscarPorId(imagen.getId()) != null){
            response = ResponseEntity.ok(servicio.actualizar(imagen));
        }
        return response;
    }

    @Operation(summary = "Devuelve la imagen que matchea con el id")
    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) throws Exception{
        return ResponseEntity.ok(servicio.buscarPorId(id));
    }


}

package com.dh.DigitalBooking.Controller;

import com.dh.DigitalBooking.Models.Entities.Categoria;
import com.dh.DigitalBooking.Services.ServicioCategoria;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/categoria")
@Tag(name="Categoria")
public class ControladorCategoria {

    private ServicioCategoria servicio;

    @Autowired
    public void setServicio(ServicioCategoria servicio) {
        this.servicio = servicio;
    }

    @Operation(summary = "Lista todas las categorias")
    @GetMapping("listarTodis")
    public ResponseEntity<?> listarTodos() throws Exception{
        return ResponseEntity.ok(servicio.listar());
    }

    @Operation(summary = "Crea y devuelve una nueva categoria")
    @PostMapping("nuevi")
    public ResponseEntity<?> nuevaCategoria(@RequestBody Categoria c) throws Exception{
       return ResponseEntity.ok(servicio.guardar(c));
    }

    @Operation(summary = "Borra la categoria pasada por id")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPorId(@PathVariable Long id) throws Exception {
        servicio.eliminarPorId(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Actualiza la categoria pasada por id con los datos pasados por el cuerpo")
    @PutMapping("/{id}")
    public ResponseEntity<?> editar(@RequestBody Categoria categoria) throws Exception {
            ResponseEntity<?> response = ResponseEntity.notFound().build();
            if (categoria.getId() != null && servicio.buscarPorId(categoria.getId())!= null){
        response = ResponseEntity.ok(servicio.actualizar(categoria));
            }
        return response;
    }

    @Operation(summary = "Devuelve la categoria pasada por id")
    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(servicio.buscarPorId(id));
    }

}

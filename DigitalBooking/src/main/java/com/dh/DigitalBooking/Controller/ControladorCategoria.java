package com.dh.DigitalBooking.Controller;

import com.dh.DigitalBooking.Models.Entities.Categoria;
import com.dh.DigitalBooking.Services.ServicioCategoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("v1/categoria")
public class ControladorCategoria {

    private ServicioCategoria servicio;

    @Autowired
    public void setServicio(ServicioCategoria servicio) {
        this.servicio = servicio;
    }

    @GetMapping("listarTodos")
    public ResponseEntity<?> listarTodos() throws Exception{
        return ResponseEntity.ok(servicio.listar());
    }

    @PostMapping("nuevaCategoria")
    public ResponseEntity<?> nuevaCategoria(@RequestBody Categoria c) throws Exception{
       return ResponseEntity.ok(servicio.guardar(c));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPorId(@PathVariable Long id) throws Exception {
        servicio.eliminarPorId(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping
    public ResponseEntity<?> editar(@RequestBody Categoria categoria) throws Exception {
            ResponseEntity<?> response = ResponseEntity.notFound().build();
            if (categoria.getId() != null && servicio.buscarPorId(categoria.getId())!= null){
        response = ResponseEntity.ok(servicio.actualizar(categoria));
            }
        return response;
    }




}

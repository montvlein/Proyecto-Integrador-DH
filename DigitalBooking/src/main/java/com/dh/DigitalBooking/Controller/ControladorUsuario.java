package com.dh.DigitalBooking.Controller;

import com.dh.DigitalBooking.Models.Entities.Roles.Usuario;
import com.dh.DigitalBooking.Services.Roles.ServicioUsuario;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/usuario")
@Tag(name="USUARIO")
public class ControladorUsuario {

    private ServicioUsuario servicio;

    @Autowired
    public void setServicio(ServicioUsuario servicio){
        this.servicio = servicio;
    }

    @Operation(summary = "Lista todos los usuarios")
    @GetMapping("listarTodis")
    public ResponseEntity<?> listarTodos() throws Exception{
        return ResponseEntity.ok(servicio.listar());
    }

    @Operation(summary = "Borra un usuario x id")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPorId(@PathVariable Long id) throws Exception{
        servicio.eliminarPorId(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Crea un usuario")
    @PostMapping("nuevi")
    public ResponseEntity<?> nuevoUsuario(@RequestBody Usuario usuario) throws Exception{
        return ResponseEntity.ok(servicio.guardar(usuario));
    }

    @Operation(summary = "Busca un usuario x id")
    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) throws Exception{
        return ResponseEntity.ok(servicio.buscarPorId(id));
    }
}

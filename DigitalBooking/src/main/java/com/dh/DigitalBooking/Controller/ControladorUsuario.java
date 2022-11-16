package com.dh.DigitalBooking.Controller;

import com.dh.DigitalBooking.Excepcion.NotFoundException;
import com.dh.DigitalBooking.Models.DTOs.LoginDTO;
import com.dh.DigitalBooking.Models.DTOs.UsuarioDTO;
import com.dh.DigitalBooking.Models.Entities.Roles.Usuario;
import com.dh.DigitalBooking.Services.Roles.ServicioUsuario;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

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
//        if (servicio.buscarPorId(id) == null ) throw new NotFoundException("No existe usuario con esa ID para eliminar");
        if (servicio.buscarPorId(id) == null ) return ResponseEntity.badRequest().body("No existe usuario con esa ID para eliminar");
        servicio.eliminarPorId(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Crea un usuario")
    @PostMapping("nuevi")
    public ResponseEntity<?> nuevoUsuario(@RequestBody Usuario usuario) throws Exception{
        UsuarioDTO usuarioEnDB = servicio.buscarPorEmail(usuario.getEmail());
        if (usuarioEnDB != null ) return ResponseEntity.badRequest().body("Ya existe un usuario registrado con ese mail");
        return ResponseEntity.status(HttpStatus.CREATED).body(servicio.guardar(usuario));
    }

    @Operation(summary = "Busca un usuario x id")
    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) throws Exception{
        UsuarioDTO usuarioEnDB = servicio.buscarPorId(id);
        if (usuarioEnDB == null ) return ResponseEntity.badRequest().body("No existe un usuario con esa ID");
        return ResponseEntity.ok(usuarioEnDB);
    }

    @PostMapping("autenticacion")
    @Operation(summary = "Devuelve un token")
    public ResponseEntity<?> login(@RequestBody LoginDTO usuario) {
        final String jwt = servicio.authenticar(usuario);
        if (jwt != null) return ResponseEntity.ok(jwt);
        return ResponseEntity.notFound().build();
    }

    @PostMapping("validarToken")
    @Operation(summary = "Si el token es valido, devuelve un usuario")
    public ResponseEntity<?> login(@RequestBody String token) {
        UsuarioDTO usuario = servicio.authenticar(token); //hay que parsear el token. Este metodo ahora esta dando error
        if (usuario != null) return ResponseEntity.ok(usuario);
        return ResponseEntity.notFound().build();
    }
}

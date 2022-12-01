package com.dh.DigitalBooking.Controller;

import com.dh.DigitalBooking.Config.JWTUtil;
import com.dh.DigitalBooking.Models.Entities.Roles.JWT;
import com.dh.DigitalBooking.Models.DTOs.UsuarioDTO;
import com.dh.DigitalBooking.Models.Entities.Roles.Usuario;
import com.dh.DigitalBooking.Models.Entities.Roles.googleAuth;
import com.dh.DigitalBooking.Services.ServicioUsuario;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/usuario")
@Tag(name="USUARIO")
public class ControladorUsuario {

    private ServicioUsuario servicio;

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

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
    public ResponseEntity<?> eliminarPorId(@PathVariable Long id) throws Exception {
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
    public ResponseEntity<?> login(@RequestBody JWT.Request request) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getContrasenia())
            );
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }

        try {
            final UserDetails user = servicio.loadUserByEmail(request.getEmail());
            final String token = jwtUtil.generarToken(user);
            return ResponseEntity.ok(new JWT.Response(token));
        } catch (UsernameNotFoundException e) {
          throw new Exception("Usuario no encontrado", e);
        }
    }

    @GetMapping("tokenInfo")
    @Operation(summary = "Devuelve la informacion del usuario")
    public ResponseEntity<?> tokenInfo(@RequestParam String token) throws Exception {
        UsuarioDTO usuario = servicio.tokenInfo(token);
        if (usuario != null) return ResponseEntity.ok(usuario);
        return ResponseEntity.notFound().build();
    }

    @GetMapping("auth")
    @Operation(summary = "valida el mail del usuario")
    public ResponseEntity<?> validarMail(@RequestParam String token) throws Exception {
        if (servicio.validarMail(token)) {
            return ResponseEntity.ok().body("Validacion exitosa");
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("googleauth")
    @Operation(summary = "dado una credencial de google, devuelve usuario y token")
    public ResponseEntity<?> googleAuth(@RequestBody googleAuth.Resquest credential) throws Exception {
        UsuarioDTO respuesta = servicio.validarGoogleCredential(credential);
        return ResponseEntity.ok(respuesta);
    }

}

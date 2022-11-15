package com.dh.DigitalBooking.Controller;

import com.dh.DigitalBooking.Models.Entities.Auto;
import com.dh.DigitalBooking.Services.ServicioAuto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auto")
@Tag(name="AUTO")
public class ControladorAuto {

    private ServicioAuto servicio;

    @Autowired
    public void setServicio(ServicioAuto servicio){
        this.servicio = servicio;
    }

    @Operation(summary = "Lista todos los autos")
    @GetMapping("listarTodis")
    public ResponseEntity<?> listarTodos() throws Exception{
        return ResponseEntity.ok(servicio.listar());
    }

    @Operation(summary = "Borra un auto por id")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPorId(@PathVariable Long id) throws Exception{
        servicio.eliminarPorId(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Crea una auto")
    @PostMapping("nuevi")
    public ResponseEntity<?> nuevoAuto(@RequestBody Auto auto) throws Exception{
        return ResponseEntity.ok(servicio.guardar(auto));
    }

    @Operation(summary = "Busca un auto por ID")
    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(servicio.buscarPorId(id));
    }

    @Operation(summary = "Busca todos los autos por parametro")
    @GetMapping("buscarPor")
    public ResponseEntity buscarPor(@RequestParam(required = false) String categoria, @RequestParam(required = false) String ciudad) {
        if (ciudad == null && categoria == null) return ResponseEntity.badRequest().build();
        if (ciudad != null && categoria == null ) return ResponseEntity.ok(servicio.buscarAutoPorCiudad(ciudad));
        if (categoria != null && ciudad == null ) return ResponseEntity.ok(servicio.buscarAutoPorCategoria(categoria));
        return ResponseEntity.ok(servicio.buscarAutoPor(categoria, ciudad));
    }

    @Operation(summary = "Devuelve listado de autos recomendados")
    @GetMapping("recomendados")
    public ResponseEntity<?> recomendados() throws Exception{
        return ResponseEntity.ok(servicio.random());
    }
}

package com.dh.DigitalBooking.Controller;

import com.dh.DigitalBooking.Models.Entities.Categoria;
import com.dh.DigitalBooking.Services.ServicioCategoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

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
    };

    @PostMapping("nuevaCategoria")
    public ResponseEntity<?> nuevaCategoria(@RequestBody Categoria c) throws Exception{
        return ResponseEntity.ok(servicio.guardar(c));
    }


}

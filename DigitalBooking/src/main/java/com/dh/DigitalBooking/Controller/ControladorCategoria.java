package com.dh.DigitalBooking.Controller;

import com.dh.DigitalBooking.Services.ServicioCategoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class ControladorCategoria {

    private ServicioCategoria servicio;

    @Autowired
    public void setServicio(ServicioCategoria servicio) {
        this.servicio = servicio;
    }

}

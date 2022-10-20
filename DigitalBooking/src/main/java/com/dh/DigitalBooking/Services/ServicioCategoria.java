package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Repository.ORM.iRepositorioCategoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServicioCategoria {

    private iRepositorioCategoria repositorio;

    @Autowired
    public void setRepositorio(iRepositorioCategoria repositorio) {
        this.repositorio = repositorio;
    }
}

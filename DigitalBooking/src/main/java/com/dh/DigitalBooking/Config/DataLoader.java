package com.dh.DigitalBooking.Config;

import com.dh.DigitalBooking.Models.Entities.Roles.Usuario;
import com.dh.DigitalBooking.Repository.ORM.Roles.iRepositorioUsuario;
import com.dh.DigitalBooking.Services.ServicioRol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

// datos para entorno DEV
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    private iRepositorioUsuario repositorio;

    @Autowired
    private ServicioRol rol;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = passwordEncoder.encode("admin");
        Usuario administrador = new Usuario();
        administrador.setRol(rol.buscarPorId(1l));
        administrador.setContrasenia(password);
        administrador.setEmail("admin@test.com");
        administrador.setNombre("admin");
        administrador.setApellido("dev");
        if ( repositorio.findByEmail(administrador.getEmail()) == null ) repositorio.save(administrador);
    }
}

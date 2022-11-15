package com.dh.DigitalBooking.Repository.ORM.Roles;

import com.dh.DigitalBooking.Models.Entities.Roles.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface iRepositorioUsuario extends JpaRepository<Usuario,Long> {
    public Usuario findByEmail(String email);
}

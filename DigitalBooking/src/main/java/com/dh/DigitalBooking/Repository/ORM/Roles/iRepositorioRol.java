package com.dh.DigitalBooking.Repository.ORM.Roles;

import com.dh.DigitalBooking.Models.Entities.Roles.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRepositorioRol extends JpaRepository<Rol, Long> {
}

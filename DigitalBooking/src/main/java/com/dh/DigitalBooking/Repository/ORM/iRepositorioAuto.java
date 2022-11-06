package com.dh.DigitalBooking.Repository.ORM;

import com.dh.DigitalBooking.Models.Entities.Auto;
import com.dh.DigitalBooking.Models.Entities.Categoria;
import com.dh.DigitalBooking.Models.Entities.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface iRepositorioAuto extends JpaRepository<Auto, Long> {

    //@Query("SELECT * FROM AUTO WHERE CIUDAD_ID = 1")
    //List<Auto> buscarAutoPorCiudad(Ciudad ciudad);

    //@Query("SELECT * FROM AUTO WHERE CATEGORIA_ID = ?")
    //List<Auto> buscarAutoPorCategoria(Categoria categoria);
}

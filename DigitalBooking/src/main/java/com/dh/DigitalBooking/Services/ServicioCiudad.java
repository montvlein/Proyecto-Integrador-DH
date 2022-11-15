package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Models.Entities.Ciudad;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioCiudad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioCiudad {
    private iRepositorioCiudad repositorio;

    @Autowired
    public void setRepositorio(iRepositorioCiudad repositorio){this.repositorio=repositorio;}

    public Ciudad guardar(Ciudad ciudad) throws Exception{
        return repositorio.save(ciudad);
    }

    public Ciudad buscarPorId(Long id) throws Exception{
        Ciudad buscado = null;
        if(repositorio.findById(id).isPresent()) buscado = repositorio.findById(id).get();
        return buscado;
    }

    public Ciudad actualizar(Ciudad ciudad) throws Exception{
            Ciudad ciu = buscarPorId(ciudad.getId());
            if(ciu != null){
                ciu.setNombre(ciu.getNombre());
                ciu.setPais(ciu.getPais());
                ciu.setProvincia(ciu.getProvincia());
                guardar(ciu);
        }
            return ciu;
    }

    public void eliminar(Ciudad ciudad) throws Exception{
        repositorio.delete(ciudad);
    }

    public void eliminarPorId(Long id) throws Exception{
        repositorio.deleteById(id);
    }

    public List<Ciudad> listarCiudades() throws Exception{
        return repositorio.findAll();
    }
}

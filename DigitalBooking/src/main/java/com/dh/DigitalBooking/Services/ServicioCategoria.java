package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Models.Entities.Categoria;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioCategoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioCategoria {

    private iRepositorioCategoria repositorio;

    @Autowired
    public void setRepositorio(iRepositorioCategoria repositorio) {
        this.repositorio = repositorio;
    }

    public Categoria guardar(Categoria categoria) throws Exception{
        return repositorio.save(categoria);
    }

    public Categoria buscarPorId(Long id) throws Exception {
        Categoria buscado = null;
        if (repositorio.findById(id).isPresent()) buscado = repositorio.findById(id).get();
        return buscado;
    }

    public Categoria actualizar(Categoria categoria) throws Exception{
        Categoria cat = buscarPorId(categoria.getId());
        if (cat != null) {
            cat.setTitulo(categoria.getTitulo());
            cat.setDescripcion(categoria.getDescripcion());
            cat.setUrlImagen(categoria.getUrlImagen());
            guardar(cat);
        }
        return cat;
    }

    public void eliminar(Categoria categoria) throws Exception {
        repositorio.delete(categoria);
    }

    public void eliminarPorId(Long id) throws Exception {
        repositorio.deleteById(id);
    }

    public List<Categoria> listar() throws Exception {
        return repositorio.findAll();
    }

}

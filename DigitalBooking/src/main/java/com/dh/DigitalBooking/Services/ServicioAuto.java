package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Models.DTOs.AutoDTO;
import com.dh.DigitalBooking.Models.Entities.Auto;
import com.dh.DigitalBooking.Models.Entities.Caracteristica;
import com.dh.DigitalBooking.Models.Entities.Reserva;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioAuto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service("ServicioAuto")
public class ServicioAuto {

    private iRepositorioAuto repositorio;

    @Autowired
    ServicioImagen imagen;

    @Autowired
    ServicioReserva reservas;

    @Autowired
    public void setRepositorio(iRepositorioAuto repositorio) {
        this.repositorio = repositorio;
    }

    public Auto guardar(Auto auto){return repositorio.save(auto);}

    public AutoDTO buscarPorId(Long id){
        AutoDTO auto = null;
        if (repositorio.findById(id).isPresent()) {
            auto = autoToDTO(repositorio.findById(id).get());
        }
        return auto;
    }

    public Auto actualizar(Auto auto){
        Auto autoBuscado = null;
        if (repositorio.findById(auto.getId()).isPresent()) {
            autoBuscado = repositorio.findById(auto.getId()).get();
        }
        if( autoBuscado != null) {
            autoBuscado.setCategoria(auto.getCategoria());
            autoBuscado.setCaracteristicas(auto.getCaracteristicas());
            autoBuscado.setCiudad(auto.getCiudad());
            autoBuscado.setImagenes(auto.getImagenes());
            autoBuscado.setPrecio(auto.getPrecio());
            autoBuscado.setDescripcion(auto.getDescripcion());
            guardar(autoBuscado);
        }
        return autoBuscado;
    }

    public void eliminar(Auto auto){
        repositorio.delete(auto);
    }

    public void eliminarPorId(Long id){
        repositorio.deleteById(id);
    }

    public List<AutoDTO> listar(){
        return autoToDTO(repositorio.findAll());
    }

    protected AutoDTO autoToDTO(Auto auto) {
        AutoDTO autoEntregable = new AutoDTO();
        autoEntregable.setId(auto.getId());
        autoEntregable.setNombre(auto.getNombre());
        autoEntregable.setImagenes(imagen.imagenesPorAuto(auto.getId()));
        autoEntregable.setCategoria(auto.getCategoria().getTitulo());
        autoEntregable.setDescripcion(auto.getDescripcion());
        autoEntregable.setPrecio(auto.getPrecio());
        autoEntregable.setCiudad(auto.getCiudad());
        for (Caracteristica c : auto.getCaracteristicas()) {
            autoEntregable.agregarCaracteristica(c.getNombre(), c.getDescripcion());
        }
        for (Reserva r : reservas.buscarPorAutoId(auto.getId())) {
            LocalDate fechaOcupara = r.getFechaInicialReserva();
            while (fechaOcupara.isBefore(r.getFechaFinalReserva().plusDays(1))) {
                autoEntregable.getFechasConReserva().add(fechaOcupara);
                fechaOcupara = fechaOcupara.plusDays(1);
            }
        }
        return autoEntregable;
    }

    protected List<AutoDTO> autoToDTO(List<Auto> listado) {
        List<AutoDTO> listadoDeAutos = new ArrayList<>();
        for (Auto auto : listado){
            listadoDeAutos.add(autoToDTO(auto));
        }
        return listadoDeAutos;
    }

    public HashSet<AutoDTO> random() {
        Random random = new Random();
        HashSet<AutoDTO> recomendados = new HashSet<>();
        Long num;
        int autosEnDB = listar().size();

        while (autosEnDB > 0 && recomendados.size() < 7) {
            num = random.nextLong(1, autosEnDB);
            boolean noExisteEnRecomendados = true;
            Iterator<AutoDTO> it = recomendados.iterator();
            while (it.hasNext()) {
                if (it.next().getId() == num) {
                    noExisteEnRecomendados = false;
                }
            }
            if (noExisteEnRecomendados) recomendados.add(buscarPorId(num));
        }
        return recomendados;
    }
}

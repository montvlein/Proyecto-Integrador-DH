package com.dh.DigitalBooking.Services;

import com.dh.DigitalBooking.Models.Entities.Reserva;
import com.dh.DigitalBooking.Repository.ORM.iRepositorioReserva;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioReserva {

    private iRepositorioReserva repositorio;

    @Autowired
    public void setRepositorio(iRepositorioReserva repositorio){
        this.repositorio = repositorio;
    }

    public Reserva guardar(Reserva reserva){
        return repositorio.save(reserva);
    }

    public Reserva buscarPorId(Long id) throws Exception{
        Reserva buscado = null;
        if(repositorio.findById(id).isPresent()) buscado = repositorio.findById(id).get();
        return buscado;
    }

    public List<Reserva> buscarPorAutoId(Long id) {
        return repositorio.findByAutoId(id);
    }

    public List<Reserva> buscarPorUsuarioId(Long id) {
        return repositorio.findByClienteId(id);
    }

    public Reserva actualizar(Reserva reserva) throws Exception{
        Reserva res = buscarPorId(reserva.getId());
        if (res != null){
            res.setAuto(res.getAuto());
            res.setFechaFinalReserva(res.getFechaFinalReserva());
            res.setFechaInicialReserva(res.getFechaInicialReserva());
            res.setCliente(res.getCliente());
            res.setHoraComienzoReserva(res.getHoraComienzoReserva());
            guardar(res);
        }
        return res;
    }

    public void eliminar(Reserva reserva) throws Exception{
        repositorio.delete(reserva);
    }

    public void eliminarPorId(Long id){
        repositorio.deleteById(id);
    }

    public List<Reserva> listar(){
        return repositorio.findAll();
    }
}

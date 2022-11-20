export class Reserva {
    constructor(
        horaComienzoReserva, 
        fechaInicialReserva, 
        fechaFinalReserva,
        auto,
        cliente) {
        this.horaComienzoReserva = horaComienzoReserva
        this.fechaInicialReserva = fechaInicialReserva
        this.fechaFinalReserva = fechaFinalReserva
        this.auto = auto
        this.cliente = cliente
    }
}

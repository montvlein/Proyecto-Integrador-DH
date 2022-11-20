package com.dh.DigitalBooking.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ServicioMail {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${mail.cuentaSalida}")
    private String cuenta;

    public void enviar(String destino) {
        SimpleMailMessage mensaje = new SimpleMailMessage();
        mensaje.setFrom(cuenta);
        mensaje.setTo(destino);
        mensaje.setSubject("Verificacion de cuenta DigitalBooking");
        mensaje.setText("Este es tu codigo de seguridad");
        mailSender.send(mensaje);
    }

    public void enviar(String desde, String destino, String texto) {
        SimpleMailMessage mensaje = new SimpleMailMessage();
        mensaje.setFrom(desde);
        mensaje.setTo(destino);
        mensaje.setSubject("Verificacion de cuenta DigitalBooking");
        mensaje.setText(texto);
        mailSender.send(mensaje);
    }
}

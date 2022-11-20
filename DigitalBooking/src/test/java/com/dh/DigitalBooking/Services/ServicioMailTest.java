package com.dh.DigitalBooking.Services;

import com.icegreen.greenmail.configuration.GreenMailConfiguration;
import com.icegreen.greenmail.junit5.GreenMailExtension;
import com.icegreen.greenmail.util.ServerSetupTest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.RegisterExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.mail.internet.MimeMessage;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class ServicioMailTest {

    @RegisterExtension
    static GreenMailExtension greenMail = new GreenMailExtension(ServerSetupTest.SMTP)
            .withConfiguration(GreenMailConfiguration
                    .aConfig().withUser("usuario@gmail.com", "password"));

    @Autowired
    private ServicioMail servicio;

    @Test
    void enviarCargandoDatos() throws Exception {
        servicio.enviar("from@gmail.com", "test@gmail.com", "texto prueba");

        MimeMessage[] mensajesRecibidos = greenMail.getReceivedMessages();
        MimeMessage mensajeRecibido = mensajesRecibidos[0];

        assertEquals("from@gmail.com", mensajeRecibido.getFrom()[0].toString());
        assertEquals("test@gmail.com", mensajeRecibido.getAllRecipients()[0].toString());
        assertEquals("Verificacion de cuenta DigitalBooking", mensajeRecibido.getSubject().trim());
        assertEquals("texto prueba", mensajeRecibido.getContent().toString().trim());

    }

    @Test
    void enviarConDatosSeteados() throws Exception {
        servicio.enviar( "test@gmail.com" );

        MimeMessage[] mensajesRecibidos = greenMail.getReceivedMessages();
        MimeMessage mensajeRecibido = mensajesRecibidos[0];

        assertEquals("usuario@gmail.com", mensajeRecibido.getFrom()[0].toString());
        assertEquals("test@gmail.com", mensajeRecibido.getAllRecipients()[0].toString());
        assertEquals("Verificacion de cuenta DigitalBooking", mensajeRecibido.getSubject().trim());
        assertEquals("Este es tu codigo de seguridad", mensajeRecibido.getContent().toString().trim());

    }
}

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
        servicio.enviar("from@gmail.com", "test@gmail.com", "texto prueba", "test metodo enviarCargandoDatos");

        MimeMessage[] mensajesRecibidos = greenMail.getReceivedMessages();
        MimeMessage mensajeRecibido = mensajesRecibidos[0];

        assertEquals("from@gmail.com", mensajeRecibido.getFrom()[0].toString());
        assertEquals("test@gmail.com", mensajeRecibido.getAllRecipients()[0].toString());
        assertEquals("test metodo enviarCargandoDatos", mensajeRecibido.getSubject().trim());
        assertEquals("texto prueba", mensajeRecibido.getContent().toString().trim());

    }

    @Test
    void enviarConDatosSeteados() throws Exception {
        servicio.enviar( "test@gmail.com" , "codigo");

        MimeMessage[] mensajesRecibidos = greenMail.getReceivedMessages();
        MimeMessage mensajeRecibido = mensajesRecibidos[0];

        assertEquals("usuario@gmail.com", mensajeRecibido.getFrom()[0].toString());
        assertEquals("test@gmail.com", mensajeRecibido.getAllRecipients()[0].toString());
        assertEquals("Verificacion cuenta Digital.App", mensajeRecibido.getSubject().trim());

    }
}

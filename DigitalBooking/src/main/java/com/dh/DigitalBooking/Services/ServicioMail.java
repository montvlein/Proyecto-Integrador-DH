package com.dh.DigitalBooking.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.Multipart;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

@Service
public class ServicioMail {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${mail.cuentaSalida}")
    private String cuenta;

    public void enviar(String desde, String destino, String texto, String asunto) {
        SimpleMailMessage mensaje = new SimpleMailMessage();
        mensaje.setFrom(desde);
        mensaje.setTo(destino);
        mensaje.setSubject(asunto);
        mensaje.setText(texto);
        mailSender.send(mensaje);
    }

    public void enviar(String destino, String codigo) throws Exception {
        MimeMessage mail = mailSender.createMimeMessage();
        mail.setSubject("Verificacion cuenta Digital.App");
        mail.setFrom(cuenta);

        MimeBodyPart messageBodyPart = new MimeBodyPart();
        messageBodyPart.setContent(templateValidacionEmail(codigo), "text/html");

        Multipart multipart = new MimeMultipart();
        multipart.addBodyPart(messageBodyPart);

        MimeMessageHelper helper = new MimeMessageHelper(mail, true);
        helper.setTo(destino);
        mail.setContent(multipart);
        mailSender.send(mail);
    }

    private String templateValidacionEmail(String codigo) {
        return """
                <section
                        style='
                          background-color: #f6fafb;
                          color: #0a0836;
                          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                            sans-serif;
                          font-size: 14px;
                          line-height: 1.5;
                          display: flex;
                          flex-direction: column;
                          justify-content: space-between;
                          align-items: center;
                          box-sizing: border-box;
                          padding: 1rem 0;
                        '
                    >
                        """ + cabecera + """
                                
                        <section
                            style='
                            background-color: #fff;
                            box-sizing: border-box;
                            border-radius: 15px;
                            min-width: 580px;
                            color: #0a0836;
                            line-height: 1.5;
                            padding: 1.6rem;
                            margin: 1.6rem auto;
                            '
                        >
                            <div>
                                <h2>Bienvenidx!</h2>
                                <p style='margin: 0;'>Estamos felices de verte en Digital.App</p>
                            </div>
                            <div style='
                              display: flex;
                              flex-direction: column;
                              align-items: left;
                              '>
                                <h2>Como iniciar</h2>
                                <p style='margin: 0;'>Has click en el enlace para validar tu correo</p>
                                <a
                                rel='noopener noreferrer'
                                style='
                                    color: #fff;
                                    background-color: #00b08c;
                                    border-radius: 25px;
                                    font-size: 14px;
                                    font-weight: 700;
                                    text-decoration: none;
                                    text-align: center;
                                    padding: 10px 25px;
                                    align-self: center;
                                    margin: 1rem;
                                    '
                                target='_blank'
                                href='http://localhost:8080/api/v1/usuario/auth?token=
                                """ + codigo + """
                               '>Validar email</a>
                           </div>
                           <hr>
                           <div
                               style='
                                   display: inline-block !important;
                                   margin-left: 10px;
                                   vertical-align: middle;
                               '
                               >
                               Disfruta nuestro producto!<br />
                               <strong>Equipo 2</strong> de DigitalBooking
                           </div>
                       </section>
                               
                    """ + pie + """
                                
                    </section>
                """;
    }

    private String cabecera = """
            <section
              style='
                    text-align: center;
                    word-break: break-word;
                    padding: 10px 10px 0;
                  '
              ><a
                    rel='noopener noreferrer'
                    href='http://localhost:5173/'
                    style='color: #00b08c'
                    target='_blank'
                    data-saferedirecturl='https://www.google.com/url?q=digitalhouse'
                  >
                    <img
                      alt='Digital.App'
                      title='Digital.App'
                      src='https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/assets/logo.png'
                    />
                  </a>
            </section>
            """;

    private String pie = """
            <section
                style='
                  display: flex;
                  width: 580px;
                  justify-content: space-between;
                  color: #8d8c9f;
                '
              >
                <div>
                    <div>Wellcome to H, Inc.</div>
                    <div>Calle falsa 123,</div>
                    <div>CP 01824, ARG</div>
                </div>
                <div
                  style='
                  display: flex;
                  align-items: center;
                  '
                >
                    <a href=' style='text-decoration: none;'>
                        <img src='https://cdn.pixabay.com/photo/2022/04/08/07/18/facebook-7118901_960_720.png' alt='Facebook'
                        style='
                            max-width: 100%;
                            width: 34px !important;
                            outline: none;
                            text-decoration: none;
                            height: 34px !important;
                            margin: 0.5rem;
                            '
                        >
                    </a>
                    <a href=' style='text-decoration: none;'>
                        <img src=' alt='Twitter'
                        style='
                            max-width: 100%;
                            width: 34px !important;
                            outline: none;
                            text-decoration: none;
                            height: 34px !important;
                            margin: 0.5rem;
                            '>
                    </a>
                    <a href=' style='text-decoration: none;'>
                        <img src=' alt='LinkedIn'
                        style='
                            max-width: 100%;
                            width: 34px !important;
                            outline: none;
                            text-decoration: none;
                            height: 34px !important;
                            margin: 0.5rem;
                            '>
                    </a>
                </div>
            </section>
            """;
}

package com.dh.DigitalBooking.Config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JWTUtil {

    @Value("${jwt.secret}")
    private String SECRET_KEY;

    public String extraerEmail(String token) {
        return extractClaimUsername(token);
    }

    public Date extraerExpiracion(String token) {
        return extractClaimDate(token);
    }

    private Date extractClaimDate(String token) {
        Claims claims = extractAllClaims(token);
        return claims.getExpiration();
    }

    private String extractClaimUsername(String token) {
        Claims claims = extractAllClaims(token);
        return claims.getSubject();
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }

    public String generarToken(String mailUsuario) {
        Map<String, Object> claims = new HashMap<>();
        return crearToken(claims, mailUsuario);
    }

    public String generarToken(UserDetails infoUsuario) {
        Map<String, Object> claims = new HashMap<>();
        return crearToken(claims, infoUsuario.getUsername());
    }

    private String crearToken(Map<String, Object> claims, String usuario) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(usuario)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*60*10))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    public Boolean validarToken(String token, String infoUsuario) {
        final String nombreUsuario = extraerEmail(token);
        return (nombreUsuario.equals(infoUsuario) && !isTokenExpired(token));
    }

    public Boolean validarToken(String token, UserDetails infoUsuario) {
        final String nombreUsuario = extraerEmail(token);
        return (nombreUsuario.equals(infoUsuario.getUsername()) && !isTokenExpired(token));
    }

    public boolean isTokenExpired(String token) {
        return extraerExpiracion(token).before(new Date());
    }
}

package com.dh.DigitalBooking.Models.Entities.Roles;

import lombok.Getter;
import lombok.Setter;

public class Auth {

    @Getter @Setter
    public  static class Request {
        private String email;
        private String contrasenia;
    }

    public static class Response {
        private final String token;
        public Response(String jwt) {
            this.token = jwt;
        }
        public String getToken() {
            return token;
        }
    }
}

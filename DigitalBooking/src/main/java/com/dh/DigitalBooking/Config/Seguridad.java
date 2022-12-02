package com.dh.DigitalBooking.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class Seguridad {

    @Autowired
    private UserDetailsService service;
    @Autowired
    private JwtResquetFilter filter;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationEntryPoint jwtEntryPointConfig;

    @Bean
    public AuthenticationManager authManager(HttpSecurity http) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                .userDetailsService(service)
                .passwordEncoder(passwordEncoder)
                .and()
                .build();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*").allowedMethods("GET", "POST", "PUT", "DELETE");
            }
        };
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.headers().frameOptions().sameOrigin().and().cors().and().csrf().disable()
                .authorizeRequests()
                .antMatchers("/h2-console/**", "/swagger-ui/**", "/v3/api-docs/**").permitAll()
                .antMatchers(HttpMethod.POST, "/api/v1/usuario/**").permitAll()
                .antMatchers(HttpMethod.GET, "/api/v1/usuario/validarMail", "/api/v1/usuario/tokenInfo").permitAll()
                .antMatchers(HttpMethod.GET, "/api/v1/auto/**").permitAll()
                .antMatchers(HttpMethod.GET, "/api/v1/categoria/**").permitAll()
                .antMatchers(HttpMethod.GET, "/api/v1/caracteristica/**").permitAll()
                .antMatchers(HttpMethod.GET, "/api/v1/ciudad/**").permitAll()
                .antMatchers(HttpMethod.GET, "/api/v1/reserva/buscarPorUsuario/**").hasAnyRole("USER","ADMIN")
                .antMatchers(HttpMethod.GET, "/api/v1/reserva/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/api/v1/reserva/**").hasRole("USER")
                .antMatchers("/api/v1/ciudad/**").hasRole("ADMIN")
                .antMatchers("/api/v1/imagen/**").hasRole("ADMIN")
                .antMatchers("/api/v1/caracteristica/**").hasRole("ADMIN")
                .antMatchers("/api/v1/auto/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/api/v1/usuario/**", "/api/v1/usuario/listarTodis").hasRole("ADMIN")
                .anyRequest()
                .authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(jwtEntryPointConfig)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}

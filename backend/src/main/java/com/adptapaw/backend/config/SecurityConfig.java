package com.adptapaw.backend.config;

import com.adptapaw.backend.security.JWTAuthenticationEntryPoint;
import com.adptapaw.backend.security.JWTAuthenticationFilter;
import com.adptapaw.backend.security.UserServiceSecurity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true,prePostEnabled = true)
public class SecurityConfig {

    @Autowired
    private UserServiceSecurity userDetailsService;

    @Autowired
    private JWTAuthenticationEntryPoint authenticationEntryPoint;

    @Bean
    public JWTAuthenticationFilter jWTAuthenticationFilter(){
        return  new JWTAuthenticationFilter();
    }
    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    protected SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/api/signin").permitAll()
                .antMatchers(HttpMethod.GET, "/api/signup").permitAll()
                .antMatchers("/api/auth/**").permitAll()
                .antMatchers(HttpMethod.GET, "/api/adoption/{id}").permitAll()
                .antMatchers(HttpMethod.GET, "/api/adoption/all").permitAll()
                .antMatchers(HttpMethod.GET, "/api/donationpost/{id}").permitAll()
                .antMatchers(HttpMethod.GET, "/api/donationpost/all").permitAll()
                .antMatchers(HttpMethod.GET, "/api/missing/**").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/admin/{uid}/adoption/request/{id}/approve").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/api/missing/{id}/create").permitAll()
                .antMatchers(HttpMethod.POST , "/api/feedback/create").permitAll()
                .antMatchers(HttpMethod.POST , "/api/files/upload").permitAll()
                .anyRequest()
                .authenticated();
        http.addFilterBefore(jWTAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
        http.cors();
        return http.build();

    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}

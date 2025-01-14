package com.ryc.api.config;

import com.ryc.api.v1.security.exceptions.RestAuthenticationEntryPoint;
import com.ryc.api.v1.security.exceptions.TokenAccessDeniedHandler;
import com.ryc.api.v1.security.filter.EmailPasswordAuthenticationFilter;
import com.ryc.api.v1.security.filter.JwtAuthenticationFilter;
import com.ryc.api.v1.security.jwt.JwtTokenManager;
import com.ryc.api.v1.security.service.RefreshTokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final AuthenticationConfiguration authenticationConfiguration;
    private final JwtTokenManager jwtTokenManager;
    private final TokenAccessDeniedHandler tokenAccessDeniedHandler;
    private final RefreshTokenService refreshTokenService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable) // CSRF 비활성화
                .formLogin(AbstractHttpConfigurer::disable) // 폼 로그인 비활성
                .httpBasic(AbstractHttpConfigurer::disable) // 기본 인증 비활성
                .addFilterBefore(jwtAuthenticationFilter, EmailPasswordAuthenticationFilter.class) //jwt 인증 필터
                .addFilterAt(
                        new EmailPasswordAuthenticationFilter(
                                authenticationManager(authenticationConfiguration),
                                jwtTokenManager,
                                refreshTokenService),
                        UsernamePasswordAuthenticationFilter.class) //email - password 로그인 필터
                .exceptionHandling(
                        exceptions ->
                                exceptions
                                        .authenticationEntryPoint(new RestAuthenticationEntryPoint()) // 인증 진입점 설정
                                        .accessDeniedHandler(tokenAccessDeniedHandler)) // 예외 처리 설정
                .sessionManagement(
                        session ->
                                session.sessionCreationPolicy(
                                        SessionCreationPolicy.STATELESS)) // 세션 비활성 (HTTP 요청마다 인증 필요)
                .authorizeHttpRequests(
                        request ->
                                request
                                        .requestMatchers("/").permitAll() // health check
                                        .requestMatchers("/api/v1/auth/*").permitAll()
                                        .requestMatchers("/api/v1/auth/token/refresh").permitAll()
                                        .requestMatchers(HttpMethod.POST,"/api/v1/application/").permitAll()
                                        .requestMatchers(HttpMethod.GET,"/api/v1/application/form").permitAll()
                                        .requestMatchers(
                                                "/actuator/**",
                                                "/swagger-ui/*",
                                                "/swagger-ui.html",
                                                "/webjars/**",
                                                "/v2/**",
                                                "/v3/**",
                                                "/swagger-resources/**").permitAll() // swagger 접근 허용
                                        .anyRequest().authenticated());

        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}

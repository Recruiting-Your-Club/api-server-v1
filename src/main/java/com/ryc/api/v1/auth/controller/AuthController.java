package com.ryc.api.v1.auth.controller;

import com.ryc.api.v1.auth.dto.LoginRequest;
import com.ryc.api.v1.auth.dto.RegisterRequest;
import com.ryc.api.v1.auth.dto.RegisterResponse;
import com.ryc.api.v1.auth.service.AuthService;
import com.ryc.api.v1.security.jwt.JwtTokenManager;
import com.ryc.api.v1.security.service.RefreshTokenService;
import com.ryc.api.v1.user.domain.User;
import com.ryc.api.v1.user.repository.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
@Tag(name = "auth")
public class AuthController {

    private final AuthService authService;
    private final RefreshTokenService refreshTokenService;
    private final UserRepository userRepository;
    private final JwtTokenManager jwtTokenManager;

    @PostMapping("/login")
    @Operation(summary = "Login", description = "사용자 로그인 인증 후, 인증 성공시 토큰 발행")
    public void login(@RequestBody LoginRequest loginRequest) {
        // 이 메서드는 실제로 작동하지 않습니다.
        // UsernamePasswordAuthenticationFilter가 이 경로를 가로채어 인증을 처리합니다.
        throw new IllegalStateException("This method should not be called. It's handled by Spring Security filter chain.");
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest body) {
        try {
            RegisterResponse response = authService.register(body);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logoutUser(@RequestHeader("Authorization") String authorizationHeader) {
        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            return ResponseEntity.badRequest().body(Map.of("message", "Invalid Authorization header"));
        }

        String token = authorizationHeader.replace("Bearer ", "");

        String email = jwtTokenManager.getEmailFromToken(token);

        User user = userRepository.findByEmail(email);
        if (user != null) {
            refreshTokenService.deleteByUser(user);
        }

        return ResponseEntity.ok(Map.of("message", "Successful"));
    }

}

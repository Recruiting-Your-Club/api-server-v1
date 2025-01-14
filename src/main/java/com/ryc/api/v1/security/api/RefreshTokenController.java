package com.ryc.api.v1.security.api;


import com.ryc.api.v1.security.dto.RefreshTokenRequest;
import com.ryc.api.v1.security.jwt.JwtTokenManager;
import com.ryc.api.v1.security.domain.RefreshToken;
import com.ryc.api.v1.security.service.RefreshTokenService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/auth/token")
@RequiredArgsConstructor
@Tag(name = "token")
public class RefreshTokenController {

    private final JwtTokenManager jwtTokenManager;
    private final RefreshTokenService refreshTokenService;

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshAccessToken(@RequestBody RefreshTokenRequest request) {
        String refreshToken = request.getRefreshToken();
        if (refreshToken == null || refreshToken.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Refresh Token이 비어 있음"));
        }

        if (!jwtTokenManager.validateRefreshToken(refreshToken)) {
            return ResponseEntity.status(401).body(Map.of("message", "만료되었거나 유효하지 않은 Refresh Token"));
        }

        String email = jwtTokenManager.getEmailFromToken(refreshToken);

        // 데이터베이스에 저장된 Refresh Token과 비교함으로써 Refresh Token이 탈취되었을 가능성을 방지 -> 보안
        RefreshToken storedToken = refreshTokenService.findByToken(refreshToken)
                .orElseThrow(() -> new IllegalArgumentException("Refresh Token 값을 가진 유저가 존재하지 않음"));

        if (!storedToken.getUser().getEmail().equals(email)) {
            return ResponseEntity.status(401).body(Map.of("message", "Refresh Token과 일치하는 유저 정보가 아님"));
        }
        refreshTokenService.deleteByToken(refreshToken);

        String newAccessToken = jwtTokenManager.generateToken(email, storedToken.getUser().getRole().name());

        String newRefreshToken = jwtTokenManager.generateRefreshToken(email);
        refreshTokenService.updateRefreshToken(storedToken.getUser(), newRefreshToken, 7 * 24 * 60);

        return ResponseEntity.ok(Map.of(
                "accessToken", newAccessToken,
                "refreshToken", newRefreshToken
        ));
    }
}

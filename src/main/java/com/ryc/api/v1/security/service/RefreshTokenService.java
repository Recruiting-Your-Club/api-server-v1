package com.ryc.api.v1.security.service;

import com.ryc.api.v1.security.dao.RefreshTokenRepository;
import com.ryc.api.v1.security.domain.RefreshToken;
import com.ryc.api.v1.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class RefreshTokenService {

    private final RefreshTokenRepository refreshTokenRepository;

    public RefreshToken createRefreshToken(User user, String token, long expirationMinutes) {
        RefreshToken refreshToken = new RefreshToken(user, token, LocalDateTime.now().plusMinutes(expirationMinutes));
        return refreshTokenRepository.save(refreshToken);
    }

    public void updateRefreshToken(User user, String newToken, long expirationMinutes) {
        refreshTokenRepository.deleteByToken(newToken);

        RefreshToken refreshToken = new RefreshToken(user, newToken, LocalDateTime.now().plusMinutes(expirationMinutes));
        refreshTokenRepository.save(refreshToken);
    }


    public Optional<RefreshToken> findByToken(String token) {
        return refreshTokenRepository.findByToken(token);
    }

    public void deleteByToken(String token) {
        refreshTokenRepository.deleteByToken(token);
    }

    public void deleteByUser(User user) {
        refreshTokenRepository.deleteAllByUser(user);
    }

}

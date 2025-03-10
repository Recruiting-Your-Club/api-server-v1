package com.ryc.api.v1.auth.dto.response;

import jakarta.validation.constraints.NotEmpty;

import java.time.LocalDateTime;

public record RegisterResponse(@NotEmpty(message = "created is empty") LocalDateTime created) {
}

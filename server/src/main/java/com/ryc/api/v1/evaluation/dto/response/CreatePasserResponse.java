package com.ryc.api.v1.evaluation.dto.response;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record CreatePasserResponse(@NotNull(message = "created shouldn't be empty") LocalDateTime created) {
}

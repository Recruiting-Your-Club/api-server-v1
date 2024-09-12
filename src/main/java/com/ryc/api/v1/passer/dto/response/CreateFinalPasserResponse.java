package com.ryc.api.v1.passer.dto.response;

import com.ryc.api.v1.application.dto.internal.RequiredFieldDto;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record CreateFinalPasserResponse(@NotEmpty(message = "applicantId shouldn't be empty") String applicantId,
                                        @NotNull(message = "applicantDtos shouldn't be null") RequiredFieldDto applicantDtos) {
}
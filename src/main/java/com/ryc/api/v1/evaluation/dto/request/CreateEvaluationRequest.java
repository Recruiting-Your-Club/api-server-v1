package com.ryc.api.v1.evaluation.dto.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record CreateEvaluationRequest(@NotEmpty(message = "recruitmentId shouldn't be empty") String recruitmentId,
                                      @NotEmpty(message = "stepId shouldn't be empty") String stepId,
                                      @NotEmpty(message = "applicantId shouldn't be empty") String applicantId,
                                      @NotNull(message = "score shouldn't be empty") BigDecimal score,
                                      @NotEmpty(message = "comment shouldn't be empty") String comment) {
}
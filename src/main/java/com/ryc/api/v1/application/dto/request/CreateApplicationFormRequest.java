package com.ryc.api.v1.application.dto.request;

import com.ryc.api.v1.application.domain.metadata.Field;
import com.ryc.api.v1.application.dto.internal.QuestionDto;
import jakarta.validation.constraints.NotEmpty;

import java.util.List;

public record CreateApplicationFormRequest(@NotEmpty(message = "stepId shouldn't be empty") String stepId,
                                           @NotEmpty(message = "requiredFields shouldn't be empty (At least the NAME field must be required.)") List<Field> requiredFields,
                                           @NotEmpty(message = "questions shouldn't be empty") List<QuestionDto> questions) {
}
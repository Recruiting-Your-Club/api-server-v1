package com.ryc.api.v1.evaluation.dto.request;

import com.ryc.api.v1.common.dto.ClubRoleSecuredDto;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record CreatePasserRequest(
        @NotNull(message = "clubRoleSecuredDto shouldn't be null") ClubRoleSecuredDto clubRoleSecuredDto,
        @NotEmpty(message = "clubId shouldn't be empty") String clubId,
        @NotEmpty(message = "stepId shouldn't be empty") String stepId,
        @NotEmpty(message = "applicantId shouldn't be empty") String applicantId) {
}

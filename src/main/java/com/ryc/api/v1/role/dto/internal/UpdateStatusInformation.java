package com.ryc.api.v1.role.dto.internal;

import com.ryc.api.v1.common.constant.RequestStatus;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

import java.time.LocalDateTime;

/**
 * ClubRoleApplication의 필드값 업데이트 메소드의 인자로 넘겨줄 DTO
 * service -> Entity
 */
@Builder
public record UpdateStatusInformation(
        @NotNull(message = "requestStatus shouldn't be empty") RequestStatus requestStatus,
        @NotEmpty(message = "reviewedBy shouldn't be empty") String reviewedBy) {
}
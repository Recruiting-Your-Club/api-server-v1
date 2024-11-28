package com.ryc.api.v1.recruitment.controller;

import com.ryc.api.v1.common.aop.annotation.HasPresidentRoleSecured;
import com.ryc.api.v1.recruitment.dto.request.CreateRecruitmentRequest;
import com.ryc.api.v1.recruitment.dto.response.CreateRecruitmentResponse;
import com.ryc.api.v1.recruitment.service.RecruitmentService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/recruitment")
@RequiredArgsConstructor
@Tag(name = "모집전형")
public class RecruitmentController {
    private final RecruitmentService recruitmentService;

    @HasPresidentRoleSecured
    @PostMapping("/")
    public ResponseEntity<?> createRecruitment(@Valid @RequestBody CreateRecruitmentRequest body) {
        CreateRecruitmentResponse response = recruitmentService.createRecruitment(body);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}

package com.ryc.api.v1.applicant.controller;

import com.ryc.api.v1.applicant.dto.response.GetAllApplicantResponse;
import com.ryc.api.v1.applicant.service.ApplicantService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/applicant")
@RequiredArgsConstructor
@Tag(name = "지원자")
public class ApplicantController {
    private final ApplicantService applicantService;

    @GetMapping("/")
    public ResponseEntity<?> getAllApplicants(@RequestParam(required = true) String recruitmentId) {
        try {
            GetAllApplicantResponse response = applicantService.getAllApplicantsByRecruitmentId(recruitmentId);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }
}
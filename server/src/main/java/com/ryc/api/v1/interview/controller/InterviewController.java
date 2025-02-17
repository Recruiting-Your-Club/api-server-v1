package com.ryc.api.v1.interview.controller;

import com.ryc.api.v1.common.aop.annotation.HasAnyRoleSecured;
import com.ryc.api.v1.common.aop.annotation.HasPresidentRoleSecured;
import com.ryc.api.v1.interview.dto.request.CreateInterviewAssignmentRequest;
import com.ryc.api.v1.interview.dto.request.CreateInterviewRequest;
import com.ryc.api.v1.interview.dto.response.CreateInterviewAssignmentResponse;
import com.ryc.api.v1.interview.dto.response.CreateInterviewResponse;
import com.ryc.api.v1.interview.dto.response.GetAllApplicantByInterviewResponse;
import com.ryc.api.v1.interview.dto.response.GetInterviewScheduleResponse;
import com.ryc.api.v1.interview.service.InterviewService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/interview")
@RequiredArgsConstructor
@Tag(name = "면접 관리")
public class InterviewController {
    private final InterviewService interviewService;

    @HasPresidentRoleSecured
    @PostMapping("/")
    public ResponseEntity<?> createInterview(@Valid @RequestBody CreateInterviewRequest body) {
        List<CreateInterviewResponse> response = interviewService.createInterview(body);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @HasAnyRoleSecured
    @GetMapping("/applicants")
    public ResponseEntity<?> getAllApplicantsByInterview(@NotEmpty @RequestParam String clubId,
                                                         @RequestParam(required = false, defaultValue = "none") String interviewId,
                                                         @RequestParam(required = false, defaultValue = "none") String stepId) {
        GetAllApplicantByInterviewResponse response = interviewService.getAllApplicantsByInterview(interviewId, stepId);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @HasPresidentRoleSecured
    @PostMapping("/assignment")
    public ResponseEntity<?> createInterviewAssignment(@Valid @RequestBody CreateInterviewAssignmentRequest body) {
        CreateInterviewAssignmentResponse response = interviewService.createInterviewAssignment(body);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @HasAnyRoleSecured
    @GetMapping("/")
    public ResponseEntity<?> getInterviewScheduleList(@NotEmpty @RequestParam String clubId,
                                                      @NotEmpty @RequestParam String stepId) {
        List<GetInterviewScheduleResponse> response = interviewService.findInterviewSchedules(stepId);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}

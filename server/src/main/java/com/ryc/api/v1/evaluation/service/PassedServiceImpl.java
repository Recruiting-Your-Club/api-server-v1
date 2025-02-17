package com.ryc.api.v1.evaluation.service;

import com.ryc.api.v1.applicant.domain.Applicant;
import com.ryc.api.v1.applicant.dto.internal.ApplicantDto;
import com.ryc.api.v1.applicant.repository.ApplicantRepository;
import com.ryc.api.v1.evaluation.domain.StepPasser;
import com.ryc.api.v1.evaluation.dto.request.CreatePasserRequest;
import com.ryc.api.v1.evaluation.dto.response.CreatePasserResponse;
import com.ryc.api.v1.evaluation.dto.response.GetPasserResponse;
import com.ryc.api.v1.evaluation.repository.StepPasserRepository;
import com.ryc.api.v1.recruitment.domain.Step;
import com.ryc.api.v1.recruitment.repository.StepRepository;
import com.ryc.api.v1.role.domain.ClubRole;
import com.ryc.api.v1.role.domain.UserClubRole;
import com.ryc.api.v1.role.repository.UserClubRoleRepository;
import com.ryc.api.v1.security.dto.CustomUserDetail;
import com.ryc.api.v1.user.domain.User;
import com.ryc.api.v1.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class PassedServiceImpl implements PassedService {
    private final UserRepository userRepository;
    private final UserClubRoleRepository userClubRoleRepository;

    private final StepRepository stepRepository;
    private final ApplicantRepository applicantRepository;
    private final StepPasserRepository stepPasserRepository;

    @Override
    @Transactional
    public CreatePasserResponse createPasser(CreatePasserRequest body) {
        //1.합격자 생성
        Step step = stepRepository.findById(body.stepId())
                .orElseThrow(() -> new NoSuchElementException("Step not found"));
        Applicant applicant = applicantRepository.findById(body.applicantId())
                .orElseThrow(() -> new NoSuchElementException("Applicant not found"));

        StepPasser stepPasser = StepPasser.builder()
                .step(step)
                .applicant(applicant)
                .build();

        stepPasserRepository.save(stepPasser);

        return new CreatePasserResponse(stepPasser.getCreatedAt());
    }

    @Override
    @Transactional
    public List<GetPasserResponse> getPasser(String stepId) {
        //TODO: 회장권한 확인
        List<StepPasser> stepPassers = stepPasserRepository.findAllByStepId(stepId);
        if (stepPassers.isEmpty())
            throw new NoSuchElementException("passers not found");

        //TODO: 동아리원이 조회 시에는, 개인정보를 제외한 이름만 반환하도록 변경
        List<GetPasserResponse> responses = new ArrayList<>();
        for (StepPasser stepPasser : stepPassers) {
            ApplicantDto applicantDto = stepPasser.getApplicant().toApplicantDto();
            GetPasserResponse getPasserResponse = GetPasserResponse.builder()
                    .applicantId(stepPasser.getApplicant().getId())
                    .applicantDto(applicantDto)
                    .build();

            responses.add(getPasserResponse);
        }

        return responses;
    }
}

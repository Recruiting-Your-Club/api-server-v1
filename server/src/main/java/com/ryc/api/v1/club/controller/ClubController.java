package com.ryc.api.v1.club.controller;

import com.ryc.api.v1.club.dto.request.CreateClubRequest;
import com.ryc.api.v1.club.dto.response.ClubResponse;
import com.ryc.api.v1.club.dto.response.CreateClubResponse;
import com.ryc.api.v1.club.dto.response.ClubOverviewResponse;
import com.ryc.api.v1.club.service.ClubService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/club")
@RequiredArgsConstructor
@Tag(name = "club")
public class ClubController {
    private final ClubService clubService;

    @PostMapping("/")
    public ResponseEntity<?> createClub(@Valid @RequestBody CreateClubRequest body) {
        CreateClubResponse responseDto = clubService.createClub(body);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseDto);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllClubsOverview() {
        List<ClubOverviewResponse> response = clubService.findAllClubsOverview();
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/")
    public ResponseEntity<?> getClub(@RequestParam(required = true) String clubId) {
        ClubResponse response = clubService.findClubById(clubId);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}

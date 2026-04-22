package com.turfied.turfied_backend.controller;

import com.turfied.turfied_backend.entity.Court;
import com.turfied.turfied_backend.service.CourtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/courts")
@RequiredArgsConstructor
public class CourtController {

    private final CourtService courtService;

    @PostMapping
    public ResponseEntity<Court> createCourt(
            @RequestBody Court court,
            @RequestParam Long turfId,
            @RequestParam Long ownerId
    ) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(courtService.createCourt(court, turfId, ownerId));
    }

    @GetMapping("/{courtId}")
    public ResponseEntity<Court> getCourtById(@PathVariable Long courtId) {
        return ResponseEntity.ok(courtService.getCourtById(courtId));
    }

    @GetMapping("/turf/{turfId}")
    public ResponseEntity<List<Court>> getCourtsByTurf(@PathVariable Long turfId) {
        return ResponseEntity.ok(courtService.getCourtsByTurf(turfId));
    }

    @PatchMapping("/{courtId}")
    public ResponseEntity<Court> updateCourt(
            @PathVariable Long courtId,
            @RequestBody Court court,
            @RequestParam Long ownerId
    ) {
        return ResponseEntity.ok(courtService.updateCourt(courtId, court, ownerId));
    }

    @DeleteMapping("/{courtId}")
    public ResponseEntity<Void> deleteCourt(
            @PathVariable Long courtId,
            @RequestParam Long ownerId
    ) {
        courtService.deleteCourt(courtId, ownerId);
        return ResponseEntity.noContent().build();
    }
}

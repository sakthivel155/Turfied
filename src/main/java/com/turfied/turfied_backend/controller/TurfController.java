package com.turfied.turfied_backend.controller;

import com.turfied.turfied_backend.dto.response.TurfDetailResponse;
import com.turfied.turfied_backend.entity.Turf;
import com.turfied.turfied_backend.service.TurfService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/turfs")
@RequiredArgsConstructor
public class TurfController {

    private final TurfService turfService;

    @PostMapping
    public ResponseEntity<Turf> createTurf(
            @RequestBody Turf turf,
            @RequestParam Long ownerId
    ) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(turfService.createTurf(turf, ownerId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<TurfDetailResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(turfService.getTurfDetailById(id));
    }

    @GetMapping
    public ResponseEntity<Page<Turf>> search(
            @RequestParam(required = false) String sport,
            @RequestParam(required = false) String city,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        return ResponseEntity.ok(turfService.searchTurfs(sport, city, page, size));
    }

    @GetMapping("/owner/{ownerId}")
    public ResponseEntity<?> getOwnerTurfs(@PathVariable Long ownerId) {
        return ResponseEntity.ok(turfService.getOwnerTurfs(ownerId));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Turf> updateTurf(
            @PathVariable Long id,
            @RequestBody Turf turf,
            @RequestParam Long ownerId
    ) {
        return ResponseEntity.ok(turfService.updateTurf(id, turf, ownerId));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTurf(
            @PathVariable Long id,
            @RequestParam Long ownerId
    ) {
        turfService.deleteTurf(id, ownerId);
        return ResponseEntity.noContent().build();
    }
}

package com.turfied.turfied_backend.controller;

import com.turfied.turfied_backend.entity.Slot;
import com.turfied.turfied_backend.service.SlotService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/slots")
@RequiredArgsConstructor
public class SlotController {

    private final SlotService slotService;

    @PostMapping
    public ResponseEntity<Slot> createSlot(
            @RequestBody Slot slot,
            @RequestParam Long courtId
    ) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(slotService.createSlot(slot, courtId));
    }

    @GetMapping("/turf/{turfId}")
    public ResponseEntity<List<Slot>> getByTurf(@PathVariable Long turfId) {
        return ResponseEntity.ok(slotService.getSlotsByTurf(turfId));
    }
}
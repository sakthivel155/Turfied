package com.turfied.turfied_backend.controller;

import com.turfied.turfied_backend.dto.request.BookingRequest;
import com.turfied.turfied_backend.dto.response.BookingResponse;
import com.turfied.turfied_backend.entity.Slot;
import com.turfied.turfied_backend.service.BookingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/v1/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    // Create a new booking
    @PostMapping
    public ResponseEntity<BookingResponse> createBooking(
            @Valid @RequestBody BookingRequest request
    ) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(bookingService.createBooking(request));
    }

    // Get all bookings for a user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<BookingResponse>> getUserBookings(
            @PathVariable Long userId
    ) {
        return ResponseEntity.ok(bookingService.getUserBookings(userId));
    }

    // Cancel a booking
    @PutMapping("/{bookingId}/cancel")
    public ResponseEntity<BookingResponse> cancelBooking(
            @PathVariable Long bookingId,
            @RequestParam Long userId
    ) {
        return ResponseEntity.ok(bookingService.cancelBooking(bookingId, userId));
    }

    // Get available slots for a turf on a specific date
    @GetMapping("/available-slots")
    public ResponseEntity<List<Slot>> getAvailableSlots(
            @RequestParam Long turfId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date
    ) {
        return ResponseEntity.ok(bookingService.getAvailableSlots(turfId, date));
    }
}
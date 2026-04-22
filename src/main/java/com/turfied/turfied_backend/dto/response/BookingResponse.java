package com.turfied.turfied_backend.dto.response;

import com.turfied.turfied_backend.enums.BookingStatus;
import java.time.LocalDate;
import java.time.LocalTime;

public record BookingResponse(
        Long bookingId,
        String turfName,
        String courtName,
        String location,
        String sport,
        LocalTime slotStart,
        LocalTime slotEnd,
        LocalDate bookingDate,
        BookingStatus status
) {}

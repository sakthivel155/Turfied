package com.turfied.turfied_backend.dto.request;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

public record BookingRequest(

        @NotNull(message = "userId is required")
        Long userId,

        @NotNull(message = "turfId is required")
        Long turfId,

        @NotNull(message = "courtId is required")
        Long courtId,

        @NotNull(message = "slotId is required")
        Long slotId,

        @NotNull(message = "bookingDate is required")
        @Future(message = "bookingDate must be a future date")
        LocalDate bookingDate
) {}

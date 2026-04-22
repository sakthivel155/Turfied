package com.turfied.turfied_backend.dto.response;

import java.time.LocalTime;

public record SlotDetailResponse(
        Long id,
        LocalTime startTime,
        LocalTime endTime
) {}

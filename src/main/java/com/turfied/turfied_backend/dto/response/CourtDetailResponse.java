package com.turfied.turfied_backend.dto.response;

import java.math.BigDecimal;
import java.util.List;

public record CourtDetailResponse(
        Long id,
        String name,
        String courtType,
        BigDecimal pricePerSlot,
        Boolean isActive,
        List<SlotDetailResponse> slots
) {}

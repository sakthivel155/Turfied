package com.turfied.turfied_backend.dto.response;

import java.util.List;

public record TurfDetailResponse(
        Long id,
        String name,
        String area,
        String city,
        String address,
        String about,
        String contactNo,
        String amenities,
        String sports,
        String imageUrl,
        String distance,
        String avgRating,
        String noOfRating,
        String openingHour,
        String mapUrl,
        List<CourtDetailResponse> courts
) {}

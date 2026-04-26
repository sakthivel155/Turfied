package com.turfied.turfied_backend.dto.response;

public record UserResponse(
        Long id,
        String name,
        String email,
        String phone,
        String role,
        Boolean isVerified,
        Boolean isActive
) {
}

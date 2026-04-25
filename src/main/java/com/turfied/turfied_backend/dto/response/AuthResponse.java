package com.turfied.turfied_backend.dto.response;

import com.turfied.turfied_backend.enums.Role;

public record AuthResponse(
        String token,
        String tokenType,
        Long userId,
        String name,
        String email,
        Role role
) {
}

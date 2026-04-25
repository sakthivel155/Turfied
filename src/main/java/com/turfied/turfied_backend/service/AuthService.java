package com.turfied.turfied_backend.service;

import com.turfied.turfied_backend.dto.request.LoginRequest;
import com.turfied.turfied_backend.dto.request.RegisterRequest;
import com.turfied.turfied_backend.dto.response.AuthResponse;
import com.turfied.turfied_backend.entity.User;
import com.turfied.turfied_backend.enums.Role;
import com.turfied.turfied_backend.security.AuthenticatedUser;
import com.turfied.turfied_backend.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthResponse register(RegisterRequest request) {
        User user = User.builder()
                .name(request.name())
                .email(request.email())
                .password(request.password())
                .phone(request.phone())
                .role(Role.USER)
                .build();

        User saved = userService.registerUser(user);
        String token = jwtService.generateToken(new AuthenticatedUser(saved));

        return toResponse(saved, token);
    }

    public AuthResponse login(LoginRequest request) {
        var authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.email(), request.password())
        );

        AuthenticatedUser principal = (AuthenticatedUser) authentication.getPrincipal();
        String token = jwtService.generateToken(principal);

        return toResponse(principal.getUser(), token);
    }

    private AuthResponse toResponse(User user, String token) {
        return new AuthResponse(
                token,
                "Bearer",
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole()
        );
    }
}

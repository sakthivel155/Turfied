package com.turfied.turfied_backend.service;

import com.turfied.turfied_backend.entity.User;
import com.turfied.turfied_backend.enums.Role;
import com.turfied.turfied_backend.exception.ResourceNotFoundException;
import com.turfied.turfied_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered: " + user.getEmail());
        }
        user.setRole(user.getRole() != null ? user.getRole() : Role.USER);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        //Set by default (Need to implement later) ref: README.md
        user.setIsActive(true);
        user.setIsVerified(false);

        User saved = userRepository.save(user);
        log.info("User registered: id={}, email={}", saved.getId(), saved.getEmail());
        return saved;
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + id));
    }

    public User updateUser(Long id, User user) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Update only if value is present
        if (user.getName() != null && !user.getName().isBlank()) {
            existingUser.setName(user.getName());
        }

        if (user.getEmail() != null && !user.getEmail().isBlank()) {
            existingUser.setEmail(user.getEmail());
        }

        if (user.getPhone() != null && !user.getPhone().isBlank()) {
            existingUser.setPhone(user.getPhone());
        }

        if (user.getPassword() != null && !user.getPassword().isBlank()) {
            existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
        }


        return userRepository.save(existingUser);
    }

    public void deleteUserById(Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + id));

        userRepository.delete(user);

        log.info("User deleted: id={}, email={}", user.getId(), user.getEmail());

    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}

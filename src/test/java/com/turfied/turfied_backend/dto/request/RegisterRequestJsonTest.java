package com.turfied.turfied_backend.dto.request;

import com.fasterxml.jackson.databind.json.JsonMapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;

class RegisterRequestJsonTest {

    private final ObjectMapper objectMapper = JsonMapper.builder().build();

    @Test
    void rejectsUnknownRoleField() {
        String payload = """
                {
                  "name": "Player One",
                  "email": "player1@example.com",
                  "password": "player123",
                  "phone": "9999999999",
                  "role": "ADMIN"
                }
                """;

        assertThrows(UnrecognizedPropertyException.class, () ->
                objectMapper.readValue(payload, RegisterRequest.class)
        );
    }
}

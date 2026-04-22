package com.turfied.turfied_backend.exception;

public class UnauthorizedException extends RuntimeException {
    public UnauthorizedException(String message) {
       super(message);
    }
}
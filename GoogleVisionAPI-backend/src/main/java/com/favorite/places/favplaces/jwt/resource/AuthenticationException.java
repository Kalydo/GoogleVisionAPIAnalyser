package com.favorite.places.favplaces.jwt.resource;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins="http://localhost:3000")
public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}


package com.favorite.places.favplaces.jwt.resource;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.Serializable;

@CrossOrigin(origins="http://localhost:3000")
public class JwtTokenResponse implements Serializable {

  private static final long serialVersionUID = 8317676219297719109L;

  private final String token;

    public JwtTokenResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return this.token;
    }
}
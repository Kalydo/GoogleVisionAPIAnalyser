package com.favorite.places.favplaces.controller;

import com.favorite.places.favplaces.model.User;
import com.favorite.places.favplaces.repository.FavplacesJpaRepository;
import com.favorite.places.favplaces.service.FaplaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FavplacesRESTController {

    @Autowired
    FaplaceService favplacesService;

    @Autowired
    FavplacesJpaRepository favplacesJpaRepository;

    @GetMapping("/jpa/users/{username}/favplaces")
    public String getAllPlaces(@PathVariable String username){
        return favplacesService.findByUsername(username);
    }

    @GetMapping("/jpa/users/{username}/favplaces/{id}")
    public User getPlaces(@PathVariable String username, @PathVariable long id){
        return favplacesService.findById(id);
    }

    @DeleteMapping("/users/{username}/favplaces/{id}")
    public ResponseEntity<User> deletePlaces(@PathVariable String username, @PathVariable long id){
        favplacesService.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    @PutMapping("/jpa/users/{username}/favplaces/{id}")
    public ResponseEntity<User> updatePlaces(@PathVariable String username, @PathVariable long id, @RequestBody User user){
        user.setUsername(username);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    /*@PostMapping("/jpa/users/{username}/favplaces")
    public ResponseEntity<User> createPlaces(@PathVariable String username, @RequestBody User user){
        user.setUsername(username);

        User createdUser = favplacesService.save(user);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdUser.getId()).toUri();

        return new ResponseEntity.created(uri).build();
    }*/
}

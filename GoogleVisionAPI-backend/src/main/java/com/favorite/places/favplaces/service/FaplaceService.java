package com.favorite.places.favplaces.service;



import com.favorite.places.favplaces.model.User;

import java.util.ArrayList;
import java.util.List;

@org.springframework.stereotype.Service
public class FaplaceService {

    private static List<User> users = new ArrayList();



    public List<User> findAll(){
        return users;
    }

    public User deleteById(long id){
        User location = findById(id);
        if (location == null){
            return null;
        }
        if (users.remove(location)){
            return location;
        }
        return null;
    }

    public User findById(long id){
        for(User location: users){
            if (location.getId() == id){
                return location;
            }
        }
        return null;
    }
    public User save(User location){
        if(location.getId()==-1){
            users.add(location);
        }
        else {
            deleteById(location.getId());
            users.add(location);
        }
        return location;
    }

    public String findByUsername(String username){
        return username;
    }
}

package com.favorite.places.favplaces.repository;

import com.favorite.places.favplaces.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FavplacesJpaRepository extends JpaRepository<User, Long> {
}

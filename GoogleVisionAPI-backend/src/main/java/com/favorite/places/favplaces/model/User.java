package com.favorite.places.favplaces.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String lastname;
    private String firstname;
    private String email;
    private String street;
    private String streetnum;
    private String city;
    private Integer postcode;
    private Integer phone;

    public User(Long id, String username, String lastname, String firstname, String email, String street, String streetnum, String city, Integer postcode, Integer phone) {
        this.id = id;
        this.username = username;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.street = street;
        this.streetnum = streetnum;
        this.city = city;
        this.postcode = postcode;
        this.phone = phone;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getLastname() {
        return lastname;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getEmail() {
        return email;
    }

    public String getStreet() {
        return street;
    }

    public String getStreetnum() {
        return streetnum;
    }

    public String getCity() {
        return city;
    }

    public Integer getPostcode() {
        return postcode;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public void setStreetnum(String streetnum) {
        this.streetnum = streetnum;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setPostcode(Integer postcode) {
        this.postcode = postcode;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", lastname='" + lastname + '\'' +
                ", firstname='" + firstname + '\'' +
                ", email='" + email + '\'' +
                ", street='" + street + '\'' +
                ", streetnum='" + streetnum + '\'' +
                ", city='" + city + '\'' +
                ", postcode=" + postcode +
                ", phone=" + phone +
                '}';
    }


}

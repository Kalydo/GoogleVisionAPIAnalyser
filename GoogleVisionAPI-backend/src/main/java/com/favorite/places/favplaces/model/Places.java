package com.favorite.places.favplaces.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.File;
import java.util.Objects;

@Entity
public class Places {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String description;
    private File picture;

    public Places(Long id, String title, String description, File picture) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.picture = picture;
    }

    public File getPicture() {
        return picture;
    }

    public void setPicture(File picture) {
        this.picture = picture;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return "Places{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", picture='" + picture + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Places)) return false;
        Places places = (Places) o;
        return id.equals(places.id) &&
                Objects.equals(title, places.title) &&
                Objects.equals(description, places.description) &&
                Objects.equals(picture, places.picture);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, description, picture);
    }
}

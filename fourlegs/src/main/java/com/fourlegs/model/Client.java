package com.fourlegs.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long clientID;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;
    private String address;

    @ManyToMany
    @JoinTable(
            name = "PetOwners",
            joinColumns = @JoinColumn(name = "clientID"),
            inverseJoinColumns = @JoinColumn(name = "petID")
    )
    @JsonManagedReference
    private List<Pet> pets = new ArrayList<>();

}

package com.fourlegs.model;

import jakarta.persistence.*;
import lombok.Data;

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

    @ManyToMany(mappedBy = "owners")
    private Set<Pet> pets;

    // getters and setters
}

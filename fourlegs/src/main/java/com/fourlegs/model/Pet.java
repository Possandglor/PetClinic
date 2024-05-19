package com.fourlegs.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long petID;
    private String name;
    private String species;
    private String breed;
    private Date birthDate;
    private String gender;

    @ManyToMany
    @JoinTable(
            name = "PetOwners",
            joinColumns = @JoinColumn(name = "petID"),
            inverseJoinColumns = @JoinColumn(name = "clientID")
    )
    private Set<Client> owners;

    @OneToMany(mappedBy = "pet")
    private List<Visit> visits;

    // getters and setters
}

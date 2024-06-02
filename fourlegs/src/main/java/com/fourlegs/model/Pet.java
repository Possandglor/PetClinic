package com.fourlegs.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Data;

import java.time.ZonedDateTime;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Data
@JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class, property="@petID")
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long petID;
    private String name;
    private String species;
    private String breed;
    private ZonedDateTime birthDate;
    private String gender;


    @ManyToMany
    @JoinTable(
            name = "client_pet",
            joinColumns = @JoinColumn(name = "petID"),
            inverseJoinColumns = @JoinColumn(name = "clientID")
    )
    private List<Client> owners;

    @OneToMany(mappedBy = "pet")
    @JsonBackReference(value = "visits")
    private List<Visit> visits;
}

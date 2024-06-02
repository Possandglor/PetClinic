package com.fourlegs.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.time.ZonedDateTime;
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
    private ZonedDateTime birthDate;
    private String gender;


    @ManyToMany(mappedBy = "pets")
    @JsonBackReference
    private List<Client> owners;

    @OneToMany(mappedBy = "pet")
    @JsonBackReference
    private List<Visit> visits;
}

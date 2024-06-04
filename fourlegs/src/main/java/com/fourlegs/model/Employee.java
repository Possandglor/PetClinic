package com.fourlegs.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeID;
    private String name;
    private String specialization;
    private String phoneNumber;
    private String email;

    @OneToMany(mappedBy = "employee")
    @JsonBackReference
    private List<Visit> visits;

    @OneToMany(mappedBy = "employee")
    @JsonBackReference
    private List<Shift> shifts;

    // getters and setters
}

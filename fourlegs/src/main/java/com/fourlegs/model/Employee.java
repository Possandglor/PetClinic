package com.fourlegs.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeID;
    private String firstName;
    private String lastName;
    private String specialization;
    private String phoneNumber;
    private String email;

    @OneToMany(mappedBy = "employee")
    private List<Visit> visits;

    @OneToMany(mappedBy = "employee")
    private List<Shift> shifts;

    // getters and setters
}

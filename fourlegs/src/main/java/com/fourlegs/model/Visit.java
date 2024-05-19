package com.fourlegs.model;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Data
public class Visit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long visitID;
    private Date visitDate;
    private String reason;
    private String notes;

    @ManyToOne
    @JoinColumn(name = "petID")
    private Pet pet;

    @ManyToOne
    @JoinColumn(name = "employeeID")
    private Employee employee;

    @OneToMany(mappedBy = "visit")
    private List<Prescription> prescriptions;

    @OneToMany(mappedBy = "visit")
    private List<File> files;

    // getters and setters
}

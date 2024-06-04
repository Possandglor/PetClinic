package com.fourlegs.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.time.ZonedDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Visit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long visitID;
    private ZonedDateTime startDate;
    private ZonedDateTime endDate;
    private String reason;
    private String notes;

    @ManyToOne
    @JoinColumn(name = "petID")
    @JsonIdentityReference(alwaysAsId = true)
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

package com.fourlegs.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prescriptionID;
    private String medication;
    private String dosage;
    private String duration;
    private String instructions;

    @ManyToOne
    @JoinColumn(name = "visitID")
    private Visit visit;

    // getters and setters
}

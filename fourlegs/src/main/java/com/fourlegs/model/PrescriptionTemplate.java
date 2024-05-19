package com.fourlegs.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class PrescriptionTemplate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long templateID;
    private String templateName;
    private String medication;
    private String dosage;
    private String duration;
    private String instructions;

    // getters and setters
}

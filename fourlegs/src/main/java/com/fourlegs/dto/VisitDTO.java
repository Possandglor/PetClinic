package com.fourlegs.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fourlegs.model.Employee;
import com.fourlegs.model.File;
import com.fourlegs.model.Pet;
import com.fourlegs.model.Prescription;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.time.ZonedDateTime;
import java.util.List;

public class VisitDTO {
    private Long visitID;
    private ZonedDateTime startDate;
    private ZonedDateTime endDate;
    private String reason;
    private String notes;

    private Pet pet;

    private Employee employee;

    private List<Prescription> prescriptions;

    private List<File> files;
}

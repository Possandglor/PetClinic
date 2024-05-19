package com.fourlegs.model;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Time;
import java.util.Date;

@Entity
@Data
public class Shift {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shiftID;
    private Date shiftDate;
    private Time startTime;
    private Time endTime;

    @ManyToOne
    @JoinColumn(name = "employeeID")
    private Employee employee;

    // getters and setters
}

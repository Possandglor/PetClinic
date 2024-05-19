package com.fourlegs.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fileID;
    private Date uploadDate;
    private String fileName;
    private String fileType;
    private String filePath;

    @ManyToOne
    @JoinColumn(name = "visitID")
    private Visit visit;

    @ManyToOne
    @JoinColumn(name = "petID")
    private Pet pet;

    // getters and setters
}

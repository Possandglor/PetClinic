package com.fourlegs.dto;

import lombok.Data;

import java.time.ZonedDateTime;

@Data
public class PetDTO {
    private Long petID;
    private String name;
    private String species;
    private String breed;
    private ZonedDateTime birthDate;
    private String gender;
}

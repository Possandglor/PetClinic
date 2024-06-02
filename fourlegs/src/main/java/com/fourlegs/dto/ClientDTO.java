package com.fourlegs.dto;

import lombok.Data;

@Data
public class ClientDTO {

    private Long clientID;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;
    private String address;
}

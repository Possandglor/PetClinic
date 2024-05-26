package com.fourlegs.controller;

import com.fourlegs.model.Client;
import com.fourlegs.model.Pet;
import com.fourlegs.service.ClientService;
import com.fourlegs.service.PetService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/apiTest")
@RequiredArgsConstructor
public class ApiController {
    int i =0;

    @GetMapping("/test")
    @CrossOrigin("*")
    public ResponseEntity<String> test(){
        return ResponseEntity.ok("test"+i++);
    }

    private final ClientService clientService;
    private final PetService petService;

    @PostConstruct
    public void func(){
        Client client1 = new Client();
        client1.setAddress("123 Main St");
        client1.setFirstName("John");
        client1.setLastName("Doe");
        client1.setPhoneNumber("1234567890");
        client1.setEmail("john.doe@example.com");

        Client client2 = new Client();
        client2.setAddress("456 Oak St");
        client2.setFirstName("Jane");
        client2.setLastName("Smith");
        client2.setPhoneNumber("0987654321");
        client2.setEmail("jane.smith@example.com");

        Pet pet = new Pet();
        pet.setName("Buddy");
        pet.setSpecies("Dog");
        pet.setBreed("Labrador");
        pet.setBirthDate(new Date());
        pet.setGender("Male");
        petService.savePet(pet);
        clientService.saveClient(client1);
        clientService.saveClient(client2);
    }
}

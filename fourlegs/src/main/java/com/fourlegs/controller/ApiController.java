package com.fourlegs.controller;

import com.fourlegs.model.Client;
import com.fourlegs.service.ClientService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {
    int i =0;
    @Autowired
    public ApiController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping("/test")
    @CrossOrigin("*")
    public ResponseEntity<String> test(){
        return ResponseEntity.ok("test"+i++);
    }

    private final ClientService clientService;

    @GetMapping("/clients")
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

//    @PostConstruct
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
        clientService.createClient(client1);
        clientService.createClient(client2);
    }
}

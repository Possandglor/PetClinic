package com.fourlegs.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequiredArgsConstructor
public class ViewController {
    private final RestTemplate restTemplate;
    @GetMapping("/")
    public ResponseEntity<String> index(){
        return ResponseEntity.ok(restTemplate.getForObject("http://localhost:3000",String.class));
    }
}

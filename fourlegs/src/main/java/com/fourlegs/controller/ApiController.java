package com.fourlegs.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ApiController {
    int i =0;
    @GetMapping("/test")
    @CrossOrigin("*")
    public ResponseEntity<String> test(){
        return ResponseEntity.ok("test"+i++);
    }
}

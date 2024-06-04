package com.fourlegs.controller;

import com.fourlegs.dto.VisitDTO;
import com.fourlegs.mapper.VisitMapper;
import com.fourlegs.model.Visit;
import com.fourlegs.service.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/visits")
public class VisitController {

    @Autowired
    private VisitService visitService;

    @GetMapping
    public List<Visit> getAllVisits() {

        return visitService.getAllVisits();
    }

    @GetMapping("/{visitID}")
    public Optional<Visit> getVisitById(@PathVariable Long visitID) {
        return visitService.getVisitById(visitID);
    }

    @PostMapping
    public Visit createVisit(@RequestBody Visit visit) {
        return visitService.saveVisit(visit);
    }

    @PutMapping("/{visitID}")
    public Visit updateVisit(@PathVariable Long visitID, @RequestBody Visit visit) {
        visit.setVisitID(visitID);
        return visitService.saveVisit(visit);
    }

    @DeleteMapping("/{visitID}")
    public void deleteVisit(@PathVariable Long visitID) {
        visitService.deleteVisit(visitID);
    }
}
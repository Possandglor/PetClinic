package com.fourlegs.controller;
import com.fourlegs.model.Prescription;
import com.fourlegs.service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/prescriptions")
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @GetMapping
    public List<Prescription> getAllPrescriptions() {
        return prescriptionService.getAllPrescriptions();
    }

    @GetMapping("/{prescriptionID}")
    public Optional<Prescription> getPrescriptionById(@PathVariable Long prescriptionID) {
        return prescriptionService.getPrescriptionById(prescriptionID);
    }

    @PostMapping
    public Prescription createPrescription(@RequestBody Prescription prescription) {
        return prescriptionService.savePrescription(prescription);
    }

    @PutMapping("/{prescriptionID}")
    public Prescription updatePrescription(@PathVariable Long prescriptionID, @RequestBody Prescription prescription) {
        prescription.setPrescriptionID(prescriptionID);
        return prescriptionService.savePrescription(prescription);
    }

    @DeleteMapping("/{prescriptionID}")
    public void deletePrescription(@PathVariable Long prescriptionID) {
        prescriptionService.deletePrescription(prescriptionID);
    }
}

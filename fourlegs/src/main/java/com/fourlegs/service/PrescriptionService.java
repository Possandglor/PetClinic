package com.fourlegs.service;

import com.fourlegs.model.Prescription;
import com.fourlegs.repository.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrescriptionService {

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    public List<Prescription> getAllPrescriptions() {
        return prescriptionRepository.findAll();
    }

    public Optional<Prescription> getPrescriptionById(Long prescriptionID) {
        return prescriptionRepository.findById(prescriptionID);
    }

    public Prescription savePrescription(Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    public void deletePrescription(Long prescriptionID) {
        prescriptionRepository.deleteById(prescriptionID);
    }
}

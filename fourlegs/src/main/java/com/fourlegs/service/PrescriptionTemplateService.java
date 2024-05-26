package com.fourlegs.service;

import com.fourlegs.model.PrescriptionTemplate;
import com.fourlegs.repository.PrescriptionTemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrescriptionTemplateService {

    @Autowired
    private PrescriptionTemplateRepository prescriptionTemplateRepository;

    public List<PrescriptionTemplate> getAllPrescriptionTemplates() {
        return prescriptionTemplateRepository.findAll();
    }

    public Optional<PrescriptionTemplate> getPrescriptionTemplateById(Long templateID) {
        return prescriptionTemplateRepository.findById(templateID);
    }

    public PrescriptionTemplate savePrescriptionTemplate(PrescriptionTemplate prescriptionTemplate) {
        return prescriptionTemplateRepository.save(prescriptionTemplate);
    }

    public void deletePrescriptionTemplate(Long templateID) {
        prescriptionTemplateRepository.deleteById(templateID);
    }
}

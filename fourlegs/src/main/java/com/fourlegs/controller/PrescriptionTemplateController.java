package com.fourlegs.controller;
import com.fourlegs.model.PrescriptionTemplate;
import com.fourlegs.service.PrescriptionTemplateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/prescription-templates")
public class PrescriptionTemplateController {

    @Autowired
    private PrescriptionTemplateService prescriptionTemplateService;

    @GetMapping
    public List<PrescriptionTemplate> getAllPrescriptionTemplates() {
        return prescriptionTemplateService.getAllPrescriptionTemplates();
    }

    @GetMapping("/{templateID}")
    public Optional<PrescriptionTemplate> getPrescriptionTemplateById(@PathVariable Long templateID) {
        return prescriptionTemplateService.getPrescriptionTemplateById(templateID);
    }

    @PostMapping
    public PrescriptionTemplate createPrescriptionTemplate(@RequestBody PrescriptionTemplate prescriptionTemplate) {
        return prescriptionTemplateService.savePrescriptionTemplate(prescriptionTemplate);
    }

    @PutMapping("/{templateID}")
    public PrescriptionTemplate updatePrescriptionTemplate(@PathVariable Long templateID, @RequestBody PrescriptionTemplate prescriptionTemplate) {
        prescriptionTemplate.setTemplateID(templateID);
        return prescriptionTemplateService.savePrescriptionTemplate(prescriptionTemplate);
    }

    @DeleteMapping("/{templateID}")
    public void deletePrescriptionTemplate(@PathVariable Long templateID) {
        prescriptionTemplateService.deletePrescriptionTemplate(templateID);
    }
}
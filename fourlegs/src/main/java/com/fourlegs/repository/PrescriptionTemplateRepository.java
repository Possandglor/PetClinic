package com.fourlegs.repository;

import com.fourlegs.model.PrescriptionTemplate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrescriptionTemplateRepository extends JpaRepository<PrescriptionTemplate, Long> {
}

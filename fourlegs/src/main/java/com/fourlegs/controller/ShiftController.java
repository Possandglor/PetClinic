package com.fourlegs.controller;
import com.fourlegs.model.Shift;
import com.fourlegs.service.ShiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/shifts")
public class ShiftController {

    @Autowired
    private ShiftService shiftService;

    @GetMapping
    public List<Shift> getAllShifts() {
        return shiftService.getAllShifts();
    }

    @GetMapping("/{shiftID}")
    public Optional<Shift> getShiftById(@PathVariable Long shiftID) {
        return shiftService.getShiftById(shiftID);
    }

    @PostMapping
    public Shift createShift(@RequestBody Shift shift) {
        return shiftService.saveShift(shift);
    }

    @PutMapping("/{shiftID}")
    public Shift updateShift(@PathVariable Long shiftID, @RequestBody Shift shift) {
        shift.setShiftID(shiftID);
        return shiftService.saveShift(shift);
    }

    @DeleteMapping("/{shiftID}")
    public void deleteShift(@PathVariable Long shiftID) {
        shiftService.deleteShift(shiftID);
    }
}

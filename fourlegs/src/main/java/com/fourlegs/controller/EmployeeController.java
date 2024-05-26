package com.fourlegs.controller;
import com.fourlegs.model.Employee;
import com.fourlegs.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/{employeeID}")
    public Optional<Employee> getEmployeeById(@PathVariable Long employeeID) {
        return employeeService.getEmployeeById(employeeID);
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    @PutMapping("/{employeeID}")
    public Employee updateEmployee(@PathVariable Long employeeID, @RequestBody Employee employee) {
        employee.setEmployeeID(employeeID);
        return employeeService.saveEmployee(employee);
    }

    @DeleteMapping("/{employeeID}")
    public void deleteEmployee(@PathVariable Long employeeID) {
        employeeService.deleteEmployee(employeeID);
    }
}
package com.fourlegs.controller;

import com.fourlegs.model.*;
import com.fourlegs.repository.*;
import com.fourlegs.service.ClientService;
import com.fourlegs.service.PetService;
import com.fourlegs.service.ShiftService;
import com.fourlegs.service.VisitService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@RestController
@RequestMapping("/apiTest")
@RequiredArgsConstructor
public class ApiController {
    int i = 0;

    @GetMapping("/test")
    @CrossOrigin("*")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("test" + i++);
    }

    private final ClientService clientService;
    private final PetService petService;
    private final VisitService visitService;
    private final ShiftService shiftService;
    private final PetRepository petRepository;
    private final ShiftRepository shiftRepository;
    private final VisitRepository visitRepository;
    private final EmployeeRepository employeeRepository;
    private final ClientRepository clientRepository;


    @PostConstruct
    public void func() {

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'Z'");
        List<Client> clients = Arrays.asList(
                createClient("Адрес 1", "Клиент 1", "Фамилия 1", "тел 1", "почта 1"),
                createClient("Адрес 2", "Клиент 2", "Фамилия 2", "тел 2", "почта 2"),
                createClient("Адрес 3", "Клиент 3", "Фамилия 3", "тел 3", "почта 3")
        );

        clientRepository.saveAll(clients);


        List<Employee> employeeList = Arrays.asList(
                createEmployee("Имя 1","Фамилия 1","Врач","телефон","почта"),
                createEmployee("Имя 2","Фамилия 2","Админ","телефон 2","почта 2"),
                createEmployee("Имя 3","Фамилия 3","Ассистент","телефон 3","почта 3")
        );

        List<Employee> employees = employeeRepository.saveAll(employeeList);


        // Создание питомцев
        List<Pet> petsArray = Arrays.asList(
                createPet("Жужа","Собака","Ретривер","М",ZonedDateTime.parse("2024-06-03T08:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev")))),
                createPet("Люся","Кошка","порода 1","Ж",ZonedDateTime.parse("2024-06-03T08:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev")))),
                createPet("Мурка","Кошка","порода 2","Ж",ZonedDateTime.parse("2024-06-03T08:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))))
        );
        List<Pet> pets = petRepository.saveAll(petsArray);

        // Создание смен
        List<Shift> shifts = Arrays.asList(
                createShift(ZonedDateTime.parse("2024-06-03T08:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), employees.get(0)),
                createShift(ZonedDateTime.parse("2024-06-03T08:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), employees.get(1)),
                createShift(ZonedDateTime.parse("2024-06-04T08:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), employees.get(0)),
                createShift(ZonedDateTime.parse("2024-06-04T08:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), employees.get(1)),
                createShift(ZonedDateTime.parse("2024-06-05T08:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), employees.get(0)),
                createShift(ZonedDateTime.parse("2024-06-05T08:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), employees.get(1))
        );

        shiftRepository.saveAll(shifts);

        // Создание визитов
        List<Visit> visits = Arrays.asList(
                createVisit(ZonedDateTime.parse("2024-06-03T08:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-03T09:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Проверка", "Нет проблем", pets.get(0), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-03T08:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-03T09:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Проверка", "Нет проблем", pets.get(0), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-02T09:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-02T09:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Вакцинация", "Плановая вакцинация", pets.get(1), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-04T08:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-04T08:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Чистка зубов", "Плановая чистка", pets.get(0), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-04T15:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-04T15:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Операция", "Небольшая операция", pets.get(1), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-03T16:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-03T17:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Проверка", "Первое посещение", pets.get(2), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-05T08:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-05T09:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Чистка зубов", "Плановая чистка", pets.get(0), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-05T08:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-05T09:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Чистка зубов", "Плановая чистка", pets.get(1), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-05T09:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-05T09:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Чистка зубов", "Плановая чистка", pets.get(2), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-05T10:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-05T10:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Чистка зубов", "Плановая чистка", pets.get(0), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-05T11:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-05T11:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Чистка зубов", "Плановая чистка", pets.get(1), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-05T12:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-05T12:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Чистка зубов", "Плановая чистка", pets.get(2), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-05T13:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-05T13:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Чистка зубов", "Плановая чистка", pets.get(0), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-05T15:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-05T15:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Чистка зубов", "Плановая чистка", pets.get(1), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-05T16:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-05T16:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Чистка зубов", "Плановая чистка", pets.get(2), employees.get(0)),
                createVisit(ZonedDateTime.parse("2024-06-05T17:00:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))), ZonedDateTime.parse("2024-06-05T17:30:00Z", dtf.withZone(ZoneId.of("Europe/Kiev"))),"Чистка зубов", "Плановая чистка", pets.get(0), employees.get(0))
        );

        visitRepository.saveAll(visits);
        petRepository.saveAll(pets);
    }

    private static Employee createEmployee(String firstName, String lastName, String specialization, String phone, String mail) {
        Employee employee1 = new Employee();
        employee1.setFirstName(firstName);
        employee1.setLastName(lastName);
        employee1.setSpecialization(specialization);
        employee1.setPhoneNumber(phone);
        employee1.setEmail(mail);
        return employee1;
    }

    private Shift createShift(ZonedDateTime date, Employee employee) {
        Shift shift = new Shift();
        shift.setShiftDate(date);
        shift.setEmployee(employee);
        return shift;
    }

    private Visit createVisit(ZonedDateTime startDate, ZonedDateTime endDate, String reason, String notes, Pet pet, Employee employee) {
        Visit visit = new Visit();
        visit.setStartDate(startDate);
        visit.setEndDate(endDate);
        visit.setReason(reason);
        visit.setNotes(notes);
        visit.setPet(pet);
        visit.setEmployee(employee);
        return visit;
    }

    private Client createClient(String addr, String firstName, String lastName, String phone, String email) {
        Client client = new Client();
        client.setAddress(addr);
        client.setFirstName(firstName);
        client.setLastName(lastName);
        client.setPhoneNumber(phone);
        client.setEmail(email);
        return client;
    }

    private Pet createPet(String name, String comment, String breed, String gender, ZonedDateTime dateTime) {
        Pet pet = new Pet();
        pet.setName(name);
        pet.setSpecies(comment);
        pet.setBreed(breed);
        pet.setBirthDate(dateTime);
        pet.setGender(gender);
        return pet;
    }
}

package com.fourlegs.controller;
import com.fourlegs.model.Client;
import com.fourlegs.model.Pet;
import com.fourlegs.service.ClientService;
import com.fourlegs.service.PetService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ExpressionException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pets")
@RequiredArgsConstructor
public class PetController {

    private final PetService petService;
    private final ClientService clientService;
    @GetMapping
    public List<Pet> getAllPets() {
        return petService.getAllPets();
    }

    @GetMapping("/{petID}")
    public Optional<Pet> getPetById(@PathVariable Long petID) {
        return petService.getPetById(petID);
    }

    @PostMapping
    public Pet createPet(@RequestBody Pet pet) {
        return petService.savePet(pet);
    }

    @PutMapping("/{petID}")
    public Pet updatePet(@PathVariable Long petID, @RequestBody Pet pet) {
        pet.setPetID(petID);
        return petService.savePet(pet);
    }

    @DeleteMapping("/{petID}")
    public ResponseEntity<Object> deletePet(@PathVariable Long petID) {
        Pet pet = petService.getPetById(petID)
                .orElseThrow(() -> new ExpressionException("Pet not found"));

        // Remove the pet from all clients
        for (Client client : pet.getOwners()) {
            client.getPets().remove(pet);
            clientService.saveClient(client);
        }

        petService.deletePet(petID);
        return ResponseEntity.noContent().build();
    }
}

package com.fourlegs.controller;

import com.fourlegs.dto.ClientDTO;
import com.fourlegs.dto.PetDTO;
import com.fourlegs.mapper.ClientMapper;
import com.fourlegs.mapper.PetMapper;
import com.fourlegs.model.Client;
import com.fourlegs.model.Pet;
import com.fourlegs.service.ClientService;
import com.fourlegs.service.PetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/clients")
@RequiredArgsConstructor
public class ClientController {
    private final ClientService clientService;
    private final PetService petService;

    @GetMapping
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }


    @GetMapping("/{clientID}")
    public Optional<Client> getClientById(@PathVariable Long clientID) {
        return clientService.getClientById(clientID);
    }

    @PostMapping
    public Client saveClient(@RequestBody ClientDTO client) {
        return clientService.saveClient(ClientMapper.mapClientDtoToClient(client));
    }

    @PutMapping("/{clientID}")
    public Client updateClient(@PathVariable Long clientID, @RequestBody ClientDTO client) {
        client.setClientID(clientID);
        return clientService.saveClient(ClientMapper.mapClientDtoToClient(client));
    }

    @DeleteMapping("/{clientID}")
    public ResponseEntity<String> deleteClient(@PathVariable Long clientID) {
        clientService.deleteClient(clientID);
        return ResponseEntity.ok("ok");
    }

    @PostMapping("/{clientId}/pets")
    public ResponseEntity<Client> addNewPetToClient(@PathVariable Long clientId, @RequestBody PetDTO pet) {
        Optional<Client> clientOpt = clientService.getClientById(clientId);
        if (clientOpt.isPresent()) {
            Client client = clientOpt.get();
            petService.savePet(PetMapper.mapPetDtoToPet(pet));
            client.getPets().add(PetMapper.mapPetDtoToPet(pet));
            Client test = clientService.saveClient(client);
            return ResponseEntity.ok(client);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{clientId}/pets/{petID}")
    public ResponseEntity<Client> addPetToClient(@PathVariable Long clientId, @PathVariable Long petID) {
        Optional<Client> clientOpt = clientService.getClientById(clientId);
        Optional<Pet> petOpt = petService.getPetById(petID);
        if (clientOpt.isPresent() && petOpt.isPresent()) {
            Client client = clientOpt.get();
            Pet pet = petOpt.get();
            client.getPets().add(pet);
            Client test = clientService.saveClient(client);
            pet.getOwners().add(client);
            petService.savePet(pet);
            return ResponseEntity.ok(client);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{clientId}/pets/{petID}")
    public ResponseEntity<Optional<Client>> deletePetFromClient(@PathVariable Long clientId, @PathVariable Long petID) {

            clientService.deletePetOwner(clientId,petID);
            return ResponseEntity.ok(clientService.getClientById(clientId));
    }
}

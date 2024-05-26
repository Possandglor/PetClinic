package com.fourlegs.service;

import com.fourlegs.model.Client;
import com.fourlegs.model.Pet;
import com.fourlegs.repository.ClientRepository;
import com.fourlegs.repository.PetRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClientService  {

    private final ClientRepository clientRepository;
    private final PetRepository petRepository;

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Optional<Client> getClientById(Long clientID) {
        return clientRepository.findById(clientID);
    }

    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    public void deleteClient(Long clientID) {
        clientRepository.deleteById(clientID);
    }

    public void deletePetOwner(Long clientId,Long petId){
        Client client = clientRepository.findById(clientId)
                .orElseThrow(() -> new ExpressionException("Client not found"));
        Pet pet = petRepository.findById(petId)
                .orElseThrow(() -> new ExpressionException("Pet not found"));

        client.getPets().remove(pet);
        pet.getOwners().remove(client);

        clientRepository.save(client);
        petRepository.save(pet);
    }
}

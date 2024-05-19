package com.fourlegs.service;

import com.fourlegs.model.Client;
import com.fourlegs.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService  {
    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public void createClient(Client client){
        clientRepository.save(client);
    }
}

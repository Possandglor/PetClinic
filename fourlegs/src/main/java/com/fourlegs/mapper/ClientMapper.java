package com.fourlegs.mapper;

import com.fourlegs.dto.ClientDTO;
import com.fourlegs.model.Client;
import org.modelmapper.ModelMapper;

public class ClientMapper {
    private static final ModelMapper mapper = new ModelMapper();
    public static Client mapClientDtoToClient(ClientDTO clientDTO) {
        return mapper.map(clientDTO, Client.class);
    }
}

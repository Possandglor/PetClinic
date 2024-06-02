package com.fourlegs.mapper;

import com.fourlegs.dto.PetDTO;
import com.fourlegs.model.Pet;
import org.modelmapper.ModelMapper;

public class PetMapper {
    private static final ModelMapper mapper = new ModelMapper();
    public static Pet mapPetDtoToPet(PetDTO PetDTO) {
        return mapper.map(PetDTO, Pet.class);
    }
}

package com.fourlegs.mapper;

import com.fourlegs.dto.VisitDTO;
import com.fourlegs.model.Visit;
import org.modelmapper.ModelMapper;

public class VisitMapper {

    private static final ModelMapper mapper = new ModelMapper();
    public static final Visit mapVisitToVisitDTO(VisitDTO visitDTO) {
        return mapper.map(visitDTO, Visit.class);
    }

    public static final VisitDTO mapVisitToVisitDTO(Visit visit) {
        return mapper.map(visit, VisitDTO.class);
    }

}

package com.fourlegs.repository;

import com.fourlegs.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClientRepository extends JpaRepository<Client, Long> {


    @Query("SELECT c FROM Client c JOIN c.pets p WHERE p.petID = :petID")
    List<Client> findClientsByPetID(@Param("petID") Long petID);
}

import React, { useState, useEffect } from 'react';
import api from '../services/api';

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getPets();
      setPets(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pets</h1>
      <ul>
        {pets.map(pet => (
          <li key={pet.petID}>{pet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;

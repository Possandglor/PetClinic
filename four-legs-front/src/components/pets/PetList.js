import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './PetList.css'
const PetList = () => {
  const [pets, setPets] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedPet, setSelectedPet] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getPets();
      console.log(data)
      setPets(data);
    };

    fetchData();
  }, []);

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(filter.toLowerCase()) 
  );

  return (
    <div className='pet-list'>
      <div className="filter">
        <input
          type="text"
          placeholder="Фильтр питомцев..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <ul>
      {filteredPets.map(pet => (
          <li key={pet.petID}>
            <div className="pet-info">
              <span>{pet.species} {pet.name} ({pet.breed})</span>
              {/* <button onClick={() => handleSelectClient(pet)}>Edit</button>
              <button onClick={() => handleDeleteClient(pet.clientID)}>Delete</button> */}
            </div>
            {/* <ul>
              {pet.pets.map(pet => (
                <li key={pet.petID}>{pet.name} ({pet.species})</li>
              ))}
            </ul> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;

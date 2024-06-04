import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './ClientList.css';
import Modal from '../calendar/Modal';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petBirthDate, setPetBirthDate] = useState('');
  const [petGender, setPetGender] = useState('');
  const [existingPetId, setExistingPetId] = useState('');
  const [existingPets, setExistingPets] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchClients();
    handleExistingPets();
  }, []);

  const fetchClients = async () => {
    const data = await api.getClients();
    console.log(data)
    setClients(data);
  };

  const handleAddPet = async (clientId, petName, existingPetId) => {
    let petData = {
      "name": petName,
      "gender": petGender,
      "birthDate": petBirthDate + "T00:00:00Z",
      "species": petSpecies,
      "breed": petBreed
    }
    if (existingPetId) {
      await api.addExistingPetToClient(clientId, existingPetId);
    } else {
      await api.addPetToClient(clientId, petData);
    }
    fetchClients(); // Refresh the client list to show the new pet
    setPetName('');
    setPetSpecies('');
    setPetBreed('');
    setPetBirthDate('');
    setPetGender('');
    setExistingPetId(''); // Reset the selected existing pet ID
  };

  const handleDeletePetFromOwner = async (clientId, petId) => {
    await api.deletePetOwner(clientId, petId);
    fetchClients(); // Refresh the client list to remove the deleted pet
  };

  const handleAddExistingPet = async (clientId) => {
    if (!existingPetId) {
      return;
    }
    await handleAddPet(clientId, null, existingPetId);
  };

  const handleDeleteClient = async (clientId) => {
    await api.deleteClient(clientId);
    fetchClients(); // Refresh the client list to remove the deleted client
  };

  const handleUpdateClient = async (clientId, updatedClient) => {
    console.log(clientId, updatedClient)
    // updatedClient.pets = undefined
    await api.updateClient(clientId, updatedClient);
    fetchClients(); // Refresh the client list to show the updated client
  };

  const filteredClients = clients.filter(client => client.name.toLowerCase().includes(filter.toLowerCase()) ||
    client.phoneNumber.toLowerCase().includes(filter.toLowerCase())

  );

  const handleExistingPets = async () => {
    let data = await api.getExistingPets();
    console.log(data)
    setExistingPets(data)
  };

  const handleSelectClient = (client) => {
    setSelectedClient(client)
    setModalIsOpen(true)
  };

  return (
    <div className="client-list">
      <div className="filter">
        <input
          type="text"
          placeholder="Фильтр клиентов..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <ul>
        {filteredClients.map(client => (
          <li key={client.clientID}>
            <div className="client-info">
              <span>{client.name}: {client.phoneNumber}</span>
              <button onClick={() => handleSelectClient(client)}>Edit</button>
              <button onClick={() => handleDeleteClient(client.clientID)}>Delete</button>
            </div>
            <ul>
              {client.pets.map(pet => (
                <li key={pet.petID}>{pet.name} ({pet.species})</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {selectedClient && (
        <Modal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        >
          <h3>Edit Client</h3>
          <input
            type="text"
            placeholder="ФИО"
            value={selectedClient.name}
            onChange={(e) => setSelectedClient({ ...selectedClient, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Номер телефона"
            value={selectedClient.phoneNumber}
            onChange={(e) => setSelectedClient({ ...selectedClient, phoneNumber: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            value={selectedClient.email}
            onChange={(e) => setSelectedClient({ ...selectedClient, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Адрес"
            value={selectedClient.address}
            onChange={(e) => setSelectedClient({ ...selectedClient, address: e.target.value })}
          />
          <h4>Pets</h4>
          <ul>
            {selectedClient.pets.map(pet => (
              <li key={pet.petID}>
                {pet.name} ({pet.species})
                <button onClick={() => handleDeletePetFromOwner(selectedClient.clientID, pet.petID)}>Delete</button>
              </li>
            ))}
          </ul>
          <div className="pet-form">
            <input
              type="text"
              placeholder="Кличка"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Вид"
              value={petSpecies}
              onChange={(e) => setPetSpecies(e.target.value)}
            />
            <input
              type="text"
              placeholder="Порода"
              value={petBreed}
              onChange={(e) => setPetBreed(e.target.value)}
            />
            <input
              type="date"
              placeholder="Дата рождения"
              value={petBirthDate}
              onChange={(e) => setPetBirthDate(e.target.value)}
            />
            <select
              value={petGender}
              onChange={(e) => setPetGender(e.target.value)}
            >
              <option value="">Пол</option>
              <option value="Male">М</option>
              <option value="Female">Ж</option>
            </select>
            <button onClick={() => handleAddPet(selectedClient.clientID, petName)}>Add New Pet</button>
            <select value={existingPetId} onChange={(e) => setExistingPetId(e.target.value)}>
              <option value="">Select existing pet</option>
              {existingPets.map(pet => (
                <option key={pet.petID} value={pet.petID}>{pet.name}</option>
              ))}
            </select>
            <button onClick={() => handleAddExistingPet(selectedClient.clientID)}>Add Existing Pet</button>
          </div>
          <button onClick={() => handleUpdateClient(selectedClient.clientID, selectedClient)}>Save</button>
          <button onClick={() => setSelectedClient(null)}>Cancel</button>
        </Modal>
      )}
    </div>
  );
};

export default ClientList;

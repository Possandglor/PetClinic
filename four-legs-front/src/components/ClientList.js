import React, { useEffect, useState } from 'react';
import { getClients } from '../services/api';
import ClientItem from './ClientItem';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await getClients();
      setClients(response);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  return (
    <div>
      <h1>Clients</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <ClientItem key={client.clientID} client={client} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;

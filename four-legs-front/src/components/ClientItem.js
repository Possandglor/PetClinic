import React from 'react';

const ClientItem = ({ client }) => {
  return (
    <tr>
      <td>{client.firstName}</td>
      <td>{client.lastName}</td>
      <td>{client.phoneNumber}</td>
      <td>{client.email}</td>
      <td>{client.address}</td>
    </tr>
  );
};

export default ClientItem;

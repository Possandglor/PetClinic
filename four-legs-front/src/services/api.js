import BASE_URL from './config';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}

const api = {
  getClients: async () => {
    const response = await fetch(`${BASE_URL}/api/clients`,{headers});
    if (!response.ok) {
      throw new Error('Failed to fetch clients');
    }
    return await response.json();
  },
  getClientsByPetID: async (petID) => {
    const response = await fetch(`${BASE_URL}/api/clients/pet/${petID}`,{headers});
    if (!response.ok) {
      throw new Error('Failed to fetch clients');
    }
    return await response.json();
  },
  addClient: async (clientData) => {
    const response = await fetch(`${BASE_URL}/api/clients`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });
    if (!response.ok) {
      throw new Error('Failed to add client');
    }
    return await response.json();
  },

  updateClient: async (clientId, clientData) => {
    const response = await fetch(`${BASE_URL}/api/clients/${clientId}`, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(clientData),
    });
    if (!response.ok) {
      throw new Error('Failed to update client');
    }
    return await response.json();
  },

  deleteClient: async (clientId) => {
    const response = await fetch(`${BASE_URL}/api/clients/${clientId}`, {
      method: 'DELETE',
      headers
    });
    if (!response.ok) {
      throw new Error('Failed to delete client');
    }
  },

  addPetToClient: async (clientId, petData) => {
    const response = await fetch(`${BASE_URL}/api/clients/${clientId}/pets`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petData),
    });
    if (!response.ok) {
      throw new Error('Failed to add pet to client');
    }
    return await response.json();
  },
  addExistingPetToClient: async(clientId, existingPetId) => {
    const response = await fetch(`${BASE_URL}/api/clients/${clientId}/pets/${existingPetId}`, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to add pet to client');
    }
    return await response.json();
  },
  deletePetOwner: async (clientId, petId) => {
    const response = await fetch(`${BASE_URL}/api/clients/${clientId}/pets/${petId}`, {
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
    });
    console.log(response)
    if (!response.ok) {
      throw new Error('Failed to delete pet');
    }
  },

   getExistingPets: async () => {
    const response = await fetch(`${BASE_URL}/api/pets`,headers);
    if (!response.ok) {
      throw new Error('Failed to fetch existing pets');
    }
    return await response.json();
  },

  getPets: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/pets`, {
        headers: {
          ...headers,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch pets');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching pets:', error);
      return [];
    }
  },

  // Метод для добавления нового клиента
  addPet: async (petData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/pets`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(petData),
      });
      if (!response.ok) {
        throw new Error('Failed to add pet');
      }
      return await response.json();
    } catch (error) {
      console.error('Error adding pet:', error);
      return null;
    }
  },

  deletePet: async (petId) => {
    const response = await fetch(`${BASE_URL}/api/pets/${petId}`, {
      method: 'DELETE',
      headers
    });
    if (!response.ok) {
      throw new Error('Failed to delete pet');
    }
  },

  getEmployees: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/employees`, {
        headers: {
          ...headers,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching employees:', error);
      return [];
    }
  },

  addEmployee: async (employeeData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/employees`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(employeeData),
      });
      if (!response.ok) {
        throw new Error('Failed to add employee');
      }
      return await response.json();
    } catch (error) {
      console.error('Error adding employee:', error);
      return null;
    }
  },

  getVisits: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/visits`, {
        headers: {
          ...headers,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch visits');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching visits:', error);
      return [];
    }
  },

  addVisit: async (visitData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/visits`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(visitData),
      });
      if (!response.ok) {
        throw new Error('Failed to add visit');
      }
      return await response.json();
    } catch (error) {
      console.error('Error adding visit:', error);
      return null;
    }
  },
  getPrescriptions: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/prescriptions`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch prescriptions');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
      return [];
    }
  },

  addPrescription: async (prescriptionData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/prescriptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(prescriptionData),
      });
      if (!response.ok) {
        throw new Error('Failed to add prescription');
      }
      return await response.json();
    } catch (error) {
      console.error('Error adding prescription:', error);
      return null;
    }
  },

  getPrescriptionTemplates: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/prescription-templates`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch prescriptions');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
      return [];
    }
  },

  addPrescriptionTemplate: async (PrescriptionTemplateData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/prescription-templates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(PrescriptionTemplateData),
      });
      if (!response.ok) {
        throw new Error('Failed to add prescription');
      }
      return await response.json();
    } catch (error) {
      console.error('Error adding prescription:', error);
      return null;
    }
  },

  getShifts: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/shifts`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch shifts');
      }
      // console.log(response);
      // console.log(await response.json());
      return await response.json();
    } catch (error) {
      console.error('Error fetching shifts:', error);
      return [];
    }
  },

  addShift: async (shiftData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/shifts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(shiftData),
      });
      if (!response.ok) {
        throw new Error('Failed to add shift');
      }
      return await response.json();
    } catch (error) {
      console.error('Error adding shift:', error);
      return null;
    }
  },


  getFiles: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/files`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch files');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching files:', error);
      return [];
    }
  },

  addFile: async (fileData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/files`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(fileData),
      });
      if (!response.ok) {
        throw new Error('Failed to add file');
      }
      return await response.json();
    } catch (error) {
      console.error('Error adding file:', error);
      return null;
    }
  },

};

export default api;
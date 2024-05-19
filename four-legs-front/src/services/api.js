const API_URL = 'http://localhost:8080/api';

export const getClients = async () => {
  try {
    const response = await fetch(`${API_URL}/clients`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

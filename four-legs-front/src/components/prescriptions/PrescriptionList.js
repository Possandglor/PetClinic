import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const PrescriptionList = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getPrescriptions();
      setPrescriptions(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Prescriptions</h1>
      <ul>
        {prescriptions.map(prescription => (
          <li key={prescription.prescriptionID}>{prescription.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default PrescriptionList;

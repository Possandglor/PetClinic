import React, { useState, useEffect } from 'react';
import api from '../services/api';

const VisitList = () => {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getVisits();
      setVisits(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Visits</h1>
      <ul>
        {visits.map(visit => (
          <li key={visit.visitID}>{visit.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default VisitList;

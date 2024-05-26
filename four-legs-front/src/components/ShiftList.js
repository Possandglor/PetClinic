import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ShiftList = () => {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getShifts();
      setShifts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Shifts</h1>
      <ul>
        {shifts.map(shift => (
          <li key={shift.shiftID}>{shift.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShiftList;

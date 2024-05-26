import React, { useState, useEffect } from 'react';
import api from '../services/api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getEmployees();
      setEmployees(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.employeeID}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

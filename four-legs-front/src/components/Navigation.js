import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/pets">Pets</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/visits">Visits</Link></li>
        <li><Link to="/prescriptions">Prescriptions</Link></li>
        <li><Link to="/prescription-templates">Prescription Templates</Link></li>
        <li><Link to="/shifts">Shifts</Link></li>
        <li><Link to="/files">Files</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;

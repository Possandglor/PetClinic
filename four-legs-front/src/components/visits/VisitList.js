import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import VisitForm from './VisitForm';
import { Modal } from '@mui/material';
import "./VisitList.css"
import moment from 'moment';
const VisitList = () => {
  const [visits, setVisits] = useState([]);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await api.getVisits();

    const visitsWithOwners = await Promise.all(data.map(async (visit) => {
      const owners = await api.getClientsByPetID(visit.pet.petID);
      console.log(owners)
      return {
        ...visit,
        owners
      };
    }));

    console.log(visitsWithOwners)
    setVisits(visitsWithOwners);
  };

  const filteredVisits = visits.filter(visit => visit.employee.name.toLowerCase().includes(filter.toLowerCase()) ||
    visit.reason.toLowerCase().includes(filter.toLowerCase()) ||
    visit.owners.filter(elem => elem.phoneNumber.toLowerCase().includes(filter.toLowerCase())).length>0 ||
    visit.pet.name.toLowerCase().includes(filter.toLowerCase())

  );


  return (
    <div className='visit-list'>
      <div className="filter">
        <input
          type="text"
          placeholder="Фильтр посещений..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <ul>
        {filteredVisits.map(visit => (
          <li key={visit.visitID}>
            <div className="visit-info">
              <span> {moment(visit.startDate).format("yyyy-MM-DD HH:mm:ss")}: {visit.employee.name} {visit.pet.name} {visit.reason} {visit.owners.map(
                owner => (owner.phoneNumber + " ")
              )}</span>
            </div>
          </li>
        ))}
      </ul>
      {/* <VisitForm /> */}

    </div>
  );
};

export default VisitList;

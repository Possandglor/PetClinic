import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navigation from './components/Navigation';
import ClientList from './components/clients/ClientList.js';
import PetList from './components//pets/PetList';
import EmployeeList from './components/employes/EmployeeList.js';
import VisitList from './components/visits/VisitList';
import PrescriptionList from './components/prescriptions/PrescriptionList';
import PrescriptionTemplateList from './components/prescriptions/PrescriptionTemplateList';
import ShiftList from './components/shifts/ShiftList';
import FileList from './components/files/FileList';
import Menu from './menu/Menu.js';
import ShiftAndVisitCalendar from './components/calendar/ShiftAndVisitCalendar.js';

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes >
        <Route path="/clients" element={<ClientList/>} />
        <Route path="/pets" element={<PetList/>} />
        <Route path="/employees" element={<EmployeeList/>} />
        <Route path="/visits" element={<VisitList/>} />
        <Route path="/prescriptions" element={<PrescriptionList/>} />
        <Route path="/prescription-templates" element={<PrescriptionTemplateList/>} />
        <Route path="/shifts" element={<ShiftList/>} />
        <Route path="/files" element={<FileList/>} />
        <Route path="/calendar" element={<ShiftAndVisitCalendar/>} />
      </Routes >
    </Router>
  );
};

export default App;

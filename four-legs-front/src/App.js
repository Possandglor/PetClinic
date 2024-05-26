import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navigation from './components/Navigation';
import ClientList from './components/clientList/ClientList.js';
import PetList from './components/PetList';
import EmployeeList from './components/EmployeeList';
import VisitList from './components/VisitList';
import PrescriptionList from './components/PrescriptionList';
import PrescriptionTemplateList from './components/PrescriptionTemplateList';
import ShiftList from './components/ShiftList';
import FileList from './components/FileList';
import Menu from './menu/Menu.js';

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
      </Routes >
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';

const VisitForm = ({ open, onClose, onSubmit, pets, employees }) => {
  const [visitDate, setVisitDate] = useState(new Date());
  const [reason, setReason] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedPet, setSelectedPet] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const handleSubmit = () => {
    const visitData = {
      visitDate,
      reason,
      notes,
      petID: selectedPet,
      employeeID: selectedEmployee,
    };
    onSubmit(visitData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Создать новое посещение</DialogTitle>
      <DialogContent>
        <TextField
          label="Причина"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Заметки"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="pet-label">Питомец</InputLabel>
          <Select
            labelId="pet-label"
            value={selectedPet}
            onChange={(e) => setSelectedPet(e.target.value)}
          >
            {pets.map((pet) => (
              <MenuItem key={pet.petID} value={pet.petID}>
                {pet.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="employee-label">Сотрудник</InputLabel>
          <Select
            labelId="employee-label"
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
          >
            {employees.map((employee) => (
              <MenuItem key={employee.employeeID} value={employee.employeeID}>
                {employee.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Создать
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default VisitForm;

import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import Modal from 'react-modal';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import api from '../../services/api';
import Modal from './Modal'; // Импортируйте компонент модального окна

const localizer = momentLocalizer(moment);

const ShiftAndVisitCalendar = () => {
    const [events, setEvents] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newShiftModalIsOpen, setNewShiftModalIsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [shifts, setShifts] = useState([]);
    const [selectedShiftSlot, setSelectedShiftSlot] = useState(null);
    const [shiftStartTime, setShiftStartTime] = useState(new Date());
    const [shiftEndTime, setShiftEndTime] = useState(new Date());
    const [pets, setPets] = useState([]);

    const [clientPets, setClientPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState(null);

    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [comment, setComment] = useState('');

    const [phoneFilter, setPhoneFilter] = useState('');
    const [filteredClients, setFilteredClients] = useState([]);

    const minTime = new Date();
    minTime.setHours(8, 0, 0);

    const maxTime = new Date();
    maxTime.setHours(19, 0, 0);

    useEffect(() => {
        const fetchData = async () => {
            const shiftsData = await api.getShifts();
            const visitsData = await api.getVisits();
            const clientData = await api.getClients();
            const petData = await api.getPets();
            setClients(clientData)
            setPets(petData)
            console.log(pets)
            const eventsData = [...visitsData].map(item => ({
                ...item,
                start: new Date(item.startDate),
                end: new Date(item.endDate),
                pet: pets.find(elem => {
                    console.log(elem, item.pet)
                    return elem.petID == Number.isInteger(item.pet) ? item.pet : item.pet.petID
                }),
                title: `${item.pet.name + " " + item.pet.breed + " " + item.reason}`,
            }));
            console.log(eventsData)
            setEvents(eventsData);
            setShifts(shiftsData);
            setClients(clientData);
            setFilteredClients(clientData);
        };

        fetchData();
    }, []);


    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        setModalIsOpen(true);
    };

    const handleCreateEvent = (slotInfo) => {
        console.log(slotInfo)
        setShiftStartTime(new Date(slotInfo.start))
        setShiftEndTime(new Date(slotInfo.end))
        setSelectedShiftSlot(slotInfo);
        setNewShiftModalIsOpen(true);
    };

    const handleCreateNewShift = (slotInfo) => {
        console.log(slotInfo)
    }

    const handleClientChange = (e) => {
        const selectedClientId = e.target.value;
        setSelectedClient(selectedClientId);
        const client = clients.find(c => c.id === selectedClientId);
        setClientPets(client ? client.pets : []);
    };

    const handlePhoneFilterChange = (e) => {
        const filter = e.target.value;
        setPhoneFilter(filter);
        const filtered = clients.filter(client => client.phoneNumber.includes(filter));
        setFilteredClients(filtered);
    };

    return (
        <div>
            <h1>Calendar</h1>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 700 }}
                min={minTime}
                max={maxTime}
                className='custom-calendar'
                selectable
                onSelectSlot={handleCreateEvent}

                showMultiDayTimes
                onSelectEvent={handleSelectEvent}
            />
            <Modal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
            >
                <h2>Прием за {selectedEvent && selectedEvent.start.toDateString()}</h2>
                {selectedEvent && (
                    <div>
                        <p>Смена: {selectedEvent.employee.specialization}: {selectedEvent.employee.firstName + " " + selectedEvent.employee.lastName}</p>
                        <p>Посещение: {selectedEvent.pet.name} ({selectedEvent.pet.breed}): {selectedEvent.reason}</p>
                    </div>
                )}
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
            <Modal
                isOpen={newShiftModalIsOpen}
                onClose={() => setNewShiftModalIsOpen(false)}
            >
                <h2>Создание нового приема</h2>
                {selectedShiftSlot && (
                    <form onSubmit={handleCreateNewShift}>
                        <div>
                            <label htmlFor="startTime">Начало:</label>
                            <DatePicker
                                selected={shiftStartTime}
                                onChange={(date) => setShiftStartTime(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            />
                        </div>
                        <div>
                            <label htmlFor="endTime">Конец:</label>
                            <DatePicker
                                selected={shiftEndTime}
                                onChange={(date) => setShiftEndTime(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneFilter">Фильтр по телефону:</label>
                            <input
                                type="text"
                                id="phoneFilter"
                                value={phoneFilter}
                                onChange={handlePhoneFilterChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="client">Клиент:</label>
                            <select
                                id="client"
                                value={selectedClient}
                                onChange={handleClientChange}
                            >
                                <option value="">Выберите хозяина</option>
                                {filteredClients.map(client => (
                                    <option key={client.id} value={client.id}>{client.phoneNumber} ({client.lastName})</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="pet">Питомец:</label>
                            <select
                                id="pet"
                                value={selectedPet}
                                onChange={(e) => setSelectedPet(e.target.value)}
                            >
                                <option value="">Выберите питомца</option>
                                {clientPets.map(pet => (
                                    <option key={pet.id} value={pet.id}>{pet.name} ({pet.breed})</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="comment">Комментарий:</label>
                            <textarea
                                id="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>
                        <button type="submit">Create</button>
                    </form>
                )}
                <button onClick={() => setNewShiftModalIsOpen(false)}>Close</button>
            </Modal>
        </div>
    );
};

export default ShiftAndVisitCalendar;

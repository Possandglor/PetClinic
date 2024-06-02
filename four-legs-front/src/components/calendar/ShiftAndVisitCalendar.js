import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import Modal from 'react-modal';
import api from '../../services/api';
import Modal from './Modal'; // Импортируйте компонент модального окна

const localizer = momentLocalizer(moment);

const ShiftAndVisitCalendar = () => {
    const [events, setEvents] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [shifts, setShifts] = useState([]);
    const [shiftsDay, setShiftsDay] = useState([]);
    const [visits, setVisits] = useState([]);

    const minTime = new Date();
    minTime.setHours(8, 0, 0);

    const maxTime = new Date();
    maxTime.setHours(19, 0, 0);

    useEffect(() => {
        const fetchData = async () => {
            const shiftsData = await api.getShifts();
            const visitsData = await api.getVisits();

            const eventsData = [...visitsData].map(item => ({
                ...item,
                start: new Date(item.startDate),
                end: new Date(item.endDate),
                title: `${item.pet.name + " " + item.pet.breed + " " + item.reason}`,
            }));
            console.log(eventsData)
            setEvents(eventsData);
            setShifts(shiftsData);
        };

        fetchData();
    }, []);

    const handleSelect = ({ visitID,start,end }) => {
        console.log(visitID)
        setSelectedDate(start);
        const selectedShifts = shifts.filter(event => event.shiftDate && new Date(event.shiftDate).toDateString() === start.toDateString());
        const selectedVisits = events.filter(event => event.startDate && new Date(event.startDate).toDateString() === start.toDateString());
        console.log(selectedVisits)
        setShiftsDay(selectedShifts);
        setVisits(selectedVisits);
        setModalIsOpen(true);
    };

    const handleCreateEvent = (slotInfo,{ slots,start, end }) => {
        console.log(slotInfo);
        console.log(slots);
        console.log(start);
        console.log(end);
        // setSelectedDate(start);
        // const selectedShifts = shifts.filter(event => event.shiftDate && new Date(event.shiftDate).toDateString() === start.toDateString());
        // const selectedVisits = events.filter(event => event.startDate && new Date(event.startDate).toDateString() === start.toDateString());
        // console.log(selectedVisits)
        // setShiftsDay(selectedShifts);
        // setVisits(selectedVisits);
        // setModalIsOpen(true);
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
                onSelectEvent={handleSelect}
                formats={{
                    timeGutterFormat: 'h:mm A', // Формат времени в боковой панели
                    eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
                        localizer.format(start, 'h:mm A', culture) +
                        ' - ' +
                        localizer.format(end, 'h:mm', culture), // Формат времени события
                }}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Shift and Visit Details"
                className='modal'
            >
                <h2>Details for {selectedDate && selectedDate.toDateString()}</h2>
                <br />
                <div>
                    <h3>Смена:</h3>
                    <ul>
                        {shiftsDay.map(shift => (
                            <li key={shift.shiftID}>{shift.employee.specialization}: {shift.employee.firstName + " " + shift.employee.lastName}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Посещения:</h3>
                    <ul>
                        {visits.map(visit => (
                            <li key={visit.visitID}>{visit.startDate} {visit.pet.name} ({visit.pet.breed}): {visit.reason}</li>
                        ))}
                    </ul>
                </div>
                <br />
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
        </div>
    );
};

export default ShiftAndVisitCalendar;

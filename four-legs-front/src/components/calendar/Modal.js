import React from 'react';
import './ShiftAndVisitCalendar.css'; // Импортируйте ваш CSS-файл

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) 
        return null;

    return (
        <div>
            <div className="modal-backdrop" onClick={onClose}></div>
            <div className="modal">
                {children}
                {/* <button onClick={onClose}>Close</button> */}
            </div>
        </div>
    );
};

export default Modal;

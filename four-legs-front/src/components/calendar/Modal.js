import React from 'react';
import './ShiftAndVisitCalendar.css'; // Импортируйте ваш CSS-файл

const Modal = ({ isOpen, onClose, children }) => {
    // console.log(isOpen, onClose, children)
    if (!isOpen) 
        return null;

    return (
        <div className="modal-overlay">
            <div className="modal-backdrop" onClick={onClose}></div>
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
};

export default Modal;

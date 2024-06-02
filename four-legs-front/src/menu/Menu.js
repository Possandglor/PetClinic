import React, { useState } from 'react';
import './Menu.css'; // Подключаем CSS для стилизации
import Navigation from '../components/navigation/Navigation';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <div className="dropdown-menu">
            <button className="dropdown-menu__toggle" onClick={toggleMenu}>
                Меню
            </button>
            {isOpen && (
                <div className="dropdown-menu__content">
                    <Navigation closeMenu={closeMenu} />
                </div>
            )}
        </div>
    );
};

export default Menu;

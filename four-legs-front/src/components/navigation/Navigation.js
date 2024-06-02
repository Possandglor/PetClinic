import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({closeMenu}) => {
  return (
    <nav>
      <ul>
        <li><Link to="/clients" onClick={closeMenu}>Клиенты</Link></li>
        <li><Link to="/pets" onClick={closeMenu}>Питомцы</Link></li>
        <li><Link to="/employees" onClick={closeMenu}>Сотрудники</Link></li>
        <li><Link to="/visits" onClick={closeMenu}>Посещения</Link></li>
        <li><Link to="/prescriptions" onClick={closeMenu}>Назначения</Link></li>
        <li><Link to="/prescription-templates" onClick={closeMenu}>Шаблоны назначений</Link></li>
        <li><Link to="/shifts" onClick={closeMenu}>Смены</Link></li>
        <li><Link to="/files" onClick={closeMenu}>Файлы</Link></li>
        <li><Link to="/calendar" onClick={closeMenu}>Календарь</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;

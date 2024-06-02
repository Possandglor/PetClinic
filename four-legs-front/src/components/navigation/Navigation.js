import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/clients">Клиенты</Link></li>
        <li><Link to="/pets">Питомцы</Link></li>
        <li><Link to="/employees">Сотрудники</Link></li>
        <li><Link to="/visits">Посещения</Link></li>
        <li><Link to="/prescriptions">Назначения</Link></li>
        <li><Link to="/prescription-templates">Шаблоны назначений</Link></li>
        <li><Link to="/shifts">Смены</Link></li>
        <li><Link to="/files">Файлы</Link></li>
        <li><Link to="/calendar">Календарь</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;

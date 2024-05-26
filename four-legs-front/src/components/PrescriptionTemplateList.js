import React, { useState, useEffect } from 'react';
import api from '../services/api';

const PrescriptionTemplateList = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getPrescriptionTemplates();
      setTemplates(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Prescription Templates</h1>
      <ul>
        {templates.map(template => (
          <li key={template.templateID}>{template.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PrescriptionTemplateList;

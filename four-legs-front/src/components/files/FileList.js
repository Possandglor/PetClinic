import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getFiles();
      setFiles(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Files</h1>
      <ul>
        {files.map(file => (
          <li key={file.fileID}>{file.filename}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;

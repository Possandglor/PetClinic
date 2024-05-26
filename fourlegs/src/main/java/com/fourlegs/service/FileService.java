package com.fourlegs.service;
import com.fourlegs.model.File;
import com.fourlegs.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FileService {

    @Autowired
    private FileRepository fileRepository;

    public List<File> getAllFiles() {
        return fileRepository.findAll();
    }

    public Optional<File> getFileById(Long fileID) {
        return fileRepository.findById(fileID);
    }

    public File saveFile(File file) {
        return fileRepository.save(file);
    }

    public void deleteFile(Long fileID) {
        fileRepository.deleteById(fileID);
    }
}
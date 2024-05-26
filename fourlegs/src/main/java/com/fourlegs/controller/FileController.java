package com.fourlegs.controller;
import com.fourlegs.model.File;
import com.fourlegs.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/files")
public class FileController {

    @Autowired
    private FileService fileService;

    @GetMapping
    public List<File> getAllFiles() {
        return fileService.getAllFiles();
    }

    @GetMapping("/{fileID}")
    public Optional<File> getFileById(@PathVariable Long fileID) {
        return fileService.getFileById(fileID);
    }

    @PostMapping
    public File createFile(@RequestBody File file) {
        return fileService.saveFile(file);
    }

    @PutMapping("/{fileID}")
    public File updateFile(@PathVariable Long fileID, @RequestBody File file) {
        file.setFileID(fileID);
        return fileService.saveFile(file);
    }

    @DeleteMapping("/{fileID}")
    public void deleteFile(@PathVariable Long fileID) {
        fileService.deleteFile(fileID);
    }
}
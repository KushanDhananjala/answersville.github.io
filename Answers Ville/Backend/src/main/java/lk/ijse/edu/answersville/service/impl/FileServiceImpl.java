package lk.ijse.edu.answersville.service.impl;

import lk.ijse.edu.answersville.service.FileService;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class FileServiceImpl implements FileService {

    private final String userImagesLocation = "D:/STUDYING/IJSE Works/Semester 3/Final Project/Project/Answers Ville/Backend/src/main/webapp/WEB-INF/resources/uploaded-images/user-images/";
    private final String adminImagesLocation = "D:/STUDYING/IJSE Works/Semester 3/Final Project/Project/Answers Ville/Backend/src/main/webapp/WEB-INF/resources/uploaded-images/admin-images/";
    private final String questionImagesLocation = "D:/STUDYING/IJSE Works/Semester 3/Final Project/Project/Answers Ville/Backend/src/main/webapp/WEB-INF/resources/uploaded-images/question-images/";
    private final String answerImagesLocation = "D:/STUDYING/IJSE Works/Semester 3/Final Project/Project/Answers Ville/Backend/src/main/webapp/WEB-INF/resources/uploaded-images/answer-images/";

    @Override
    public void storeUserImage(MultipartFile file, String userName) {
        try {
            Path path = Paths.get(userImagesLocation + userName + "/");
            Files.createDirectories(path);
            File f = new File(userImagesLocation + userName + "/" + file.getOriginalFilename());
            if (!f.exists()) {
                Files.copy(file.getInputStream(), path.resolve(file.getOriginalFilename()));
            }
        } catch (Exception e) {
            throw new RuntimeException("FAIL!");
        }
    }

    @Override
    public void storeAdminImage(MultipartFile file, String userName) {
        try {
            Path path = Paths.get(adminImagesLocation + userName + "/");
            Files.createDirectories(path);
            File f = new File(adminImagesLocation + userName + "/" + file.getOriginalFilename());
            if (!f.exists()) {
                Files.copy(file.getInputStream(), path.resolve(file.getOriginalFilename()));
            }
        } catch (Exception e) {
            throw new RuntimeException("FAIL!");
        }
    }

    @Override
    public void storeQuestionImages(MultipartFile file, long id) {
        try {
            Path path = Paths.get(questionImagesLocation + id + "/");
            Files.createDirectories(path);
            File f = new File(questionImagesLocation + id + "/" + file.getOriginalFilename());
            if (!f.exists()) {
                Files.copy(file.getInputStream(), path.resolve(file.getOriginalFilename()));
            }
        } catch (Exception e) {
            throw new RuntimeException("FAIL!");
        }
    }

    @Override
    public void storeAnswerImages(MultipartFile file, long id) {
        try {
            Path path = Paths.get(answerImagesLocation + id + "/");
            Files.createDirectories(path);
            File f = new File(answerImagesLocation + id + "/" + file.getOriginalFilename());
            if (!f.exists()) {
                Files.copy(file.getInputStream(), path.resolve(file.getOriginalFilename()));
            }
        } catch (Exception e) {
            throw new RuntimeException("FAIL!");
        }
    }

    @Override
    public ResponseEntity<InputStreamResource> download(String path) {
        try {
            File file = new File(path);
            InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION,
                            "attachment;filename=" + file.getName())
                    .contentType(MediaType.APPLICATION_OCTET_STREAM).contentLength(file.length())
                    .body(resource);
        } catch (Exception e) {
            throw new RuntimeException("FAIL!");
        }
    }
}

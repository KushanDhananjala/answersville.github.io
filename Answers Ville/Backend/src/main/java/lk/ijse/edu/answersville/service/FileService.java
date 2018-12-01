package lk.ijse.edu.answersville.service;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

public interface FileService {

    public void storeUserImage(MultipartFile file, String userName) throws Exception;

    public void storeAdminImage(MultipartFile file, String userName) throws Exception;

    public void storeQuestionImages(MultipartFile file, long id) throws Exception;

    public void storeAnswerImages(MultipartFile file, long id) throws Exception;

    public ResponseEntity<InputStreamResource> download(String path) throws Exception;

}

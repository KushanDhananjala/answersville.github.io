package lk.ijse.edu.answersville.controller;

import lk.ijse.edu.answersville.dto.CustomTagDetailDTO;
import lk.ijse.edu.answersville.service.TagDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/tagdetails")
public class TagDetailController {

    @Autowired
    private TagDetailService tagDetailService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<CustomTagDetailDTO> getAllQuestionsTags() {
        try {
            return tagDetailService.getAllQuestionsTags();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}

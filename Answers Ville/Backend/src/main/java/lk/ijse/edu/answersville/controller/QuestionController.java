package lk.ijse.edu.answersville.controller;

import lk.ijse.edu.answersville.dto.CustomQuestionDTO;
import lk.ijse.edu.answersville.dto.PostQuestionDTO;
import lk.ijse.edu.answersville.dto.QuestionDTO;
import lk.ijse.edu.answersville.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean saveQuestion(@RequestBody PostQuestionDTO postQuestionDTO) {
        try {
            return questionService.saveQuestion(postQuestionDTO);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public QuestionDTO getQuestion(@PathVariable("id") long id) {
        try {
            return questionService.getQuestion(id);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<QuestionDTO> getAllQuestions() {
        try {
            return questionService.getAllQuestions();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping(value = "/landingPageQuestions", produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<CustomQuestionDTO> getLandingPageQuestions() {
        try {
            return questionService.getLandingPageQuestions();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping(value = "/recentQuestions", produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<CustomQuestionDTO> getRecentQuestions() {
        try {
            return questionService.getRecentQuestions();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping(value = "/recentFiveQuestions", produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<CustomQuestionDTO> getRecentFiveQuestions() {
        try {
            return questionService.getRecentFiveQuestions();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping(value = "/mostlyViewedQuestions", produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<CustomQuestionDTO> getMostlyViewedQuestions() {
        try {
            return questionService.getMostlyViewedQuestions();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping(value = "/mostlyVotedQuestions", produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<CustomQuestionDTO> getMostlyVotedQuestions() {
        try {
            return questionService.getMostlyVotedQuestions();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping(value = "/getLastID", produces = MediaType.APPLICATION_JSON_VALUE)
    public long getLastID() {
        try {
            return Long.parseLong(questionService.getLastID());
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    @GetMapping(value = "/userQuestionCount/{name}", produces = MediaType.APPLICATION_JSON_VALUE)
    public long getUserQuestionCount(@PathVariable("name") String name) {
        try {
            return questionService.getUserQuestionCount(name);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    @PostMapping(value = "/increseCounts", produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean increseCounts(@RequestBody QuestionDTO questionDTO) {
        try {
            return questionService.increseCounts(questionDTO);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @GetMapping(value = "/count", produces = MediaType.APPLICATION_JSON_VALUE)
    public long getTotalQuestions() {
        try {
            return questionService.getTotalQuestions();
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    @PostMapping(value = "/updateTitleAndBody", produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean updateQuestionTitleAndBody(@RequestParam("title") String title, @RequestParam("body") String body, @RequestParam("id") long id) {
        try {
            return questionService.updateQuestionTitleAndBody(title, body, id);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @PostMapping(value = "/updateActiveStatus", produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean updateQuestionActiveStatus(@RequestParam("active") int active, @RequestParam("id") long id) {
        try {
            return questionService.updateQuestionActiveStatus(active, id);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

}
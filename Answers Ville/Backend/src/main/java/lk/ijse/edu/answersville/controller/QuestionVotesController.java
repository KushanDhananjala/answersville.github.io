package lk.ijse.edu.answersville.controller;

import lk.ijse.edu.answersville.dto.QuestionVotesDTO;
import lk.ijse.edu.answersville.service.QuestionVoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/questionvotes")
public class QuestionVotesController {

    @Autowired
    private QuestionVoteService questionVoteService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean saveQuestionVote(@RequestBody QuestionVotesDTO questionVotesDTO) {
        try {
            return questionVoteService.saveQuestionVote(questionVotesDTO);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public QuestionVotesDTO getQuestionVote(@PathVariable("id") int id) {
        try {
            return questionVoteService.getQuestionVote(id);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean deleteQuestionVote(@PathVariable("id") int id) {
        try {
            return questionVoteService.deleteQuestionVote(id);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<QuestionVotesDTO> getAllQuestionVotes() {
        try {
            return questionVoteService.getAllQuestionVotes();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping(value = "/userVotesCount/{userName},{questionID}", produces = MediaType.APPLICATION_JSON_VALUE)
    public long getUserQuestionVotesCount(@PathVariable("userName") String userName, @PathVariable("questionID") long questionID) {
        try {
            return questionVoteService.getUserQuestionVotesCount(userName, questionID);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

}

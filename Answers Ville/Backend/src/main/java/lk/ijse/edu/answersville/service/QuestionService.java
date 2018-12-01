package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.CustomQuestionDTO;
import lk.ijse.edu.answersville.dto.PostQuestionDTO;
import lk.ijse.edu.answersville.dto.QuestionDTO;

import java.util.ArrayList;

public interface QuestionService {

    public boolean saveQuestion(PostQuestionDTO postQuestionDTO) throws Exception;

    public QuestionDTO getQuestion(long id) throws Exception;

    public boolean deleteQuestion(long id) throws Exception;

    public ArrayList<QuestionDTO> getAllQuestions() throws Exception;

    public String getLastID() throws Exception;

    public ArrayList<CustomQuestionDTO> getLandingPageQuestions() throws Exception;

    public ArrayList<CustomQuestionDTO> getRecentQuestions() throws Exception;

    public ArrayList<CustomQuestionDTO> getRecentFiveQuestions() throws Exception;

    public ArrayList<CustomQuestionDTO> getMostlyViewedQuestions() throws Exception;

    public ArrayList<CustomQuestionDTO> getMostlyVotedQuestions() throws Exception;

    public long getUserQuestionCount(String name) throws Exception;

    public boolean increseCounts(QuestionDTO questionDTO) throws Exception;

    public long getTotalQuestions() throws Exception;

    public boolean updateQuestionTitleAndBody(String title, String body, long id) throws Exception;

    public boolean updateQuestionActiveStatus(int active, long id) throws Exception;

}

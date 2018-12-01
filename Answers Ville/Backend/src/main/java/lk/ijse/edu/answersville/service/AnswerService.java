package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.AnswerDTO;
import lk.ijse.edu.answersville.dto.CustomAnswerDTO;
import lk.ijse.edu.answersville.dto.PostAnswerDTO;

import java.util.ArrayList;

public interface AnswerService {

    public boolean saveAnswer(PostAnswerDTO postAnswerDTO) throws Exception;

    public AnswerDTO getAnswer(long id) throws Exception;

    public boolean deleteAnswer(long id) throws Exception;

    public ArrayList<CustomAnswerDTO> getQuestionAnswers(long questionID) throws Exception;

    public String getLastID() throws Exception;

    public long getTotalAnswers() throws Exception;

    public long getUserAnswerCount(String name) throws Exception;

    public boolean increseScore(AnswerDTO answerDTO) throws Exception;

}

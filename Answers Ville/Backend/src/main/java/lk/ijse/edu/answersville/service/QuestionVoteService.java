package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.QuestionVotesDTO;

import java.util.ArrayList;

public interface QuestionVoteService {

    public boolean saveQuestionVote(QuestionVotesDTO questionVotesDTO) throws Exception;

    public QuestionVotesDTO getQuestionVote(long id) throws Exception;

    public boolean deleteQuestionVote(long id) throws Exception;

    public ArrayList<QuestionVotesDTO> getAllQuestionVotes() throws Exception;

    public long getUserQuestionVotesCount(String name, long questionID) throws Exception;

}

package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.AnswerVoteDTO;

import java.util.ArrayList;

public interface AnswerVoteService {

    public boolean saveAnswerVote(AnswerVoteDTO answerVoteDTO) throws Exception;

    public AnswerVoteDTO getAnswerVote(long id) throws Exception;

    public boolean deleteAnswerVote(long id) throws Exception;

    public ArrayList<AnswerVoteDTO> getAllAnswerVotes() throws Exception;

    public long getUserAnswerVotesCount(String name, long answerID) throws Exception;

}

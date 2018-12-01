package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.AnswerDTO;
import lk.ijse.edu.answersville.dto.ReviewReportedAnswerDTO;
import lk.ijse.edu.answersville.dto.ReviewReportedQuestionDTO;

import java.util.ArrayList;

public interface ReviewReportedAnswerService {

    public boolean saveReviewAnswer(ReviewReportedAnswerDTO reviewReportedAnswerDTO) throws Exception;

    public ReviewReportedAnswerDTO getReviewAnswer(long id) throws Exception;

    public boolean deleteReviewAnswer(long id) throws Exception;

    public ArrayList<ReviewReportedAnswerDTO> getAllReviewAnswers() throws Exception;

    public boolean ignoreReportedAnswer(int status, long answerID,
                                        ReviewReportedAnswerDTO reviewReportedAnswerDTO) throws Exception;

    public boolean editReportedAnswer(int status, AnswerDTO answerDTO,
                                      ReviewReportedAnswerDTO reviewReportedAnswerDTO) throws Exception;

    public boolean removeReportedAnswer(int status, long answerID,
                                        ReviewReportedAnswerDTO reviewReportedAnswerDTO) throws Exception;

}

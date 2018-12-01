package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.QuestionDTO;
import lk.ijse.edu.answersville.dto.ReviewReportedQuestionDTO;

import java.util.ArrayList;

public interface ReviewReportedQuestionService {

    public boolean saveReviewQuestion(ReviewReportedQuestionDTO reviewReportedQuestionDTO) throws Exception;

    public ReviewReportedQuestionDTO getReviewQuestion(long id) throws Exception;

    public boolean deleteReviewQuestion(long id) throws Exception;

    public ArrayList<ReviewReportedQuestionDTO> getAllReviewQuestions() throws Exception;

    public boolean ignoreReportedQuestion(int status, long questionID,
                                          ReviewReportedQuestionDTO reviewReportedQuestionDTO) throws Exception;

    public boolean editReportedQuestion(int status, QuestionDTO questionDTO,
                                        ReviewReportedQuestionDTO reviewReportedQuestionDTO) throws Exception;

    public boolean removeReportedQuestion(int status, long questionID,
                                          ReviewReportedQuestionDTO reviewReportedQuestionDTO) throws Exception;
}

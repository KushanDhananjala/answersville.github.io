package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.CustomReportedQuestionDTO;
import lk.ijse.edu.answersville.dto.ReportedQuestionDTO;

import java.util.ArrayList;

public interface ReportedQuestionService {

    public boolean saveReportedQuestion(ReportedQuestionDTO reportedQuestionDTO) throws Exception;

    public ReportedQuestionDTO getReportedQuestion(long id) throws Exception;

    public boolean deleteReportedQuestion(long id) throws Exception;

    public ArrayList<ReportedQuestionDTO> getAllReportedQuestions() throws Exception;

    public ArrayList<CustomReportedQuestionDTO> getReportedQuestions() throws Exception;


}

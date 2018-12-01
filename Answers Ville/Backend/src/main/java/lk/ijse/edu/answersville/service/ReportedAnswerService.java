package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.CustomReportedAnswerDTO;
import lk.ijse.edu.answersville.dto.ReportedAnswerDTO;

import java.util.ArrayList;

public interface ReportedAnswerService {

    public boolean saveReportedAnswer(ReportedAnswerDTO reportedAnswerDTO) throws Exception;

    public ReportedAnswerDTO getReportedAnswer(long id) throws Exception;

    public boolean deleteReportedAnswer(long id) throws Exception;

    public ArrayList<ReportedAnswerDTO> getAllReportedAnswers() throws Exception;

    public ArrayList<CustomReportedAnswerDTO> getReportedAnswers() throws Exception;

}

package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.QuestionAttachmentDTO;

import java.util.ArrayList;

public interface QuestionAttachmentService {

    public boolean deleteQuestionAttchment(long id) throws Exception;

    public ArrayList<QuestionAttachmentDTO> getAllQuestionAttchments() throws Exception;

    ArrayList<QuestionAttachmentDTO> getSelectedQuestionAttachments(long id) throws Exception;

}

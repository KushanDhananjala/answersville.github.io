package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.AnswerAttachmentDTO;

import java.util.ArrayList;

public interface AnswerAttachmentService {

    public boolean deleteAnswerAttchment(long id) throws Exception;

    public ArrayList<AnswerAttachmentDTO> getAllAnswerAttchments() throws Exception;

    ArrayList<AnswerAttachmentDTO> getSelectedAnswerAttachments(long id) throws Exception;

}

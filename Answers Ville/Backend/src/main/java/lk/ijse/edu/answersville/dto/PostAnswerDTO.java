package lk.ijse.edu.answersville.dto;

import java.util.ArrayList;

public class PostAnswerDTO {

    private AnswerDTO answerDTO;
    private ArrayList<AnswerAttachmentDTO> answerAttachmentDTOList;

    public PostAnswerDTO() {
    }

    public PostAnswerDTO(AnswerDTO answerDTO, ArrayList<AnswerAttachmentDTO> answerAttachmentDTOList) {
        this.answerDTO = answerDTO;
        this.answerAttachmentDTOList = answerAttachmentDTOList;
    }

    public AnswerDTO getAnswerDTO() {
        return answerDTO;
    }

    public void setAnswerDTO(AnswerDTO answerDTO) {
        this.answerDTO = answerDTO;
    }

    public ArrayList<AnswerAttachmentDTO> getAnswerAttachmentDTOList() {
        return answerAttachmentDTOList;
    }

    public void setAnswerAttachmentDTOList(ArrayList<AnswerAttachmentDTO> answerAttachmentDTOList) {
        this.answerAttachmentDTOList = answerAttachmentDTOList;
    }
}

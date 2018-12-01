package lk.ijse.edu.answersville.dto;

import java.util.ArrayList;

public class PostQuestionDTO {

    private QuestionDTO questionDTO;
    private ArrayList<QuestionAttachmentDTO> questionAttachmentDTOList;

    public PostQuestionDTO() {
    }

    public PostQuestionDTO(QuestionDTO questionDTO, ArrayList<QuestionAttachmentDTO> questionAttachmentDTOList) {
        this.questionDTO = questionDTO;
        this.questionAttachmentDTOList = questionAttachmentDTOList;
    }

    public QuestionDTO getQuestionDTO() {
        return questionDTO;
    }

    public void setQuestionDTO(QuestionDTO questionDTO) {
        this.questionDTO = questionDTO;
    }

    public ArrayList<QuestionAttachmentDTO> getQuestionAttachmentDTOList() {
        return questionAttachmentDTOList;
    }

    public void setQuestionAttachmentDTOList(ArrayList<QuestionAttachmentDTO> questionAttachmentDTOList) {
        this.questionAttachmentDTOList = questionAttachmentDTOList;
    }
}

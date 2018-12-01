package lk.ijse.edu.answersville.dto;

public class QuestionAttachmentDTO {

    private long id;
    private QuestionDTO questionDTO;
    private String attachmentUrl;

    public QuestionAttachmentDTO() {
    }

    public QuestionAttachmentDTO(long id, QuestionDTO questionDTO, String attachmentUrl) {
        this.id = id;
        this.questionDTO = questionDTO;
        this.attachmentUrl = attachmentUrl;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public QuestionDTO getQuestionDTO() {
        return questionDTO;
    }

    public void setQuestionDTO(QuestionDTO questionDTO) {
        this.questionDTO = questionDTO;
    }

    public String getAttachmentUrl() {
        return attachmentUrl;
    }

    public void setAttachmentUrl(String attachmentUrl) {
        this.attachmentUrl = attachmentUrl;
    }
}

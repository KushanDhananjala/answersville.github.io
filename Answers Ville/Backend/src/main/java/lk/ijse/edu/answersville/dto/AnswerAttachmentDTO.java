package lk.ijse.edu.answersville.dto;

public class AnswerAttachmentDTO {

    private long id;
    private AnswerDTO answerDTO;
    private String attachmentUrl;

    public AnswerAttachmentDTO() {
    }

    public AnswerAttachmentDTO(long id, AnswerDTO answerDTO, String attachmentUrl) {
        this.id = id;
        this.answerDTO = answerDTO;
        this.attachmentUrl = attachmentUrl;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public AnswerDTO getAnswerDTO() {
        return answerDTO;
    }

    public void setAnswerDTO(AnswerDTO answerDTO) {
        this.answerDTO = answerDTO;
    }

    public String getAttachmentUrl() {
        return attachmentUrl;
    }

    public void setAttachmentUrl(String attachmentUrl) {
        this.attachmentUrl = attachmentUrl;
    }
}

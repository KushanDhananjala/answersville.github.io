package lk.ijse.edu.answersville.dto;

public class CustomTagDetailDTO {

    private long questionID;
    private long tagID;
    private String tagName;

    public CustomTagDetailDTO() {
    }

    public CustomTagDetailDTO(long questionID, long tagID, String tagName) {
        this.questionID = questionID;
        this.tagID = tagID;
        this.tagName = tagName;
    }

    public long getQuestionID() {
        return questionID;
    }

    public void setQuestionID(long questionID) {
        this.questionID = questionID;
    }

    public long getTagID() {
        return tagID;
    }

    public void setTagID(long tagID) {
        this.tagID = tagID;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }
}

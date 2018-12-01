package lk.ijse.edu.answersville.dto;

public class TagDetailDTO {

    private long questionID;
    private long tagID;

    public TagDetailDTO() {
    }

    public TagDetailDTO(long questionID, long tagID) {
        this.questionID = questionID;
        this.tagID = tagID;
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
}

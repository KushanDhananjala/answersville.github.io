package lk.ijse.edu.answersville.dto;

public class QuestionVotesDTO {
    private long id;
    private String userName;
    private long questionID;
    private String date;
    private int status;

    public QuestionVotesDTO() {
    }

    public QuestionVotesDTO(long id, String userName, long questionID, String date, int status) {
        this.id = id;
        this.userName = userName;
        this.questionID = questionID;
        this.date = date;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public long getQuestionID() {
        return questionID;
    }

    public void setQuestionID(long questionID) {
        this.questionID = questionID;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}

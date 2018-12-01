package lk.ijse.edu.answersville.dto;

public class ReportedAnswerDTO {

    private long id;
    private String userName;
    private long answerID;
    private String date;
    private String reason;
    private int status;

    public ReportedAnswerDTO() {
    }

    public ReportedAnswerDTO(long id, String userName, long answerID, String date, String reason, int status) {
        this.id = id;
        this.userName = userName;
        this.answerID = answerID;
        this.date = date;
        this.reason = reason;
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

    public long getAnswerID() {
        return answerID;
    }

    public void setAnswerID(long answerID) {
        this.answerID = answerID;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}

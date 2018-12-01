package lk.ijse.edu.answersville.dto;

public class CustomReportedQuestionDTO {

    private long id;
    private String userName;
    private String userprofileImageUrl;
    private long questionID;
    private String questionTitle;
    private String questionBody;
    private String date;
    private String reason;
    private int status;

    public CustomReportedQuestionDTO() {
    }

    public CustomReportedQuestionDTO(long id, String userName, String userprofileImageUrl, long questionID, String questionTitle, String questionBody, String date, String reason, int status) {
        this.id = id;
        this.userName = userName;
        this.userprofileImageUrl = userprofileImageUrl;
        this.questionID = questionID;
        this.questionTitle = questionTitle;
        this.questionBody = questionBody;
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

    public String getUserprofileImageUrl() {
        return userprofileImageUrl;
    }

    public void setUserprofileImageUrl(String userprofileImageUrl) {
        this.userprofileImageUrl = userprofileImageUrl;
    }

    public long getQuestionID() {
        return questionID;
    }

    public void setQuestionID(long questionID) {
        this.questionID = questionID;
    }

    public String getQuestionTitle() {
        return questionTitle;
    }

    public void setQuestionTitle(String questionTitle) {
        this.questionTitle = questionTitle;
    }

    public String getQuestionBody() {
        return questionBody;
    }

    public void setQuestionBody(String questionBody) {
        this.questionBody = questionBody;
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

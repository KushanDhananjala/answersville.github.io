package lk.ijse.edu.answersville.dto;

public class CustomReportedAnswerDTO {

    private long id;
    private String userName;
    private String userProfileImageUrl;
    private long answerID;
    private String answer;
    private String date;
    private String reason;
    private int status;
    private long questionID;
    private String question;

    public CustomReportedAnswerDTO() {
    }

    public CustomReportedAnswerDTO(long id, String userName, String userProfileImageUrl, long answerID, String answer, String date, String reason, int status, long questionID, String question) {
        this.id = id;
        this.userName = userName;
        this.userProfileImageUrl = userProfileImageUrl;
        this.answerID = answerID;
        this.answer = answer;
        this.date = date;
        this.reason = reason;
        this.status = status;
        this.questionID = questionID;
        this.question = question;
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

    public String getUserProfileImageUrl() {
        return userProfileImageUrl;
    }

    public void setUserProfileImageUrl(String userProfileImageUrl) {
        this.userProfileImageUrl = userProfileImageUrl;
    }

    public long getAnswerID() {
        return answerID;
    }

    public void setAnswerID(long answerID) {
        this.answerID = answerID;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
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

    public long getQuestionID() {
        return questionID;
    }

    public void setQuestionID(long questionID) {
        this.questionID = questionID;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }
}

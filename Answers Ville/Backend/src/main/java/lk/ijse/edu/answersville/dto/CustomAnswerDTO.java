package lk.ijse.edu.answersville.dto;

public class CustomAnswerDTO {

    private long answerID;
    private long questionID;
    private String answer;
    private long score;
    private int status;
    private String date;
    private String userName;
    private String userDisplayName;
    private String userProfileImageUrl;
    private String userBadgeName;

    public CustomAnswerDTO() {
    }

    public CustomAnswerDTO(long answerID, long questionID, String answer, long score, int status, String date, String userName, String userDisplayName, String userProfileImageUrl, String userBadgeName) {
        this.answerID = answerID;
        this.questionID = questionID;
        this.answer = answer;
        this.score = score;
        this.status = status;
        this.date = date;
        this.userName = userName;
        this.userDisplayName = userDisplayName;
        this.userProfileImageUrl = userProfileImageUrl;
        this.userBadgeName = userBadgeName;
    }

    public long getAnswerID() {
        return answerID;
    }

    public void setAnswerID(long answerID) {
        this.answerID = answerID;
    }

    public long getQuestionID() {
        return questionID;
    }

    public void setQuestionID(long questionID) {
        this.questionID = questionID;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public long getScore() {
        return score;
    }

    public void setScore(long score) {
        this.score = score;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserDisplayName() {
        return userDisplayName;
    }

    public void setUserDisplayName(String userDisplayName) {
        this.userDisplayName = userDisplayName;
    }

    public String getUserProfileImageUrl() {
        return userProfileImageUrl;
    }

    public void setUserProfileImageUrl(String userProfileImageUrl) {
        this.userProfileImageUrl = userProfileImageUrl;
    }

    public String getUserBadgeName() {
        return userBadgeName;
    }

    public void setUserBadgeName(String userBadgeName) {
        this.userBadgeName = userBadgeName;
    }
}

package lk.ijse.edu.answersville.dto;

public class CustomQuestionDTO {

    private String userName;
    private String userDisplyName;
    private String userprofileImageUrl;
    private String badgeName;
    private long questionID;
    private String questionTitle;
    private String questionBody;
    private String questionCreationDate;
    private long questionAnswersCount;
    private long questionViewsCount;
    private long questionVotesCount;
    private int questionActive;

    public CustomQuestionDTO() {
    }

    public CustomQuestionDTO(String userName, String userDisplyName, String userprofileImageUrl, String badgeName, long questionID, String questionTitle, String questionBody, String questionCreationDate, long questionAnswersCount, long questionViewsCount, long questionVotesCount, int questionActive) {
        this.userName = userName;
        this.userDisplyName = userDisplyName;
        this.userprofileImageUrl = userprofileImageUrl;
        this.badgeName = badgeName;
        this.questionID = questionID;
        this.questionTitle = questionTitle;
        this.questionBody = questionBody;
        this.questionCreationDate = questionCreationDate;
        this.questionAnswersCount = questionAnswersCount;
        this.questionViewsCount = questionViewsCount;
        this.questionVotesCount = questionVotesCount;
        this.questionActive = questionActive;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserDisplyName() {
        return userDisplyName;
    }

    public void setUserDisplyName(String userDisplyName) {
        this.userDisplyName = userDisplyName;
    }

    public String getUserprofileImageUrl() {
        return userprofileImageUrl;
    }

    public void setUserprofileImageUrl(String userprofileImageUrl) {
        this.userprofileImageUrl = userprofileImageUrl;
    }

    public String getBadgeName() {
        return badgeName;
    }

    public void setBadgeName(String badgeName) {
        this.badgeName = badgeName;
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

    public String getQuestionCreationDate() {
        return questionCreationDate;
    }

    public void setQuestionCreationDate(String questionCreationDate) {
        this.questionCreationDate = questionCreationDate;
    }

    public long getQuestionAnswersCount() {
        return questionAnswersCount;
    }

    public void setQuestionAnswersCount(long questionAnswersCount) {
        this.questionAnswersCount = questionAnswersCount;
    }

    public long getQuestionViewsCount() {
        return questionViewsCount;
    }

    public void setQuestionViewsCount(long questionViewsCount) {
        this.questionViewsCount = questionViewsCount;
    }

    public long getQuestionVotesCount() {
        return questionVotesCount;
    }

    public void setQuestionVotesCount(long questionVotesCount) {
        this.questionVotesCount = questionVotesCount;
    }

    public int getQuestionActive() {
        return questionActive;
    }

    public void setQuestionActive(int questionActive) {
        this.questionActive = questionActive;
    }
}

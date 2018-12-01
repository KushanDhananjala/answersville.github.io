package lk.ijse.edu.answersville.dto;

public class AnswerDTO {

    private long id;
    private String userName;
    private long questionID;
    private String answer;
    private long score;
    private int status;
    private String date;

    public AnswerDTO() {
    }

    public AnswerDTO(long id, String userName, long questionID, String answer, long score, int status, String date) {
        this.id = id;
        this.userName = userName;
        this.questionID = questionID;
        this.answer = answer;
        this.score = score;
        this.status = status;
        this.date = date;
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
}

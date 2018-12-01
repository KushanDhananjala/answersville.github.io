package lk.ijse.edu.answersville.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(name = "userName")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;
    @ManyToOne
    @JoinColumn(name = "questionID")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Question question;
    private String answer;
    private long score;
    private int status;
    private String date;

    public Answer() {
    }

    public Answer(User user, Question question, String answer, long score, int status, String date) {
        this.user = user;
        this.question = question;
        this.answer = answer;
        this.score = score;
        this.status = status;
        this.date = date;
    }

    public Answer(long id, User user, Question question, String answer, long score, int status, String date) {
        this.id = id;
        this.user = user;
        this.question = question;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
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

    @Override
    public String toString() {
        return "Answer{" +
                "id=" + id +
                ", user=" + user +
                ", question=" + question +
                ", answer='" + answer + '\'' +
                ", score=" + score +
                ", status=" + status +
                ", date='" + date + '\'' +
                '}';
    }
}

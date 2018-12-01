package lk.ijse.edu.answersville.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class AnswerVote {

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
    @ManyToOne
    @JoinColumn(name = "answerID")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Answer answer;
    private String date;
    private int status;

    public AnswerVote() {
    }

    public AnswerVote(User user, Question question, Answer answer, String date, int status) {
        this.user = user;
        this.question = question;
        this.answer = answer;
        this.date = date;
        this.status = status;
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

    public Answer getAnswer() {
        return answer;
    }

    public void setAnswer(Answer answer) {
        this.answer = answer;
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

    @Override
    public String toString() {
        return "AnswerVote{" +
                "id=" + id +
                ", user=" + user +
                ", question=" + question +
                ", answer=" + answer +
                ", date='" + date + '\'' +
                ", status=" + status +
                '}';
    }
}

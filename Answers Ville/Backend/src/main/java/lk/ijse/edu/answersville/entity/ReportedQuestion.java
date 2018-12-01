package lk.ijse.edu.answersville.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class ReportedQuestion {

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
    private String date;
    private String reason;
    private int status;

    public ReportedQuestion() {
    }

    public ReportedQuestion(User user, Question question, String date, String reason, int status) {
        this.user = user;
        this.question = question;
        this.date = date;
        this.reason = reason;
        this.status = status;
    }

    public ReportedQuestion(long id, User user, Question question, String date, String reason, int status) {
        this.id = id;
        this.user = user;
        this.question = question;
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

    @Override
    public String toString() {
        return "ReportedQuestion{" +
                "id=" + id +
                ", user=" + user +
                ", question=" + question +
                ", date='" + date + '\'' +
                ", reason='" + reason + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}

package lk.ijse.edu.answersville.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class ReportedAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(name = "userName")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;
    @ManyToOne
    @JoinColumn(name = "answerID")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Answer answer;
    private String date;
    private String reason;
    private int status;

    public ReportedAnswer() {
    }

    public ReportedAnswer(User user, Answer answer, String date, String reason, int status) {
        this.user = user;
        this.answer = answer;
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
        return "ReportedAnswer{" +
                "id=" + id +
                ", user=" + user +
                ", answer=" + answer +
                ", date='" + date + '\'' +
                ", reason='" + reason + '\'' +
                ", status=" + status +
                '}';
    }
}

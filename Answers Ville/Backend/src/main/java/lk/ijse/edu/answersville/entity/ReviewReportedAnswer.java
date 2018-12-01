package lk.ijse.edu.answersville.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class ReviewReportedAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "reportedID")
    private ReportedAnswer reportedAnswer;
    @ManyToOne
    @JoinColumn(name = "adminName")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Admin admin;
    private String date;
    private String action;

    public ReviewReportedAnswer() {
    }

    public ReviewReportedAnswer(ReportedAnswer reportedAnswer, Admin admin, String date, String action) {
        this.reportedAnswer = reportedAnswer;
        this.admin = admin;
        this.date = date;
        this.action = action;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public ReportedAnswer getReportedAnswer() {
        return reportedAnswer;
    }

    public void setReportedAnswer(ReportedAnswer reportedAnswer) {
        this.reportedAnswer = reportedAnswer;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    @Override
    public String toString() {
        return "ReviewReportedAnswer{" +
                "id=" + id +
                ", reportedAnswer=" + reportedAnswer +
                ", admin=" + admin +
                ", date='" + date + '\'' +
                ", action='" + action + '\'' +
                '}';
    }
}

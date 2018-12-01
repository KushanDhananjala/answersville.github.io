package lk.ijse.edu.answersville.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;

@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String body;
    private String creationDate;
    private long votesCount;
    private long answersCount;
    private long viewsCount;
    private int active;
    @ManyToOne
    @JoinColumn(name = "userName")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;
    @ManyToMany(cascade = CascadeType.ALL)
    private List<TagDetail> tagDetailList;

    public Question() {
    }

    public Question(String title, String body, String creationDate, long votesCount, long answersCount, long viewsCount, int active, User user, List<TagDetail> tagDetailList) {
        this.title = title;
        this.body = body;
        this.creationDate = creationDate;
        this.votesCount = votesCount;
        this.answersCount = answersCount;
        this.viewsCount = viewsCount;
        this.active = active;
        this.user = user;
        this.tagDetailList = tagDetailList;
    }

    public Question(long id, String title, String body, String creationDate, long votesCount, long answersCount, long viewsCount, int active, User user, List<TagDetail> tagDetailList) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.creationDate = creationDate;
        this.votesCount = votesCount;
        this.answersCount = answersCount;
        this.viewsCount = viewsCount;
        this.active = active;
        this.user = user;
        this.tagDetailList = tagDetailList;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }

    public long getVotesCount() {
        return votesCount;
    }

    public void setVotesCount(long votesCount) {
        this.votesCount = votesCount;
    }

    public long getAnswersCount() {
        return answersCount;
    }

    public void setAnswersCount(long answersCount) {
        this.answersCount = answersCount;
    }

    public long getViewsCount() {
        return viewsCount;
    }

    public void setViewsCount(long viewsCount) {
        this.viewsCount = viewsCount;
    }

    public int getActive() {
        return active;
    }

    public void setActive(int active) {
        this.active = active;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<TagDetail> getTagDetailList() {
        return tagDetailList;
    }

    public void setTagDetailList(List<TagDetail> tagDetailList) {
        this.tagDetailList = tagDetailList;
    }

    @Override
    public String
    toString() {
        return "Question{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", body='" + body + '\'' +
                ", creationDate='" + creationDate + '\'' +
                ", votesCount=" + votesCount +
                ", answersCount=" + answersCount +
                ", viewsCount=" + viewsCount +
                ", active=" + active +
                ", user=" + user +
                ", tagDetailList=" + tagDetailList +
                '}';
    }
}

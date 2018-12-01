package lk.ijse.edu.answersville.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class QuestionAttachment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(name = "questionID")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Question question;
    private String attachmentUrl;

    public QuestionAttachment() {
    }

    public QuestionAttachment(Question question, String attachmentUrl) {
        this.question = question;
        this.attachmentUrl = attachmentUrl;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public String getAttachmentUrl() {
        return attachmentUrl;
    }

    public void setAttachmentUrl(String attachmentUrl) {
        this.attachmentUrl = attachmentUrl;
    }

    @Override
    public String toString() {
        return "QuestionAttachment{" +
                "id=" + id +
                ", question=" + question +
                ", attachmentUrl='" + attachmentUrl + '\'' +
                '}';
    }
}

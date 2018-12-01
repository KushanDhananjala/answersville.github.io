package lk.ijse.edu.answersville.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class AnswerAttachment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(name = "answerID")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Answer answer;
    private String attachmentUrl;

    public AnswerAttachment() {
    }

    public AnswerAttachment(Answer answer, String attachmentUrl) {
        this.answer = answer;
        this.attachmentUrl = attachmentUrl;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Answer getAnswer() {
        return answer;
    }

    public void setAnswer(Answer answer) {
        this.answer = answer;
    }

    public String getAttachmentUrl() {
        return attachmentUrl;
    }

    public void setAttachmentUrl(String attachmentUrl) {
        this.attachmentUrl = attachmentUrl;
    }

    @Override
    public String toString() {
        return "AnswerAttachment{" +
                "id=" + id +
                ", answer=" + answer +
                ", attachmentUrl='" + attachmentUrl + '\'' +
                '}';
    }
}

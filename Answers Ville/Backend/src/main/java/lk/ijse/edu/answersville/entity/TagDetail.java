package lk.ijse.edu.answersville.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity
public class TagDetail {

    @EmbeddedId
    private TagDetail_PK tagDetail_pk;

    public TagDetail() {
    }

    public TagDetail(long questionID, long tagID) {
        this.tagDetail_pk = new TagDetail_PK(questionID, tagID);
    }

    public TagDetail_PK getTagDetail_pk() {
        return tagDetail_pk;
    }

    public void setTagDetail_pk(TagDetail_PK tagDetail_pk) {
        this.tagDetail_pk = tagDetail_pk;
    }

    @Override
    public String toString() {
        return "TagDetail{" +
                "tagDetail_pk=" + tagDetail_pk +
                '}';
    }

//    @ManyToOne
//    @JoinColumn(name = "questionID", insertable = false, updatable = false)
//    @OnDelete(action = OnDeleteAction.CASCADE)
//    private Question question;
//    @ManyToOne
//    @JoinColumn(name = "tagID", insertable = false, updatable = false)
//    @OnDelete(action = OnDeleteAction.CASCADE)
//    private Tag tag;
//    @EmbeddedId
//    private TagDetail_PK tagDetail_pk;
//
//    public TagDetail() {
//    }
//
//    public TagDetail(Question question, Tag tag, TagDetail_PK tagDetail_pk) {
//        this.question = question;
//        this.tag = tag;
//        this.tagDetail_pk = new TagDetail_PK(question.getId(), tag.getId());
//    }
//
//    public Question getQuestion() {
//        return question;
//    }
//
//    public void setQuestion(Question question) {
//        this.question = question;
//    }
//
//    public Tag getTag() {
//        return tag;
//    }
//
//    public void setTag(Tag tag) {
//        this.tag = tag;
//    }
//
//    public TagDetail_PK getTagDetail_pk() {
//        return tagDetail_pk;
//    }
//
//    public void setTagDetail_pk(TagDetail_PK tagDetail_pk) {
//        this.tagDetail_pk = tagDetail_pk;
//    }
//
//    @Override
//    public String toString() {
//        return "TagDetail{" +
//                "question=" + question +
//                ", tag=" + tag +
//                ", tagDetail_pk=" + tagDetail_pk +
//                '}';
//    }

}

package lk.ijse.edu.answersville.entity;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class TagDetail_PK implements Serializable {

    private long questionID;
    private long tagID;

    public TagDetail_PK() {
    }

    public TagDetail_PK(long questionID, long tagID) {
        this.questionID = questionID;
        this.tagID = tagID;
    }
}

package lk.ijse.edu.answersville.dto;

import lk.ijse.edu.answersville.entity.TagDetail;

import java.util.List;

public class QuestionDTO {

    private long id;
    private String title;
    private String body;
    private String creationDate;
    private long votesCount;
    private long answersCount;
    private long viewsCount;
    private int active;
    private String userName;
    private List<TagDetailDTO> tagDetailDTOList;

    public QuestionDTO() {
    }

    public QuestionDTO(long id, String title, String body, String creationDate, long votesCount, long answersCount, long viewsCount, int active, String userName, List<TagDetailDTO> tagDetailDTOList) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.creationDate = creationDate;
        this.votesCount = votesCount;
        this.answersCount = answersCount;
        this.viewsCount = viewsCount;
        this.active = active;
        this.userName = userName;
        this.tagDetailDTOList = tagDetailDTOList;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public List<TagDetailDTO> getTagDetailDTOList() {
        return tagDetailDTOList;
    }

    public void setTagDetailDTOList(List<TagDetailDTO> tagDetailDTOList) {
        this.tagDetailDTOList = tagDetailDTOList;
    }
}

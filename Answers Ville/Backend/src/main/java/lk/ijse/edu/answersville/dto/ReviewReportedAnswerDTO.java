package lk.ijse.edu.answersville.dto;

public class ReviewReportedAnswerDTO {

    private long id;
    private long reportedID;
    private String adminName;
    private String date;
    private String action;

    public ReviewReportedAnswerDTO() {
    }

    public ReviewReportedAnswerDTO(long id, long reportedID, String adminName, String date, String action) {
        this.id = id;
        this.reportedID = reportedID;
        this.adminName = adminName;
        this.date = date;
        this.action = action;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getReportedID() {
        return reportedID;
    }

    public void setReportedID(long reportedID) {
        this.reportedID = reportedID;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
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
}

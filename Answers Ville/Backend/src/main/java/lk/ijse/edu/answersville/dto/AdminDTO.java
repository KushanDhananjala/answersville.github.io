package lk.ijse.edu.answersville.dto;

public class AdminDTO {
    private String name;
    private String displayName;
    private String email;
    private String password;
    private int age;
    private String joinDate;
    private String location;
    private String about;
    private String reputation;
    private String facebookUrl;
    private String githubUrl;
    private String profileImageUrl;
    private int position;

    public AdminDTO() {
    }

    public AdminDTO(String name, String displayName, String email, String password, int age, String joinDate, String location, String about, String reputation, String facebookUrl, String githubUrl, String profileImageUrl, int position) {
        this.name = name;
        this.displayName = displayName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.joinDate = joinDate;
        this.location = location;
        this.about = about;
        this.reputation = reputation;
        this.facebookUrl = facebookUrl;
        this.githubUrl = githubUrl;
        this.profileImageUrl = profileImageUrl;
        this.position = position;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(String joinDate) {
        this.joinDate = joinDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getReputation() {
        return reputation;
    }

    public void setReputation(String reputation) {
        this.reputation = reputation;
    }

    public String getFacebookUrl() {
        return facebookUrl;
    }

    public void setFacebookUrl(String facebookUrl) {
        this.facebookUrl = facebookUrl;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getProfileImageUrl() {
        return profileImageUrl;
    }

    public void setProfileImageUrl(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }
}

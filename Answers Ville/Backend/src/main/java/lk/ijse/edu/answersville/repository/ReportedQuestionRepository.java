package lk.ijse.edu.answersville.repository;

import lk.ijse.edu.answersville.entity.ReportedQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;

public interface ReportedQuestionRepository extends JpaRepository<ReportedQuestion, Long> {

    @Query(value = "SELECT rq.id, rq.userName, u.profileImageUrl, rq.questionID, q.title, q.body, rq.date, rq.reason, rq.status \n" +
            "FROM ReportedQuestion rq, User u, Question q \n" +
            "WHERE rq.status=0 AND rq.userName=u.name AND rq.questionID=q.id \n" +
            "ORDER BY (rq.date) ASC", nativeQuery = true)
    ArrayList<Object[]> getReportedQuestions();

    @Modifying
    @Query(value = "UPDATE ReportedQuestion rq SET rq.status=:status \n" +
            "WHERE lower(rq.question)=lower(:questionID)")
    void updateReportedQuestionStatus(@Param("questionID") long questionID, @Param("status") int status);

    @Query(value = "SELECT rq.userName \n" +
            "FROM ReportedQuestion rq \n" +
            "WHERE lower(rq.questionID)=lower(:questionID)", nativeQuery = true)
    ArrayList<String> getReportedQuestionUsers(@Param("questionID") long questionID);

    @Query(value = "SELECT rq.id \n" +
            "FROM ReportedQuestion rq \n" +
            "WHERE lower(rq.questionID)=lower(:questionID)", nativeQuery = true)
    ArrayList<Object> getReportedQuestionIDs(@Param("questionID") long questionID);

}

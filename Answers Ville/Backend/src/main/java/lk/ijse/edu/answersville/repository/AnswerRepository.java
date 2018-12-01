package lk.ijse.edu.answersville.repository;

import lk.ijse.edu.answersville.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    @Query(value = "SELECT MAX(a.id) FROM Answer a")
    String getLastID();

    @Query(value = "SELECT a.id,a.questionID,a.answer,a.score,a.status,a.date,u.name AS userName,u.displayName,u.profileImageUrl,b.name " +
            "FROM Answer a,User u,Badge b " +
            "WHERE a.status=1 AND a.userName=u.name AND u.badgeID=b.id AND lower(a.questionID)=lower(:questionID)", nativeQuery = true)
    ArrayList<Object[]> getQuestionAnswers(@Param("questionID") long questionID);

    @Query(value = "SELECT COUNT(a.id) FROM Answer a WHERE lower(a.user)=lower(:name) ")
    long getUserAnswersCount(@Param("name") String name);

    @Modifying
    @Query(value = "UPDATE Answer a SET a.score=:score \n" +
            "WHERE lower(a.id)=lower(:id)")
    void increseScore(@Param("id") long id, @Param("score") long score);

    @Modifying
    @Query(value = "UPDATE Answer a SET a.answer=:answer \n" +
            "WHERE lower(a.id)=lower(:id)")
    void updateAnswer(@Param("answer") String answer, @Param("id") long id);

    @Modifying
    @Query(value = "UPDATE Answer a SET a.status=:status \n" +
            "WHERE lower(a.id)=lower(:id)")
    void updateAnswerStatus(@Param("status") int status, @Param("id") long id);


}

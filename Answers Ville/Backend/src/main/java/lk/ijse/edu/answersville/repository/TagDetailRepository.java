package lk.ijse.edu.answersville.repository;

import lk.ijse.edu.answersville.entity.TagDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

public interface TagDetailRepository extends JpaRepository<TagDetail, Long> {

    @Query(value = "SELECT td.Question_id, td.tagDetailList_tagID, t.name\n" +
            "FROM Question q, Question_tagdetail td, Tag t\n" +
            "WHERE q.id=td.Question_id AND td.tagDetailList_tagID=t.id", nativeQuery = true)
    ArrayList<Object[]> getAllQuestionsTags();

}

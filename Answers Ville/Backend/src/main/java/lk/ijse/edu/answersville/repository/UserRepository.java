package lk.ijse.edu.answersville.repository;

import lk.ijse.edu.answersville.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;

public interface UserRepository extends JpaRepository<User, String> {

    @Query(value = "SELECT u.name, u.displayName, u.email, u.password, u.age, u.joinDate, u.location, \n" +
            "u.about, u.reputation, u.facebookUrl, u.githubUrl, u.profileImageUrl, u.points, u.badgeID \n" +
            "FROM User u \n" +
            "ORDER BY (u.points) DESC", nativeQuery = true)
    ArrayList<Object[]> getTopFiveUsers(Pageable pageable);

    @Query(value = "SELECT u.points \n" +
            "FROM User u \n" +
            " WHERE lower(u.name)=lower(:userName)")
    long getUserPoints(@Param("userName")String userName);

    @Modifying
    @Query(value = "UPDATE User u SET u.points=:points \n" +
            "WHERE lower(u.name)=lower(:userName)")
    void updateUserPoints(@Param("userName") String userName, @Param("points") long points);

    @Modifying
    @Query(value = "UPDATE User u SET u.badgeID=:badgeID \n" +
            "WHERE lower(u.name)=lower(:userName)",nativeQuery = true)
    void updateUserBadge(@Param("userName") String userName, @Param("badgeID") int badgeID);

}

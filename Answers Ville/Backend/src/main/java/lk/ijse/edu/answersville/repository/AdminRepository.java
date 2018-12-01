package lk.ijse.edu.answersville.repository;

import lk.ijse.edu.answersville.entity.Admin;
import lk.ijse.edu.answersville.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

public interface AdminRepository extends JpaRepository<Admin, String> {
}

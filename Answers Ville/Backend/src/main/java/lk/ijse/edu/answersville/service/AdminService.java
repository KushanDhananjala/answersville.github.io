package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.AdminDTO;
import lk.ijse.edu.answersville.dto.UserDTO;
import lk.ijse.edu.answersville.entity.Admin;

import java.util.ArrayList;

public interface AdminService {

    public boolean saveAdmin(AdminDTO adminDTO) throws Exception;

    public AdminDTO getAdmin(String id) throws Exception;

    public boolean deleteAdmin(String id) throws Exception;

    public ArrayList<AdminDTO> getAllAdmins() throws Exception;

    public boolean canAuthenticate(String username, String password) throws Exception;

    public long getTotalAdmins() throws Exception;

}

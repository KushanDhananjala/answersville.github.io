package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.UserDTO;

import java.util.ArrayList;

public interface UserService {

    public boolean saveUser(UserDTO userDTO) throws Exception;

    public UserDTO getUser(String id) throws Exception;

    public boolean deleteUser(String id) throws Exception;

    public ArrayList<UserDTO> getAllUsers() throws Exception;

    public boolean canAuthenticate(String username, String password) throws Exception;

    public long getTotalUsers() throws Exception;

    public boolean updateUser(UserDTO userDTO) throws Exception;

    ArrayList<UserDTO> getTopFiveUsers() throws Exception;

    public boolean updateUserPoints(String userName, long points) throws Exception;

}

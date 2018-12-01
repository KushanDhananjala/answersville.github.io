package lk.ijse.edu.answersville.service.impl;

import lk.ijse.edu.answersville.dto.UserDTO;
import lk.ijse.edu.answersville.entity.Badge;
import lk.ijse.edu.answersville.entity.User;
import lk.ijse.edu.answersville.repository.BadgeRepository;
import lk.ijse.edu.answersville.repository.UserRepository;
import lk.ijse.edu.answersville.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BadgeRepository badgeRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean saveUser(UserDTO userDTO) throws Exception {

        Badge badge = badgeRepository.findById(userDTO.getBadgeID()).get();

        User user = new User(userDTO.getName(), userDTO.getDisplayName(), userDTO.getEmail(),
                passwordEncoder.encode(userDTO.getPassword()), userDTO.getAge(), userDTO.getJoinDate(),
                userDTO.getLocation(), userDTO.getAbout(), userDTO.getReputation(), userDTO.getFacebookUrl(),
                userDTO.getGithubUrl(), userDTO.getProfileImageUrl(), userDTO.getPoints(), badge);

        userRepository.save(user);

        return true;

    }

    @Override
    public UserDTO getUser(String name) throws Exception {
        User user = userRepository.findById(name).get();

        UserDTO userDTO = new UserDTO(user.getName(), user.getDisplayName(), user.getEmail(), user.getPassword(),
                user.getAge(), user.getJoinDate(), user.getLocation(), user.getAbout(), user.getReputation(),
                user.getFacebookUrl(), user.getGithubUrl(), user.getProfileImageUrl(), user.getPoints(),
                user.getBadge().getId());

        return userDTO;

    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean deleteUser(String name) throws Exception {

        userRepository.deleteById(name);

        return true;

    }

    @Override
    public ArrayList<UserDTO> getAllUsers() throws Exception {

        ArrayList<UserDTO> userDTOS = new ArrayList<>();

        List<User> users = userRepository.findAll();

        for (User user : users) {
            UserDTO userDTO = new UserDTO(user.getName(), user.getDisplayName(), user.getEmail(), user.getPassword(),
                    user.getAge(), user.getJoinDate(), user.getLocation(), user.getAbout(), user.getReputation(),
                    user.getFacebookUrl(), user.getGithubUrl(), user.getProfileImageUrl(), user.getPoints(),
                    user.getBadge().getId());

            userDTOS.add(userDTO);
        }

        return userDTOS;

    }

    @Override
    public boolean canAuthenticate(String username, String password) throws Exception {

        boolean exists = userRepository.existsById(username);

        if (!exists) {
            return false;
        }

        User user = userRepository.findById(username).get();

        return passwordEncoder.matches(password, user.getPassword());
    }

    @Override
    public long getTotalUsers() {
        return userRepository.count();
    }

    @Override
    public boolean updateUser(UserDTO userDTO) throws Exception {
        Badge badge = badgeRepository.findById(userDTO.getBadgeID()).get();

        User user = new User(userDTO.getName(), userDTO.getDisplayName(), userDTO.getEmail(),
                userDTO.getPassword(), userDTO.getAge(), userDTO.getJoinDate(), userDTO.getLocation(), userDTO.getAbout(),
                userDTO.getReputation(), userDTO.getFacebookUrl(), userDTO.getGithubUrl(), userDTO.getProfileImageUrl(),
                userDTO.getPoints(), badge);

        userRepository.save(user);

        return true;
    }

    @Override
    public ArrayList<UserDTO> getTopFiveUsers() throws Exception {
        ArrayList<UserDTO> userDTOS = new ArrayList<>();

        List<Object[]> users = userRepository.getTopFiveUsers(new PageRequest(0, 5));

        for (Object[] o : users) {
            UserDTO userDTO = new UserDTO(o[0].toString(), o[1].toString(), o[2].toString(), o[3].toString(),
                    (Integer) o[4], o[5].toString(), o[6].toString(), o[7].toString(), o[8].toString(),
                    o[9].toString(), o[10].toString(), o[11].toString(), Long.parseLong(o[12].toString()),
                    (Integer) o[13]);

            userDTOS.add(userDTO);
        }

        return userDTOS;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean updateUserPoints(String userName, long points) throws Exception {

        User user = userRepository.findById(userName).get();

        userRepository.updateUserPoints(userName, points);

        if (points >= 1000) {
            if (user.getBadge().getId() != 6) {
                userRepository.updateUserBadge(userName, 6);
            }
        } else if (points >= 500) {
            if (user.getBadge().getId() != 5) {
                userRepository.updateUserBadge(userName, 5);
            }
        } else if (points >= 250) {
            if (user.getBadge().getId() != 4) {
                userRepository.updateUserBadge(userName, 4);
            }
        } else if (points >= 150) {
            if (user.getBadge().getId() != 3) {
                userRepository.updateUserBadge(userName, 3);
            }
        } else if (points >= 100) {
            if (user.getBadge().getId() != 2) {
                userRepository.updateUserBadge(userName, 2);
            }
        }

        return true;
    }
}

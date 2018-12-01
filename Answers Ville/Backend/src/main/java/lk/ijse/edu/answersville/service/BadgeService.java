package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.BadgeDTO;

import java.util.ArrayList;

public interface BadgeService {

    public boolean saveBadge(BadgeDTO badgeDTO) throws Exception;

    public BadgeDTO getBadge(int id) throws Exception;

    public boolean deleteBadge(int id) throws Exception;

    public ArrayList<BadgeDTO> getAllBadges() throws Exception;

    public boolean updateBadge(BadgeDTO badgeDTO) throws Exception;

}

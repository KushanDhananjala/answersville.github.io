package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.CustomTagDetailDTO;
import lk.ijse.edu.answersville.dto.TagDetailDTO;

import java.util.ArrayList;

public interface TagDetailService {

    public ArrayList<CustomTagDetailDTO> getAllQuestionsTags() throws Exception;

}

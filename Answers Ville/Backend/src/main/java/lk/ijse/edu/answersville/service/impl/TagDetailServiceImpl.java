package lk.ijse.edu.answersville.service.impl;

import lk.ijse.edu.answersville.dto.CustomTagDetailDTO;
import lk.ijse.edu.answersville.repository.TagDetailRepository;
import lk.ijse.edu.answersville.service.TagDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class TagDetailServiceImpl implements TagDetailService {

    @Autowired
    private TagDetailRepository tagDetailRepository;

    @Override
    public ArrayList<CustomTagDetailDTO> getAllQuestionsTags() throws Exception {

        ArrayList<Object[]> questionsTagList = tagDetailRepository.getAllQuestionsTags();
        ArrayList<CustomTagDetailDTO> questionsTags = new ArrayList<>();

        for (Object[] o : questionsTagList) {
            CustomTagDetailDTO CustomTagDetailDTO = new CustomTagDetailDTO(Long.parseLong(o[0].toString()),
                    Long.parseLong(o[1].toString()), o[2].toString());
            questionsTags.add(CustomTagDetailDTO);
        }
        return questionsTags;
    }
}

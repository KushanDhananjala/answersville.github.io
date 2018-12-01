package lk.ijse.edu.answersville.service.impl;

import lk.ijse.edu.answersville.dto.QuestionAttachmentDTO;
import lk.ijse.edu.answersville.dto.QuestionDTO;
import lk.ijse.edu.answersville.entity.Question;
import lk.ijse.edu.answersville.entity.QuestionAttachment;
import lk.ijse.edu.answersville.repository.QuestionAttachmentRepository;
import lk.ijse.edu.answersville.service.QuestionAttachmentService;
import lk.ijse.edu.answersville.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS)
public class QuestionAttachmentServiceImpl implements QuestionAttachmentService {

    @Autowired
    private QuestionAttachmentRepository questionAttachmentRepository;
    @Autowired
    private QuestionService questionService;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean deleteQuestionAttchment(long id) throws Exception {

        questionAttachmentRepository.deleteById(id);

        return true;
    }

    @Override
    public ArrayList<QuestionAttachmentDTO> getAllQuestionAttchments() throws Exception {

        ArrayList<QuestionAttachmentDTO> questionAttachmentDTOS = new ArrayList<>();

        List<QuestionAttachment> questionAttachments = questionAttachmentRepository.findAll();

        for (QuestionAttachment questionAttachment : questionAttachments) {

            QuestionDTO questionDTO = questionService.getQuestion(questionAttachment.getQuestion().getId());

            QuestionAttachmentDTO questionAttachmentDTO = new QuestionAttachmentDTO(questionAttachment.getId(), questionDTO
                    , questionAttachment.getAttachmentUrl());

            questionAttachmentDTOS.add(questionAttachmentDTO);
        }

        return questionAttachmentDTOS;

    }

    @Override
    public ArrayList<QuestionAttachmentDTO> getSelectedQuestionAttachments(long id) throws Exception {
        ArrayList<QuestionAttachmentDTO> questionAttachmentDTOS = new ArrayList<>();

        List<Object[]> questionAttachments = questionAttachmentRepository.getSelectedQuestionAttachments(id);

        for (Object[] o : questionAttachments) {

            Question question = (Question) o[1];

            QuestionDTO questionDTO = questionService.getQuestion(question.getId());

            QuestionAttachmentDTO questionAttachmentDTO = new QuestionAttachmentDTO((Long) o[0], questionDTO
                    , o[2].toString());

            questionAttachmentDTOS.add(questionAttachmentDTO);
        }

        return questionAttachmentDTOS;
    }
}

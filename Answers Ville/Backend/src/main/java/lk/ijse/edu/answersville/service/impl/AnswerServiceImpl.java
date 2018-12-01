package lk.ijse.edu.answersville.service.impl;

import lk.ijse.edu.answersville.dto.AnswerAttachmentDTO;
import lk.ijse.edu.answersville.dto.AnswerDTO;
import lk.ijse.edu.answersville.dto.CustomAnswerDTO;
import lk.ijse.edu.answersville.dto.PostAnswerDTO;
import lk.ijse.edu.answersville.entity.Answer;
import lk.ijse.edu.answersville.entity.AnswerAttachment;
import lk.ijse.edu.answersville.entity.Question;
import lk.ijse.edu.answersville.entity.User;
import lk.ijse.edu.answersville.repository.AnswerAttachmentRepository;
import lk.ijse.edu.answersville.repository.AnswerRepository;
import lk.ijse.edu.answersville.repository.QuestionRepository;
import lk.ijse.edu.answersville.repository.UserRepository;
import lk.ijse.edu.answersville.service.AnswerService;
import lk.ijse.edu.answersville.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class AnswerServiceImpl implements AnswerService {

    @Autowired
    private AnswerRepository answerRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private AnswerAttachmentRepository answerAttachmentRepository;
    @Autowired
    private UserService userService;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean saveAnswer(PostAnswerDTO postAnswerDTO) throws Exception {

        User user = userRepository.findById(postAnswerDTO.getAnswerDTO().getUserName()).get();

        Question question = questionRepository.findById(postAnswerDTO.getAnswerDTO().getQuestionID()).get();

        Answer answer = new Answer(user, question, postAnswerDTO.getAnswerDTO().getAnswer(),
                postAnswerDTO.getAnswerDTO().getScore(), postAnswerDTO.getAnswerDTO().getStatus(),
                postAnswerDTO.getAnswerDTO().getDate());

        answerRepository.save(answer);

        List<AnswerAttachmentDTO> answerAttachmentDTOS = postAnswerDTO.getAnswerAttachmentDTOList();

        boolean addAttchment = false;

        if (answerAttachmentDTOS != null) {
            for (AnswerAttachmentDTO answerAttachmentDTO : answerAttachmentDTOS) {
                AnswerAttachment answerAttachment = new AnswerAttachment(answer, answerAttachmentDTO.getAttachmentUrl());
                answerAttachmentRepository.save(answerAttachment);
            }
        }

        long currentUserPoints = userRepository.getUserPoints(user.getName());
        userService.updateUserPoints(user.getName(), currentUserPoints + 5);

        return true;

    }

    @Override
    public AnswerDTO getAnswer(long id) throws Exception {
        Answer answer = answerRepository.findById(id).get();
        AnswerDTO answerDTO = new AnswerDTO(answer.getId(), answer.getUser().getName(), answer.getQuestion().getId(),
                answer.getAnswer(), answer.getScore(), answer.getStatus(), answer.getDate());

        return answerDTO;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean deleteAnswer(long id) throws Exception {

        answerRepository.deleteById(id);

        return true;
    }

    @Override
    public ArrayList<CustomAnswerDTO> getQuestionAnswers(long questionID) throws Exception {

        ArrayList<Object[]> objectArrayList = answerRepository.getQuestionAnswers(questionID);
        ArrayList<CustomAnswerDTO> customAnswerDTOList = new ArrayList<>();

        for (Object[] o : objectArrayList) {
            CustomAnswerDTO customAnswerDTO = new CustomAnswerDTO();
            customAnswerDTO.setAnswerID(((BigInteger) o[0]).longValue());
            customAnswerDTO.setQuestionID(((BigInteger) o[1]).longValue());
            customAnswerDTO.setAnswer(o[2].toString());
            customAnswerDTO.setScore(((BigInteger) o[3]).longValue());
            customAnswerDTO.setStatus((Integer) o[4]);
            customAnswerDTO.setDate(o[5].toString());
            customAnswerDTO.setUserName(o[6].toString());
            customAnswerDTO.setUserDisplayName(o[7].toString());
            customAnswerDTO.setUserProfileImageUrl(o[8].toString());
            customAnswerDTO.setUserBadgeName(o[9].toString());

            customAnswerDTOList.add(customAnswerDTO);
        }

        return customAnswerDTOList;
    }

    @Override
    public String getLastID() throws Exception {
        return answerRepository.getLastID();
    }

    @Override
    public long getTotalAnswers() throws Exception {
        return answerRepository.count();
    }

    @Override
    public long getUserAnswerCount(String name) throws Exception {
        return answerRepository.getUserAnswersCount(name);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean increseScore(AnswerDTO answerDTO) throws Exception {
        answerRepository.increseScore(answerDTO.getId(), answerDTO.getScore());

        long currentUserPoints = userRepository.getUserPoints(answerDTO.getUserName());
        userService.updateUserPoints(answerDTO.getUserName(), currentUserPoints + 1);

        return true;
    }
}

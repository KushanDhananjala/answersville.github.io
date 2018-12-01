package lk.ijse.edu.answersville.service.impl;

import lk.ijse.edu.answersville.dto.AnswerVoteDTO;
import lk.ijse.edu.answersville.entity.Answer;
import lk.ijse.edu.answersville.entity.AnswerVote;
import lk.ijse.edu.answersville.entity.Question;
import lk.ijse.edu.answersville.entity.User;
import lk.ijse.edu.answersville.repository.AnswerRepository;
import lk.ijse.edu.answersville.repository.AnswerVoteRepository;
import lk.ijse.edu.answersville.repository.QuestionRepository;
import lk.ijse.edu.answersville.repository.UserRepository;
import lk.ijse.edu.answersville.service.AnswerVoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class AnswerVoteServiceImpl implements AnswerVoteService {

    @Autowired
    private AnswerVoteRepository answerVoteRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private AnswerRepository answerRepository;

    @Override
    public boolean saveAnswerVote(AnswerVoteDTO answerVoteDTO) throws Exception {
        User user = userRepository.findById(answerVoteDTO.getUserName()).get();
        Question question = questionRepository.findById(answerVoteDTO.getQuestionID()).get();
        Answer answer = answerRepository.findById(answerVoteDTO.getAnswerID()).get();

        AnswerVote answerVote = new AnswerVote(user, question, answer, answerVoteDTO.getDate(),
                answerVoteDTO.getStatus());

        answerVoteRepository.save(answerVote);

        return true;
    }

    @Override
    public AnswerVoteDTO getAnswerVote(long id) throws Exception {

        AnswerVote answerVote = answerVoteRepository.findById(id).get();

        AnswerVoteDTO answerVoteDTO = new AnswerVoteDTO(answerVote.getId(), answerVote.getUser().getName(),
                answerVote.getAnswer().getId(), answerVote.getQuestion().getId(), answerVote.getDate(),
                answerVote.getStatus());

        return answerVoteDTO;

    }

    @Override
    public boolean deleteAnswerVote(long id) throws Exception {

        answerVoteRepository.deleteById(id);

        return true;

    }

    @Override
    public ArrayList<AnswerVoteDTO> getAllAnswerVotes() throws Exception {

        List<AnswerVote> answerVotes = answerVoteRepository.findAll();

        ArrayList<AnswerVoteDTO> answerVoteDTOS = new ArrayList<>();

        for (AnswerVote answerVote : answerVotes) {
            AnswerVoteDTO answerVoteDTO = new AnswerVoteDTO(answerVote.getId(), answerVote.getUser().getName(),
                    answerVote.getAnswer().getId(), answerVote.getQuestion().getId(), answerVote.getDate(),
                    answerVote.getStatus());

            answerVoteDTOS.add(answerVoteDTO);
        }

        return answerVoteDTOS;

    }

    @Override
    public long getUserAnswerVotesCount(String name, long answerID) throws Exception {
        return answerVoteRepository.getUserQuestionVotesCount(name, answerID);
    }
}

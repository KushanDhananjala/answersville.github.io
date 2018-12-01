package lk.ijse.edu.answersville.service.impl;

import lk.ijse.edu.answersville.dto.TagDTO;
import lk.ijse.edu.answersville.entity.Tag;
import lk.ijse.edu.answersville.repository.TagRepository;
import lk.ijse.edu.answersville.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class TagServiceImpl implements TagService {

    @Autowired
    private TagRepository tagRepository;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean saveTag(TagDTO tagDTO) throws Exception {

        Tag tag = new Tag(tagDTO.getName(), tagDTO.getDescription());
        tagRepository.save(tag);

        return true;

    }

    @Override
    public TagDTO getTag(long id) throws Exception {

        Tag tag = tagRepository.findById(id).get();
        TagDTO tagDTO = new TagDTO(tag.getId(), tag.getName(), tag.getDescription());

        return tagDTO;

    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean deleteTag(long id) throws Exception {

        tagRepository.deleteById(id);
        return true;

    }

    @Override
    public ArrayList<TagDTO> getAllTags() throws Exception {

        ArrayList<TagDTO> tagDTOS = new ArrayList<>();

        List<Tag> tags = tagRepository.findAll();

        for (Tag tag : tags) {

            TagDTO tagDTO = new TagDTO(tag.getId(), tag.getName(), tag.getDescription());

            tagDTOS.add(tagDTO);
        }

        return tagDTOS;

    }

    @Override
    public boolean updateTag(TagDTO tagDTO) throws Exception {

        Tag tag = new Tag(tagDTO.getId(), tagDTO.getName(), tagDTO.getDescription());
        tagRepository.save(tag);

        return true;
    }
}

package lk.ijse.edu.answersville.service;

import lk.ijse.edu.answersville.dto.TagDTO;

import java.util.ArrayList;

public interface TagService {

    public boolean saveTag(TagDTO tagDTO) throws Exception;

    public TagDTO getTag(long id) throws Exception;

    public boolean deleteTag(long id) throws Exception;

    public ArrayList<TagDTO> getAllTags() throws Exception;

    public boolean updateTag(TagDTO tagDTO) throws Exception;

}

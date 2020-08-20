package com.example.shelter.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shelter.model.Comments;
import com.example.shelter.repository.CommentsRepository;

@Service
public class CommentsDao {
	@Autowired
	private CommentsRepository commentsRepository;
	
	public List<Comments> getComments(){
		return commentsRepository.findAll();
	}
	

}

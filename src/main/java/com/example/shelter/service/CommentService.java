package com.example.shelter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shelter.dao.CommentsDao;
import com.example.shelter.model.Comments;

@Service
public class CommentService {

	@Autowired
	private CommentsDao commentsDao;
	
	
	public List<Comments> getAllComments(){
		return commentsDao.getComments();
	}
	
}

package com.example.shelter.controller.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.shelter.model.Comments;
import com.example.shelter.repository.CommentsRepository;

@RequestMapping("/api/v1")
@RestController
public class CommentsController {

	@Autowired
	private CommentsRepository commentsRepository;
	
	public List<Comments> getAllComments(){
		return commentsRepository.findAll();
	}
	
	public Comments createComments(Comments comments) {
		return commentsRepository.save(comments);
	}
}

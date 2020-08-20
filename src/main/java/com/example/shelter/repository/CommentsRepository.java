package com.example.shelter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.shelter.model.Comments;


public interface CommentsRepository extends JpaRepository<Comments,Long>{

}

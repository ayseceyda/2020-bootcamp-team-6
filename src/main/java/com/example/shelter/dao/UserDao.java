package com.example.shelter.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.shelter.model.Animal;
import com.example.shelter.model.User;
import com.example.shelter.repository.AnimalRepository;
import com.example.shelter.repository.UserRepository;

public class UserDao {

	@Autowired
	private UserRepository userRepository;
	
	public List<User> getAllUsers() {
		return (List<User>) userRepository.findAll();
	}
}

package com.example.shelter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.shelter.dao.AnimalDao;
import com.example.shelter.dao.UserDao;
import com.example.shelter.model.User;

public class UserService {
	@Autowired
	private UserDao userDao;
	
	public List<User> getAllUsers(){
		return userDao.getAllUsers();
	}

}

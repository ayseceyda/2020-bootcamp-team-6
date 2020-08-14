package com.example.shelter.service;

import com.example.shelter.dto.UserRegistrationDto;
import com.example.shelter.model.User;

public interface UserService {
	User save(UserRegistrationDto registrationDto);

}

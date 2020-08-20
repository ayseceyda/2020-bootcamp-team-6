package com.example.shelter.controller.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.shelter.model.Appointment;
import com.example.shelter.repository.AppointmentRepository;

@RestController
@RequestMapping("api/v1")
public class AppointmentController {

	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@GetMapping("/appointments")
	public List<Appointment> getAllAppointments(){
		return appointmentRepository.findAll();
	}
}

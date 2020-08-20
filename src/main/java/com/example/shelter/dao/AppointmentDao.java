package com.example.shelter.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shelter.model.Appointment;
import com.example.shelter.repository.AppointmentRepository;

@Service
public class AppointmentDao {

	@Autowired
	private AppointmentRepository appointmentRepository;
	
	public List<Appointment> getAllAppointments(){
		return appointmentRepository.findAll();
		}
}

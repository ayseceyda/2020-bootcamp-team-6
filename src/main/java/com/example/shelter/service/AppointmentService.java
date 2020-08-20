package com.example.shelter.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.shelter.dao.AppointmentDao;
import com.example.shelter.model.Appointment;

@Service
public class AppointmentService {

	private AppointmentDao appointmentDao;
	
	public List<Appointment> getAllAppointments(){
		return appointmentDao.getAllAppointments();
	}
}

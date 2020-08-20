package com.example.shelter.dto;

import java.sql.Date;

public class AppointmentDto {
	
	private String username;
	private Date appointmentDate;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Date getAppointmentDate() {
		return appointmentDate;
	}
	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}
	

}

package com.example.shelter.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "references")
public class Reference {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String surname;
	private String email;
	private String phone;
	private boolean agreeterms;
	private boolean emailagree;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public boolean isAgreeterms() {
		return agreeterms;
	}
	public void setAgreeterms(boolean agreeterms) {
		this.agreeterms = agreeterms;
	}
	public boolean isEmailagree() {
		return emailagree;
	}
	public void setEmailagree(boolean emailagree) {
		this.emailagree = emailagree;
	}
}

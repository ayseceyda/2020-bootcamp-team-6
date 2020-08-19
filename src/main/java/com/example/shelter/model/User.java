package com.example.shelter.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;



@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int iduser;

	
	private String name;
	private String surname;
	private String address;
	private String birthday;
	private String rentInfo;
	private String petPolisy;
	private String yardInfo;
	private String familyInfo;
	private int childCount;
	private String IsDanger;
	
	private String username;
	private String password;
	
	/*@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(
			name = "users_roles",
			joinColumns = @JoinColumn(
					name = "user_id", referencedColumnName = "iduser"),
			inverseJoinColumns = @JoinColumn(
					name = "role_id", referencedColumnName = "id"))
	private Collection<Role> roles;
*/
	
	
	public User() {
		super();
	}

	


	public User(String name, String surname, String address, String birthday, String rentInfo,
			String petPolisy, String yardInfo, String familyInfo, int childCount, String isDanger, String username,
			String password) {
		super();
		this.name = name;
		this.surname = surname;
		this.address = address;
		this.birthday = birthday;
		this.rentInfo = rentInfo;
		this.petPolisy = petPolisy;
		this.yardInfo = yardInfo;
		this.familyInfo = familyInfo;
		this.childCount = childCount;
		IsDanger = isDanger;
		this.username = username;
		this.password = password;
	}




	public int getIduser() {
		return iduser;
	}



	public void setIduser(int iduser) {
		this.iduser = iduser;
	}



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



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getBirthday() {
		return birthday;
	}



	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}



	public String getRentInfo() {
		return rentInfo;
	}



	public void setRentInfo(String rentInfo) {
		this.rentInfo = rentInfo;
	}



	public String getPetPolisy() {
		return petPolisy;
	}



	public void setPetPolisy(String petPolisy) {
		this.petPolisy = petPolisy;
	}



	public String getYardInfo() {
		return yardInfo;
	}



	public void setYardInfo(String yardInfo) {
		this.yardInfo = yardInfo;
	}



	public String getFamilyInfo() {
		return familyInfo;
	}



	public void setFamilyInfo(String familyInfo) {
		this.familyInfo = familyInfo;
	}



	public int getChildCount() {
		return childCount;
	}



	public void setChildCount(int childCount) {
		this.childCount = childCount;
	}



	public String getIsDanger() {
		return IsDanger;
	}



	public void setIsDanger(String isDanger) {
		IsDanger = isDanger;
	}



	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}




	


	

}

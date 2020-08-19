package com.example.shelter.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Animal {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private String kind;
	
	private String breed;
	
	private int age;
	
	private int height;
	
	private int weight;
	
	private String gender;
	
	private String animalImage;
	private String animalStatus;
	
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getKind() {
		return kind;
	}
	public void setKind(String kind) {
		this.kind = kind;
	}
	public String getBreed() {
		return breed;
	}
	public void setBreed(String breed) {
		this.breed = breed;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public String getAnimalImage() {
		return animalImage;
	}
	public void setAnimalImage(String animalImage) {
		this.animalImage = animalImage;
	}
	public String getAnimalStatus() {
		return animalStatus;
	}
	public void setAnimalStatus(String animalStatus) {
		this.animalStatus = animalStatus;
	}
	
	
}

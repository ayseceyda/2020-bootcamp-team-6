package com.example.shelter.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.shelter.dto.AnimalDto;
import com.example.shelter.model.Animal;

public interface AnimalController {

	ResponseEntity<List<Animal>> findAllAnimals();

	ResponseEntity<Animal> findAnimalById(@PathVariable("id") long id);
	
	ResponseEntity<Animal> addAnimal(@RequestBody AnimalDto animalDto); 
}

package com.example.shelter.controller.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.shelter.controller.AnimalController;
import com.example.shelter.dto.AnimalDto;
import com.example.shelter.exception.AnimalNotFoundException;
import com.example.shelter.model.Animal;
import com.example.shelter.service.AnimalService;

@RestController
public class AnimalControllerImpl implements AnimalController {

	@Autowired
	private AnimalService animalService;

	@Override
	@GetMapping("/animals")
	public ResponseEntity<List<Animal>> findAllAnimals() {
		return ResponseEntity.ok(animalService.getAllAnimal());
	}

	@Override
	@PostMapping("/animals")
	public ResponseEntity<Animal> addAnimal(AnimalDto animalDto) {
		return ResponseEntity.status(HttpStatus.OK).body(animalService.addAnimal(animalDto));
	}

	@Override
	@GetMapping("/animals/{id}")
	public ResponseEntity<?> findAnimalById(@PathVariable("id") long id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(animalService.getAnimalById(id));
		} catch (AnimalNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@Override
	@DeleteMapping("/animals/{id}")
	public ResponseEntity<?> deleteAnimal(long id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(animalService.deleteAnimal(id));
		} catch (AnimalNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@Override
	@GetMapping("/searchby")
	public ResponseEntity<?> search(@RequestParam(name = "kind", required = false, defaultValue = "") String kind,
			@RequestParam(name = "gender", required = false, defaultValue = "") String gender,
			@RequestParam(name = "breed", required = false, defaultValue = "") String breed) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(animalService.queryAnimals(kind, gender, breed));
		} catch (AnimalNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

}

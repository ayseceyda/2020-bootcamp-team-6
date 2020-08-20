package com.example.shelter.service;

import java.util.List;

//import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.shelter.dao.AnimalDao;
import com.example.shelter.dto.AnimalDto;
import com.example.shelter.exception.AnimalNotFoundException;
import com.example.shelter.model.Animal;

@Service
public class AnimalService {
	
	@Autowired
	private AnimalDao animalDao;
	
	public List<Animal> getAllAnimals(){
		return animalDao.getAllAnimals();
	}
	
	public Animal getAnimalById(long id) throws AnimalNotFoundException {
		return animalDao.getAnimal(id);
	}
	
	public Animal addAnimal(AnimalDto animalDto) {
		Animal animal = new Animal();
		animal.setAge(animalDto.getAge());
		animal.setBreed(animalDto.getBreed());
		animal.setGender(animalDto.getGender());
		animal.setHeight(animalDto.getHeight());
		animal.setKind(animalDto.getKind());
		animal.setName(animalDto.getName());
		animal.setWeight(animalDto.getWeight());
		return animalDao.saveAnimal(animal);
	}

	
	
//	@GetMapping("/animals/{id}")
//	public Animal getAnimalWithID(@PathParam("id") long id){
//		return animalDao.getAnimal(id);
//	}

}

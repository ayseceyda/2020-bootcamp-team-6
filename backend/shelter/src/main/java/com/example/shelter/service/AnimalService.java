package com.example.shelter.service;

import java.util.List;

//import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shelter.dao.AnimalDao;
import com.example.shelter.dto.AnimalDto;
import com.example.shelter.exception.AnimalNotFoundException;
import com.example.shelter.model.Animal;

@Service
public class AnimalService {

//	private final Logger logger = LoggerFactory.getLogger(getClass());

	@Autowired
	private AnimalDao animalDao;

	public List<Animal> getAllAnimal() {
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

	public Animal deleteAnimal(long id) throws AnimalNotFoundException {
		return animalDao.deleteAnimalById(id);
	}

	public List<Animal> queryAnimals(String kind, String gender, String breed) throws AnimalNotFoundException {
		kind = kind.trim();
		gender = gender.trim();
		breed = breed.trim();
		if ((kind + gender + breed).equals("")) {
			return animalDao.getAllAnimals();
		}
		return animalDao.searchBy(breed, kind, gender);
		// TODO Auto-generated method stub

	}

}

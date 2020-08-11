package com.example.shelter.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shelter.exception.AnimalNotFoundException;
import com.example.shelter.model.Animal;
import com.example.shelter.repository.AnimalRepository;

@Service
public class AnimalDao {

	@Autowired
	private AnimalRepository animalRepository;

	public List<Animal> getAllAnimals() {
		return (List<Animal>) animalRepository.findAll();
	}

	public Animal getAnimal(long id) throws AnimalNotFoundException {
		try {
			return animalRepository.findById(id).get();
		} catch (Exception e) {
			throw new AnimalNotFoundException("Animal Not Found with ID:" + id);
		}
	}

	public Animal saveAnimal(Animal animalDto) {
		return animalRepository.save(animalDto);
	}

	public Animal deleteAnimalById(long id) throws AnimalNotFoundException {
		Optional<Animal> expectedAnimal = animalRepository.findById(id);
		try {
			animalRepository.deleteById(id);
			return expectedAnimal.get();
		} catch (Exception e) {
			throw new AnimalNotFoundException("Animal Not Found with ID:" + id);
		}

	}

	public List<Animal> searchBy(String breed, String kind, String gender) {
		return animalRepository.searchAnimalByKindBreedGender(breed, kind, gender);
	}

}

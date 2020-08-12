package com.example.shelter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.shelter.model.Animal;

@Repository
public interface AnimalRepository extends CrudRepository<Animal, Long> {

	@Query("SELECT a FROM Animal a WHERE (:breed is null or :breed='' or a.breed = :breed) "
			+ "AND (:kind is null or :kind='' or a.kind = :kind) "
			+ "AND (:gender is null or :gender='' or a.gender = :gender)")
	List<Animal> searchAnimalByKindBreedGender(@Param("breed") String breed, @Param("kind") String kind,
			@Param("gender") String gender);

}

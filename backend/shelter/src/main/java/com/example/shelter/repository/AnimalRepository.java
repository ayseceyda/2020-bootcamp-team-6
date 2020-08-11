package com.example.shelter.repository;



import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.example.shelter.model.Animal;

@Repository
public interface AnimalRepository extends CrudRepository<Animal,Long>{

	
}

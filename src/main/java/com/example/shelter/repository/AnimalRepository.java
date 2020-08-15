package com.example.shelter.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.shelter.model.Animal;

@Repository
public interface AnimalRepository extends JpaRepository<Animal,Long>{

	
}

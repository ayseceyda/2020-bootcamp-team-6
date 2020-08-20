package com.example.shelter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.shelter.model.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>{

}

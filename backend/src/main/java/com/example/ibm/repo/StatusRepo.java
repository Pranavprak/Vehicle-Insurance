package com.example.ibm.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ibm.model.Status;

@Repository
public interface StatusRepo extends JpaRepository<Status, Integer> {
	Status findByPolicy(int id);

}

package com.example.ibm.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.ibm.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
   
User findById(int id);
}

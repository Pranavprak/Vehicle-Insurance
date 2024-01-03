package com.example.ibm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.ibm.model.User;
import com.example.ibm.repo.UserRepo;

@Service
public class UserService {
     
	@Autowired
	private UserRepo repo;

	public List<User> getAllUser() {
		return repo.findAll();
	}
	public User findById(int id)
	{
		return repo.findById(id);
	}
	public void addUser(User user) {
	 	   repo.save(user);
	    }
}

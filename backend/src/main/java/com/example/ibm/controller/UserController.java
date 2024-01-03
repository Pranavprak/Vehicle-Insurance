package com.example.ibm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.ibm.model.Customer;
import com.example.ibm.model.User;
import com.example.ibm.service.UserService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

	@Autowired
	private UserService service;
	
	@RequestMapping("/user")
	public List<User> getAllUser() {
		return service.getAllUser();
		}
	
	@RequestMapping(method=RequestMethod.POST,value="/user/session")
	public User findByEmail(@RequestBody int id) {
		System.out.println(id);
		return service.findById(id);
	}
	@RequestMapping(method=RequestMethod.POST,value="/user")
	public void addRegister(@RequestBody User user) {
		System.out.println(user);
		service.addUser(user);
	}
}

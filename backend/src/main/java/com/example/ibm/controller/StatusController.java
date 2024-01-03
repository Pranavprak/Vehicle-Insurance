package com.example.ibm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.ibm.model.Status;
import com.example.ibm.service.StatusService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StatusController {

	@Autowired
	private StatusService service;
	
	@RequestMapping(method=RequestMethod.POST,value="/status")
	public void addStatus(@RequestBody Status status) {
		System.out.println("uts");
		service.addStatus(status);
	}
	
	@RequestMapping("/status")
	public List<Status> getStatus() {
		System.out.println("status");
		return service.getStatus();
	}
	@RequestMapping(method=RequestMethod.POST,value="/onestatus")
	public Status getstatus(@RequestBody int id) {
         return service.getstatus(id);		
	}
}

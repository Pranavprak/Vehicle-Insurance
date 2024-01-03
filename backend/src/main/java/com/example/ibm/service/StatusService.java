package com.example.ibm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ibm.model.Status;
import com.example.ibm.repo.StatusRepo;

@Service
public class StatusService {
 
	@Autowired
	private StatusRepo repo;
	
	public void addStatus(Status status) {
	 	   repo.save(status);
	    }
	
	public List<Status> getStatus(){
		return repo.findAll();
	}
	public Status getstatus(int id){
		return repo.findByPolicy(id);
	}
}

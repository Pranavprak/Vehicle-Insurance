package com.example.ibm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.ibm.model.Customer;
import com.example.ibm.repo.CustomerRepo;

@Service
public class CustomerService {
 
	
	@Autowired
	private CustomerRepo repo;
	
	public void addCustomer(Customer cus) {
	 	   repo.save(cus);
	    }
	public List<Customer> getcustomer() {
	 	   return repo.findAll();
	    }
	
	public Customer findByEmail(String email)
	{
		return repo.findByEmail(email);
	}
	
	public Boolean login(Customer customer) {
		Boolean login = null;
		Customer cus=repo.findByEmail(customer.getEmail());
		if(cus==null) {
			login=false;
		}
		else if(cus.getPassword().equals(customer.getPassword()))
		{
			login=true;
		}
		else
			login=false;
		return login;
		
		
	}
	public Boolean change(Customer customer) {
		Boolean change=null;
		Customer cus1=repo.findByEmail(customer.getEmail());
		if(cus1==null) {
			change=false;
		}
		else if(customer.getSecurity_Answer().equals(cus1.getSecurity_Answer()))
		{
			cus1.setPassword(customer.getPassword());
			repo.save(cus1);
			change=true;
		}
		else {
			change=false;
		}
		return change;
	}

}

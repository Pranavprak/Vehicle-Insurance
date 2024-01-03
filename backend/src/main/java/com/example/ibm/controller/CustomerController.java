package com.example.ibm.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.ibm.model.Customer;
import com.example.ibm.service.CustomerService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomerController {
	
	@Autowired
	private CustomerService service;
	
	@RequestMapping(method=RequestMethod.POST,value="/customer")
	public void addRegister(@RequestBody Customer cus) {
		System.out.println("uts");
		service.addCustomer(cus);
	}
	
	@RequestMapping(value="/customer")
	public List<Customer> getcustomer() {
		System.out.println("hi");
		return service.getcustomer();
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/customer/session")
	public Customer findByEmail(@RequestBody String email) {
		System.out.println("hiqw");
		System.out.println(email);
		System.out.println(service.findByEmail(email));
		return service.findByEmail(email);
	}

	
	@RequestMapping(method=RequestMethod.POST,value="/login")
	public Boolean login(@RequestBody Customer customer) {
		Boolean a=service.login(customer);
		return a;
	}
	@RequestMapping(method=RequestMethod.POST,value="/change")
	public Boolean change(@RequestBody Customer customer) {
		System.out.println(customer);
		Boolean a=service.change(customer);
		System.out.println(a);
		return a;
	}

}

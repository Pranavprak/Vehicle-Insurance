package com.example.ibm.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.ibm.model.Customer;

public interface CustomerRepo extends JpaRepository<Customer,Integer>{
 Customer findByEmail(String username);
 
 Customer findTopByOrderByIdDesc();
	/*
	 * @Query(value = "SELECT max(customer_id) FROM customer") Customer
	 * findByCustomerIdMax();
	 */
 

}

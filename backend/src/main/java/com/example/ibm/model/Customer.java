package com.example.ibm.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="customer_id")
	private int id;
	private String address;
	private String city;
	private String contact_No;
	private String customer_Name;
	private String dob;
	@Column(name="email_id")
	private String email;
	private String gender;
	private String password;
	private int pincode;
	private String security_Answer;
	private String security_Question;
	private String state;

	@Override
	public String toString() {
		return "Customer [customer_Id=" + id + ", address=" + address + ", city=" + city + ", contact_No="
				+ contact_No + ", customer_Name=" + customer_Name + ", dob=" + dob + ", email_Id=" + email
				+ ", gender=" + gender + ", password=" + password + ", pincode=" + pincode + ", security_Answer="
				+ security_Answer + ", security_Question=" + security_Question + ", state=" + state + "]";
	}
	public Customer() {
	}


	public int getId() {
		return this.id;
	}

	public void setCustomer_Id(int id) {
		this.id = id;
	}


	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}


	public String getCity() {
		return this.city;
	}

	public void setCity(String city) {
		this.city = city;
	}


	public String getContact_No() {
		return this.contact_No;
	}

	public void setContact_No(String contact_No) {
		this.contact_No = contact_No;
	}


	public String getCustomer_Name() {
		return this.customer_Name;
	}

	public void setCustomer_Name(String customer_Name) {
		this.customer_Name = customer_Name;
	}


	public String getDob() {
		return this.dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}


	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	public String getGender() {
		return this.gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public int getPincode() {
		return this.pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}


	public String getSecurity_Answer() {
		return this.security_Answer;
	}

	public void setSecurity_Answer(String security_Answer) {
		this.security_Answer = security_Answer;
	}


	public String getSecurity_Question() {
		return this.security_Question;
	}

	public void setSecurity_Question(String security_Question) {
		this.security_Question = security_Question;
	}


	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}
	}

package com.example.ibm.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int policy_no;
	
	/*@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
	private Customer customers;*/
	
	private int customer_id;
	private int plan_id;
	
	private int aadhar_no;
	private String pan_no;
	
	/*@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "plan_id", referencedColumnName = "plan_id")
	private Plans plans;*/
	
	private String vehicle_model;
	private String plate_no;
	private String engine_no;
	private int chassis_no;
	private String start_date;
	private String end_date;
	
	public User() {
	}

	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}

	public int getPlan_id() {
		return plan_id;
	}

	public void setPlan_id(int plan_id) {
		this.plan_id = plan_id;
	}

	public int getPolicy_no() {
		return policy_no;
	}

	public void setPolicy_no(int policy_no) {
		this.policy_no = policy_no;
	}

	/*public Customer getCustomers() {
		return customers;
	}

	public void setCustomers(Customer customers) {
		this.customers = customers;
	}*/

	


	

	public int getAadhar_no() {
		return aadhar_no;
	}

	public void setAadhar_no(int aadhar_no) {
		this.aadhar_no = aadhar_no;
	}

	public String getPan_no() {
		return pan_no;
	}

	public void setPan_no(String pan_no) {
		this.pan_no = pan_no;
	}

	/*public Plans getPlans() {
		return plans;
	}

	public void setPlans(Plans plans) {
		this.plans = plans;
	}*/

	public String getVehicle_model() {
		return vehicle_model;
	}

	public void setVehicle_model(String vehicle_model) {
		this.vehicle_model = vehicle_model;
	}

	public String getPlate_no() {
		return plate_no;
	}

	public void setPlate_no(String plate_no) {
		this.plate_no = plate_no;
	}

	public String getEngine_no() {
		return engine_no;
	}

	public void setEngine_no(String engine_no) {
		this.engine_no = engine_no;
	}

	public int getChassis_no() {
		return chassis_no;
	}

	public void setChassis_no(int chassis_no) {
		this.chassis_no = chassis_no;
	}

	public String getStart_date() {
		return start_date;
	}

	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}

	public String getEnd_date() {
		return end_date;
	}

	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}

	@Override
	public String toString() {
		return "User [policy_no=" + policy_no + ", customer_id=" + customer_id + ", plan_id=" + plan_id + ", aadhar_no="
				+ aadhar_no + ", pan_no=" + pan_no + ", vehicle_model=" + vehicle_model + ", plate_no=" + plate_no
				+ ", engine_no=" + engine_no + ", chassis_no=" + chassis_no + ", start_date=" + start_date
				+ ", end_date=" + end_date + "]";
	}
}
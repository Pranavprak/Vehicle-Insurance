package com.example.ibm.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Staff{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int staff_Id;
	private String staff_Address;
	private String staff_DOB;
	private String staff_Name;
	private String staff_Qualification;
	private int staffContact_No;
	private String staffEmail_Id;

	public Staff() {
	}


	public int getStaff_Id() {
		return this.staff_Id;
	}

	public void setStaff_Id(int staff_Id) {
		this.staff_Id = staff_Id;
	}


	public String getStaff_Address() {
		return this.staff_Address;
	}

	public void setStaff_Address(String staff_Address) {
		this.staff_Address = staff_Address;
	}


	public String getStaff_DOB() {
		return this.staff_DOB;
	}

	public void setStaff_DOB(String staff_DOB) {
		this.staff_DOB = staff_DOB;
	}


	public String getStaff_Name() {
		return this.staff_Name;
	}

	public void setStaff_Name(String staff_Name) {
		this.staff_Name = staff_Name;
	}


	public String getStaff_Qualification() {
		return this.staff_Qualification;
	}

	public void setStaff_Qualification(String staff_Qualification) {
		this.staff_Qualification = staff_Qualification;
	}


	public int getStaffContact_No() {
		return this.staffContact_No;
	}

	public void setStaffContact_No(int staffContact_No) {
		this.staffContact_No = staffContact_No;
	}


	public String getStaffEmail_Id() {
		return this.staffEmail_Id;
	}

	public void setStaffEmail_Id(String staffEmail_Id) {
		this.staffEmail_Id = staffEmail_Id;
	}

}
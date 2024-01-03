package com.example.ibm.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="plans")
public class Plans{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int plan_id;
	private int plan_Amount;
	private String plan_Duration;
	private String plan_Type;
	//private List<User> users;

	public Plans() {
	}


	
	public int getPlan_id() {
		return this.plan_id;
	}

	public void setPlan_id(int plan_id) {
		this.plan_id = plan_id;
	}


	public int getPlan_Amount() {
		return this.plan_Amount;
	}

	public void setPlan_Amount(int plan_Amount) {
		this.plan_Amount = plan_Amount;
	}


	public String getPlan_Duration() {
		return this.plan_Duration;
	}

	public void setPlan_Duration(String plan_Duration) {
		this.plan_Duration = plan_Duration;
	}


	public String getPlan_Type() {
		return this.plan_Type;
	}

	public void setPlan_Type(String plan_Type) {
		this.plan_Type = plan_Type;
	}


	//bi-directional many-to-one association to User
	/*@OneToMany(mappedBy="plan")
	public List<User> getUsers() {
		return this.users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public User addUser(User user) {
		getUsers().add(user);
		user.setPlan(this);

		return user;
	}

	public User removeUser(User user) {
		getUsers().remove(user);
		user.setPlan(null);

		return user;
	}*/

}
package com.example.ibm.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Status{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="policy_no")
	private int policy;
	
	private String policy_status;

	private String callback_status;
	private String claim_status;
	private String queries;
	public Status() {
		
	}
	
	public int getPolicy() {
		return policy;
	}

	public void setPolicy(int policy) {
		this.policy = policy;
	}

	public String getPolicy_status() {
		return policy_status;
	}
	public void setPolicy_status(String policy_status) {
		this.policy_status = policy_status;
	}
	public String getCallback_status() {
		return callback_status;
	}
	public void setCallback_status(String callback_status) {
		this.callback_status = callback_status;
	}
	public String getClaim_status() {
		return claim_status;
	}
	public void setClaim_status(String claim_status) {
		this.claim_status = claim_status;
	}
	public String getQueries() {
		return queries;
	}
	public void setQueries(String queries) {
		this.queries = queries;
	}
	@Override
	public String toString() {
		return "Status [policy_no=" + policy + ", policy_status=" + policy_status + ", callback_status="
				+ callback_status + ", claim_status=" + claim_status + ", queries=" + queries + "]";
	}
	
	
	}
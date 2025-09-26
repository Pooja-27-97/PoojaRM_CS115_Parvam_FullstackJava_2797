package com.membersCRUD.model;

import java.math.BigDecimal;
import java.sql.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "members")
public class Member {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "member_id")
	private Long memberid;
	@Column(name = "member_name", length = 100)
	private String memberName;
	@Column(name = "member_email", length = 100)
	private String memberEmail;
	@Column(name = "member_phone_no")
	private Long memberPhone;
	@Column(name = "join_date")
	private Date joinDate;
	@Column(name = "balance", precision = 10, scale = 2)
	private BigDecimal balance;
	@Column(name = "status")
	@Enumerated(EnumType.STRING)
	private Status status;
	public Long getMemberid() {
		return memberid;
	}
	public void setMemberid(Long memberid) {
		this.memberid = memberid;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	public String getMemberEmail() {
		return memberEmail;
	}
	public void setMemberEmail(String memberEmail) {
		this.memberEmail = memberEmail;
	}
	public Long getMemberPhone() {
		return memberPhone;
	}
	public void setMemberPhone(Long memberPhone) {
		this.memberPhone = memberPhone;
	}
	public Date getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}
	public BigDecimal getBalance() {
		return balance;
	}
	public void setBalance(BigDecimal balance) {
		this.balance = balance;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	public Object getCostPerHour() {
		// TODO Auto-generated method stub
		return null;
	}
	public void setCostPerHour(Object costPerHour) {
		// TODO Auto-generated method stub
		
	}
	
	
}

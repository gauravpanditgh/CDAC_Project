package com.onlinefarmersmarketapp.models;

import org.springframework.beans.BeanUtils;

import com.onlinefarmersmarketapp.entities.Order;

import net.bytebuddy.implementation.bind.annotation.Super;

public class OrderDTO extends Order {

	private String email;
	private int prodid;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getProdid() {
		return prodid;
	}
	public void setProdid(int prodid) {
		this.prodid = prodid;
	}
	
	@Override
	public String toString() {
		System.out.println(super.toString());
		return "OrderDTO [email=" + email + ", prodid=" + prodid + "]";
	}
	public static Order toEntity(OrderDTO dto) {
		Order entity=new Order();
		BeanUtils.copyProperties(dto, entity);		
		return entity;
	}
	
}

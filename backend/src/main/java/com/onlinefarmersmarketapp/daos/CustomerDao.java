package com.onlinefarmersmarketapp.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.onlinefarmersmarketapp.entities.Customer;

@Repository
public interface CustomerDao extends JpaRepository<Customer, String> {

}

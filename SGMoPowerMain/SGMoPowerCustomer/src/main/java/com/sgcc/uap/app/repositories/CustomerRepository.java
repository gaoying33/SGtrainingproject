package com.sgcc.uap.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.sgcc.uap.app.domain.Customer;

/**
 * <b>概述</b>：<br>
 *	TODO
 * <p>
 * <b>功能</b>：<br>
 *	TODO
 *	
 * @author AmyGao
 * @date 2017-09-13 10:15:21
 * @since 1.0
 */
public interface CustomerRepository extends JpaRepository<Customer,String>,JpaSpecificationExecutor<Customer> {
	
}

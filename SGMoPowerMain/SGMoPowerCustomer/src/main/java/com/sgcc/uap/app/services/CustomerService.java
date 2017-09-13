package com.sgcc.uap.app.services;

import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.sgcc.uap.app.domain.Customer;
import com.sgcc.uap.app.repositories.CustomerRepository;
import com.sgcc.uap.rest.support.IDRequestObject;
import com.sgcc.uap.rest.support.QueryResultObject;
import com.sgcc.uap.rest.support.RequestCondition;
import com.sgcc.uap.rest.utils.CrudUtils;
import com.sgcc.uap.rest.utils.RestUtils;

/**
 * <b>概述</b>：<br>
 * TODO
 * <p>
 * <b>功能</b>：<br>
 * TODO
 *
 * @author AmyGao
 * @date 2017-09-13 10:15:21
 * @since 1.0
 */
@Service
public class CustomerService  implements ICustomerService{
	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public QueryResultObject getCustomerById(String id) {
		Customer customer = customerRepository.findOne(id);
		return RestUtils.wrappQueryResult(customer);
	}
	@Override
	public void remove(IDRequestObject idObject) {
		String[] ids = idObject.getIds();
		for (String id : ids)
			customerRepository.delete(id);
	}
	@Override
	public Customer saveCustomer(Map map) {
		
		Customer customer = new Customer();
		if (map.containsKey("id")) {
			
			try {
				String id = (String) map.get("id");
				customer = customerRepository.findOne(id);
				CrudUtils.mapToObject(map, customer, id);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}else{
			try {
				BeanUtils.populate(customer, map);
			} catch (IllegalAccessException | InvocationTargetException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		return customerRepository.save(customer);
	}
	@Override
	public QueryResultObject query(RequestCondition queryCondition) {
		PageRequest request = this.buildPageRequest(queryCondition);
		Page<Customer> customer = customerRepository.findAll(request);
		List<Customer> result = null;
		long count = 0;
		result = customer.getContent();
		count = customer.getTotalElements();
		return RestUtils.wrappQueryResult(result, count);
	}

	/**
	 * 构建PageRequest
	 * @param queryCondition
	 * @return 页面请求对象
	 */
	private PageRequest buildPageRequest(RequestCondition queryCondition) {
		int pageIndex = 1, pageSize = 1;
		if (queryCondition.getPageIndex() != null && queryCondition.getPageSize() != null) {
			pageIndex = queryCondition.getPageIndex();
			pageSize = queryCondition.getPageSize();
		}
		return new PageRequest(pageIndex - 1, pageSize, null);
	}
}

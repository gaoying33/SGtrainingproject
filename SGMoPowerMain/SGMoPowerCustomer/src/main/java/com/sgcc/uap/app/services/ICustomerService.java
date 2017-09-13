package com.sgcc.uap.app.services;

import java.util.Map;

import com.sgcc.uap.app.domain.Customer;
import com.sgcc.uap.rest.support.IDRequestObject;
import com.sgcc.uap.rest.support.QueryResultObject;
import com.sgcc.uap.rest.support.RequestCondition;

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
public interface ICustomerService {
	/**
	 * 根据主键 查询
	 * @param queryCondition
	 * @return
	 */
	public QueryResultObject getCustomerById(String id);
	/**
	 * 根据idObject删除
	 * @param idObject
	 */
	public void remove(IDRequestObject idObject);
	/**
	 * 保存
	 * @param map
	 * @return
	 */
	public Customer saveCustomer(Map map);
	/**
	 * 根据查询条件 查询
	 * @param queryCondition
	 * @return
	 */
	public QueryResultObject query(RequestCondition queryCondition);
}

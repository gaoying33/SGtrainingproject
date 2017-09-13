package com.sgcc.uap.app.vo;


import com.sgcc.uap.app.domain.Customer;

public class CustomerTransfer {

	public static Customer toPO(CustomerVO vo) {
		Customer customer = new Customer();
		if(vo != null){
			customer.setId(vo.getId());
			customer.setLoginName(vo.getLoginName());
			customer.setIdCard(vo.getIdCard());
			customer.setSex(vo.getSex());
			customer.setRealName(vo.getRealName());
			customer.setLoginPass(vo.getLoginPass());
			customer.setPhoneNum(vo.getPhoneNum());
			customer.setVipLevel(vo.getVipLevel());
			customer.setAccountBalance(vo.getAccountBalance());
        }
		return customer;
	}

	public static CustomerVO toVO(Customer po) {
		CustomerVO vo = new CustomerVO();
		vo.setId(po.getId());
		vo.setLoginName(po.getLoginName());
		vo.setIdCard(po.getIdCard());
		vo.setSex(po.getSex());
		vo.setRealName(po.getRealName());
		vo.setLoginPass(po.getLoginPass());
		vo.setPhoneNum(po.getPhoneNum());
		vo.setVipLevel(po.getVipLevel());
		vo.setAccountBalance(po.getAccountBalance());
		return vo;
	}
}

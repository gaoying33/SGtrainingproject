package com.sgcc.uap.app.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

/**
 * Customer的POJO类
 *
 * @author AmyGao 
 * @date 2017-09-13 10:15:21
 */
@Entity
@Table(name = "customer")
public class Customer implements Serializable {

    /** 
     * serialVersionUID
     */
	private static final long serialVersionUID = -7768637914227571159L;

    /** 
     * id
     */
	@Id
	@GeneratedValue(generator = "idGenerator")
	@GenericGenerator(name = "idGenerator", strategy = "uuid")
    @Column(name = "id", nullable = false, length = 32)
    private String id ;
    
    /** 
     * 登录名
     */
    @Column(name = "loginname", nullable = false, length = 255)
    private String loginName ;
    
    /** 
     * 身份证号
     */
    @Column(name = "idcard", nullable = false, length = 255)
    private String idCard ;
    
    /** 
     * sex
     */
    @Column(name = "sex", nullable = true, length = 10)
    private String sex ;
    
    /** 
     * realname
     */
    @Column(name = "realname", nullable = false, length = 255)
    private String realName ;
    
    /** 
     * loginpass
     */
    @Column(name = "loginpass", nullable = false, length = 255)
    private String loginPass ;
    
    /** 
     * phonenum
     */
    @Column(name = "phonenum", nullable = false, length = 255)
    private String phoneNum ;
    
    /** 
     * 05等级越来越高
     */
    @Column(name = "viplevel", nullable = false, length = 10)
    private String vipLevel ;
    
    /** 
     * 账户余额
     */
    @Column(name = "accountbalance", nullable = false, length = 12)
    private Float accountBalance ;
    
    /**
     * id的get方法
     * @return id
     */
    public String getId(){
        return id;
    }
    /**
     * id的set方法
     * @param id
     */
    public void setId(String id){
        if(id != null && id.trim().length() == 0){
        	this.id = null;
        }else{
        	this.id = id;
        }
	} 
    /**
     * 登录名的get方法
     * @return loginName
     */
    public String getLoginName(){
        return loginName;
    }
    /**
     * 登录名的set方法
     * @param loginName
     */
    public void setLoginName(String loginName){
		this.loginName = loginName;
	} 
    /**
     * 身份证号的get方法
     * @return idCard
     */
    public String getIdCard(){
        return idCard;
    }
    /**
     * 身份证号的set方法
     * @param idCard
     */
    public void setIdCard(String idCard){
		this.idCard = idCard;
	} 
    /**
     * sex的get方法
     * @return sex
     */
    public String getSex(){
        return sex;
    }
    /**
     * sex的set方法
     * @param sex
     */
    public void setSex(String sex){
		this.sex = sex;
	} 
    /**
     * realname的get方法
     * @return realName
     */
    public String getRealName(){
        return realName;
    }
    /**
     * realname的set方法
     * @param realName
     */
    public void setRealName(String realName){
		this.realName = realName;
	} 
    /**
     * loginpass的get方法
     * @return loginPass
     */
    public String getLoginPass(){
        return loginPass;
    }
    /**
     * loginpass的set方法
     * @param loginPass
     */
    public void setLoginPass(String loginPass){
		this.loginPass = loginPass;
	} 
    /**
     * phonenum的get方法
     * @return phoneNum
     */
    public String getPhoneNum(){
        return phoneNum;
    }
    /**
     * phonenum的set方法
     * @param phoneNum
     */
    public void setPhoneNum(String phoneNum){
		this.phoneNum = phoneNum;
	} 
    /**
     * 05等级越来越高的get方法
     * @return vipLevel
     */
    public String getVipLevel(){
        return vipLevel;
    }
    /**
     * 05等级越来越高的set方法
     * @param vipLevel
     */
    public void setVipLevel(String vipLevel){
		this.vipLevel = vipLevel;
	} 
    /**
     * 账户余额的get方法
     * @return accountBalance
     */
    public Float getAccountBalance(){
        return accountBalance;
    }
    /**
     * 账户余额的set方法
     * @param accountBalance
     */
    public void setAccountBalance(Float accountBalance){
		this.accountBalance = accountBalance;
	} 
    /**
     * Hibernate通过该方法判断对象是否相等
     * @return boolean
     */  
    public boolean equals(Object obj) {
        if (this == obj)
			return true;
		
        if (obj == null || !(obj instanceof Customer))
	        return false; 
	        
		if (getClass() != obj.getClass())
			return false;
		
		Customer other = (Customer) obj;
		
		if (id == null) {
			if (other.id != null) {
				return false;
			}
		} else if (!id.equals(other.id)) {
			return false;
		}
		if (loginName == null) {
			if (other.loginName != null) {
				return false;
			}
		} else if (!loginName.equals(other.loginName)) {
			return false;
		}
		if (idCard == null) {
			if (other.idCard != null) {
				return false;
			}
		} else if (!idCard.equals(other.idCard)) {
			return false;
		}
		if (sex == null) {
			if (other.sex != null) {
				return false;
			}
		} else if (!sex.equals(other.sex)) {
			return false;
		}
		if (realName == null) {
			if (other.realName != null) {
				return false;
			}
		} else if (!realName.equals(other.realName)) {
			return false;
		}
		if (loginPass == null) {
			if (other.loginPass != null) {
				return false;
			}
		} else if (!loginPass.equals(other.loginPass)) {
			return false;
		}
		if (phoneNum == null) {
			if (other.phoneNum != null) {
				return false;
			}
		} else if (!phoneNum.equals(other.phoneNum)) {
			return false;
		}
		if (vipLevel == null) {
			if (other.vipLevel != null) {
				return false;
			}
		} else if (!vipLevel.equals(other.vipLevel)) {
			return false;
		}
		if (accountBalance == null) {
			if (other.accountBalance != null) {
				return false;
			}
		} else if (!accountBalance.equals(other.accountBalance)) {
			return false;
		}
		return true;
	}
    
    /**
     * toString方法
     * @return String
     */
	public String toString(){
		return "Customer ["
			+ ", id=" + id
			+ ", loginName=" + loginName
			+ ", idCard=" + idCard
			+ ", sex=" + sex
			+ ", realName=" + realName
			+ ", loginPass=" + loginPass
			+ ", phoneNum=" + phoneNum
			+ ", vipLevel=" + vipLevel
			+ ", accountBalance=" + accountBalance;
	}
   
    
    /**
     * hashcode方法
     * @return int
     * 
     */
    @Override
    public int hashCode(){
		return super.hashCode();
	}
}
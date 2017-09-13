package com.sgcc.uap.app.vo;

import java.io.Serializable;

import com.sgcc.uap.rest.annotation.attribute.AttributeType;
import com.sgcc.uap.rest.annotation.attribute.EditorType;
import com.sgcc.uap.rest.annotation.attribute.ViewAttribute;
import com.sgcc.uap.rest.support.ParentVO;
/**
 * Customer的VO类
 *
 * @author AmyGao 
 * @date 2017-09-13 10:15:21
 */
public class CustomerVO extends ParentVO implements Serializable{

	private static final long serialVersionUID = 1L;
	
    /** 
     * 属性id
     */  
    @ViewAttribute(name ="id",caption="id", editor=EditorType.TextEditor,nullable =false,readOnly=false, type=AttributeType.STRING)
    private String id;    
    /** 
     * 属性登录名
     */  
    @ViewAttribute(name ="loginName",caption="登录名", editor=EditorType.TextEditor,nullable =false,readOnly=false, type=AttributeType.STRING)
    private String loginName;    
    /** 
     * 属性身份证号
     */  
    @ViewAttribute(name ="idCard",caption="身份证号", editor=EditorType.TextEditor,nullable =false,readOnly=false, type=AttributeType.STRING)
    private String idCard;    
    /** 
     * 属性sex
     */  
    @ViewAttribute(name ="sex",caption="sex", editor=EditorType.TextEditor,nullable =true,readOnly=false, type=AttributeType.STRING)
    private String sex;    
    /** 
     * 属性realname
     */  
    @ViewAttribute(name ="realName",caption="realname", editor=EditorType.TextEditor,nullable =false,readOnly=false, type=AttributeType.STRING)
    private String realName;    
    /** 
     * 属性loginpass
     */  
    @ViewAttribute(name ="loginPass",caption="loginpass", editor=EditorType.TextEditor,nullable =false,readOnly=false, type=AttributeType.STRING)
    private String loginPass;    
    /** 
     * 属性phonenum
     */  
    @ViewAttribute(name ="phoneNum",caption="phonenum", editor=EditorType.TextEditor,nullable =false,readOnly=false, type=AttributeType.STRING)
    private String phoneNum;    
    /** 
     * 属性05等级越来越高
     */  
    @ViewAttribute(name ="vipLevel",caption="05等级越来越高", editor=EditorType.TextEditor,nullable =false,readOnly=false, type=AttributeType.STRING)
    private String vipLevel;    
    /** 
     * 属性账户余额
     */  
    @ViewAttribute(name ="accountBalance",caption="账户余额", editor=EditorType.NumberEditor,nullable =false,readOnly=false, type=AttributeType.FLOAT)
    private Float accountBalance;    
    /**
     * CustomerVO构造函数
     */
    public CustomerVO() {
        super();
    } 
   
	 /**
     * CustomerVO完整的构造函数
     */  
    public CustomerVO(String id){
        this.id = id;
    }
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
     * toString方法
     * @return String
     */
	public String toString(){

		  return new StringBuffer()
	  			.append("id"+":"+getId())
				.append("loginname"+":"+getLoginName())
				.append("idcard"+":"+getIdCard())
				.append("sex"+":"+getSex())
				.append("realname"+":"+getRealName())
				.append("loginpass"+":"+getLoginPass())
				.append("phonenum"+":"+getPhoneNum())
				.append("viplevel"+":"+getVipLevel())
				.append("accountbalance"+":"+getAccountBalance())
		        .toString(); 
			
    } 
   


}

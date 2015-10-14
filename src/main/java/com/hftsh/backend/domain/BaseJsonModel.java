package com.hftsh.backend.domain;

import java.io.Serializable;

/** 
 * @author:zixiaojun
 * @date: 2015-7-29 下午5:25:48
 * @copyright:fashioncool
 * @version:v1.0       
 */
public class BaseJsonModel<T> implements Serializable {
	private boolean success;
	private int code;
	private String message;
	private T data;
	
	public BaseJsonModel(){
		
	}
	
	public BaseJsonModel(boolean success,int code,String message,T data){
		this.success=success;
		this.code=code;
		this.message=message;
		this.data=data;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

}

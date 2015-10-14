package com.hftsh.backend.api;

import com.painter.security.SsoUserDetail;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;

import com.alibaba.fastjson.JSON;
import com.store.domain.BaseJsonModel;

/** 
 * @author:zixiaojun
 * @date: 2015-7-24 下午3:29:28
 * @copyright:fashioncool
 * @version:v1.0       
 */
public class WebBaseController<T> {
	
	protected static final int ERROR_CODE = 201;// 请求失败
	protected static final int SUCCESS_CODE = 200;// 请求成功
	
	protected final Log logger=LogFactory.getLog(WebBaseController.class);
	
	protected String callSuccessJson(T data) {
		BaseJsonModel<T> baseJson = new BaseJsonModel<T>(true, SUCCESS_CODE,
				null, data);
		return JSON.toJSONString(baseJson);
	}

	protected String callErrorJson(String message) {
		BaseJsonModel<T> baseJson = new BaseJsonModel<T>(false, ERROR_CODE,
				message, null);
		return JSON.toJSONString(baseJson);
	}
	
	protected void loadCurrentUser12(Model model){
		Authentication auth= SecurityContextHolder.getContext().getAuthentication();
		if(auth!=null&&auth.getPrincipal() instanceof SsoUserDetail){
			model.addAttribute("isLogin",true);
			SsoUserDetail user=(SsoUserDetail)auth.getPrincipal();
			//user.setName("资小军");
			//user.setToken(String.valueOf(auth.getCredentials()));
			model.addAttribute("curUser",user);
		}
	}
	
	protected SsoUserDetail getCurrentUser(){
		Authentication auth= SecurityContextHolder.getContext().getAuthentication();
		if(auth!=null&&auth.getPrincipal() instanceof SsoUserDetail){
			SsoUserDetail user=(SsoUserDetail)auth.getPrincipal();
			//user.setName("资小军");
			//user.setToken(String.valueOf(auth.getCredentials()));
			return user;
		}
		return null;
	}

}

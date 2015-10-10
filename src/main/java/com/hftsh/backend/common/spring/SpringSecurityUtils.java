package com.hftsh.backend.common.spring;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.Assert;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


/**
 * SpringSecurity的工具类.
 * 
 * 注意. 本类只支持SpringSecurity 3.0.x.
 * 
 * @author calvin
 */
public class SpringSecurityUtils {
	
	
	/**
	 * 取得当前用户, 返回值为SpringSecurity的User类或其子类, 如果当前用户未登录则返回null.
	 */
    public static UserDetails getCurrentUserDetails() {
        Authentication authentication = getAuthentication();
        if (authentication != null && authentication.getPrincipal() != null&&!authentication.getPrincipal().equals("anonymousUser")) {
            return (UserDetails) authentication.getPrincipal();
        } else {
            return null;
        }
    }

	/**
	 * 取得当前用户的登录名, 如果当前用户未登录则返回空字符串.
	 */
	public static String getCurrentUserName() {
		Authentication authentication = getAuthentication();
		if (authentication != null && authentication.getPrincipal() != null&&!authentication.getPrincipal().equals("anonymousUser")) {
			UserDetails userDetails = (UserDetails) authentication.getPrincipal();
			 return userDetails.getUsername();
		}
		return "";
	}
	
	
	
	/**
	 * 取得Authentication, 如当前SecurityContext为空时返回null.
	 */
	private static Authentication getAuthentication() {
		SecurityContext context = SecurityContextHolder.getContext();
		if (context != null) {
			return context.getAuthentication();
		}
		return null;
	}
	
	
	/**
	 * spring安全上下文失效，用户退出
	 * @param request
	 * @param invalidateHttpSession  是否使session失效  
	 */
	public static void securityLogout(HttpServletRequest request,boolean invalidateHttpSession) {
        Assert.notNull(request, "HttpServletRequest required");
        if (invalidateHttpSession) {
            HttpSession session = request.getSession(false);
            if (session != null) {
                session.invalidate();
            }
        }

        SecurityContextHolder.clearContext();
    }
	
}

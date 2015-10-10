package com.hftsh.backend.common.spring;

import com.hftsh.backend.domain.Menu;
import com.hftsh.backend.domain.SystemMenus;
import com.hftsh.backend.domain.SystemUser;
import com.hftsh.backend.service.RoleService;
import com.hftsh.backend.service.SystemUserService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.ui.Model;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * 验证(认证)用户名和密码成功后调用 
 * @author dell
 *
 */
public class AuthenticationSuccessHandlerImpl implements AuthenticationSuccessHandler {
	
    @Autowired
    private SystemUserService systemUserService;
    @Autowired
    private RoleService roleService;

    protected UserDetailsImpl getUserDetailsImpl() {
        return (UserDetailsImpl) SpringSecurityUtils.getCurrentUserDetails();
    }
    
    protected long getCurrentUserId() {
        return getUserDetailsImpl() == null?-1:getUserDetailsImpl().getUserId();
    }
    
    public SystemUser getCurrentUser() {
        return getUserDetailsImpl() == null?null:systemUserService.getSystemUser(getCurrentUserId());
    }
    
	/**
	 * url参数
	 */
	private Map<String, String> map;
	

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
		Collection<? extends GrantedAuthority> authorities =  authentication.getAuthorities();
		List<Menu> menus = SystemMenus.generateMenu(authorities);
		response.sendRedirect("/");
		clearAuthenticationAttributes(request);
	}

	protected final void clearAuthenticationAttributes(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session == null) {
			return;
		}

		session.removeAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
		session.removeAttribute(WebAttributes.ACCESS_DENIED_403);
	}

}

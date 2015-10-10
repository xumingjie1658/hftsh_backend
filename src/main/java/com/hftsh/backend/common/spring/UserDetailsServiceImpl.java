package com.hftsh.backend.common.spring;

import com.hftsh.backend.dao.RoleDao;
import com.hftsh.backend.dao.SystemUserDao;
import com.hftsh.backend.domain.Role;
import com.hftsh.backend.domain.SystemUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.HashSet;
import java.util.Set;


/**
 * 实现SpringSecurity的UserDetailsService接口,实现获取用户Detail信息的回调函数.
 * @author calvin
 */
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
    private SystemUserDao systemUserDao;
    @Autowired
    private RoleDao roleDao;
    @Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException, DataAccessException {
		SystemUser user = systemUserDao.findByLoginName(username);
		if(user == null){
			throw new BadCredentialsException("用户名或密码不正确！");
		}
		Set<GrantedAuthority> grantedAuthorities = new HashSet<GrantedAuthority>();
		try {
            Role role = roleDao.getRoleByUserId(user.getId());
            if(role.getRoles()!=null){
                String[] roleList = role.getRoles().split(",");
                for(String roleStr:roleList){
                    grantedAuthorities.add(new SimpleGrantedAuthority(roleStr));
                }
            }
            grantedAuthorities.add(new SimpleGrantedAuthority("ROLE_ENTERS_USER"));
		} catch (Exception e) {
			e.printStackTrace();
			throw new AuthenticationServiceException("该用户没有访问权限！请联系管理员");
		}
		return new UserDetailsImpl(user, grantedAuthorities);
	}
}

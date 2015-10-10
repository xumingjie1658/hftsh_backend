package com.hftsh.backend.common.spring;

import com.hftsh.backend.domain.SystemUser;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.Set;

public class UserDetailsImpl extends org.springframework.security.core.userdetails.User{

	private static final long serialVersionUID = 1L;
	private long userId;
    private String salt;

    public UserDetailsImpl(SystemUser user, Collection<? extends GrantedAuthority> authorities) {
        super(user.getName(), user.getPassword(), true, true, true, true, authorities);
        this.userId = user.getId();
        this.salt = user.getSalt();
    }



    public long getUserId() {
        return userId;
    }

    public String getSalt() {
        return salt;
    }

}

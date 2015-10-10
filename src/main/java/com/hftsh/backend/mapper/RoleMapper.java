package com.hftsh.backend.mapper;

import com.hftsh.backend.domain.Role;
import com.hftsh.backend.orm.mybatis.BaseMapper;

public interface RoleMapper extends BaseMapper<Role> {

    public Role getRoleByUserId(long userId);
}

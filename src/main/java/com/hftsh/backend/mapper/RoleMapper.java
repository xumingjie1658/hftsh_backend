package com.hftsh.backend.mapper;

import com.hftsh.backend.domain.Role;
import com.hftsh.backend.orm.mybatis.BaseMapper;

/**
 * Created by 王金鹏 on 2015/4/27.
 */
public interface RoleMapper extends BaseMapper<Role> {

    public Role getRoleByUserId(long userId);
}

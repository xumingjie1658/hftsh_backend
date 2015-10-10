package com.hftsh.backend.dao;

import com.hftsh.backend.domain.Role;
import com.hftsh.backend.mapper.RoleMapper;
import com.hftsh.backend.orm.mybatis.MyBatisDao;
import org.springframework.stereotype.Repository;

@Repository
public class RoleDao extends MyBatisDao<Role> {
    public Role getRoleByUserId(long userId){
        return this.getMapper(RoleMapper.class).getRoleByUserId(userId);
    }
}
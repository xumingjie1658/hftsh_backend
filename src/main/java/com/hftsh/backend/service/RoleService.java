package com.hftsh.backend.service;


import com.hftsh.backend.dao.RoleDao;
import com.hftsh.backend.domain.Role;
import com.hftsh.backend.orm.mybatis.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by 王金鹏 on 2015/4/27.
 */
@Component
public class RoleService {

    @Autowired
    private RoleDao roleDao;

    public Role getRole(long id){
        return roleDao.get(id);
    }

    public Role getRoleByUserId(long userId){
        return roleDao.getRoleByUserId(userId);
    }

    public Page<Role> findPageForMap(Page<Role> page,Map<String,Object> filters){
        return roleDao.findPageForMap(page,filters);
    }

    public void addRole(Role role){
        roleDao.insert(role);
    }

    public void udpateRole(Role role){
        roleDao.update(role);
    }

    public List<Role> getAllRoles(){
        Map<String,Object> filters = new HashMap<>();
        return roleDao.findListForMap(filters);
    }
}

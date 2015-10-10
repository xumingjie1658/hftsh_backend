package com.hftsh.backend.dao;

import com.hftsh.backend.domain.SystemUser;
import com.hftsh.backend.mapper.SystemUserMapper;
import com.hftsh.backend.orm.mybatis.MyBatisDao;
import org.springframework.stereotype.Repository;

/**
 * Created by xumingjie on 15/10/5.
 */

@Repository

public class SystemUserDao extends MyBatisDao<SystemUser> {
    public SystemUser findByLoginName(String name){
        return  this.getMapper(SystemUserMapper.class).findByLoginName(name);
    }
}

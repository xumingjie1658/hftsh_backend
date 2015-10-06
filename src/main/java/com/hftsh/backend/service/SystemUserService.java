package com.hftsh.backend.service;

import com.hftsh.backend.dao.SystemUserDao;
import com.hftsh.backend.domain.SystemUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by xumingjie on 15/10/6.
 */

@Service

public class SystemUserService {

    @Autowired
    private SystemUserDao systemUserDao;

    public SystemUser getSystemUser(long id){

        return systemUserDao.get(id);
    }

}

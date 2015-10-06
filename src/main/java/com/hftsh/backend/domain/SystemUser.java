package com.hftsh.backend.domain;

import com.hftsh.backend.orm.mybatis.IdEntity;

/**
 * Created by xumingjie on 15/10/5.
 */
public class SystemUser extends IdEntity{

    private static final long serialVersionUID = -7031078959228716471L;

    private String name;
    private String password;
    private Integer status; //用户状态：0、不可用；1、可用
    private Integer createTime;
    private String salt; //加密盐值

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Integer createTime) {
        this.createTime = createTime;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }
}

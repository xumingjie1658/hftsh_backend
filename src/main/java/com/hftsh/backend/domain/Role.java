package com.hftsh.backend.domain;

import com.hftsh.backend.orm.mybatis.IdEntity;

public class Role extends IdEntity {
    private static final long serialVersionUID = -235957174125822808L;
    private String name;
    private String roles; //角色字符串，每个角色以英文逗号分隔
    private Integer status; //角色状态：0、禁用；1、启用
    private Integer createTime;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
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
}

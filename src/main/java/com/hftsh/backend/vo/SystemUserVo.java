package com.hftsh.backend.vo;

import com.hftsh.backend.orm.mybatis.IdEntity;

/**
 * Created by xumingjie on 15/10/12.
 */
public class SystemUserVo {
    private String name;
    private String role;
    private Integer status;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}

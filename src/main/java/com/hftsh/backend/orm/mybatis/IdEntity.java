package com.hftsh.backend.orm.mybatis;

import java.io.Serializable;

/**
 * Created by xumingjie on 15/10/5.
 */
public class IdEntity implements Serializable {

    private static final long serialVersionUID = -8070570128167455359L;

    protected Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

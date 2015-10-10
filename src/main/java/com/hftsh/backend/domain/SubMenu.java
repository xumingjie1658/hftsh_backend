package com.hftsh.backend.domain;

/**
 * Created by xumingjie on 15/10/10.
 */
public class SubMenu {

    private String id;
    private String name;
    private String path;
    private String parentId;
    private boolean show;

    public SubMenu(String id, String name, String path, String parentId) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.parentId = parentId;
        this.show = false;
    }

    public SubMenu(SubMenu m) {
        this.id = m.id;
        this.name = m.name;
        this.path = m.path;
        this.id = m.id;
        this.show = m.show;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public boolean isShow() {
        return show;
    }

    public void setShow(boolean show) {
        this.show = show;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }
}

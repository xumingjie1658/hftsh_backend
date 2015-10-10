package com.hftsh.backend.domain;

import java.lang.String;import java.util.List;

/**
 * Created by xumingjie on 15/10/10.
 */

public class Menu {
    private String id;
    private String name;
    private boolean show;
    private List<SubMenu> childMenuList;

    public Menu(String id, String name){
        this.id=id;
        this.name=name;
        this.show = false;
    }

    public Menu(String id, String name,boolean show){
        this.id=id;
        this.name=name;
        this.show = show;
    }

    public Menu(Menu m) {
        this.id = m.id;
        this.name = m.name;
        this.childMenuList = m.childMenuList;
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

    public boolean isShow() {
        return show;
    }

    public void setShow(boolean show) {
        this.show = show;
    }

    public List<SubMenu> getChildMenuList() {
        return childMenuList;
    }

    public void setChildMenuList(List<SubMenu> childMenuList) {
        this.childMenuList = childMenuList;
    }
}

package com.hftsh.backend.domain;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

/**
 * Created by xumingjie on 15/10/10.
 */
public class SystemMenus {

    public final static List<Menu> menuList = new ArrayList<>();

    static {
        initMenu();
    }

    private static void initMenu() {
        //系统管理模块
        Menu menu = new Menu("10","系统管理");
        List<SubMenu> subMenus = new ArrayList<>();
        subMenus.add(new SubMenu("1001","后台用户管理","/system/user","10"));
        subMenus.add(new SubMenu("1002","角色管理","/system/role","10"));
        menu.setChildMenuList(subMenus);
        menuList.add(menu);
    }

    public static List<Menu> generateMenu(Collection<? extends GrantedAuthority> authorities) {
        Iterator authoritiesIterator = authorities.iterator();
        while(authoritiesIterator.hasNext()){
            Object a = authoritiesIterator.next();
            showMenu(a.toString());
        }
        return menuList;
    }

    private static void showMenu(String role) {
        for( int i = 0; i < menuList.size();i++) {
            if(role.equals("ROLE_" + menuList.get(i).getId())){
                menuList.get(i).setShow(true);
                return;
            }
            for(int j = 0; j < menuList.get(i).getChildMenuList().size(); j++) {
                if(role.equals("ROLE_" + menuList.get(i).getChildMenuList().get(j).getId())){
                    menuList.get(i).getChildMenuList().get(j).setShow(true);
                    return;
                }
            }
        }
    }

    public static List<Menu> getMenu() {
        return menuList;
    }

    public static List<Menu> getClearMenuList() {
        List<Menu> clearMenuList = new ArrayList<>();
        for( int i = 0; i < menuList.size();i++) {
            if(menuList.get(i).isShow()){
                Menu insertedMenu = new Menu(menuList.get(i).getId(),menuList.get(i).getName(),true);
                List<SubMenu> subMenus = new ArrayList<>();
                for(int j = 0; j < menuList.get(i).getChildMenuList().size(); j++){
                    if(menuList.get(i).getChildMenuList().get(j).isShow()){
                        subMenus.add(new SubMenu(menuList.get(i).getChildMenuList().get(j)));
                    }
                }
                insertedMenu.setChildMenuList(subMenus);
                clearMenuList.add(insertedMenu);
            }
        }
        return clearMenuList;
    }
}

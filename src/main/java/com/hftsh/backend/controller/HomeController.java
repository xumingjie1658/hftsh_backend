package com.hftsh.backend.controller;

import com.hftsh.backend.domain.Menu;
import com.hftsh.backend.domain.SystemMenus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by xumingjie on 15/10/10.
 */

@Controller
public class HomeController {
    @RequestMapping("/")
    public String home(HttpServletRequest request, Model model){
        List<Menu> menus = SystemMenus.getClearMenuList();
        model.addAttribute("menus",menus);
        return "home/home";
    }
}

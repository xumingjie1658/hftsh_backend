package com.hftsh.backend.controller;

import com.hftsh.backend.domain.SystemUser;
import com.hftsh.backend.service.SystemUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by xumingjie on 15/10/5.
 */

@Controller
@RequestMapping("/user")

public class UserController {

    @Autowired
    private SystemUserService systemUserService;

    @RequestMapping("helloworld")
    public String HelloWorld(HttpServletRequest request, Model model) {

        SystemUser user1 = systemUserService.getSystemUser(1);
        model.addAttribute("user",user1);
        return "user/helloworld";
    }
}

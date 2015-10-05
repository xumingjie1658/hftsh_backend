package com.hftsh.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by xumingjie on 15/10/5.
 */

@Controller
@RequestMapping("/user")

public class UserController {

    @RequestMapping("helloworld")
    public String HelloWorld(HttpServletRequest request) {
        return "user/helloworld";
    }
}

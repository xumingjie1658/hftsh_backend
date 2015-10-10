package com.hftsh.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by xumingjie on 15/10/8.
 */

@Controller

public class LoginSuccessController {

    @RequestMapping("/loginSuccess.do")
    public String login(HttpServletRequest request) {
        return "loginSuccess";
    }
}

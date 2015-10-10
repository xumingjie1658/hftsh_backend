package com.hftsh.backend.controller;

import org.springframework.security.web.WebAttributes;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Created by xumingjie on 15/10/8.
 */

@Controller

public class LoginController {

    @RequestMapping("/login.do")
    public String login(HttpSession session,HttpServletRequest request) {
        Object lastException = session.getAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
        Object accessDeniedException = session.getAttribute(WebAttributes.ACCESS_DENIED_403);
        return "login";
    }
}

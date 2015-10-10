package com.hftsh.backend.controller;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.WebAttributes;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by xumingjie on 15/10/9.
 */

@Controller

public class ErrorController {
    static String ACCESS_DENIED_403 = "当前用户权限不足";

    @RequestMapping("/accessDenied.do")
    public String accessDenied(HttpServletResponse response,ModelMap modelMap,HttpSession session) {
        session.setAttribute(WebAttributes.ACCESS_DENIED_403, new AccessDeniedException(ACCESS_DENIED_403));
        return "accessDenied";
    }
}

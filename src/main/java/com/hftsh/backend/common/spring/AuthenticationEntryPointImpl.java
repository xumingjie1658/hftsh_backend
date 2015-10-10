package com.hftsh.backend.common.spring;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.util.RedirectUrlBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthenticationEntryPointImpl implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        String targetUrl = null;
        targetUrl = "/login.do";
        targetUrl = request.getContextPath() + targetUrl;
        request.getSession().setAttribute("prevPage", buildHttpReturnUrlForRequest(request));
        response.sendRedirect(targetUrl);
    }

    protected String buildHttpReturnUrlForRequest(HttpServletRequest request)
            throws IOException, ServletException {


        RedirectUrlBuilder urlBuilder = new RedirectUrlBuilder();
        urlBuilder.setScheme("http");
        urlBuilder.setServerName(request.getServerName());
        urlBuilder.setPort(request.getServerPort());
        urlBuilder.setContextPath(request.getContextPath());
        urlBuilder.setServletPath(request.getServletPath());
        urlBuilder.setPathInfo(request.getPathInfo());
        urlBuilder.setQuery(request.getQueryString());

        return urlBuilder.getUrl();
    }
}

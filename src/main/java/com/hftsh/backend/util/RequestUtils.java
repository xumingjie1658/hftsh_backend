package com.hftsh.backend.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * Created by leon on 15-1-16.
 */
public class RequestUtils {
    public static int getPage(HttpServletRequest request) {
        String pageString = request.getParameter("page");
        int page;
        if (pageString != null) {
            page = Integer.parseInt(pageString);
        } else {
            page = 1;
        }
        return page;
    }

    public static String getConditionUrl(HttpServletRequest request){
        Map<String,String[]> map = request.getParameterMap();
        String conditionUrl = "";
        for(String key:map.keySet()){
            if(!"page".equals(key) && !"_csrf".equals(key)){
                conditionUrl+="&"+key + "=" + map.get(key)[0];
            }
        }
        return conditionUrl;
    }

    public static void response(HttpServletResponse response,String msg){
        try{
            response.getWriter().write(msg);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}

package com.hftsh.backend.util;

import com.hftsh.backend.orm.mybatis.Page;
import net.sourceforge.pinyin4j.PinyinHelper;
import net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat;
import net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
import net.sourceforge.pinyin4j.format.HanyuPinyinVCharType;
import net.sourceforge.pinyin4j.format.exception.BadHanyuPinyinOutputFormatCombination;
import org.springframework.ui.Model;

import javax.servlet.http.HttpServletRequest;
import java.security.MessageDigest;
import java.util.Map;

/**
 * Created by xumingjie on 15/10/5.
 */

public class CommonUtils {

    public static void pageConversion (Page sourcePage, Page targetPage){
        targetPage.setPageSize(sourcePage.getPageSize());
        targetPage.setPageNo(sourcePage.getPageNo());
        targetPage.setTotalCount(sourcePage.getTotalCount());
    }

    /**
     * 取得查询条件
     * @param filter
     * @param queryMap
     */
    public static Map<String, Object> copyQueryMap(Map<?, ?> filter, Map<String, Object> queryMap) {
        for (Map.Entry<?, ?> entry : filter.entrySet()) {
            String[] value = (String[]) entry.getValue();
            if (value != null && !"".equals(value[0])) {
                queryMap.put(entry.getKey().toString(), value[0].trim());
            }
        }
        return queryMap;
    }

    /**
     * 构建试图模型
     * @param filter
     * @param model
     */
    public static Model copyModelMap(Map<?, ?> filter, Model model) {
        for (Map.Entry<?, ?> entry : filter.entrySet()) {
            String[] value = (String[]) entry.getValue();
            if (value != null && !"".equals(value[0])
                    && !entry.getKey().toString().contains("csrf")
                    && !entry.getKey().toString().contains("page")) {
                model.addAttribute(entry.getKey().toString(), value[0].trim());
            }
        }
        return model;
    }

    public final static String MD5(String s) {
        char hexDigits[]={'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};
        try {
            byte[] btInput = s.getBytes();
            // 获得MD5摘要算法的 MessageDigest 对象
            MessageDigest mdInst = MessageDigest.getInstance("MD5");
            // 使用指定的字节更新摘要
            mdInst.update(btInput);
            // 获得密文
            byte[] md = mdInst.digest();
            // 把密文转换成十六进制的字符串形式
            int j = md.length;
            char str[] = new char[j * 2];
            int k = 0;
            for (int i = 0; i < j; i++) {
                byte byte0 = md[i];
                str[k++] = hexDigits[byte0 >>> 4 & 0xf];
                str[k++] = hexDigits[byte0 & 0xf];
            }
            return new String(str);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String getRandomString(int len) {
        String chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"; // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
        int maxPos = chars.length();
        String randomStr = "";
        for (int i = 0; i < len; i++) {
            randomStr += chars.charAt(Double.valueOf(Math.random() * maxPos).intValue());
        }
        return randomStr;
    }

    public static String getRemoteHost(HttpServletRequest request){
        String ip = request.getHeader("x-forwarded-for");
        if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)){
            ip = request.getHeader("Proxy-Client-IP");
        }
        if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)){
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)){
            ip = request.getRemoteAddr();
        }
        return ip.equals("0:0:0:0:0:0:0:1")?"127.0.0.1":ip;
    }

    public static String getPingYin(String inputString) {
        HanyuPinyinOutputFormat format = new HanyuPinyinOutputFormat();
        format.setCaseType(HanyuPinyinCaseType.LOWERCASE);
        format.setToneType(HanyuPinyinToneType.WITHOUT_TONE);
        format.setVCharType(HanyuPinyinVCharType.WITH_V);

        char[] input = inputString.trim().toCharArray();
        String output = "";

        try {
            for (int i = 0; i < input.length; i++) {
                if (Character.toString(input[i]).matches("[\\u4E00-\\u9FA5]+")) {
                    String[] temp = PinyinHelper.toHanyuPinyinStringArray(input[i], format);
                    output += temp[0];
                } else
                    output += Character.toString(input[i]);
            }
        } catch (BadHanyuPinyinOutputFormatCombination e) {
            e.printStackTrace();
        }
        return output;
    }
}

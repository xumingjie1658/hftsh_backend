package com.hftsh.backend.common.spring;

import com.hftsh.backend.util.StringUtils;
import org.springframework.security.authentication.encoding.MessageDigestPasswordEncoder;

/**
 * Created by 王金鹏 on 2015/5/19.
 */
public class MyPasswordEncoder extends MessageDigestPasswordEncoder{


    public MyPasswordEncoder(String algorithm) {
        super(algorithm);
    }

    public MyPasswordEncoder(String algorithm, boolean encodeHashAsBase64) throws IllegalArgumentException {
        super(algorithm, encodeHashAsBase64);
    }

    @Override
    public boolean isPasswordValid(String encPass, String rawPass, Object salt) {
        rawPass = encodePassword(rawPass, salt);
        return encPass.equals(rawPass);
    }

    @Override
    public String encodePassword(String rawPass, Object salt) {
        return StringUtils.encodePassword(rawPass, salt == null ? "" : salt.toString());
    }
}

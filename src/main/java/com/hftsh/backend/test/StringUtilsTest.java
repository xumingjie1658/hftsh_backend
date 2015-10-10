package com.hftsh.backend.test;

import com.hftsh.backend.util.StringUtils;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by xumingjie on 15/10/10.
 */
public class StringUtilsTest {

    @Test
    public void testencodePassword(){
        String rawPass = "12345";
        String salt = "4iWJSdTkKX";
        String encodedPassword = StringUtils.encodePassword(rawPass,salt);
    }


}
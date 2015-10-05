package com.hftsh.backend.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * Created by xumingjie on 15/10/5.
 */
public class ApplicationProperties {

    private static Properties properties;

    static {
        properties = new Properties();
        InputStream inputStream = ApplicationProperties.class.getResourceAsStream("/application.properties");
        try {
            properties.load(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String getProperty(String propertyName){
        return properties.getProperty(propertyName);
    }
}

package com.sjinc.bss.framework.helper;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanCreationException;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletContext;

public final class WebServiceHelper {
    private WebServiceHelper() {
        throw new IllegalStateException("WebServiceHelper class");
    }

    public static Object getService(ServletContext ctx, String serviceBeanId) {
        Object rObj = null;

        try {
            WebApplicationContext wac = WebApplicationContextUtils.getRequiredWebApplicationContext(ctx);
            rObj = wac.getBean(serviceBeanId);
        } catch (IllegalStateException e) {
            throw (IllegalStateException) new IllegalStateException("WebServiceHelderp.getService error! ");
        } catch (BeansException e) {
            throw (BeansException) new BeanCreationException(serviceBeanId, "Failed to create");
        }

        return rObj;
    }
}

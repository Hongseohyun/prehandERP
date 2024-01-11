package com.sjinc.bss.framework;

import com.ubireport.server.UbiServer4;

import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FrameServletConfig {

    @Bean
    public ServletRegistrationBean<UbiServer4> getServletRegistrationBean() {
        ServletRegistrationBean<UbiServer4> registrationBean = new ServletRegistrationBean<>(new UbiServer4());
        registrationBean.addUrlMappings("/UbiServer");
        return registrationBean;
    }

}

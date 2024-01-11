package com.sjinc.bss.framework;

import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;

@Component
public class FrameInit {

    ServletContext servletContext;

    public FrameInit(ServletContext servletContext) {
        this.servletContext = servletContext;
    }

    @PostConstruct
    public void init() {
        FrameConstants.setRealPath(servletContext.getRealPath("/"));
    }

}

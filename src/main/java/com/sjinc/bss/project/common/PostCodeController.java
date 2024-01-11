package com.sjinc.bss.project.common;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
public class PostCodeController {

    @RequestMapping(value = "/postcode")
    public ModelAndView postcode(HttpServletRequest request)  {
        ModelAndView mv  = new ModelAndView();
        mv.setViewName("postcode/postcode");
        return mv;
    }

    @RequestMapping(value = "/postcodeResult")
    public ModelAndView postcodeResult(HttpServletRequest request)  {
        ModelAndView mv  = new ModelAndView();
        mv.setViewName("postcode/postcode_result");
        return mv;
    }

}

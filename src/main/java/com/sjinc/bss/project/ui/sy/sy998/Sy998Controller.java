package com.sjinc.bss.project.ui.sy.sy998;

import com.sjinc.bss.project.base.BaseController;
import com.sjinc.bss.project.commonmodule.menuprogram.MenuPgmDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 메뉴정보 Controller
 */

@Slf4j
@RestController
public class Sy998Controller extends BaseController {


    public Sy998Controller(MenuPgmDetails menuPgmDetails) {
        this.menuPgmDetails = menuPgmDetails;
    }


    @RequestMapping(value = "/sy998")
    public ModelAndView defaultPage(HttpServletRequest request, HttpServletResponse response, @RequestParam String programId) {
        return makeDefaultModelAndView(request, programId);
    }


}

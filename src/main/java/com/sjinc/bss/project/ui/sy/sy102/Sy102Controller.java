package com.sjinc.bss.project.ui.sy.sy102;

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
 * 시스템설정 Controller
 */

@Slf4j
@RestController
@RequestMapping(value = "/sy102")
public class Sy102Controller extends BaseController {

    public Sy102Controller(MenuPgmDetails menuPgmDetails) {
        this.menuPgmDetails = menuPgmDetails;
    }

    /**
     * 시스템설정 페이지
     * @param request
     * @param response
     * @param programId
     * @return
     */
    @RequestMapping(value = "")
    public ModelAndView defaultPage(HttpServletRequest request, HttpServletResponse response, @RequestParam String programId) {
        //log.info("===> ui default page request parm : {}", uiDefaultPageRequestVo);
        return makeDefaultModelAndView(request, programId);
    }

}

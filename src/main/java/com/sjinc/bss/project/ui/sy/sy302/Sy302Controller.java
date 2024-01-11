package com.sjinc.bss.project.ui.sy.sy302;

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
 * 팀 관리 Controller
 *
 * @author
 * @version 1.0
 * @description 팀 관리 Controller
 * @since
 */
@RequestMapping(value = "/sy302")
@Slf4j
@RestController
public class Sy302Controller extends BaseController {

    public Sy302Controller(MenuPgmDetails menuPgmDetails) {
        this.menuPgmDetails = menuPgmDetails;
    }

    @RequestMapping(value = "")
    public ModelAndView defaultPage(HttpServletRequest request, HttpServletResponse response, @RequestParam String programId) {
        return makeDefaultModelAndView(request, programId);
    }
}

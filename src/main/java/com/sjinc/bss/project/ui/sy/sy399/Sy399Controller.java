package com.sjinc.bss.project.ui.sy.sy399;

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
 * 테스트 Controller
 */

@Slf4j
@RestController
public class Sy399Controller extends BaseController {

    public Sy399Controller(MenuPgmDetails menuPgmDetails) {
        this.menuPgmDetails = menuPgmDetails;
    }

    @RequestMapping(value = "/sy399")
    public ModelAndView defaultPage(HttpServletRequest request, HttpServletResponse response, @RequestParam String programId) {
        return makeDefaultModelAndView(request, programId);
    }
}

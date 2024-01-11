package com.sjinc.bss.project.ui.bd.bd101p1;

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
 * bd101p01 공지사항 작성/수정 Controller
 */

@Slf4j
@RestController
public class Bd101p1Controller extends BaseController {

    public Bd101p1Controller(MenuPgmDetails menuPgmDetails) {
        this.menuPgmDetails = menuPgmDetails;
    }

    /**
     * 공지사항 작성/수정 팝업
     * @param request
     * @param response
     * @param programId
     * @return
     */
    @RequestMapping(value = "/bd101/p1")
    public ModelAndView defaultPage(HttpServletRequest request, HttpServletResponse response, @RequestParam String programId) {
        ModelAndView mv = makeDefaultModelAndView(request, programId);
        mv.setViewName("/project/bd/bd101/bd101p1");
        return mv;
    }
}

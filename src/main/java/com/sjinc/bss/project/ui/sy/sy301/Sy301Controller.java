package com.sjinc.bss.project.ui.sy.sy301;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.data.HashMapStringVO;
import com.sjinc.bss.framework.model.base.BaseResponseVo;
import com.sjinc.bss.project.base.BaseController;
import com.sjinc.bss.project.commonmodule.menuprogram.MenuPgmDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * 사용자정보 Controller
 *
 * @author
 * @version 1.0
 * @description 사용자정보 컨트롤러
 * @since
 */
@Slf4j
@RequestMapping(value = "/sy301")
@RestController
public class Sy301Controller extends BaseController {

    private Sy301Service sy301Service;

    public Sy301Controller(MenuPgmDetails menuPgmDetails, Sy301Service sy301Service) {
        this.menuPgmDetails = menuPgmDetails;
        this.sy301Service = sy301Service;
    }

    /**
     * 사용자정보 페이지
     * @param request
     * @param response
     * @param programId
     * @return
     */
    @RequestMapping(value = "")
    public ModelAndView defaultPage(HttpServletRequest request, HttpServletResponse response, @RequestParam String programId) {
        //log.info("===> ui default page request parm : {}", uiDefaultPageRequestVo);
        ModelAndView mv = makeDefaultModelAndView(request, programId);
        mv.setViewName("/project/sy/sy301/sy301");
        return mv;
    }

    /**
     * 사용자정보 저장
     * @param parm
     * @return
     */
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public BaseResponseVo save(@RequestBody HashMapStringVO parm) {
        BaseResponseVo responseVo = new BaseResponseVo();
        try {
            if (sy301Service.save(parm) > 0) {
                responseVo.makeResultOk();
            }
        } catch (Exception e) {
            responseVo.makeResultError();
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }

        return responseVo;
    }

    /**
     * 사용자정보 패스워드 초기화
     * @param parm
     * @return
     */
    @RequestMapping(value = "/pwinit", method = RequestMethod.POST)
    public BaseResponseVo pwinit(@RequestBody HashMapStringVO parm) {
        BaseResponseVo responseVo = new BaseResponseVo();
        try {
            if (sy301Service.pwinit(parm) > 0) {
                responseVo.makeResultOk();
            }
        } catch (Exception e) {
            responseVo.makeResultError();
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }
        return responseVo;
    }

    /**
     * 사용자정보 일괄수정 팝업
     * @param request
     * @param response
     * @param programId
     * @return
     */
    @RequestMapping(value = "/p1")
    public ModelAndView sy301p1(HttpServletRequest request, HttpServletResponse response, @RequestParam String programId) {
        ModelAndView mv = makeDefaultModelAndView(request, programId);
        mv.setViewName("/project/sy/sy301/sy301p1");
        return mv;
    }
}

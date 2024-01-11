package com.sjinc.bss.project.ui.bd.bd101;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.data.HashMapStringVO;
import com.sjinc.bss.framework.data.HashMapVO;
import com.sjinc.bss.framework.model.base.BaseResponseVo;
import com.sjinc.bss.project.base.BaseController;
import com.sjinc.bss.project.commonmodule.menuprogram.MenuPgmDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * bd101 공지사항 Controller
 */

@Slf4j
@RestController
public class Bd101Controller extends BaseController {

    private Bd101Service bd101Service;

    public Bd101Controller(MenuPgmDetails menuPgmDetails, Bd101Service bd101Service) {
        this.menuPgmDetails = menuPgmDetails;
        this.bd101Service = bd101Service;
    }

    /**
     * 공지사항 페이지
     * @param request
     * @param response
     * @param programId
     * @return
     */
    @RequestMapping(value = "/bd101")
    public ModelAndView defaultPage(HttpServletRequest request, HttpServletResponse response, @RequestParam String programId) {

        return makeDefaultModelAndView(request, programId);
    }

    /**
     * 공지사항 리스트(페이징 처리)
     * @param parm
     * @return
     */
    @RequestMapping(value = "/bd101/selectGrid", method = RequestMethod.POST)
    public HashMapVO selectGrid(@RequestBody HashMapVO parm) {
        HashMapVO result = new HashMapVO();
        try {
            result = bd101Service.selectGrid(parm);
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }
        return result;
    }

    /**
     * 공지사항 삭제
     * @param parm
     * @return
     */
    @RequestMapping(value = "/bd101/delete", method = RequestMethod.POST)
    public BaseResponseVo delete(@RequestBody HashMapStringVO parm) {
        BaseResponseVo responseVo = new BaseResponseVo();
        try {
            if (bd101Service.delete(parm) > 0) {
                responseVo.makeResultOk();
            }
        } catch (Exception e) {
            responseVo.makeResultError(e);
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }

        return responseVo;
    }
}
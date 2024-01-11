package com.sjinc.bss.project.ui.sy.sy204;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.data.HashMapResultVO;
import com.sjinc.bss.framework.data.HashMapVO;
import com.sjinc.bss.framework.model.base.BaseResponseVo;
import com.sjinc.bss.project.base.BaseController;
import com.sjinc.bss.project.commonmodule.menuprogram.MenuPgmDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * 메뉴정보 Controller
 */

@Slf4j
@RestController
@RequestMapping(value = "/sy204")
public class Sy204Controller extends BaseController {

    private Sy204Service sy204Service;

    public Sy204Controller(MenuPgmDetails menuPgmDetails, Sy204Service sy204Service) {
        this.menuPgmDetails = menuPgmDetails;
        this.sy204Service = sy204Service;
    }

    /**
     * 메뉴정보 페이지
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

    /**
     * 메뉴정보 조회
     * @param parm
     * @return
     */
    @RequestMapping(value = "/selectGrid", method = RequestMethod.POST)
    public List<HashMapResultVO> selectGrid(@RequestBody HashMapVO parm) {

        List<HashMapResultVO> list = null;
        try {
            list = sy204Service.selectGrid(parm);
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }

        return list;
    }

    /**
     * 메뉴정보 저장
     * @param parm
     * @return
     */
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public BaseResponseVo save(@RequestBody HashMapVO parm) {
        BaseResponseVo responseVo = new BaseResponseVo();
        try {
            if (sy204Service.save(parm) > 0) {
                responseVo.makeResultOk();
            }
        } catch (Exception e) {
            responseVo.makeResultError();
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }

        return responseVo;
    }
}

package com.sjinc.bss.project.ui.sy.sy101;

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
 * 공통코드 Controller
 */
@Slf4j
@RequestMapping(value = "/sy101")
@RestController
public class Sy101Controller extends BaseController {

    private Sy101Service sy101Service;

    public Sy101Controller(MenuPgmDetails menuPgmDetails, Sy101Service sy101Service) {
        this.menuPgmDetails = menuPgmDetails;
        this.sy101Service = sy101Service;
    }


    @RequestMapping(value = "")
    public ModelAndView defaultPage(HttpServletRequest request, HttpServletResponse response, @RequestParam String programId) {
        return makeDefaultModelAndView(request, programId);
    }

    @RequestMapping(value = "/saveGrid", method = RequestMethod.POST)
    public BaseResponseVo save(@RequestBody HashMapVO parm) {
        BaseResponseVo responseVo = new BaseResponseVo();
        try {
            if (sy101Service.save(parm) > 0) {
                responseVo.makeResultOk();
            }
        } catch (Exception e) {
            responseVo.makeResultError(e);
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }

        return responseVo;
    }

    @RequestMapping(value = "/deleteGrid", method = RequestMethod.POST)
    public BaseResponseVo delete(@RequestBody List<HashMapVO> parm) {
        BaseResponseVo responseVo = new BaseResponseVo();

        try {
            if (sy101Service.delete(parm) > 0) {
                responseVo.makeResultOk();
            }
        } catch (Exception e) {
            responseVo.makeResultError(e);
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }

        return responseVo;
    }


}

package com.sjinc.bss.project.commonmodule.etc;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.data.HashMapStringVO;
import com.sjinc.bss.framework.model.LoginUserVo;
import com.sjinc.bss.framework.model.base.BaseResponseVo;
import com.sjinc.bss.project.base.BaseController;
import com.sjinc.bss.project.commonmodule.menuprogram.MenuPgmDetails;
import com.sjinc.bss.project.commonmodule.systemconfig.SystemConfigDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@RestController
public class PopupController extends BaseController {

    private final PopupService popupService;
    private final SystemConfigDetails systemConfigDetails;

    public PopupController(PopupService popupService, MenuPgmDetails menuPgmDetails
            , SystemConfigDetails systemConfigDetails) {
        this.popupService = popupService;
        this.menuPgmDetails = menuPgmDetails;
        this.systemConfigDetails = systemConfigDetails;
    }

    /**
     * 주소 찾기 팝업
     * @param request
     * @return
     */
    @RequestMapping(value = "/jusocode")
    public ModelAndView jusocode(HttpServletRequest request) {
        LoginUserVo loginUserVo = getLoginUserDetails(request);
        ModelAndView modelAndView = new ModelAndView();
        String confmKey = systemConfigDetails.getSysConfStringValueByKey(loginUserVo.getCompCd(), "ES011"); //주소조회 인증키
        modelAndView.addObject("confmKey", confmKey);
        modelAndView.setViewName("frame/common/jusocode");
        return modelAndView;
    }

    /**
     * 내정보 팝업
     * @param request
     * @param response
     * @param programId
     * @return
     */
    @RequestMapping(value = "/myInfo")
    public ModelAndView myInfoDefaultPage(HttpServletRequest request, HttpServletResponse response, @RequestParam String programId) {
        ModelAndView mv = makeDefaultModelAndView(request, programId); // 내정보 programId : SY000P1
        mv.setViewName("/project/main/myInfoPopup");
        return mv;
    }

    @RequestMapping(value = "/myInfo/save", method = RequestMethod.POST)
    public BaseResponseVo saveUserPwd(@RequestBody HashMapStringVO parm) {
        BaseResponseVo responseVo = new BaseResponseVo();
        try {
            if (popupService.saveUserPwd(parm) > 0) {
                responseVo.makeResultOk();
            }
        } catch (Exception e) {
            responseVo.makeResultError(e);
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }
        return responseVo;
    }
}

package com.sjinc.bss.project.main;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.FrameUtil;
import com.sjinc.bss.framework.data.HashMapStringVO;
import com.sjinc.bss.framework.data.HashMapVO;
import com.sjinc.bss.framework.model.LoginUserVo;
import com.sjinc.bss.project.base.BaseController;
import com.sjinc.bss.project.common.CommonService;
import com.sjinc.bss.project.commonmodule.menuprogram.MenuPgmDetails;
import com.sjinc.bss.project.commonmodule.menuprogram.MenuPgmVo;
import com.sjinc.bss.project.commonmodule.systemconfig.SystemConfigDetails;
import com.sjinc.bss.project.main.entity.MainMessageDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Controller
public class MainController extends BaseController {

    private MainService mainService;
    private MenuPgmDetails menuPgmDetails;
    private SystemConfigDetails systemConfigDetails;
    private CommonService commonService;

    private final static String namespace = "main";

    public MainController(MainService mainService, MenuPgmDetails menuPgmDetails
            , SystemConfigDetails systemConfigDetails, CommonService commonService) {
        this.mainService = mainService;
        this.menuPgmDetails = menuPgmDetails;
        this.systemConfigDetails = systemConfigDetails;
        this.commonService = commonService;
    }

    @RequestMapping(value = "/main")
    public ModelAndView main(HttpServletRequest request, HttpServletResponse response) {

        //로그인 사용자 정보
        LoginUserVo loginUserVo = getLoginUserDetails(request);

        //menu/pgm 목록을 불러 온다.
        ArrayList<MenuPgmVo> menuList = menuPgmDetails.getMenulistByUserGroup(loginUserVo.getCompCd(), loginUserVo.getUserGbCd());
        log.info(menuList.toString());

        ModelAndView modelAndView = new ModelAndView("/project/main/main");
        modelAndView.addObject("MENU_LIST", menuList);

        //시스템 이름
        String systemName = systemConfigDetails.getSystemName();
        modelAndView.addObject("systemName", systemName);

        return modelAndView;
    }

    @RequestMapping(value = "/mainMessageGrid", method = RequestMethod.POST)
    @ResponseBody
    public List<MainMessageDto> selectMessage(@RequestBody MainMessageRequestVo parm) {
        List<MainMessageDto> list = null;
        try {
            list = mainService.selectMessage(parm);
        } catch (Exception e) {

            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }

        return list;
    }

    /**
     * 메뉴 히스토리 저장
     * @param request
     * @param parm
     * @return
     */
    @RequestMapping(value = "/saveMenuCnnHstr", method = RequestMethod.POST)
    @ResponseBody
    public Integer saveMenuCnnHstr(HttpServletRequest request, @RequestBody HashMapVO parm) {
        LoginUserVo loginUserVo = getLoginUserDetails(request);
        Integer result = null;
        try {
            parm.put("regUserIp", FrameUtil.getRemoteIP(request));
            result = menuPgmDetails.saveMenuCnnHstr(parm, loginUserVo);
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }
        return result;
    }
}

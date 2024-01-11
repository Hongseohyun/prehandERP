package com.sjinc.bss.project.base;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.model.LoginUserVo;
import com.sjinc.bss.project.commonmodule.menuprogram.MenuPgmDetails;
import com.sjinc.bss.project.commonmodule.menuprogram.PageTitleVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
public class BaseController {

    //@Autowired
    //protected HttpSession httpSession; //생성자에 넣으려고 하였으나, 자식 class에서 주입을 별도로 해야 해서...autowired 처리함..

    protected MenuPgmDetails menuPgmDetails;
    protected String defaultPageViewPath; // -> /project/sy/sy204/sy204

    /**
     * default page modelandview 생성 ( 메뉴 정보 포함 )
     *
     * @param request
     * @param programId
     * @return
     */
    protected ModelAndView makeDefaultModelAndView(HttpServletRequest request, String programId) {
        ModelAndView modelAndView = new ModelAndView(makeViewPath(programId));  // -> /project/sy/sy204/sy204
        try {
            //1. 로그인 사용자 정보를 받아 온다.
            LoginUserVo loginUserVo = getLoginUserDetails(request);

            //2. 프로그램의 메뉴정보를 검색한다.
            PageTitleVo pageTitleVo = menuPgmDetails.getPgmTitleAndAuthInfo(loginUserVo.getCompCd(), loginUserVo.getUserGbCd(), programId);
            modelAndView.addObject(FrameConstants.PAGE_TITLE_ATTR, pageTitleVo); //호출된 페이지의 메뉴 정보 (ProgramId, ProgramName 등)
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }
        return modelAndView;
    }

    /**
     * programId를 통해서 view path를 구한다. ( sy204 -> /project/sy/sy204/sy204 )
     *
     * @param programId
     * @return
     */
    private synchronized String makeViewPath(String programId) {
        if (defaultPageViewPath == null) {
            StringBuffer sb = new StringBuffer();
            sb.append("/project/");
            sb.append(programId.substring(0, 2));
            sb.append("/");
            sb.append(programId);
            sb.append("/");
            sb.append(programId);
            defaultPageViewPath = sb.toString().toLowerCase();
        }
        return defaultPageViewPath;
    }

    /**
     * session의 로그인 사용자 정보를 리턴한다.
     *
     * @return 로그인 사용자 정보
     */
    protected LoginUserVo getLoginUserDetails(HttpServletRequest request) {
        LoginUserVo result = null;
        HttpSession httpSession = request.getSession();
        if (httpSession != null) {
            result = (LoginUserVo) httpSession.getAttribute(FrameConstants.LOGIN_USER_ATTR);
        }
        return result;
    }

}

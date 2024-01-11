package com.sjinc.bss.project.login;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.project.commonmodule.systemconfig.SystemConfigDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Controller
public class LoginController {

    private SystemConfigDetails systemConfigDetails;
    private LoginService loginService;

    public LoginController(SystemConfigDetails systemConfigDetails, LoginService loginService) {
        this.systemConfigDetails = systemConfigDetails;
        this.loginService = loginService;
    }


    @RequestMapping(value = "/")
    public ModelAndView defaultPage() {
        return makeDefaultPage();
    }

    /**
     * 로그인
     * @return
     */
    @RequestMapping(value = "/login")
    public ModelAndView login() {
        return makeDefaultPage();
    }


    private ModelAndView makeDefaultPage() {
        ModelAndView modelAndView = new ModelAndView("/project/main/login");

        //시스템 이름
        String systemName = systemConfigDetails.getSystemName();
        modelAndView.addObject("systemName", systemName);

        //개발계 여부
        if (systemName.contains("개발")) {
            modelAndView.addObject("isDev", "Y");
        } else {
            modelAndView.addObject("isDev", "N");
        }
        return modelAndView;
    }

    /*@RequestMapping(value = "/loginProcess")
    @ResponseBody
    public ResultVo login(@RequestBody HashMapVO hashMapVO, HttpServletRequest request)  {
        ResultVo<HashMapVO> resultVO = new ResultVo();

        try{
            log.info("테스트");

        }catch (Exception ex){
            log.error(ex.getMessage());
            resultVO.ErrorMsg = ex.getMessage();
            resultVO.IsError = true;
        }
        return resultVO;
    }*/

    /**
     * 사용자 아이디와 비밀번호를 체크하여 리턴한다.
     *
     * @param request
     * @param response
     * @param loginRequestVo
     * @return
     */
    @RequestMapping(value = "/loginProcess", method = RequestMethod.POST)
    @ResponseBody
    public LoginResponseVo loginProcess(HttpServletRequest request, HttpServletResponse response, @RequestBody LoginRequestVo loginRequestVo) {

        LoginResponseVo result = loginService.loginProcess(request, response, loginRequestVo, false);
        log.info(String.format("===> login try id : %s, result : %s", loginRequestVo.getUserId(), result.getLoginResultCode()));
        try{
            loginService.saveLoginHstr(request ,result);
        }catch(Exception e){
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }

        return result;
    }

    /**
     * SSO 사용자 아이디와 비밀번호를 체크하여 리턴한다.
     *
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/SSOloginProcess")
    public LoginResponseVo SSOloginProcess(HttpServletRequest request, HttpServletResponse response) {

        String user_id = (String)request.getSession().getAttribute("user_id");
        LoginRequestVo loginRequestVo = new LoginRequestVo();
        loginRequestVo.setUserId(user_id);
        loginRequestVo.setPassWd("sso");
        log.info("===> sso login  try id : %s", user_id);
        LoginResponseVo result = loginService.loginProcess(request, response, loginRequestVo, true);
        log.info(String.format("===> login try id : %s, result : %s", loginRequestVo.getUserId(), result.getLoginResultCode()));
        try {
            response.sendRedirect("/main");
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }

    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public LogoutResponseVo logout(HttpServletRequest request, HttpServletResponse response, @RequestBody LogoutRequestVo logoutRequestVo) {
        LogoutResponseVo result = loginService.logout(request, logoutRequestVo);
        log.info(String.format("user id : %s logout completed", logoutRequestVo.getUserId()));
        return result;
    }

    @RequestMapping(value = "/tologin")
    public ModelAndView toLogin() {
        return new ModelAndView("/frame/base/tologin");
    }
}

package com.sjinc.bss.framework;

import com.sjinc.bss.framework.model.LoginUserVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.ObjectUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Spring MVC Interceptor
 */

@Slf4j
public class FrameHandlerInterceptor implements org.springframework.web.servlet.HandlerInterceptor {

    /**
     *
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        log.info("===============================================");
        log.info(String.format("==== Request URI is => %s", request.getRequestURI()));

        HttpSession session = request.getSession();
        LoginUserVo userVo = (LoginUserVo) session.getAttribute(FrameConstants.LOGIN_USER_ATTR);

        if (ObjectUtils.isEmpty(userVo)) {
            log.info(String.format("==== Request URI %s requires login, so go to the login page", request.getRequestURI()));

            response.sendRedirect(request.getContextPath() + "/login");
            return false;
        }
        else {
            //session.setMaxInactiveInterval(30*60);
            return true;
        }
    }

}

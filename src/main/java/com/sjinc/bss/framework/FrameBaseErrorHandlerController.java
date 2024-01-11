package com.sjinc.bss.framework;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

/**
 * Error 처리
 */

@Slf4j
@Controller
public class FrameBaseErrorHandlerController implements ErrorController {

    @RequestMapping("${server.error.path:${error.path:/error}}")
    //@ResponseBody
    public String handleError(HttpServletRequest request, Model model) {

        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        HttpStatus httpStatus = HttpStatus.valueOf(Integer.valueOf(status.toString()));
        log.error(String.format("internal error httpStatus : %s, reasonPhrase : %s", httpStatus.toString(), httpStatus.getReasonPhrase()));
        model.addAttribute("code", status.toString());
        model.addAttribute("msg", httpStatus.getReasonPhrase());

        /*var result = new ResultVo();
        result.IsError=true;
        result.ErrorMsg =httpStatus.getReasonPhrase();*/

        return "frame/base/error";
    }

}

package com.sjinc.bss.project.ui.sy.sy999;

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
public class Sy999Controller extends BaseController {


    public Sy999Controller(MenuPgmDetails menuPgmDetails) {
        this.menuPgmDetails = menuPgmDetails;
    }


    @RequestMapping(value = "/sy999")
    public ModelAndView defaultPage(HttpServletRequest request, HttpServletResponse response, @RequestParam String programId) {
        return makeDefaultModelAndView(request, programId);
    }


}

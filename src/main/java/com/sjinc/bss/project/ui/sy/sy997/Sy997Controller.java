package com.sjinc.bss.project.ui.sy.sy997;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.FrameUtil;
import com.sjinc.bss.framework.data.HashMapResultVO;
import com.sjinc.bss.framework.data.HashMapStringVO;
import com.sjinc.bss.framework.data.HashMapVO;
import com.sjinc.bss.framework.model.LoginUserVo;
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
 * 샘플페이지 CRUD 컨트롤러
 *
 * ## 단위 프로그램 생성시 필요파일
 *  - 컨트롤러 (단위프로그램명+Controller.java)
 *  - 서비스 (단위프로그램명+Service.java)
 *  - Mapper(xml) (단위프로그램명+Mapper.xml)
 *  - jsp (단위프로그램명.jsp)
 *  - js (단위프로그램명.js)
 *  java, xml파일은 대문자로 jsp, js 파일은 소문자로 시작.
 *
 * CommonController 의 기본 조회, 저장, 삭제 등으로 전체 로직 처리가 가능할경우 서비스 클래스 생략
 *
 * @author oyk09
 * @version 1.0
 * @description 샘플페이지 CRUD 예시
 * @since 2023-08-11 최초 작성
 */
@Slf4j
@RequestMapping(value = "/sy997")
@RestController
public class Sy997Controller extends BaseController {

    private final Sy997Service sy997Service;

    public Sy997Controller(MenuPgmDetails menuPgmDetails,Sy997Service sy997Service) {
        this.menuPgmDetails = menuPgmDetails;
        this.sy997Service = sy997Service;
    }

    /**
     * 샘플페이지 Page
     * @param request
     * @param response
     * @param programId
     * @return mv
     */
    @RequestMapping(value = "")
    public ModelAndView defaultPage(HttpServletRequest request, HttpServletResponse response, @RequestParam String programId) {
        return makeDefaultModelAndView(request, programId);
    }

    /**
     * 샘플페이지 조회
     * @param parm
     * @return
     */
    @RequestMapping(value = "/selectGrid", method = RequestMethod.POST)
    public BaseResponseVo selectGrid(@RequestBody HashMapVO parm, HttpServletRequest request) {
        BaseResponseVo responseVo = new BaseResponseVo();

        List<HashMapResultVO> list = null;
        try {
            LoginUserVo loginUserVo = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);
            FrameUtil.addUserInfo(parm, loginUserVo);

            list = sy997Service.selectGrid(parm);
            responseVo.makeResultOk();
            responseVo.setResultVO(list);
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_CONTROLLER, e);
            responseVo.makeResultError(e);
        }
        return responseVo;
    }

    /**
     * 샘플페이지 저장
     * @param parmList
     * @return
     */
    @RequestMapping(value = "/saveGrid", method = RequestMethod.POST)
    public BaseResponseVo saveGrid(@RequestBody List<HashMapStringVO> parmList) {
        BaseResponseVo responseVo = new BaseResponseVo();

        try {
            if (sy997Service.save(parmList) > 0) {
                responseVo.makeResultOk();
            }
        } catch (Exception e) {
            responseVo.makeResultError(e);
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }
        return responseVo;
    }

    /**
     * 샘플페이지 삭제
     * @param parmList
     * @return
     */
    @RequestMapping(value = "/deleteGrid", method = RequestMethod.POST)
    public BaseResponseVo deleteGrid(@RequestBody List<HashMapStringVO> parmList) {
        BaseResponseVo responseVo = new BaseResponseVo();

        try {
            if (sy997Service.delete(parmList) > 0) {
                responseVo.makeResultOk();
            }
        } catch (Exception e) {
            responseVo.makeResultError(e);
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }
        return responseVo;
    }
}

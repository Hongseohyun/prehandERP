package com.sjinc.bss.project.commonmodule.codehelp;

import com.google.gson.Gson;
import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.data.HashMapResultVO;
import com.sjinc.bss.framework.data.HashMapStringVO;
import com.sjinc.bss.project.base.BaseController;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 공통 (공통코드 등) Controller
 */

@Slf4j
@RestController
public class CodeHelpController extends BaseController {


    private CodeHelpCmmCdDetails codeHelpCmmCdDetails;

    public CodeHelpController(CodeHelpCmmCdDetails codeHelpCmmCdDetails) {
        this.codeHelpCmmCdDetails = codeHelpCmmCdDetails;
    }

    /**
     * code name
     *
     * @param parm
     * @return
     */
    @RequestMapping(value = "/getCodeName")
    public List<HashMapResultVO> getCodeName(@RequestBody HashMapStringVO parm) {
        List<HashMapResultVO> result = null;
        try {
            result = codeHelpCmmCdDetails.getCodeName(parm);
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_SERVICE, e);
        }
        return result;
    }

    /**
     * combo box select list
     *
     * @param parm
     * @return
     */
    @RequestMapping(value = "/getSelectList", produces = "text/plain;Charset=UTF-8")
    public String getSelectList(@RequestBody HashMapStringVO parm) {
        String result = "";
        try {
            List<HashMapResultVO> list = codeHelpCmmCdDetails.getSelectList(parm);
            if (!ObjectUtils.isEmpty(list)) {
                result = new Gson().toJson(list);
            }
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_SERVICE, e);
        }
        return result;
    }
}

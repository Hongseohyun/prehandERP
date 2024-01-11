package com.sjinc.bss.project.commonmodule.etc;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.FrameHttpUtil;
import com.sjinc.bss.framework.FrameStringUtil;
import com.sjinc.bss.framework.data.Data;
import com.sjinc.bss.framework.data.HashMapResultVO;
import com.sjinc.bss.framework.model.base.BaseMapParmVo;
import com.sjinc.bss.framework.model.base.BaseResponseVo;
import com.sjinc.bss.framework.utils.excel.ExcelUtil;
import com.sjinc.bss.framework.utils.excel.ExcelWriter;
import com.sjinc.bss.project.base.BaseController;
import com.sjinc.bss.project.commonmodule.systemconfig.SystemConfigDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

/**
 * 시스템환경값, 엑셀 등.. Controller
 */

@Slf4j
@RestController
public class UtilController extends BaseController {


    private SystemConfigDetails systemConfigDetails;

    public UtilController(SystemConfigDetails systemConfigDetails) {
        this.systemConfigDetails = systemConfigDetails;
    }

    /**
     * 시스템 환경 변수 조회
     *
     * @param parm
     * @return
     */
    @RequestMapping(value = "/getSystemEnv")
    public HashMapResultVO getSystemEnv(@RequestBody HashMapResultVO parm) {
        HashMapResultVO result = null;
        try {
            result = systemConfigDetails.getSysConfByKey((String)parm.get("compcd"), (String)parm.get("stdcd"));
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_SERVICE, e);
        }
        return result;
    }

    /**
     * XML 데이터 엑셀로 변환
     * @param request
     * @param response
     */
    @RequestMapping(value = "/xmlToExcel", method = {RequestMethod.GET, RequestMethod.POST})
    public void xmlToExcel(HttpServletRequest request, HttpServletResponse response) {
        try {
            Map<String, Object> map = FrameHttpUtil.getParamtrData(request, "", "");
            BaseMapParmVo hashMapVO = new BaseMapParmVo(FrameHttpUtil.getConvertData(map));

            (new ExcelWriter()).generate(FrameStringUtil.convertHtml(hashMapVO.get("XML").toString(), "de"), response, hashMapVO.get("FILENAME").toString());
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_SERVICE, e);
        }
    }

    @RequestMapping(value = "/gridToExcel", method = {RequestMethod.GET, RequestMethod.POST})
    public void gridToExcel(HttpServletRequest request, HttpServletResponse response) {
        try {
            Map<String, Object> map = FrameHttpUtil.getParamtrData(request, "", "");
            BaseMapParmVo hashMapVO = new BaseMapParmVo(FrameHttpUtil.getConvertData(map));

            (new ExcelWriter()).generate(response, hashMapVO.get("FILENAME").toString(), hashMapVO.get("BIGMTH").toString(), request, hashMapVO, (String[]) hashMapVO.get("COLS"));
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_SERVICE, e);
        }
    }

    /**
     * 엑셀 업로드 데이터 추출
     * @param mtfRequest
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/uploadExcelFile", method = RequestMethod.POST)
    public BaseResponseVo uploadExcelFile(MultipartHttpServletRequest mtfRequest, HttpServletRequest request) throws Exception {
        BaseResponseVo responseVo = new BaseResponseVo();

        if (mtfRequest == null) {
            responseVo.makeResultError();
            responseVo.setResultMessage("파일을 찾을 수 없습니다.");
            return responseVo;
        }
        Data<String> parm = Data.fromRequest(request);
        MultipartFile file = mtfRequest.getFile("upfile");

        try {
            List<Map<String, Object>> list = ExcelUtil.getList(Arrays.asList(parm.get("fileColNames").split(",")), file);
            if (list.size() > 0) {
                responseVo.setResultVO(list);
                responseVo.makeResultOk();
            } else if (list.size() == 0) {
                responseVo.makeResultWarn();
            }
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_CONTROLLER, e);
            responseVo.makeResultError(e);
        }

        return responseVo;
    }
}

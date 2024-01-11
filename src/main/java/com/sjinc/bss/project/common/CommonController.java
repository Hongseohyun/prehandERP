package com.sjinc.bss.project.common;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.FrameFileUtil;
import com.sjinc.bss.framework.FrameUtil;
import com.sjinc.bss.framework.data.Data;
import com.sjinc.bss.framework.data.HashMapStringVO;
import com.sjinc.bss.framework.data.HashMapVO;
import com.sjinc.bss.framework.model.LoginUserVo;
import com.sjinc.bss.framework.model.base.BaseResponseVo;
import com.sjinc.bss.project.base.BaseController;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.security.sasl.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import java.io.FileNotFoundException;
import java.net.URLEncoder;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
public class CommonController extends BaseController {

    private CommonService commonService;

    public CommonController(CommonService commonService) {
        this.commonService = commonService;
    }

    @RequestMapping(value = "/common/selectList")
    @ResponseBody
    public BaseResponseVo selectList(@RequestBody HashMapVO hashMapVO, HttpServletRequest request) {

        BaseResponseVo baseResponseVo = new BaseResponseVo();
        try {
            LoginUserVo loginUserVo = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);
            FrameUtil.addUserInfo(hashMapVO, loginUserVo);

            baseResponseVo.setResultVO(commonService.selectList((String)hashMapVO.get("queryid"), hashMapVO));
            if (ObjectUtils.isEmpty(baseResponseVo.getResultVO())) {
                baseResponseVo.makeResultWarn();
                baseResponseVo.setResultMessage("자료가 없습니다.");
            }else {
                baseResponseVo.makeResultOk();
            }
        }catch (AuthenticationException ex){
            log.error("인증 에러");
            baseResponseVo.makeResultSessionError();
            baseResponseVo.setResultMessage("인증 만료.");
        }
        catch (Exception ex) {
            log.error(ex.getMessage());
            baseResponseVo.makeResultError(ex);
        }
        return baseResponseVo;
    }

    @RequestMapping(value = "/common/selectOne")
    @ResponseBody
    public BaseResponseVo selectOne(@RequestBody HashMapVO hashMapVO, HttpServletRequest request) {

        BaseResponseVo baseResponseVo = new BaseResponseVo();

        try {
            LoginUserVo loginUserVo = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);
            FrameUtil.addUserInfo(hashMapVO, loginUserVo);

            baseResponseVo.setResultVO(commonService.selectOne((String)hashMapVO.get("queryid"), hashMapVO));
            if (ObjectUtils.isEmpty(baseResponseVo.getResultVO())) {
                baseResponseVo.makeResultWarn();
                baseResponseVo.setResultMessage("자료가 없습니다.");
            }else {
                baseResponseVo.makeResultOk();
            }
        }
        catch (AuthenticationException ex){
            log.error("인증 에러");
            baseResponseVo.makeResultSessionError();
            baseResponseVo.setResultMessage("인증 만료.");
        }
        catch (Exception ex) {
            log.error(ex.getMessage());
            baseResponseVo.makeResultError(ex);
        }
        return baseResponseVo;
    }

    @RequestMapping(value = "/common/update")
    @ResponseBody
    public BaseResponseVo update(@RequestBody HashMapVO hashMapVO, HttpServletRequest request) {

        BaseResponseVo baseResponseVo = new BaseResponseVo();
        baseResponseVo.setResultVO(0);

        try {
            LoginUserVo loginUserVo = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);
            FrameUtil.addUserInfo(hashMapVO, loginUserVo);

            baseResponseVo.setResultVO(commonService.update((String)hashMapVO.get("queryid"), hashMapVO));
            baseResponseVo.makeResultOk();
        } catch (Exception ex) {
            log.error(ex.getMessage());
            baseResponseVo.makeResultError(ex,true);
        }

        return baseResponseVo;
    }

    @RequestMapping(value = "/common/insert")
    @ResponseBody
    public BaseResponseVo insert(@RequestBody HashMapVO hashMapVO, HttpServletRequest request) {

        BaseResponseVo baseResponseVo = new BaseResponseVo();
        baseResponseVo.setResultVO(0);
        try {

            LoginUserVo loginUserVo = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);
            FrameUtil.addUserInfo(hashMapVO, loginUserVo);

            baseResponseVo.setResultVO(commonService.insert((String)hashMapVO.get("queryid"), hashMapVO));
            baseResponseVo.makeResultOk();
        } catch (Exception ex) {
            log.error(ex.getMessage());
            baseResponseVo.makeResultError(ex,true);
        }

        return baseResponseVo;
    }

    @RequestMapping(value = "/common/merge")
    @ResponseBody
    public BaseResponseVo merge(@RequestBody HashMap hashMapVO, HttpServletRequest request) {

        BaseResponseVo baseResponseVo = new BaseResponseVo();
        baseResponseVo.setResultVO(0);
        try {

            LoginUserVo loginUserVo = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);

            baseResponseVo.setResultVO(commonService.merge(hashMapVO.get("queryid").toString(), hashMapVO, loginUserVo));
            baseResponseVo.makeResultOk();
        } catch (Exception ex) {
            log.error(ex.getMessage());
            baseResponseVo.makeResultError(ex,true);
        }

        return baseResponseVo;
    }

    @RequestMapping(value = "/common/mergeList")
    @ResponseBody
    public BaseResponseVo merge(@RequestBody HashMapVO hashMapVO, HttpServletRequest request) {

        BaseResponseVo baseResponseVo = new BaseResponseVo();
        try {

            List<Map> data = (List<Map>) hashMapVO.get("data");
            String queryid = hashMapVO.get("queryid").toString();

            LoginUserVo LoginUserVo = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);
            baseResponseVo.setResultVO(commonService.mergeList(queryid, data, LoginUserVo));
            baseResponseVo.makeResultOk();
        } catch (Exception ex) {
            log.error(ex.getMessage());
            baseResponseVo.makeResultError(ex,true);
        }

        return baseResponseVo;
    }

    @RequestMapping(value = "/common/deleteList")
    @ResponseBody
    public BaseResponseVo deleteList(@RequestBody HashMapVO hashMapVO, HttpServletRequest request) {

        BaseResponseVo baseResponseVo = new BaseResponseVo();

        try {

            List<Map> data = (List<Map>) hashMapVO.get("data");
            String queryid = hashMapVO.get("queryid").toString();

            LoginUserVo LoginUserVo = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);
            baseResponseVo.setResultVO(commonService.deleteList(queryid, data, LoginUserVo));
            baseResponseVo.makeResultOk();
        } catch (Exception ex) {
            log.error(ex.getMessage());
            baseResponseVo.makeResultError(ex,true);
        }

        return baseResponseVo;
    }

    @RequestMapping(value = "/common/saveList")
    @ResponseBody
    public BaseResponseVo saveList(@RequestBody HashMapVO hashMapVO, HttpServletRequest request) {

        BaseResponseVo baseResponseVo = new BaseResponseVo();

        try {

            List<Map> data = (List<Map>) hashMapVO.get("data");
            String updateQueryId = (String) hashMapVO.get("updateQueryId");
            String insertQueryId = (String) hashMapVO.get("insertQueryId");

            LoginUserVo LoginUserVo = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);
            baseResponseVo.setResultVO(commonService.saveList(updateQueryId, insertQueryId, data, LoginUserVo));
            baseResponseVo.makeResultOk();
        } catch (Exception ex) {
            log.error(ex.getMessage());
            baseResponseVo.makeResultError(ex,true);
        }

        return baseResponseVo;
    }

    @RequestMapping(value = "/common/delete")
    @ResponseBody
    public BaseResponseVo delete(@RequestBody HashMapVO hashMapVO, HttpServletRequest request) {

        BaseResponseVo baseResponseVo = new BaseResponseVo();
        baseResponseVo.setResultVO(0);
        try {
            LoginUserVo LoginUserVo = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);
            baseResponseVo.setResultVO(commonService.delete((String)hashMapVO.get("queryid"), hashMapVO, LoginUserVo));
            baseResponseVo.makeResultOk();
        } catch (Exception ex) {
            log.error(ex.getMessage());
            baseResponseVo.makeResultError(ex,true);
        }

        return baseResponseVo;
    }

    @RequestMapping(value = "/common/procedure")
    @ResponseBody
    public BaseResponseVo callProcedure(@RequestBody HashMapVO hashMapVO, HttpServletRequest request) {

        BaseResponseVo baseResponseVo = new BaseResponseVo();
        baseResponseVo.setResultVO(0);

        try {
            LoginUserVo LoginUserVo = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);
            baseResponseVo.setResultVO(commonService.callProcedure(hashMapVO.get("queryid").toString(), hashMapVO, LoginUserVo));
            baseResponseVo.makeResultOk();
        }catch (SQLException ex){
            log.error(ex.getMessage());
            baseResponseVo.makeResultError(ex,true);
        }
        catch (Exception ex) {
            log.error(ex.getMessage());
            baseResponseVo.makeResultError(ex,true);
        }

        return baseResponseVo;
    }

    /**
     * 공통 파일 업로드 (파일은 sy_atfi_info에 저장하고 queryid 있다면 추가 저장처리)
     * @param mtfRequest
     * @param request
     * @return
     */
    @RequestMapping(value = "/common/uploadFileList")
    public BaseResponseVo uploadFileList(MultipartHttpServletRequest mtfRequest, HttpServletRequest request) {
        BaseResponseVo baseResponseVo = new BaseResponseVo();
        if (mtfRequest == null) {
            baseResponseVo.makeResultError();
            baseResponseVo.setResultMessage("파일을 찾을 수 없습니다.");
            return baseResponseVo;
        }

        try {
            LoginUserVo LoginUserVo = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);
            List<MultipartFile> fileList = mtfRequest.getFiles("atfiFile");

            Data<String> parm = Data.fromRequest(request);
            baseResponseVo.setResultVO(commonService.uploadFileList(fileList, parm, LoginUserVo));
            baseResponseVo.makeResultOk();
        }
        catch (Exception ex) {
            log.error(ex.getMessage());
            baseResponseVo.makeResultError(ex,true);
        }

        return baseResponseVo;
    }

    /**
     * 공통 파일 다운로드
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "/common/downloadFile", method = {RequestMethod.POST, RequestMethod.GET})
    public ResponseEntity<Resource> download(HttpServletRequest httpServletRequest) {
        try {
            Resource resource = FrameFileUtil.loadAsResource(
                    FrameConstants.REAL_PATH +
                            httpServletRequest.getParameter("servPath"),
                    httpServletRequest.getParameter("servFileNm"));

            String originFileName = URLEncoder.encode(httpServletRequest.getParameter("origFileNm"),
                    "UTF-8").replaceAll("\\+", "%20");
            HttpHeaders headers = new HttpHeaders();

            headers.setContentDisposition(ContentDisposition.builder("attachment").filename(originFileName).build());

            return ResponseEntity.ok().headers(headers).body(resource);
        } catch (FileNotFoundException fe) {
            log.error(FrameConstants.ERROR_CONTROLLER, fe);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_CONTROLLER, e);
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).build();
        }
    }

    /**
     * 공통 파일 삭제
     * @param parm
     * @return
     */
    @RequestMapping(value = "/common/deleteFile", method = RequestMethod.POST)
    public BaseResponseVo deleteAttach(@RequestBody HashMapVO parm, HttpServletRequest request) {

        BaseResponseVo responseVo = new BaseResponseVo();
        try {
            LoginUserVo loginUserVo = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);
            if (commonService.deleteAttach(parm, loginUserVo) > 0) {
                responseVo.makeResultOk();
            } else {
                responseVo.makeResultError();
            }
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_CONTROLLER, e);
            responseVo.makeResultError(e);
        }

        return responseVo;
    }

    /**
     * 에디터 이미지 업로드
     * @param mtfRequest
     * @param request
     * @return
     */
    @RequestMapping(value = "/CKESave", method = RequestMethod.POST)
    public Map imgSave(MultipartHttpServletRequest mtfRequest, HttpServletRequest request) {
        Map result = new HashMap();

        try {
            if (mtfRequest != null) {
                List<MultipartFile> fileList = mtfRequest.getFiles("upload");

                HashMapStringVO parm = new HashMapStringVO();
                LoginUserVo loginVO = (LoginUserVo) request.getSession().getAttribute(FrameConstants.LOGIN_USER_ATTR);

                parm.put("compCd",loginVO.getCompCd());
                parm.put("userId",loginVO.getUserId());
                parm.put("atfiId",request.getParameter("atfiId"));

                Map<String, String> resultMap = commonService.saveImg(fileList, parm);

                if (Integer.valueOf(resultMap.get("result")) > 0) {
                    result.put("filename", fileList.get(0).getName());
                    result.put("uploaded", "1");
                    result.put("url", "/CKEDown?servPath=" +
                            URLEncoder.encode(resultMap.get("servPath").replaceAll("\\\\", "/"), "UTF-8") +
                            "&servFileNm=" +
                            URLEncoder.encode(resultMap.get("servFileNm").replaceAll("\\\\", "/"), "UTF-8")
                    );
                }
            }
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_CONTROLLER, e);
        }

        return result;
    }

    /**
     * 에디터 이미지 다운
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "/CKEDown", method = {RequestMethod.POST, RequestMethod.GET})
    public ResponseEntity<Resource> imgDown(HttpServletRequest httpServletRequest) {
        try {
            Resource resource = FrameFileUtil.loadAsResource(
                    FrameConstants.REAL_PATH +
                            httpServletRequest.getParameter("servPath"),
                    httpServletRequest.getParameter("servFileNm"));

            HttpHeaders headers = new HttpHeaders();
            headers.setContentDisposition(ContentDisposition.builder("attachment").filename(httpServletRequest.getParameter("servFileNm")).build());

            return ResponseEntity.ok().headers(headers).body(resource);
        } catch (FileNotFoundException fe) {
            log.error(FrameConstants.ERROR_CONTROLLER, fe);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_CONTROLLER, e);
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).build();
        }
    }

    /*
    @RequestMapping(value = "/common/DownloadImg", method = {RequestMethod.POST, RequestMethod.GET})
    public ResponseEntity<Resource> downloadImg(HttpServletRequest httpServletRequest) {

        try {

            HashMapStringVO parm = new HashMapStringVO();
            HashMapResultVO map = null;

            if("emg".equals(httpServletRequest.getParameter("type"))){
                parm.put("emg_seq",httpServletRequest.getParameter("emg_seq"));
                parm.put("seq",httpServletRequest.getParameter("seq"));
                map = commonService.selectOne("common.selectEmgFile",parm);
            }
            else if("insp".equals(httpServletRequest.getParameter("type"))) {
                parm.put("insp_no",httpServletRequest.getParameter("insp_no"));
                parm.put("seq",httpServletRequest.getParameter("seq"));
                map = commonService.selectOne("common.selectInspFile",parm);
            }
            else if("danger".equals(httpServletRequest.getParameter("type"))) {
                parm.put("danger_no",httpServletRequest.getParameter("danger_no"));
                parm.put("seq",httpServletRequest.getParameter("seq"));
                map = commonService.selectOne("common.selectDangerFile",parm);
            }

            if(map == null){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            Resource resource = FrameFileUtil.loadAsResource(
                    FrameConstants.REAL_PATH +
                            map.get("servPath").toString(),
                    map.get("servFileNm").toString());

            String originFileName = URLEncoder.encode(map.get("origFileNm").toString(),
                    "UTF-8").replaceAll("\\+", "%20");
            HttpHeaders headers = new HttpHeaders();

             String ext = FrameFileUtil.getFileExt(map.get("origFileNm").toString()).toUpperCase();

            headers.setContentType(ext == "PNG" ? MediaType.IMAGE_PNG : MediaType.IMAGE_JPEG);
            headers.setContentDisposition(ContentDisposition.builder("inline").filename(originFileName).build());

            return ResponseEntity.ok().headers(headers).body(resource);
        } catch (FileNotFoundException fe) {
            log.error(FrameConstants.ERROR_CONTROLLER, fe);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_CONTROLLER, e);
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).build();
        }
    }
*/
}

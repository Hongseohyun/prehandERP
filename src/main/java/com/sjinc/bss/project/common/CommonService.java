package com.sjinc.bss.project.common;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.FrameFileUtil;
import com.sjinc.bss.framework.FrameStringUtil;
import com.sjinc.bss.framework.FrameUtil;
import com.sjinc.bss.framework.data.Data;
import com.sjinc.bss.framework.data.HashMapResultVO;
import com.sjinc.bss.framework.data.HashMapStringVO;
import com.sjinc.bss.framework.data.HashMapVO;
import com.sjinc.bss.framework.model.LoginUserVo;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.security.sasl.AuthenticationException;
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CommonService {

    private SqlSessionTemplate primarySqlSessionTemplate;
    private final static String namespace = "common";

    @Value("${bss.attach.path}")
    private String attachPath;

    @Autowired
    public CommonService(SqlSessionTemplate primarySqlSessionTemplate) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
    }

    public List<HashMapResultVO> selectList(String id, Data<String> parm) {
        return primarySqlSessionTemplate.selectList(id, parm);
    }

    public List<HashMapResultVO> selectList(String id, HashMapVO parm) {
        return primarySqlSessionTemplate.selectList(id, parm);
    }

    public List<HashMapResultVO> selectList(String id, HashMapStringVO parm) {
        return primarySqlSessionTemplate.selectList(id, parm);
    }

    public HashMapResultVO selectOne(String id, Data<String> parm) {
        return primarySqlSessionTemplate.selectOne(id,parm);
    }

    public HashMapResultVO selectOne(String id, HashMapStringVO parm) {
        return primarySqlSessionTemplate.selectOne(id,parm);
    }

    public HashMapResultVO selectOne(String id, HashMapVO parm) {
        return primarySqlSessionTemplate.selectOne(id,parm);
    }

    @Transactional(value = "txManagerPrimary")
    public int insert (String id, HashMapStringVO parm){
        return primarySqlSessionTemplate.insert(id,parm);
    }

    @Transactional(value = "txManagerPrimary")
    public int insert (String id, HashMapVO parm){
        return primarySqlSessionTemplate.insert(id,parm);
    }

    @Transactional(value = "txManagerPrimary")
    public int update (String id, HashMapStringVO parm){
        return primarySqlSessionTemplate.update(id,parm);
    }

    @Transactional(value = "txManagerPrimary")
    public int update (String id, HashMapVO parm){
        return primarySqlSessionTemplate.update(id,parm);
    }

    @Transactional(value = "txManagerPrimary")
    public int delete (String id, Map parm, LoginUserVo userVo) throws AuthenticationException {
        FrameUtil.addUserInfo(parm, userVo);
        return primarySqlSessionTemplate.delete(id,parm);
    }

    @Transactional(value = "txManagerPrimary")
    public int merge (String id, Map parm, LoginUserVo userVo) throws AuthenticationException {
        FrameUtil.addUserInfo(parm, userVo);

        return primarySqlSessionTemplate.update(id,parm);
    }

    @Transactional(value = "txManagerPrimary")
    public List<Integer> mergeList (String id, List<Map> parmlist, LoginUserVo userVo) throws AuthenticationException {

        List<Integer> result = new ArrayList<>();

        for(Map parm : parmlist){
            FrameUtil.addUserInfo(parm, userVo);
            result.add(primarySqlSessionTemplate.update(id,parm));
        }

        return result;
    }

    @Transactional(value = "txManagerPrimary")
    public List<Integer> saveList (String updateQueryId, String saveQueryId, List<Map> parmlist, LoginUserVo userVo) throws AuthenticationException {

        List<Integer> result = new ArrayList<>();

        for(Map parm : parmlist){
            FrameUtil.addUserInfo(parm, userVo);

            if(FrameConstants.DATA_SAVE_UPDATE.equals(parm.get(FrameConstants.DATA_SAVE_TYPE).toString())){
                result.add(primarySqlSessionTemplate.update(updateQueryId,parm));
            }

            if(FrameConstants.DATA_SAVE_INSERT.equals(parm.get(FrameConstants.DATA_SAVE_TYPE).toString())){
                result.add(primarySqlSessionTemplate.update(saveQueryId,parm));
            }

        }

        return result;
    }

    @Transactional(value = "txManagerPrimary")
    public List<Integer> deleteList (String id, List<Map> parmlist, LoginUserVo userVo) throws AuthenticationException {

        List<Integer> result = new ArrayList<>();

        for(Map parm : parmlist){
            FrameUtil.addUserInfo(parm, userVo);
            result.add(primarySqlSessionTemplate.delete(id,parm));
        }

        return result;
    }

    @Transactional(value = "txManagerPrimary")
    public int callProcedure (String id, Map parm, LoginUserVo userVo) throws Exception{
        FrameUtil.addUserInfo(parm, userVo);
        return primarySqlSessionTemplate.update(id,parm);
    }

    @Transactional(value = "txManagerPrimary")
    public Map<String, String> uploadFileList(List<MultipartFile> fileList, Data<String> parm, LoginUserVo userVo)  throws Exception{

        Map<String, String> resultMap = new HashMap<String, String>();
        int result = 0;
        String selectKey = "";

        if (!ObjectUtils.isEmpty(parm) && !ObjectUtils.isEmpty(fileList)) {
            if (fileList.size() > 0) {
                if (StringUtils.isEmpty(parm.get("atfiId"))) {//첨부파일 key 가져오기
                    selectKey = primarySqlSessionTemplate.selectOne(namespace + ".selectAttachKey", parm.get("compCd"));
                } else {
                    selectKey = parm.get("atfiId");
                }

                String dir = FrameFileUtil.makeDir(FrameConstants.REAL_PATH + File.separator + attachPath);

                for (int i = 0; i < fileList.size(); i++) {
                    MultipartFile multipartFile = fileList.get(i);
                    if (!ObjectUtils.isEmpty(multipartFile) && multipartFile.getSize() > 0) {
                        Map<String, String> fileInfo = FrameFileUtil.makeFile(multipartFile, dir);
                        HashMapVO saveFileInfo = new HashMapVO();
                        FrameUtil.addUserInfo(parm, userVo);

                        saveFileInfo.put("compCd", parm.get("compCd"));
                        saveFileInfo.put("atfiId", selectKey);
                        saveFileInfo.put("regPgmId", FrameStringUtil.isNullDefaultValue(parm.get("regPgmId"), ""));
                        saveFileInfo.put("servPath", dir.replace(FrameConstants.REAL_PATH, ""));
                        saveFileInfo.put("servFileNm", fileInfo.get("srcFileName"));
                        saveFileInfo.put("origFileNm", fileInfo.get("originalFilename"));
                        saveFileInfo.put("fileExte", fileInfo.get("orgExtension"));
                        saveFileInfo.put("fileSize", Integer.parseInt(fileInfo.get("size")));
                        saveFileInfo.put("name", fileInfo.get("name"));
                        saveFileInfo.put("deleYn", "N");
                        saveFileInfo.put("fileDir", dir);
                        saveFileInfo.put("userId", parm.get("userId"));
                        result += primarySqlSessionTemplate.insert(namespace + ".insertAttach", saveFileInfo);
                    }
                }
            }
        }

        parm.put("atfiId", selectKey);
        if( !FrameStringUtil.isEmpty(parm.get("insertQueryId")) || !FrameStringUtil.isEmpty(parm.get("updateQueryId"))){
            if(FrameConstants.DATA_SAVE_INSERT.equals(parm.get(FrameConstants.DATA_SAVE_TYPE))){
                result += primarySqlSessionTemplate.insert(parm.get("insertQueryId"), parm);
            }
            if(FrameConstants.DATA_SAVE_UPDATE.equals(parm.get(FrameConstants.DATA_SAVE_TYPE))){
                result += primarySqlSessionTemplate.insert(parm.get("updateQueryId"), parm);
            }
        }

        resultMap.put("atfiId", parm.get("atfiId"));
        resultMap.put("result", Integer.toString(result));
        return resultMap;
    }

    @Transactional(value = "txManagerPrimary")
    public int deleteAttach(HashMapVO parm, LoginUserVo userVo) throws Exception {

        int result = 0;
        if (!ObjectUtils.isEmpty(parm)) {
            FrameUtil.addUserInfo(parm, userVo);
            if(FrameStringUtil.isNullDefaultValue((String) parm.get("fullYn"),"").equals("Y")){
                result += primarySqlSessionTemplate.insert(namespace+".deleteAttachFull", parm);
            }else{
                result += primarySqlSessionTemplate.insert(namespace+".deleteAttach", parm);
            }
        }
        return result;
    }

    @Transactional(value = "txManagerPrimary")
    public Map<String, String> saveImg(List<MultipartFile> fileList, HashMapStringVO parm) throws Exception {

        Map<String, String> resultMap = new HashMap<String, String>();
        int result = 0;

        if (!ObjectUtils.isEmpty(parm) && !ObjectUtils.isEmpty(fileList)) {

            String dir = FrameFileUtil.makeDir(FrameConstants.REAL_PATH + File.separator + attachPath);

            String selectKey = primarySqlSessionTemplate.selectOne(namespace+".selectAttachKey", parm.get("compCd"));

            for (int i = 0; i < fileList.size(); i++) {
                MultipartFile multipartFile = fileList.get(i);
                if (!ObjectUtils.isEmpty(multipartFile) && multipartFile.getSize() > 0) {
                    Map<String, String> fileInfo = FrameFileUtil.makeFile(multipartFile, dir);
                    HashMapVO saveFileInfo = new HashMapVO();

                    saveFileInfo.put("compCd", parm.get("compCd"));
                    saveFileInfo.put("atfiId", selectKey);
                    saveFileInfo.put("regPgmId", FrameStringUtil.isNullDefaultValue(parm.get("regPgmId"), ""));
                    saveFileInfo.put("servPath", dir.replace(FrameConstants.REAL_PATH,""));
                    saveFileInfo.put("servFileNm", fileInfo.get("srcFileName"));
                    saveFileInfo.put("origFileNm", fileInfo.get("originalFilename"));
                    saveFileInfo.put("fileExte", fileInfo.get("orgExtension"));
                    saveFileInfo.put("fileSize", Integer.parseInt(fileInfo.get("size")));
                    saveFileInfo.put("name", fileInfo.get("name"));
                    saveFileInfo.put("deleYn", "N");
                    saveFileInfo.put("fileDir", dir);
                    saveFileInfo.put("userId", parm.get("userId"));
                    saveFileInfo.put("userIp", parm.get("userIp"));

                    resultMap.put("servFileNm", (String) saveFileInfo.get("servFileNm"));
                    resultMap.put("servPath", (String) saveFileInfo.get("servPath"));

                    result += primarySqlSessionTemplate.insert(namespace+".insertAttach", saveFileInfo);
                }
            }

            resultMap.put("atfiId", selectKey);
            resultMap.put("dir", dir);
        }

        resultMap.put("result", Integer.toString(result));
        return resultMap;
    }
}

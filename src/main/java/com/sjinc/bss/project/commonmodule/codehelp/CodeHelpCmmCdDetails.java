package com.sjinc.bss.project.commonmodule.codehelp;


import com.sjinc.bss.framework.data.HashMapResultVO;
import com.sjinc.bss.framework.data.HashMapStringVO;
import com.sjinc.bss.project.utils.ProjectConstants;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

/**
 * code help 관련 서비스
 */

@Slf4j
@Service
public class CodeHelpCmmCdDetails {

    private SqlSessionTemplate primarySqlSessionTemplate;
    private final static String namespace = "codeHelpCmmCd";

    public CodeHelpCmmCdDetails(SqlSessionTemplate primarySqlSessionTemplate) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
    }


    /**
     * code name
     *
     * @param parm
     * @return
     */
    public List<HashMapResultVO> getCodeName(HashMapStringVO parm) {
        List<HashMapResultVO> result = null;
        String queryId = parm.get("queryId");
        if (ProjectConstants.QUERY_SY_CMM_CD.equals(queryId)) {
            result = primarySqlSessionTemplate.selectList(namespace+".selectCodeName01", parm);
        } else if (ProjectConstants.QUERY_SY_COMP_INFO.equals(queryId)) {
            result = primarySqlSessionTemplate.selectList(namespace+".selectCodeName02", parm);
        } else if (ProjectConstants.QUERY_SY_USER_INFO.equals(queryId)) {
            result = primarySqlSessionTemplate.selectList(namespace+".selectCodeName03", parm);
        } else if (ProjectConstants.QUERY_SY_DEPT_INFO.equals(queryId)) {
            result = primarySqlSessionTemplate.selectList(namespace+".selectCodeName04", parm);
        } else if (ProjectConstants.QUERY_SY_USERDEPT_INFO.equals(queryId)) {
            result = primarySqlSessionTemplate.selectList(namespace+".selectCodeName05", parm);
        }
        return result;
    }

    /**
     * select combo list
     *
     * @param parm
     * @return
     */
    public List<HashMap> getSelectList(HashMapResultVO parm) {
        List<HashMap> list = getSelectList(parm);

        Boolean isTotal = (parm.containsKey("total") ? (Boolean) parm.get("total") : false);
        Boolean isComm = (parm.containsKey("comm") ? (Boolean) parm.get("comm") : false);
        if (list != null) {
            if (isTotal) {
                HashMap cmmVo = new HashMap();
                cmmVo.put("id", "*");
                cmmVo.put("value", "전체");
                list.add(0, cmmVo);
            } else if (isComm) {
                HashMap cmmVo = new HashMap();
                cmmVo.put("id", "#");
                cmmVo.put("value", "공통");
                list.add(0, cmmVo);
            }
        }
        return list;
    }

    public List<HashMapResultVO> getSelectList(HashMapStringVO parm) {
        List<HashMapResultVO> result = null;
        String queryId = parm.get("queryId");
        if (ProjectConstants.QUERY_SY_CMM_CD.equals(queryId)) {
            result = primarySqlSessionTemplate.selectList(namespace+".selectList01", parm);
        } else if (ProjectConstants.QUERY_SY_COMP_INFO.equals(queryId)) {
            result = primarySqlSessionTemplate.selectList(namespace+".selectList02", parm);
        } else if (ProjectConstants.QUERY_SY_USER_INFO.equals(queryId)) {
            result = primarySqlSessionTemplate.selectList(namespace+".selectList03", parm);
        } else if (ProjectConstants.QUERY_SY_DEPT_INFO.equals(queryId)) {
            result = primarySqlSessionTemplate.selectList(namespace+".selectList04", parm);
        } else if (ProjectConstants.QUERY_SY_USERDEPT_INFO.equals(queryId)) {
            result = primarySqlSessionTemplate.selectList(namespace+".selectList05", parm);
        }
        return result;
    }
}

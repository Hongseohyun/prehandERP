package com.sjinc.bss.project.commonmodule.systemconfig;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.FrameStringUtil;
import com.sjinc.bss.framework.data.HashMapResultVO;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.ObjectUtils;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * 환경변수 처리관련 서비스
 */

@Slf4j
@Service
public class SystemConfigDetails {
    private SqlSessionTemplate primarySqlSessionTemplate;

    public SystemConfigDetails(SqlSessionTemplate primarySqlSessionTemplate) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
    }


    /**
     * 시스템의 이름을 리턴한다.
     *
     * @return
     */
    public String getSystemName() {
        String result = "";
        HashMapResultVO sySysConf = getSysConfByKey(FrameConstants.DEFAULT_COMP_CD, "ES001");
        if (!ObjectUtils.isEmpty(sySysConf)) {
            result = (String) sySysConf.get("stdVal");
        }
        return result;
    }

    /**
     * 특정 환경 변수 값을 찾아서 문자로 리턴한다.
     *
     * @param compCd
     * @param stdCd
     * @return
     */
    public String getSysConfStringValueByKey(String compCd, String stdCd) {
        String result = null;
        HashMapResultVO sySysConf = getSysConfByKey(compCd, stdCd);
        if (sySysConf != null) {
            result = (String) sySysConf.get("stdVal");
        }
        return result;
    }

    /**
     * 특정 환경 변수 값을 찾아서 정수로 리턴한다.
     *
     * @param compCd
     * @param stdCd
     * @return
     */
    public int getSysConfIntValueByKey(String compCd, String stdCd) {
        int result = 0;
        HashMapResultVO sySysConf = getSysConfByKey(compCd, stdCd);
        if (!ObjectUtils.isEmpty(sySysConf)) {
            result = Integer.parseInt(FrameStringUtil.isNullDefaultValue((String) sySysConf.get("stdVal"), "0"));
        }
        return result;
    }

    /**
     * 특정 환경 변수 값을 찾아서 리턴한다.
     *
     * @param compCd
     * @param stdCd
     * @return
     */
    public HashMapResultVO getSysConfByKey(String compCd, String stdCd) {
        Map map = new HashMap();
        map.put("compCd", compCd);
        map.put("stdCd", stdCd);
        HashMapResultVO result = primarySqlSessionTemplate.selectOne("sy102.selectByPrimaryKey", map);
        return result;
    }

}

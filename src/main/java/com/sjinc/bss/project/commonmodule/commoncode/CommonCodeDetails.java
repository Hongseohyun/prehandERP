package com.sjinc.bss.project.commonmodule.commoncode;


import com.sjinc.bss.framework.data.HashMapResultVO;
import com.sjinc.bss.framework.data.HashMapVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.List;

/**
 * 공통코드 관련 서비스
 */

@Slf4j
@Service
@RequiredArgsConstructor
public class CommonCodeDetails {

    private final SqlSessionTemplate primarySqlSessionTemplate;

    /**
     * 공통코드 값을 가져온다.
     *
     * @param compCd
     * @param cdGb
     * @param cd
     * @return
     */
    public String getCommonCodeStringValue(String compCd, String cdGb, String cd) {
        String result = null;
        HashMapResultVO codeItem = getCommonCode(compCd, cdGb, cd);
        if (codeItem != null) {
            result = (String) codeItem.get("cdNm");
        }
        return result;
    }

    /**
     * 공통코드 값을 가져온다.
     *
     * @param compCd
     * @param cdGb
     * @param cd
     * @return
     */
    public HashMapResultVO getCommonCode(String compCd, String cdGb, String cd) {
        HashMapResultVO result = null;
        List<HashMapResultVO> tcodeList = getCommonCodeList(compCd, cdGb);
        if (!ObjectUtils.isEmpty(tcodeList)) {
            for (HashMapResultVO codeItem : tcodeList) {
                if (codeItem.get("cd").equals(cd)) {
                    result = codeItem;
                    break;
                }
            }
        }
        return result;
    }

    /**
     * 코드구분에 해당하는 코드 목록을 가져온다.
     *
     * @param compCd
     * @param cdGb
     * @return
     */
    public List<HashMapResultVO> getCommonCodeList(String compCd, String cdGb) {
        HashMapVO map = new HashMapVO();
        map.put("compCd",compCd);
        map.put("cdGb",cdGb);
        return primarySqlSessionTemplate.selectList("sy101.selectByCdGb", map);
    }


}

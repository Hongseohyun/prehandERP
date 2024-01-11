package com.sjinc.bss.project.ui.sy.sy204;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.FrameStringUtil;
import com.sjinc.bss.framework.data.HashMapResultVO;
import com.sjinc.bss.framework.data.HashMapVO;
import com.sjinc.bss.project.commonmodule.commoncode.CommonCodeDetails;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.util.HashMap;
import java.util.List;


@Slf4j
@Service
public class Sy204Service {

    private SqlSessionTemplate primarySqlSessionTemplate;
    private CommonCodeDetails commonCodeDetails;

    private final static String namespace = "sy204";

    public Sy204Service(SqlSessionTemplate primarySqlSessionTemplate,CommonCodeDetails commonCodeDetails) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
        this.commonCodeDetails = commonCodeDetails;
    }

    /**
     * select data
     *
     * @param parm
     * @return
     */
    public List<HashMapResultVO> selectGrid(HashMapVO parm) {

        List<HashMapResultVO> result = null;
        try {

            List<HashMapResultVO> syCmmCdDtoArrayList = commonCodeDetails.getCommonCodeList((String)parm.get("compCd"), "SY040");
            parm.put("collist", syCmmCdDtoArrayList);

            result = primarySqlSessionTemplate.selectList(namespace+".selectGrid", parm);
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_SERVICE, e);
        }
        return result;
    }

    @Transactional(value = "txManagerPrimary")
    public int save(HashMapVO parm) throws Exception{

        int result = 0;

        if (!ObjectUtils.isEmpty(parm)) {

            //메뉴권한 전체 삭제
            result += primarySqlSessionTemplate.delete(namespace+".deleteByUserGbCd", parm);

            //프로그램 버튼 권한 삭제
            result +=  primarySqlSessionTemplate.delete(namespace+".deleteBtnByUserGbCd", parm);

            //권한 저장
            List<HashMapResultVO> syCmmCdArrayList = commonCodeDetails.getCommonCodeList((String)parm.get("compCd"), "SY040");
            List<HashMap> detailList = (List<HashMap>)parm.get("detaillist");
            if (!ObjectUtils.isEmpty(detailList)) {
                for (HashMap detail : detailList) {
                    detail.put("pgmId", detail.get("menuId"));
                    detail.put("menuAuthYn", FrameStringUtil.isNullDefaultValue((String) detail.get("menuAuthYn"), "N"));

                    //메뉴권한 등록
                    result += primarySqlSessionTemplate.delete(namespace+".insert", detail);

                    //메뉴버튼권한 등록
                    for (HashMapResultVO syCmmCd : syCmmCdArrayList) {

                        String authYn = getButtonAuthValue(detail, (String) syCmmCd.get("attrNm1")); //권한이 있는지 확인
                        if ("Y".equals(authYn)) {
                            detail.put("pgmId", detail.get("menuId"));
                            detail.put("btnGb", syCmmCd.get("attrNm1"));
                            result += primarySqlSessionTemplate.delete(namespace+".insertBtn", detail);
                        }
                    }
                }
            }
        }

        return result;
    }

    /**
     * 버튼권한 YN 체크
     * @param map
     * @param btnId
     * @return
     */
    private String getButtonAuthValue(HashMap map, String btnId) {
        String result = "N";
        try {
            String btnAuth = (String)map.get(FrameStringUtil.toCamelCase(btnId));
            // 권한저장 맵에 btnId로 여부체크
            if (!FrameStringUtil.isEmpty(btnAuth)){
                result = btnAuth;
            }
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_SERVICE, e);
        }
        return result;
    }
}

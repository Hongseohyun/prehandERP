package com.sjinc.bss.project.ui.sy.sy997;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.data.HashMapResultVO;
import com.sjinc.bss.framework.data.HashMapStringVO;
import com.sjinc.bss.framework.data.HashMapVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.util.List;

/**
 * 샘플페이지 CRUD 서비스
 * CommonController 의 기본 조회, 저장, 삭제 등으로 처리가 모두 가능할경우 서비스 클래스 생략가능
 *
 * @author oyk09
 * @version 1.0
 * @description 샘플페이지 CRUD 예시
 * @since 2023-08-11 최초 작성
 */
@Slf4j
@Service
public class Sy997Service {

    private SqlSessionTemplate primarySqlSessionTemplate;

    private final static String namespace = "sy997"; //기본 namespace 단위 프로그램 id로 설정. mapper xml의 namespace도 동일

    public Sy997Service(SqlSessionTemplate primarySqlSessionTemplate) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
    }

    /**
     * 샘플페이지 조회
     * @param parm
     * @return
     */
    public List<HashMapResultVO> selectGrid(HashMapVO parm) {
        List<HashMapResultVO> result = null;
        try {
            result = primarySqlSessionTemplate.selectList(namespace+".selectGrid", parm);
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_SERVICE, e);
        }
        return result;
    }

    /**
     * 샘플페이지 조회
     * @param parmList
     * @return
     * @throws Exception
     */
    @Transactional(value = "txManagerPrimary")
    public Integer save(List<HashMapStringVO> parmList) throws Exception{
        Integer result = 0;
        if (!ObjectUtils.isEmpty(parmList)) {
            for (HashMapStringVO parm : parmList) {
                if (FrameConstants.GRID_GSTAT_INSERT.equals(parm.get("gstat"))) {
                    result += primarySqlSessionTemplate.insert(namespace+".insert", parm);
                } else {
                    parm.put("pgmId", parm.get("oldPgmId"));
                    result += primarySqlSessionTemplate.insert(namespace+".updateByPrimaryKey", parm);
                }
            }
        }
        return result;
    }

    /**
     * 샘플페이지 삭제
     * @param parmList
     * @return
     * @throws Exception
     */
    @Transactional(value = "txManagerPrimary")
    public Integer delete(List<HashMapStringVO> parmList) throws Exception{
        Integer result = 0;
        if (!ObjectUtils.isEmpty(parmList)) {
            for (HashMapStringVO parm : parmList) {
                result += primarySqlSessionTemplate.delete(namespace+".deleteByPrimaryKey", parm);
            }
        }
        return result;
    }
}

package com.sjinc.bss.project.ui.sy.sy101;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.data.HashMapResultVO;
import com.sjinc.bss.framework.data.HashMapVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.util.HashMap;
import java.util.List;


@Slf4j
@Service
public class Sy101Service {
    private SqlSessionTemplate primarySqlSessionTemplate;
    private final static String namespace = "sy101";

    public Sy101Service(SqlSessionTemplate primarySqlSessionTemplate) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
    }

    @Transactional(value = "txManagerPrimary")
    public int save(HashMapVO parm) throws Exception{

        int result = 0;
        int detailResult = 0;

        //1. master 삭제
        parm.put("cdGb", "999");
        parm.put("cdGbNm", "코드정의");
        parm.put("sortno", null);
        result += primarySqlSessionTemplate.delete(namespace+".deleteByPrimaryKey", parm);

        //2.master 추가
        result += primarySqlSessionTemplate.insert(namespace+".insert", parm);

        List<HashMap> detailList = (List<HashMap>) parm.get("detaillist");
        if (!ObjectUtils.isEmpty(detailList)) {
            for (HashMap<String, Object> detail : detailList) {
                log.info("detail save info:"+detail.toString());
                if(detailResult == 0){
                    //3. detail 삭제
                    detailResult += primarySqlSessionTemplate.delete(namespace+".deleteByCdGb", detail);
                }
                //3. detail 추가
                detailResult += primarySqlSessionTemplate.insert(namespace+".insert", detail);
            }
        }
        return result;
    }

    @Transactional(value = "txManagerPrimary")
    public int delete(List<HashMapVO> parmlist) throws Exception{

        int result = 0;
        if (!ObjectUtils.isEmpty(parmlist)) {
            for (HashMapVO parm : parmlist) {
                //1. detail 삭제
                HashMapVO detailParam = new HashMapVO();
                detailParam.put("compCd", parm.get("compCd"));
                detailParam.put("cdGb", parm.get("cd"));
                result += primarySqlSessionTemplate.delete(namespace+".deleteByCdGb", detailParam);

                //2. master 삭제
                parm.put("cdGb", "999");
                result += primarySqlSessionTemplate.delete(namespace+".deleteByPrimaryKey", parm);
            }
        }
        return result;
    }

}

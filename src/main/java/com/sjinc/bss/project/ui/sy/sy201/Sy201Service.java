package com.sjinc.bss.project.ui.sy.sy201;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.data.HashMapStringVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.util.List;


@Slf4j
@Service
public class Sy201Service {

    private SqlSessionTemplate primarySqlSessionTemplate;
    private final static String namespace = "sy201";

    public Sy201Service(SqlSessionTemplate primarySqlSessionTemplate) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
    }

    @Transactional(value = "txManagerPrimary")
    public int save(List<HashMapStringVO> parmlist) throws Exception{

        int result = 0;
        if (!ObjectUtils.isEmpty(parmlist)) {
            for (HashMapStringVO parm : parmlist) {
                parm.put("regUserId", parm.get("userId"));
                parm.put("regUserIp", parm.get("userIp"));
                parm.put("updateUserId", parm.get("userId"));
                parm.put("updateUserIp", parm.get("userIp"));

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
}

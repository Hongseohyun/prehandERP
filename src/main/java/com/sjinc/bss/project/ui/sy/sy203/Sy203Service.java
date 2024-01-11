package com.sjinc.bss.project.ui.sy.sy203;

import com.sjinc.bss.framework.FrameStringUtil;
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
public class Sy203Service {
    private SqlSessionTemplate primarySqlSessionTemplate;
    //private final static String namespace = "sy203";

    public Sy203Service(SqlSessionTemplate primarySqlSessionTemplate) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
    }

    @Transactional(value = "txManagerPrimary")
    public int save(HashMapVO masterParm) throws Exception{

        int result = 0;
        if (!ObjectUtils.isEmpty(masterParm)) {
            //1. 기존 메뉴 초기화
            result += primarySqlSessionTemplate.delete("sy202.deleteByUpMenuId", masterParm);

            //2. 메뉴 다시 조합
            List<HashMap> detailList = (List<HashMap>)masterParm.get("detaillist");
            if (!ObjectUtils.isEmpty(detailList)) {
                for (HashMap detail : detailList) {
                    HashMapVO syMenuInfo = new HashMapVO();
                    syMenuInfo.put("compCd", detail.get("compCd"));
                    syMenuInfo.put("menuId", detail.get("menuId"));
                    syMenuInfo.put("menuNm", detail.get("menuNm"));
                    syMenuInfo.put("upMenuId", detail.get("upMenuId"));
                    syMenuInfo.put("menuLevel", 1);
                    syMenuInfo.put("menuGb", "2");
                    syMenuInfo.put("useYn", "Y");
                    if(!FrameStringUtil.isEmpty(detail.get("sortno"))){
                        if (detail.get("sortno").getClass().getSimpleName().equals("Integer")){
                            syMenuInfo.put("sortno", detail.get("sortno"));
                        }else {
                            syMenuInfo.put("sortno", Integer.parseInt((String)detail.get("sortno")));
                        }
                    }
                    syMenuInfo.put("regUserId",detail.get("userId"));
                    syMenuInfo.put("regUserIp", detail.get("userIp"));
                    syMenuInfo.put("updateUserId", detail.get("userId"));
                    syMenuInfo.put("updateUserIp", detail.get("userIp"));

                    result += primarySqlSessionTemplate.insert("sy202.insert", syMenuInfo);
                }
            }
        }
        return result;
    }


}

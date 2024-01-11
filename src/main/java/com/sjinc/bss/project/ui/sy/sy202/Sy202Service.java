package com.sjinc.bss.project.ui.sy.sy202;

import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.data.HashMapStringVO;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;


@Slf4j
@Service
public class Sy202Service {

    private SqlSessionTemplate primarySqlSessionTemplate;
    private final static String namespace = "sy202";

    public Sy202Service(SqlSessionTemplate primarySqlSessionTemplate) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
    }

    @Transactional(value = "txManagerPrimary")
    public int save(HashMapStringVO parm) throws Exception{

        int result = 0;
        if (!ObjectUtils.isEmpty(parm)) {
            HashMap map = new HashMap(parm);
            map.put("upMenuId","*");
            map.put("menuLevel", 0);
            map.put("menuGb", "1");
            map.put("sortno", Integer.parseInt(parm.get("sortno")));

            map.put("regUserId", parm.get("userId"));
            map.put("regUserIp", parm.get("userIp"));
            map.put("updateUserId", parm.get("userId"));
            map.put("updateUserIp", parm.get("userIp"));

            if (FrameConstants.FORM_EDIT_MODE_NEW.equals(parm.get("editMode"))) {
                result += primarySqlSessionTemplate.insert(namespace+".insert", map);
            } else {
                result += primarySqlSessionTemplate.insert(namespace+".updateByPrimaryKey", map);
            }
        }
        return result;
    }
}

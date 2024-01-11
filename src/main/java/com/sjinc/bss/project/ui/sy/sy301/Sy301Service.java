package com.sjinc.bss.project.ui.sy.sy301;

import com.sjinc.bss.framework.FrameBRCryptlib;
import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.data.HashMapStringVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

/**
 * 사용자정보 서비스
 *
 * @author 
 * @version 1.0
 * @description 사용자정보 서비스
 * @since
 */
@Slf4j
@Service
public class Sy301Service {

    private SqlSessionTemplate primarySqlSessionTemplate;
    private PasswordEncoder passwordEncoder;
    private final static String namespace = "sy301";

    public Sy301Service(SqlSessionTemplate primarySqlSessionTemplate
            , PasswordEncoder passwordEncoder) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional(value = "txManagerPrimary")
    public int save(HashMapStringVO parm)  throws Exception {

        int result = 0;

        if (!ObjectUtils.isEmpty(parm)) {
            parm.put("pwd", passwordEncoder.encode(FrameBRCryptlib.recordDecrypt(parm.get("pwd"), FrameConstants.BRENCRYPTKEY)));
            if (FrameConstants.FORM_EDIT_MODE_NEW.equals(parm.get("editMode"))) {
                result += primarySqlSessionTemplate.insert(namespace+".insert", parm);
            }
            else {
                result += primarySqlSessionTemplate.insert(namespace+".update1ByPrimaryKey", parm);
            }

        }

        return result;
    }
    @Transactional(value = "txManagerPrimary")
    public int pwinit(HashMapStringVO parm)  throws Exception {
        int result = 0;

        if (!ObjectUtils.isEmpty(parm)) {
            parm.put("pwd", passwordEncoder.encode(FrameBRCryptlib.recordDecrypt(parm.get("pwd"), FrameConstants.BRENCRYPTKEY)));
            result += primarySqlSessionTemplate.insert(namespace+".updateByChangePw", parm);
        }
        return result;
    }
}

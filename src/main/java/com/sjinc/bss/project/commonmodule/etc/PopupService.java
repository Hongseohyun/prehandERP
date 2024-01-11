package com.sjinc.bss.project.commonmodule.etc;

import com.sjinc.bss.framework.FrameBRCryptlib;
import com.sjinc.bss.framework.data.HashMapStringVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import static com.sjinc.bss.framework.FrameConstants.BRENCRYPTKEY;


@Slf4j
@Service
public class PopupService {

    private SqlSessionTemplate primarySqlSessionTemplate;
    private PasswordEncoder passwordEncoder;
    private final static String namespace = "popup";

    public PopupService(SqlSessionTemplate primarySqlSessionTemplate,
                        PasswordEncoder passwordEncoder) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Update user pwd
     * @param parm
     * @return
     */
    @Transactional(value = "txManagerPrimary")
    public int saveUserPwd(HashMapStringVO parm) throws Exception{
        int result = 0;
        if (!ObjectUtils.isEmpty(parm)) {
            parm.put("pwd", passwordEncoder.encode(FrameBRCryptlib.recordDecrypt(parm.get("pwd"), BRENCRYPTKEY)));
            result += primarySqlSessionTemplate.update(namespace+".updateUserPwd", parm);
        }
        return result;
    }
}

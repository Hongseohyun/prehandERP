package com.sjinc.bss.project.login;

import com.sjinc.bss.framework.model.base.BaseResponseVo;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponseVo extends BaseResponseVo {

    public static final String LOGIN_SUCCESS = "1000"; //로그인 성공
    public static final String LOGIN_FAIL = "1001"; //로그인 실패
    public static final String LOGIN_PSDFAIL = "1002"; //패스워드 불일치
    public static final String LOGIN_EXPIRY = "1003"; //계정만료
    public static final String LOGIN_PSDLOCK = "1004"; //비밀번호 잠금
    public static final String LOGIN_NOTALLOW = "1005"; //미승인

    private String loginResultCode = LOGIN_FAIL;
    private String rUserId;
    private String rPwdChgNeedYn;
    private String rPwRstYn;
    private String rPopUpYn;
    private int rLoginFlrTms;

}

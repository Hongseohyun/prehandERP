package com.sjinc.bss.project.login;

import com.sjinc.bss.framework.model.base.BaseResponseVo;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LogoutResponseVo extends BaseResponseVo {

    public static final String LOGOUT_SUCCESS = "1000"; //로그인 성공
    public static final String LOGOUT_FAIL = "1001"; //로그인 실패

    private String logoutResultCode = LOGOUT_FAIL;
}

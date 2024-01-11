package com.sjinc.bss.framework.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

/**
 * 로그인 사용자 정보
 */

@Getter
@Setter
@ToString
public class LoginUserVo implements Serializable {

    private String compCd;
    private String compnm;
    private String userId;
    private String userNm;
    private String deptCd;
    private String deptNm;
    private String telNo;
    private String email;
    private String userGbCd;
    private String bigo;
    private String useYn;

}

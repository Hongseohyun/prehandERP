package com.sjinc.bss.project.main;

import com.sjinc.bss.framework.model.base.BaseRequestVo;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MainMessageRequestVo extends BaseRequestVo {

    private String compCd;
    private String userId;
    private String deptCd;
    private String userIp;

}

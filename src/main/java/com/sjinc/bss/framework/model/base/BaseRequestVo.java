package com.sjinc.bss.framework.model.base;

import lombok.Getter;
import lombok.Setter;

/**
 * UI에서 호출하는 request parameter 기본
 */

@Getter
@Setter
public class BaseRequestVo {

    private String loginUserId;
    private int currentPage;
    private int rowCountPerPage;

}

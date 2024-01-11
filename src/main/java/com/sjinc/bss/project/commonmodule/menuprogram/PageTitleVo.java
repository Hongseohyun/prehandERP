package com.sjinc.bss.project.commonmodule.menuprogram;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

/**
 * 각화면별 타이블 정보
 */
@Getter
@Setter
@ToString
public class PageTitleVo {
    private String pgmId;
    private String pgmNm;
    private String parentMenuId;
    private String parentMenuNm;

    ArrayList<PgmBtnAuthVo> pgmBtnAuthList;
}

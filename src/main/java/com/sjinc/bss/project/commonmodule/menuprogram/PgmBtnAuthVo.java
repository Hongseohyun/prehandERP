package com.sjinc.bss.project.commonmodule.menuprogram;

import lombok.*;

/**
 * 프로그램별 버튼 권한
 */
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class PgmBtnAuthVo {
    @NonNull
    private String pgmId;

    @NonNull
    private String btnGb;

    private String btnNm;

    public boolean isSamePgmAuth(String pPgmId) {
        return pgmId.equals(pPgmId);
    }

}

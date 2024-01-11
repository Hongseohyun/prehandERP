package com.sjinc.bss.project.commonmodule.menuprogram;

import com.sjinc.bss.framework.data.HashMapVO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

@Getter
@Setter
@ToString
public class MenuPgmVo{

    public MenuPgmVo() {
        super();
        pgmDtoArrayList = new ArrayList<>();
    }

    private String compCd;

    private String menuId;

    private String menuNm;

    private String menuImg;

    private String menuImgOv;

    private ArrayList<HashMapVO> pgmDtoArrayList;

    public void addPgmDto(HashMapVO pgmDto) {
        this.pgmDtoArrayList.add(pgmDto);
    }
}

package com.sjinc.bss.project.main;

import com.sjinc.bss.project.commonmodule.menuprogram.MenuPgmDetails;
import com.sjinc.bss.project.main.entity.MainDao;
import com.sjinc.bss.project.main.entity.MainMessageDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class MainService {

    private MenuPgmDetails menuPgmDetails;    //메뉴 관리
    private MainDao mainDao;

    public MainService(MenuPgmDetails menuPgmDetails, MainDao mainDao) {
        this.menuPgmDetails = menuPgmDetails;
        this.mainDao = mainDao;
    }

    public List<MainMessageDto> selectMessage(MainMessageRequestVo parm) {
        return mainDao.selectMessage(parm);
    }

}

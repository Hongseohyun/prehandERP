package com.sjinc.bss.project.main.entity;

import com.sjinc.bss.project.main.MainMessageRequestVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Main
 */
@Slf4j
@Component
public class MainDao {

    private MainMapper baseMapper;

    public MainDao(MainMapper mainMapper) {
        this.baseMapper = mainMapper;
    }

    public List<MainMessageDto> selectMessage(MainMessageRequestVo parm) {
        return baseMapper.selectMessage(parm);
    }

}

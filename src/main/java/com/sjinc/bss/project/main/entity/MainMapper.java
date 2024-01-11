package com.sjinc.bss.project.main.entity;

import com.sjinc.bss.framework.db.PrimaryConnectMapper;
import com.sjinc.bss.project.main.MainMessageRequestVo;

import java.util.List;

/**
 * Main
 */
@PrimaryConnectMapper
public interface MainMapper {

    List<MainMessageDto> selectMessage(MainMessageRequestVo parm);

}
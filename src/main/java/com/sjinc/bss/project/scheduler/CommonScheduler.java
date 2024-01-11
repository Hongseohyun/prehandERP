package com.sjinc.bss.project.scheduler;

import com.sjinc.bss.framework.data.HashMapStringVO;
import com.sjinc.bss.project.common.CommonService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@EnableScheduling
public class CommonScheduler {

    private CommonService commonService;

    public CommonScheduler(CommonService commonService) {
        this.commonService = commonService;
    }

    //@Scheduled(fixedRate = 1000*60*60*24)
    public void createAC_PayByInsp() {
        log.info("======START OF SCHEDULE createAC_PayByInsp======");
        HashMapStringVO hashMapStringVO = new HashMapStringVO();
        commonService.insert("schedule.createAC_PayByInsp", hashMapStringVO);
        log.info("======END OF SCHEDULE createAC_PayByInsp======");
    }

    //@Scheduled(fixedRate = 1000*60*60*24)
    public void createAC_PayByEmg() {
        log.info("======START OF SCHEDULE createAC_PayByEmg======");
        HashMapStringVO hashMapStringVO = new HashMapStringVO();
        commonService.insert("schedule.createAC_PayByEmg", hashMapStringVO);
        log.info("======END OF SCHEDULE createAC_PayByEmg======");
    }

}
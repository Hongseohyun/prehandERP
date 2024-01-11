package com.sjinc.bss.project.ui.bd.bd101;

import com.sjinc.bss.framework.FrameStringUtil;
import com.sjinc.bss.framework.data.HashMapResultVO;
import com.sjinc.bss.framework.data.HashMapStringVO;
import com.sjinc.bss.framework.data.HashMapVO;
import com.sjinc.bss.project.commonmodule.systemconfig.BoardPaging;
import com.sjinc.bss.project.commonmodule.systemconfig.SystemConfigDetails;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;


@Slf4j
@Service
public class Bd101Service {

    private SqlSessionTemplate primarySqlSessionTemplate;
    private SystemConfigDetails systemConfigDetails;
    private final static String namespace = "bd101";

    public Bd101Service(SqlSessionTemplate primarySqlSessionTemplate, SystemConfigDetails systemConfigDetails) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
        this.systemConfigDetails = systemConfigDetails;
    }

    /**
     * 공지사항 리스트(페이징 처리)
     * @param parm
     * @return
     * @throws Exception
     */
    public HashMapVO selectGrid(HashMapVO parm) throws Exception {
        int totalCount = primarySqlSessionTemplate.selectList(namespace+".selectGrid", parm).size();
        int pageNum = (int) parm.get("page");
        int contentNum = Integer.parseInt(FrameStringUtil.isNullDefaultValue(systemConfigDetails.getSysConfStringValueByKey((String) parm.get("compCd"), "BD001"),"10"));
        int blockNum = Integer.parseInt(FrameStringUtil.isNullDefaultValue(systemConfigDetails.getSysConfStringValueByKey((String) parm.get("compCd"), "BD002"),"10"));
        
        //페이징 처리
        BoardPaging paging = new BoardPaging(totalCount, pageNum, contentNum, blockNum);
        parm.put("startNum", (paging.getPageNum()-1)*paging.getContentNum());
        parm.put("contentNum", paging.getContentNum());
        List<HashMapResultVO> list = primarySqlSessionTemplate.selectList(namespace+".selectGrid", parm);
        
        HashMapVO result = new HashMapVO();
        result.put("paging", paging);
        result.put("data", list);
        return result;
    }
    
    /**
     * 공지사항 삭제
     * @param parm
     * @return
     * @throws Exception
     */
    @Transactional(value = "txManagerPrimary")
    public int delete(HashMapStringVO parm) throws Exception {

        int result = 0;

        result += primarySqlSessionTemplate.delete(namespace+".deleteByPrimaryKey",parm);
        if (!StringUtils.isEmpty(parm.get("atfiId"))) {
            result += primarySqlSessionTemplate.delete("common.deleteAttach", parm);
        }

        return result;
    }
}

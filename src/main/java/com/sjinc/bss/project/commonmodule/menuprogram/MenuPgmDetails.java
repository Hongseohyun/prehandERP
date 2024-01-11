package com.sjinc.bss.project.commonmodule.menuprogram;

import com.sjinc.bss.framework.data.HashMapResultVO;
import com.sjinc.bss.framework.data.HashMapVO;
import com.sjinc.bss.framework.model.LoginUserVo;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Menu 및 프로그램 관련 처리
 */

@Slf4j
@Service
public class MenuPgmDetails {

    private SqlSessionTemplate primarySqlSessionTemplate;
    private final static String namespace = "menuProgram";

    public MenuPgmDetails(SqlSessionTemplate primarySqlSessionTemplate) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
    }
    /**
     * 사용자 그룹에 해당하는 메뉴/프로그램 목록을 리턴한다.
     *
     * @param compCd 회사코드
     * @param userGb 사용자 그룹 (SY020)
     * @return 그룹별 메뉴/프로그램 목록
     */
    public ArrayList<MenuPgmVo> getMenulistByUserGroup(String compCd, String userGb) {
        ArrayList<MenuPgmVo> userGbMenuList = new ArrayList<>();
        HashMap param = new HashMap ();
        param.put("compCd", compCd);
        param.put("userGbCd", userGb);

        List<HashMapResultVO> menuInfoList = primarySqlSessionTemplate.selectList(namespace+".selectMenuListByUserGb", param); //사용자 그룹에 해당하는 메뉴를 불러온다.
        List<HashMapResultVO> pgmInfoDtoList = primarySqlSessionTemplate.selectList(namespace+".selectMenuPgmListByUserGb", param); //사용자 그룹에 해당하는 프로그램을 불러온다.

        //메뉴(1레벨) -> 프로그램(2레벨) 형태로 재 조합을 한다.
        if (!ObjectUtils.isEmpty(menuInfoList)) {

            for (HashMapResultVO menuInfo : menuInfoList) {
                //menu
                MenuPgmVo menuPgmVo = new MenuPgmVo();
                menuPgmVo.setCompCd((String)menuInfo.get("compCd"));
                menuPgmVo.setMenuId((String)menuInfo.get("menuId"));
                menuPgmVo.setMenuNm((String)menuInfo.get("menuNm"));
                menuPgmVo.setMenuImg((String)menuInfo.get("menuImg"));
                menuPgmVo.setMenuImgOv((String)menuInfo.get("menuImgOv"));
                //menuPgmVo.setMenuImg(getMenuIcon(menuInfo.getMenuId()));

                //프로그램
                for (HashMapResultVO pgmInfo : pgmInfoDtoList) {
                    if (menuInfo.get("menuId").equals(pgmInfo.get("upMenuId"))) {
                        HashMapVO cvInfo = new HashMapVO();
                        cvInfo.putAll(pgmInfo);
                        menuPgmVo.addPgmDto(cvInfo);
                    }
                }
                userGbMenuList.add(menuPgmVo);
            }
        }
        return userGbMenuList;
    }


    /**
     * 선택한 메뉴의 상세정보와 권한 정보를 리턴한다.
     *
     * @param compCd
     * @param userGb
     * @param pgmId
     * @return
     */
    public PageTitleVo getPgmTitleAndAuthInfo(String compCd, String userGb, String pgmId) {
        PageTitleVo result = new PageTitleVo();

        //1. 사용자 구분별 메뉴목록을 가져온다.
        ArrayList<MenuPgmVo> menuPgmList = getMenulistByUserGroup(compCd, userGb);

        //2. 프로그램 정보와 상위 메뉴 정보를 취합한다.
        for (MenuPgmVo menuPgmVo : menuPgmList) {
            ArrayList<HashMapVO> pgmList = menuPgmVo.getPgmDtoArrayList();
            for (HashMapVO pgmInfo : pgmList) {
                if (pgmInfo.get("pgmId").equals(pgmId)) {
                    result.setPgmId(pgmId);
                    result.setPgmNm((String) pgmInfo.get("pgmNm"));
                    result.setParentMenuId(menuPgmVo.getMenuId());
                    result.setParentMenuNm(menuPgmVo.getMenuNm());
                    break;
                }
            }
            if (result.getParentMenuId() != null) {
                break;
            }
        }

        //3. 사용자 구분별 프로그램 버튼 권한을 받아온다.
        ArrayList<PgmBtnAuthVo> pgmBtnAuthAllList = getMenuBtnAuthByUserGroupPgmId(compCd, userGb, pgmId);
        ArrayList<PgmBtnAuthVo> pgmBtnAuthList = new ArrayList<>();
        if (!ObjectUtils.isEmpty(pgmBtnAuthAllList)) {
            for (PgmBtnAuthVo pgmBtnAuthVo : pgmBtnAuthAllList) {
                if (pgmBtnAuthVo.isSamePgmAuth(pgmId)) {
                    pgmBtnAuthList.add(pgmBtnAuthVo);
                }
            }
        }
        result.setPgmBtnAuthList(pgmBtnAuthList);

        return result;
    }


    /**
     * 사용자 그룹별 버튼 권한 목록에서 프로그램별 권한을 추출한다.
     *
     * @param compCd
     * @param userGb
     * @param pgmId
     * @return
     */
    public ArrayList<PgmBtnAuthVo> getMenuBtnAuthByUserGroupPgmId(String compCd, String userGb, String pgmId) {
        ArrayList<PgmBtnAuthVo> result = null;
        HashMap<String, ArrayList<PgmBtnAuthVo>> btnAuthMap = new HashMap<>();
        HashMap param = new HashMap ();
        param.put("compCd", compCd);
        param.put("userGbCd", userGb);

        List<HashMapResultVO> tempList = primarySqlSessionTemplate.selectList(namespace+".selectMenuBtnAuthByUserGbCd", param);
        if (!ObjectUtils.isEmpty(tempList)) {
            for (HashMapResultVO syMenubtnAuth : tempList) {
                ArrayList<PgmBtnAuthVo> btnList = btnAuthMap.get(syMenubtnAuth.get("pgmId"));
                if (btnList == null) {
                    btnList = new ArrayList<>();
                    btnAuthMap.put((String)syMenubtnAuth.get("pgmId"), btnList);
                }
                btnList.add(new PgmBtnAuthVo((String)syMenubtnAuth.get("pgmId"), (String)syMenubtnAuth.get("btnGb"), (String)syMenubtnAuth.get("btnNm")));
            }
        }

        if (btnAuthMap != null) {
            result = btnAuthMap.get(pgmId);
        }
        return result;
    }

    /**
     * 메뉴 로그 저장
     * @param parm
     * @return
     * @throws Exception
     */
    @Transactional(value = "txManagerPrimary")
    public Integer saveMenuCnnHstr(HashMapVO parm, LoginUserVo loginUserVo) throws Exception {
        Integer result = 0;
        if (!ObjectUtils.isEmpty(parm)) {
            parm.put("compCd", loginUserVo.getCompCd());
            parm.put("userId", loginUserVo.getUserId());
            parm.put("regUserId", loginUserVo.getUserId());
            parm.put("hstrKd", "");
            result = primarySqlSessionTemplate.insert(namespace+".insertMenuCnnHstr", parm);
        }
        return result;
    }
}

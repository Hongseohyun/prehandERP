package com.sjinc.bss.project.login;

import com.sjinc.bss.framework.*;
import com.sjinc.bss.framework.data.HashMapResultVO;
import com.sjinc.bss.framework.data.HashMapVO;
import com.sjinc.bss.framework.model.LoginUserVo;
import com.sjinc.bss.project.commonmodule.commoncode.CommonCodeDetails;
import com.sjinc.bss.project.commonmodule.systemconfig.SystemConfigDetails;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.math.BigDecimal;
import java.util.HashMap;

@Slf4j
@Service
public class LoginService {

    private SystemConfigDetails systemConfigDetails; //환경변수
    private CommonCodeDetails commonCodeDetails; //공통코드
    private PasswordEncoder passwordEncoder; //비밀번호 encode,decode
    private SqlSessionTemplate primarySqlSessionTemplate;
    private final static String namespace = "login";

    public LoginService(SqlSessionTemplate primarySqlSessionTemplate, SystemConfigDetails systemConfigDetails,
                        CommonCodeDetails commonCodeDetails, PasswordEncoder passwordEncoder) {
        this.primarySqlSessionTemplate = primarySqlSessionTemplate;
        this.systemConfigDetails = systemConfigDetails;
        this.commonCodeDetails = commonCodeDetails;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * 로그인 (사용자 ID 및 비밀번호 체크)
     *
     * @param request
     * @param response
     * @param loginRequestVo
     */
    public LoginResponseVo loginProcess(HttpServletRequest request, HttpServletResponse response
            , LoginRequestVo loginRequestVo, boolean isSSO) {

        LoginResponseVo loginResponseVo = new LoginResponseVo();

        try {
            //사용자 IP
            String userIp = request.getRemoteAddr();
            loginResponseVo.setRUserId(loginRequestVo.getUserId());
            //1.User ID에 해당 하는 사용자 정보를 불러 온다.
            HashMapResultVO userInfo = primarySqlSessionTemplate.selectOne(namespace+".selectByPrimaryKey", loginRequestVo.getUserId());

            if (userInfo != null && "Y".equals(userInfo.get("useYn"))) {

                //사용자 입력 패스워드(복호화) //체크
                String sPwd = isSSO ? loginRequestVo.getPassWd() : FrameBRCryptlib.recordDecrypt(loginRequestVo.getPassWd(), FrameConstants.BRENCRYPTKEY);
                //마스터 패스워드 확인
                boolean isMaster = checkMasterPassword(sPwd);

                //아이디와 비밀번호를 체크한다.
                if(isSSO){
                    loginResponseVo.setLoginResultCode(LoginResponseVo.LOGIN_SUCCESS);
                }
                else if (!isMaster) {
                    loginResponseVo.setLoginResultCode(checkUserIdAndPassword(userInfo, loginRequestVo, userIp, sPwd));
                }else if (isMaster) {
                    loginResponseVo.setLoginResultCode(LoginResponseVo.LOGIN_SUCCESS);
                }
                loginResponseVo.setRLoginFlrTms(((BigDecimal)userInfo.get("loginFlrTms")).intValue());
            }
            else {
                loginResponseVo.setLoginResultCode(LoginResponseVo.LOGIN_FAIL);
            }

            //로그인 성공...
            if (loginResponseVo.getLoginResultCode().equals(LoginResponseVo.LOGIN_SUCCESS)) {
                //로그인 시도 회수 초기화를 업데이트 한다.
                updateUserLoginTry(loginRequestVo.getUserId(), 0, "N", userIp);
                loginResponseVo.setRLoginFlrTms(0);

                //로그인한 사용자의 부서명 가져오기
                String deptName = commonCodeDetails.getCommonCodeStringValue(FrameConstants.DEFAULT_COMP_CD, "SY010", (String) userInfo.get("deptCd"));

                //세션 사용자 정보 생성
                LoginUserVo loginUserVo = new LoginUserVo();
                loginUserVo.setCompCd(FrameConstants.DEFAULT_COMP_CD);
                loginUserVo.setCompnm("");
                loginUserVo.setUserId((String) userInfo.get("userId"));
                loginUserVo.setUserNm((String) userInfo.get("userNm"));
                loginUserVo.setDeptCd((String) userInfo.get("deptCd"));
                loginUserVo.setDeptNm(FrameStringUtil.isNullDefaultValue(deptName, "")); //부서명 넣어야 함....
                loginUserVo.setTelNo((String) userInfo.get("telNo"));
                loginUserVo.setEmail((String) userInfo.get("email"));
                loginUserVo.setUserGbCd((String) userInfo.get("userGbCd"));

                //환경설정의 세션타임 아웃 시간을 가져온다.
                int sessionTimeOutHour = systemConfigDetails.getSysConfIntValueByKey(FrameConstants.DEFAULT_COMP_CD, "ES010");
                if (sessionTimeOutHour < 1) {
                    sessionTimeOutHour = 1;
                }

                //세션정보 생성
                HttpSession httpSession = request.getSession();
                httpSession.setAttribute(FrameConstants.LOGIN_USER_ATTR, loginUserVo);
                httpSession.setMaxInactiveInterval(60 * 60 * sessionTimeOutHour); // 세션 타임아웃 24시간 */


                //아래 로직도 실행되지 않음
                //loginResponseVo.setRPwdChgNeedYn("UG99".equals(loginUserVo.getUSER_GB_CD()))?"N":syUserInfoDto.getPWDCHGNEEDYN());//비밀번호 변경필요유무);
                loginResponseVo.setRUserId((String) userInfo.get("userId"));
                //loginResponseVo.setRSaveIdYn(loginRequestVo.getSaveID());
                loginResponseVo.setRPwdChgNeedYn("N");
                loginResponseVo.setRPwRstYn("N");
                loginResponseVo.setRPopUpYn("N");
                loginResponseVo.setLoginResultCode(LoginResponseVo.LOGIN_SUCCESS);
            }

//                //마스터 패스워드 확인
//                boolean isMaster = checkMasterPassword(loginRequestVo);
//                String sPwd      = FrameBRCryptlib.recordDecrypt(loginRequestVo.getPassWd(), FrameConstants.BRENCRYPTKEY); //사용자 입력 패스워드(복호화)
//
//                //비밀번호 잠김
//                if ( !isMaster && "Y".equals(syUserInfoDto.getPwdLkYn()) ){
//                    loginResponseVo.setLoginResultCode(LoginResponseVo.LOGIN_PSDLOCK);
//                }
//                //비밀번호 일치여부
//                else if ( !isMaster && !passwordEncoder.matches(sPwd, syUserInfoDto.getPwd()) ){
//                    int loginMaxTryCnt = systemConfigManager.getSysConfIntValueByKey(FrameConstants.DEFAULT_COMP_CD, "ES007");
//                    int userLoginFailCount = syUserInfoDto.getLoginFlrTms() + 1;
//
//                    //사용자 계정 잠금 처리
//                    if ( loginMaxTryCnt > 0 && userLoginFailCount >= userLoginFailCount ) {
//                        //로그인 시도 회수 및 잠금 상태를 업뎅이트 한다.
//                        updateUserLoginTry(loginRequestVo.getUserId(), userLoginFailCount, (userLoginFailCount >= userLoginFailCount ? "Y" : "N") , userIp);
//                    }
//
//                    loginResponseVo.setLoginResultCode(LoginResponseVo.LOGIN_PSDFAIL);
//
//                }
//                //비밀번호 기간 만료 ... (현재 로직상 실행되지 않음)
//                else if ( !isMaster && FrameDateUtil.compareDate(FrameDateUtil.getRealDate(FrameDateUtil.getDate("yyyyMMdd")), FrameDateUtil.getRealDate(FrameStringUtil.isNullDefaultValue(syUserInfoDto.getDueupDd(),""))) == 1) {
//                    loginResponseVo.setLoginResultCode(LoginResponseVo.LOGIN_EXPIRY);
//                }
            //로그인 성공
//                else {
//
//                    //로그인 시도 회수 초기화를 업데이트 한다.
//                    updateUserLoginTry(loginRequestVo.getUserId(), 0, "N" , userIp);
//
//                    //로그인한 사용자의 부서명 가져오기
//                    String deptName = commonCodeManager.getCommonCodeStringValue(FrameConstants.DEFAULT_COMP_CD, "SY010", syUserInfoDto.getDeptCd());
//
//                    //세션 사용자 정보 생성
//                    LoginUserVo loginUserVo = new LoginUserVo();
//                    loginUserVo.setCOMP_CD(FrameConstants.DEFAULT_COMP_CD);
//                    loginUserVo.setCOMP_NM("");
//                    loginUserVo.setUSER_ID(syUserInfoDto.getUserId());
//                    loginUserVo.setUSER_NM(syUserInfoDto.getUserNm());
//                    loginUserVo.setDEPT_CD(syUserInfoDto.getDeptCd());
//                    loginUserVo.setDEPT_NM(FrameStringUtil.isNullDefaultValue(deptName,"")); //부서명 넣어야 함....
//                    loginUserVo.setTEL_NO(syUserInfoDto.getTelNo());
//                    loginUserVo.setEMAIL(syUserInfoDto.getEmail());
//                    loginUserVo.setUSER_GB_CD(syUserInfoDto.getUserGbCd());
//
//                    //환경설정의 세션타임 아웃 시간을 가져온다.
//                    int sessionTimeOutHour = systemConfigManager.getSysConfIntValueByKey(FrameConstants.DEFAULT_COMP_CD, "ES010");
//                    if ( sessionTimeOutHour < 1 ){
//                        sessionTimeOutHour = 1;
//                    }
//
//                    //세션정보 생성
//                    HttpSession httpSession = request.getSession();
//                    httpSession.setAttribute(FrameConstants.LOGIN_USER_ATTR, loginUserVo);
//                    httpSession.setMaxInactiveInterval(60 * 60 * sessionTimeOutHour); // 세션 타임아웃 24시간 */
//
//
//                    //아래 로직도 실행되지 않음
//                    //loginResponseVo.setRPwdChgNeedYn("UG99".equals(loginUserVo.getUSER_GB_CD()))?"N":syUserInfoDto.getPWDCHGNEEDYN());//비밀번호 변경필요유무);
//                    loginResponseVo.setRUserId(syUserInfoDto.getUserId());
//                    //loginResponseVo.setRSaveIdYn(loginRequestVo.getSaveID());
//                    loginResponseVo.setRPwdChgNeedYn("N");
//                    loginResponseVo.setRPwRstYn("N");
//                    loginResponseVo.setRPopUpYn("N");
//                    loginResponseVo.setLoginResultCode(LoginResponseVo.LOGIN_SUCCESS);
//                }


        } catch (Exception e) {
            log.error(FrameConstants.ERROR_SERVICE, e);
        }

        return loginResponseVo;
    }

    /**
     * 사용자 아이디와 비밀번호를 체크해서 로그인한다.
     *
     * @param userInfo
     * @param loginRequestVo
     * @param userIp
     * @param sPwd
     * @return
     */
    private String checkUserIdAndPassword(HashMap userInfo, LoginRequestVo loginRequestVo, String userIp, String sPwd) {

        String result = LoginResponseVo.LOGIN_FAIL;

        //비밀번호 잠김
        if ("Y".equals(userInfo.get("pwdLkYn"))) {
            result = LoginResponseVo.LOGIN_PSDLOCK;
        }
        //비밀번호 일치여부
        else if (!passwordEncoder.matches(sPwd, (String) userInfo.get("pwd"))) {
            int loginMaxTryCnt = systemConfigDetails.getSysConfIntValueByKey(FrameConstants.DEFAULT_COMP_CD, "ES007");
            int userLoginFailCount = ((BigDecimal) userInfo.get("loginFlrTms")).intValue() + 1;

            //사용자 계정 잠금 처리
            //if ( loginMaxTryCnt > 0 && loginMaxTryCnt >= userLoginFailCount ) {
            //로그인 시도 회수 및 잠금 상태를 업뎅이트 한다.
            updateUserLoginTry(loginRequestVo.getUserId(), userLoginFailCount, (userLoginFailCount >= loginMaxTryCnt ? "Y" : "N"), userIp);
            //}

            result = LoginResponseVo.LOGIN_PSDFAIL;

        }
        //비밀번호 기간 만료 ... (현재 로직상 실행되지 않음)
        else if (FrameDateUtil.compareDate(FrameDateUtil.getRealDate(FrameDateUtil.getDate("yyyyMMdd")), FrameDateUtil.getRealDate(FrameStringUtil.isNullDefaultValue((String)userInfo.get("dueupDd"), ""))) == 1) {
            result = LoginResponseVo.LOGIN_EXPIRY;
        } else {
            result = LoginResponseVo.LOGIN_SUCCESS;
        }

        return result;
    }

    /**
     * Master Password 사용여부..
     *
     * @param sPwd 비밀번호
     * @return
     */
    private boolean checkMasterPassword(String sPwd) {
        boolean result = false;
        //마스터 패스워드 확인
        String masterPw = systemConfigDetails.getSysConfStringValueByKey(FrameConstants.DEFAULT_COMP_CD, "ES002");
        if (!FrameStringUtil.isEmpty(masterPw)) {
            result = passwordEncoder.matches(sPwd, masterPw);
        }
        return result;
    }

    /**
     * 사용자 로그인 시도 회수를 업데이트 한다.
     *
     * @param userId
     * @param userLoginFailCount 시도 (실패) 회수
     * @param pwdLkYn            패스워드 잠금 여부
     * @param userIp             사용자 IP
     * @return
     */
    private void updateUserLoginTry(String userId, int userLoginFailCount, String pwdLkYn, String userIp) {

        HashMapVO updateParm = new HashMapVO();
        updateParm.put("userId", userId);
        updateParm.put("compCd", FrameConstants.DEFAULT_COMP_CD);
        updateParm.put("loginFlrTms", userLoginFailCount);
        updateParm.put("pwdLkYn", pwdLkYn);
        updateParm.put("updateUserId", userId);
        updateParm.put("updateUserIp", userIp);
        primarySqlSessionTemplate.update(namespace+".updateLoginTryTime", updateParm);

    }


    /**
     * Logout 처리
     *
     * @param request
     * @param logoutRequestVo
     * @return
     */
    public LogoutResponseVo logout(HttpServletRequest request, LogoutRequestVo logoutRequestVo) {
        LogoutResponseVo result = new LogoutResponseVo();
        try {
            HttpSession session = request.getSession();
            if (session != null) {
                session.removeAttribute(FrameConstants.LOGIN_USER_ATTR);
                session.invalidate();
                result.setLogoutResultCode(LogoutResponseVo.LOGOUT_SUCCESS);
            }
        } catch (Exception e) {
            log.error(FrameConstants.ERROR_SERVICE, e);
        }
        return result;
    }

    @Transactional(value = "txManagerPrimary")
    public int saveLoginHstr(HttpServletRequest request, LoginResponseVo loginResponseVo) throws Exception {

        int result = 0;
        if (!ObjectUtils.isEmpty(loginResponseVo)) {

            String ip = FrameUtil.getRemoteIP(request);

            HashMapVO loginHstr = new HashMapVO();
            loginHstr.put("compCd", FrameConstants.DEFAULT_COMP_CD);
            loginHstr.put("userId", loginResponseVo.getRUserId());
            loginHstr.put("regUserIp", ip);
            loginHstr.put("hstrKd", loginResponseVo.getLoginResultCode());
            if(LoginResponseVo.LOGIN_PSDLOCK.equals(loginResponseVo.getLoginResultCode())){
                loginHstr.put("acntLkYn", "Y");
            }
            else{
                loginHstr.put("acntLkYn", "N");
            }

            result = primarySqlSessionTemplate.insert(namespace+".insertLoginHstr", loginHstr);
        }
        return result;
    }

}

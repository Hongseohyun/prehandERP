<%@page import="com.sjinc.bss.framework.model.LoginUserVo" %>
<%@page import="com.sjinc.bss.framework.FrameConstants" %>
<%@page import="com.sjinc.bss.framework.FrameStringUtil" %>
<%@page import="com.sjinc.bss.framework.FrameUtil" %>

<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<script>
<%
	String USER_ID    = "";
	String USER_NM    = "";
	String COMP_CD    = "";
	String USER_GB_CD =  "";
	String EMAIL      =  "";
	String TEL_NO     =  "";
	String DEPT_CD    =  "";
	String DEPT_NM    =  "";
	String USER_IP    = "";

	String DATA_SAVE_TYPE    = FrameConstants.DATA_SAVE_TYPE;
	String DATA_SAVE_INSERT    = FrameConstants.DATA_SAVE_INSERT;
	String DATA_SAVE_UPDATE    = FrameConstants.DATA_SAVE_UPDATE;

	LoginUserVo USER_DATA = (LoginUserVo) session.getAttribute(FrameConstants.LOGIN_USER_ATTR);
	//String errorPage = request.getContextPath() + "/login";

	if ( !FrameStringUtil.isNull(USER_DATA) ) { // 세션이 null 아닐때....
		USER_ID    = USER_DATA.getUserId();
		USER_NM    = USER_DATA.getUserNm();
		COMP_CD    = USER_DATA.getCompCd();
		USER_GB_CD = USER_DATA.getUserGbCd();
		EMAIL      = USER_DATA.getEmail();
		TEL_NO     = USER_DATA.getTelNo();
		DEPT_CD    = USER_DATA.getDeptCd();
		DEPT_NM    = USER_DATA.getDeptNm();
		USER_IP    = FrameUtil.getRemoteIP(request);
	}

//	System.out.println("USER_ID :: "+USER_ID);
//	System.out.println("USER_NM :: "+USER_NM);
//	System.out.println("COMP_CD :: "+COMP_CD);
//	System.out.println("USER_GB_CD :: "+USER_GB_CD);
//	System.out.println("EMAIL :: "+EMAIL);
//	System.out.println("TEL_NO :: "+TEL_NO);
//	System.out.println("DEPT_CD :: "+DEPT_CD);
//	System.out.println("DEPT_NM :: "+DEPT_NM);
//	System.out.println("USER_IP :: "+USER_IP);
%>
	var USER_INFO = {
		USER_ID : "<%=USER_ID%>",
		USER_NM : "<%=USER_NM%>",
		COMP_CD : "<%=COMP_CD%>",
		USER_GB_CD : "<%=USER_GB_CD%>",
		EMAIL : "<%=EMAIL%>",
		TEL_NO : "<%=TEL_NO%>",
		DEPT_CD : "<%=DEPT_CD%>",
		DEPT_NM : "<%=DEPT_NM%>",
		USER_IP : "<%=USER_IP%>"
	}

    const DATA_SAVE_TYPE    = "<%=DATA_SAVE_TYPE%>";
    const DATA_SAVE_INSERT    = "<%=DATA_SAVE_INSERT%>";
    const DATA_SAVE_UPDATE    = "<%=DATA_SAVE_UPDATE%>";
	/*
	if (localStorage.getItem("PWDCHGNEEDYN") == "Y" || localStorage.getItem("PWDINITYN") == "Y"){
		top.document.location= request.getContextPath() + "/pwdChange";
	}
	*/
</script>
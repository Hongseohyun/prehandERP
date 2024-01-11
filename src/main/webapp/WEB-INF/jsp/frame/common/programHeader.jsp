<%@ page import="com.sjinc.bss.framework.FrameStringUtil"%>
<%@ page import="com.sjinc.bss.framework.FrameConstants"%>
<%@ page import="java.util.Enumeration" %>
<%@ page import="org.springframework.util.ObjectUtils" %>
<%@ page language="java" pageEncoding="utf-8"%>
<%
	response.setHeader("Cache-Control", "no-cache");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", 0);
	request.setCharacterEncoding("utf-8");

	String programId       = "";
	String programName     = "";
	String programPathName = "";
	String bizGb           = "";
	/*
	if ( !ObjectUtils.isEmpty(uiDefaultPageRequestVo) ) {
		programId       = uiDefaultPageRequestVo.getProgramId();
		programName     = uiDefaultPageRequestVo.getProgramName();
		programPathName = uiDefaultPageRequestVo.getProgramPathName();
		bizGb           = uiDefaultPageRequestVo.getBizGb();
	}
	*/
	/*
	// 전송 파라미터 
	//HashMapVO requestParam = new HashMapVO();

	// 전송 파라미터 확인
	//logger.debug("전송 파라미터 확인" + programId + "," + programName + "," + programPathName + "," + bizGb);
	Enumeration<String> names = request.getParameterNames();
	while (names.hasMoreElements()) {
		String str = names.nextElement();
		System.out.println(str + ", " + request.getParameter(str));
		//requestParam.put(str, FrameStringUtil.isNullDefaultValue(request.getParameter(str), ""));
	}
	*/

//	logger.debug("전송 파라미터 확인 끝");
	// 전송 파라미터 확인 끝

	/* System.out.println("requestParam:" + requestParam.toJson());
	System.out.println("programPathName:" + programPathName);
	System.out.println("programName:" + programName);
	System.out.println("programPathName.indexOf(programName):" + programPathName.indexOf(programName));
	if (programPathName.length() > 0 && programPathName.lastIndexOf(">") > 0) {
		programPathName = programPathName.substring(0, programPathName.lastIndexOf(">") + 2);
		programPathName = bizGb + " > " + programPathName;
	}
	*/
%>
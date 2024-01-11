<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page import="com.sjinc.bss.framework.model.LoginUserVo" %>
<%@page import="com.sjinc.bss.framework.FrameConstants" %>
<%@page import="com.sjinc.bss.framework.FrameStringUtil" %>

<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%!
//String systemName = Global.getSystemTitle(false);
//String systemName = "";
//boolean isDev = systemName.indexOf("개발") > 0;
%>
<c:set var="myContextPath" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
<head>
<title>${systemName}</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
	<!--<link rel="shortcut icon" href="${myContextPath}/img/project/favi/favicon.ico" type="image/x-icon" />
<link rel="icon" href="${myContextPath}/img/project/favi/favicon.ico" type="image/x-icon" />-->
<link rel="stylesheet" type="text/css" href="${myContextPath}/css/project/main/login.css?ver=<spring:message key="css.version"/>" />
<%@include file="/WEB-INF/jsp/frame/common/programIncludeSp.jsp" %>
<script type="text/javascript" src="${myContextPath}/js/project/main/login.js?ver=<spring:message key="js.version"/>"></script>
<script>
	<%
		LoginUserVo user = (LoginUserVo) session.getAttribute(FrameConstants.LOGIN_USER_ATTR);
		if ( !FrameStringUtil.isNull(user) ) { // 로그인세션 존재하면 메인으로
	%>
		document.location = commonContextPath + "/main";
	<%
		}
	%>
</script>
</head>
<body style="overscroll-behavior: contain;">
	<div class="bg"></div>
	<img class="bgImage" src="${myContextPath}/img/project/login/img-login-bg.png"></img>
	<div class="Container">
		<form id="searchForm" class="loginContainer" onsubmit="return false;">
			<div id="loginTitle">
<%--				<img class="loginTitleImg" src="${myContextPath}/img/project/login/img-head-logo.png"  />--%>
				<div style="font-size: 22px;font-weight: bold;letter-spacing: -0.1px;margin-left: 10px">
					Pre-Hand ERP
				</div>
			</div>

			<label for="loginID">아이디</label>
			<input type="text" id="loginID" data-field="userId" data-required="true" maxlength="20" placeholder="사용자 아이디 입력"/>
			<label for="loginPW">비밀번호</label>
			<input type="password" id="loginPW" data-field="passWd" data-required="true" maxlength="20" placeholder="비밀번호"/>
			<input type="checkbox" id="saveID" value="Y" data-field="saveID" />
			<label for="saveID" style="margin-left: -8px">ID저장하기</label>
			<button id="btnLogin" onclick="btnLoginClick();">로그인</button>
		</form>
	</div>
<%@include file="/WEB-INF/jsp/frame/common/popup.jsp" %>
</body>
<style type="text/css">
	.item-maxlength {
		border-color: #cc0011 !important;
		border-width: 2px !important;
	}
</style>
</html>
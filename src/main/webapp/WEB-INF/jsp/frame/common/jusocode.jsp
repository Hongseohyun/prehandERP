<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c5"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<c5:set var="frameContextPathc5" value="${pageContext.request.contextPath}"/>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="${frameContextPathc5}/css/frame/common/jusocode.css?ver=<spring:message key="css.version"/>">
	<script type="text/javascript" src="${frameContextPathc5}/js/lib/jquery/jquery-3.2.1.js?ver=<spring:message key="js.version"/>" charset="utf-8" ></script>
	<script type="text/javascript" src="${frameContextPathc5}/js/lib/webix/webix_debug.js?ver=<spring:message key="js.version"/>" charset="utf-8" ></script>
	<script type="text/javascript" src="${frameContextPathc5}/js/lib/sumoselect/jquery.sumoselect.js?ver=<spring:message key="js.version"/>" charset="utf-8" ></script>
	<script type="text/javascript" src="${frameContextPathc5}/js/lib/jquery/jquery.maskedinput.js?ver=<spring:message key="js.version"/>" charset="utf-8" ></script>
	<script type="text/javascript" src="${frameContextPathc5}/js/lib/jquery-ui/jquery-ui.js?ver=<spring:message key="js.version"/>" charset="utf-8" ></script>
	<script type="text/javascript" src="${frameContextPathc5}/js/lib/jquery-ui/month/MonthPicker.js?ver=<spring:message key="js.version"/>" charset="utf-8"></script>
	<script type="text/javascript" src="${frameContextPathc5}/js/frame/lib/hangul-postposition<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>" charset="utf-8" ></script>
	<script type="text/javascript" src="${frameContextPathc5}/js/frame/lib/JQueryRC4<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
	<script type="text/javascript" src="${frameContextPathc5}/js/frame/common/common<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
	<script type="text/javascript" src="${frameContextPathc5}/js/frame/common/MonthPicker.custom<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
	<script type="text/javascript" src="${frameContextPathc5}/js/frame/common/webix.custom<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
	<script type="text/javascript" src="${frameContextPathc5}/js/frame/common/initialize<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
	<script type="text/javascript" src="${frameContextPathc5}/js/frame/ui/jusocode<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
</head>
<body style="margin: 0;">
<form name="formAPIDiv" id="formAPIDiv" method="post" onsubmit="return false;">
	<input type="hidden" name="currentPage" value="1"/> <!-- 요청 변수 설정 (현재 페이지) -->
	<input type="hidden" name="countPerPage" value="10"/> <!-- 요청 변수 설정 (페이지당 출력 개수) -->
	<input type="hidden" name="confmKey" value="${confmKey}"/> <!-- 요청 변수 설정 (승인키) -->

	<div class="pop-address-search-form pop-address-search-layer3">
		<div class="pop-address-body">
			<fieldset class="pop-address-field">
					<span class="pop-addr-wrap">
						<input type="text" id="keyword" name="keyword" onkeydown="enterSearchDiv()" title="검색어 입력" placeholder="도로명주소, 건물명 또는 지번 입력" autocomplete="off" style="ime-mode:active;"/>
						<input type="button" style="cursor:pointer;" id="" onclick="javascript:searchDivButton();" title="검색"/>
					</span>
			</fieldset>
			<div style="display: flex; justify-content: space-between">
				<p class="text-guide">해당되는 주소를 선택해주세요.</p>
				<p id="totalCntDiv"></p>
			</div>
			<table class="data-col">
				<colgroup>
					<col style="width:15%">
					<col>
				</colgroup>
				<thead>
				<tr>
					<th scope="col">우편번호</th>
					<th scope="col">도로명주소</th>
				</tr>
				</thead>
				<tbody id="listDiv"></tbody>
			</table>
			<div class="paginate" id="pageApiDiv"></div>
		</div>
	</div>
</form>
</body>
</html>


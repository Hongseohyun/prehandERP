<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c6"      uri="http://java.sun.com/jsp/jstl/core"%>
<c6:set var="myContextPath" value="${pageContext.request.contextPath}"/>
<script type="text/javascript" src="${myContextPath}/js/frame/ui/userPopup<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
<div id="userPopupWindow" class="popupBackground" style="outline: none;display: none;" tabindex="0">
	<div id="userContainer" style="outline: none;" tabindex="1">
		<div id="userTitle" style="outline: none;" tabindex="2">
			사용자 정보
			<button id="user_popup_close" onclick="popup.user.callback.callback();popup.user.hide(true);"></button>
		</div>
		<div style="outline: none;display: inline-block; width: 100%; text-align: right; padding-right: 5px; margin-top: 5px;" tabindex="4">
			<button id="user_popup_search">조회</button>
			<button id="user_popup_select">선택</button>
		</div>
		<form id="userSearchArea" class="userSearchArea" style="outline: none;" tabindex="5">
			<div class="searchRow" style="display: flex">
				<label for="user_userinfo">사용자ID/명</label>
				<input id="user_userinfo" name="user_userinfo" type="text" maxlength="100" style="width: 100px;" data-field="userinfo"/>
			</div>
		</form>
		<div id="user_popup_grid1" style="outline: none;margin-left: 5px; margin-top: 5px; width: calc(100% - 10px); height: calc(100% - 135px);" tabindex="6"></div>
	</div>
</div>
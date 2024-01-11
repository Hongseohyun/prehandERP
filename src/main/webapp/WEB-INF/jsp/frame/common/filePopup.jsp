<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c6"      uri="http://java.sun.com/jsp/jstl/core"%>
<c6:set var="myContextPath" value="${pageContext.request.contextPath}"/>
<script type="text/javascript" src="${myContextPath}/js/frame/ui/filePopup<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
<div id="attachPopupWindow" class="popupBackground" style="display: none;">
	<div id="attachContainer" style="">
		<div id="attachTitle" style="">
			파일 첨부
			<button id="attach_popup_close" onclick="popup.attach.hide();"></button>
		</div>
		<div style="display: inline-block; width: 100%; text-align: right; padding-right: 5px; margin-top: 5px;">
			<button type="button" id="attach_popup_confirm" style="margin-left: 20px">확인</button>
		</div>
		<form id="attachFormArea" class="attachSearchArea">
			<div class="searchRow" style="outline: none" tabindex="3">
				<label for="attach_popup_select">파일</label>
				<input id="attach_popup_select" type="file" onchange="attach_popup_select_change()" multiple style="width: 230px" />
			</div>
		</form>

		<div style="display: flex; justify-content: center;align-items: center;height: 300px;flex-direction: column">
			<span style="color: #8e8e8e">여기에 파일을 마우스로 끌어서 넣어보세요.</span>
			<div id="attachDrop"></div>
		</div>


		<form id="attachPopupForm" name="attachPopupForm" style="display: none" enctype="multipart/form-data" method="post">
			<input type="file" id="attachPopupfile" multiple/>
		</form>

	</div>
</div>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c4"      uri="http://java.sun.com/jsp/jstl/core"%>
<c4:set var="frameContextPath4" value="${pageContext.request.contextPath}"/>
<script type="text/javascript" src="${frameContextPath4}/js/frame/ui/customPopup<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
<div id="customPopupWindow" class="customPopupBackground" tabindex="0" style="outline: none;">
	<div id="customPopupContainer" tabindex="1" style="outline: none;">
		<div tabindex="2" style="outline: none;">
			<div id="customPopupTitle" style="outline: none;vertical-align: text-bottom;display: flex;align-items: end;justify-content: center;" tabindex="3">CODE HELP</div>
			<button id="customClose" onclick="customPopup.hide();" style="top: 5px;" ></button>
		</div>

		<iframe id="customPopupFrame" style="width:100%; height:calc(100% - 15px);" frameborder="0"></iframe>
	</div>
</div>
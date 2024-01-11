<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c1"      uri="http://java.sun.com/jsp/jstl/core"%>
<c1:set var="frameContextPathc1" value="${pageContext.request.contextPath}"/>
<script type="text/javascript" src="${frameContextPathc1}/js/frame/ui/attachFilePopup<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
<div id="attachFilePopupWindow" class="attachFilePopupBackground">
	<div id="attachFilePopupContainer">
		<div id="attachFilePopupTitle" style="">엑셀 업로드</div><button id="attachFileClose" onclick="attachFilePopup.hide();" ></button>
		<!-- <iframe id="attachFilePopupFrame" style="width:100%; height:calc(100% - 15px);" frameborder="0"></iframe> -->

		<form id="attachFileArea" class="attachFileArea">
			<div class="searchRow">
				<span for="upfile" style="width: 80px;">엑셀파일</span>
				<input id="upfile" type="file" name="upfile" accept=".xls,.xlsx">
			</div>
		</form>
		<div style="margin-top: 20px;">
			<button id="btnForm" >양식DOWN</button>
			<button id="confirmYes" data-isfocus="Y">업로드</button>
			<button id="confirmNo" onclick="attachFilePopup.hide(false);" data-isfocus="N">취소</button>
		</div>

		<form id="attachPostForm" name="attachPostForm" method="post" enctype="multipart/form-data" style="display: none">
			<div id="colNameDiv" style="display:none;">
				<input type="text" name="fileColNames" id="fileColNames">
			</div>
		</form>
	</div>
</div>
<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c3"      uri="http://java.sun.com/jsp/jstl/core"%>
<c3:set var="frameContextPathc3" value="${pageContext.request.contextPath}"/>
<script type="text/javascript" src="${frameContextPathc3}/js/frame/ui/popup<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
<div id="alertPopupWindow" class="popupBackground" style="outline: none;z-index:999999999;" onkeydown="if(event.keyCode == 13){popup.alert.hide();}" tabindex="0">
	<div id="alertContainer" tabindex="1" style="outline: none;">
		<div id="alertTitle" tabindex="2" style="outline: none;">알 림</div>
		<div id="alertText" tabindex="3" style="outline: none;"></div>
		<button id="alertClose" onclick="popup.alert.hide();">확인</button>
	</div>
</div>
<div id="confirmPopupWindow" class="popupBackground" style="z-index:999999999;" onkeydown="_confirmKeyEvt(event)">
	<div id="confirmContainer">
		<div id="confirmTitle">확 인</div>
		<div id="confirmText"></div>
		<button id="confirmYes" onclick="popup.confirm.hide(true);" data-isfocus="Y">예</button>
		<button id="confirmNo" onclick="popup.confirm.hide(false);" data-isfocus="N">아니오</button>
	</div>
</div>

<div id="loadingPopupWindow" class="popupBackground" style="z-index:99999999;">
	<div id="loadingContainer" style="background-image:url('${frameContextPathc3}/img/frame/popup/loading.gif'); width:200px; height:200px; background-repeat:no-repeat; background-position:center 55px; background-color:#ffffff; border: 2px solid #FB7D10;">
		<div style="position:absolute; top:15px; text-align:center; width:100%; font-size:12pt; font-weight:bold;">잠시만 기다려주세요</div>
	</div>
</div>
<div id="helpPopupWindow" class="popupBackground" style="outline: none" tabindex="0">
	<div id="helpContainer" style="outline: none" tabindex="1">
		<div id="helpTitle" style="outline: none" tabindex="2">
			<span class="helpGbNm"></span> CODE HELP
			<button id="help_popup_close" onclick="popup.help.hide();" ></button>
		</div>
		<div style="display: inline-block; width: 100%; text-align: right; padding-right: 5px; margin-top: 5px;outline: none;" tabindex="3">
			<button id="help_popup_search">조회</button>
			<button id="help_popup_select">선택</button>
		</div>

		<form id="helpSearchArea" class="helpSearchArea">
			<div class="searchRow" style="outline: none; display: flex" tabindex="3">
				<label for="help_popup_code">코드/명</label>
				<input type="text" id="help_popup_code" data-field="cmminfo" name="help_popup_code"/>
			</div>
		</form>
		<div id="help_popup_grid1" style="margin-left: 5px; margin-top: 5px; width: calc(100% - 10px); height: calc(100% - 135px);outline: none;" tabindex="4">
		</div>
	</div>
</div>
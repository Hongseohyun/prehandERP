<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>

<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp" %>
    <script type="text/javascript" src="${myContextPath}/js/project/sy/sy203<spring:message key="js.addext"/>.js?ver=1<spring:message key="js.version"/>"></script>
    <style>
        .formRow>label {
            min-width:140px;
        }
    </style>
</head>
<body>
<%@include file="/WEB-INF/jsp/frame/common/title.jsp" %>
<form id="searchArea">
    <div class="searchRow">
        <label for="P_CompCd" >기관</label>
        <select id="P_CompCd" name="P_CompCd" style="width: 200px;"
                data-options-code="02"
                data-options-param='{"useYn":"Y"}'
                data-total="false"
                data-options-custom="false"
                data-field="compCd"
                data-default='{"01"}'
        ></select>
        <label for="P_menuInfo">메뉴명</label>
        <input id="P_menuInfo" name="P_menuInfo" type="text" size="20" maxlength="20" data-field="menuinfo" />
    </div>
</form>

<div class="formTitle" style="top:145px; left:40px;">메뉴 폴더 목록</div>
<form class="rowButtonArea" style="position:absolute; width:400px; top:145px;">
    <button class="normalButtonSmall" name="excelDown" data-target="grid1" data-excel-name="BSY203_1" ><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL</button>
</form>
<div id="grid1" style="position:absolute; top:185px; left:40px; width:400px;; height:calc(100% - 215px);"></div>

<div class="formTitle" style="top:145px; left:450px;">미등록 프로그램</div>
<form class="rowButtonArea" style="position:absolute; left: 452px; width:calc(50% - 250px); top:145px;">
    <button class="normalButtonSmall" name="excelDown" data-target="grid2" data-excel-name="BSY203_2" ><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL</button>
</form>
<div id="grid2" style="position:absolute; top:185px; left:452px; width:calc(50% - 250px); height:calc(100% - 215px);"></div>

<div class="formTitle" style="top:145px; left:calc(50% + 254px);">등록 프로그램</div>
<form class="rowButtonArea" style="position:absolute; left: calc(50% + 254px); width:calc(50% - 294px); top:145px;">
    <button class="normalButtonSmall" name="excelDown" data-target="grid3" data-excel-name="BSY203_3" ><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL</button>
</form>
<div id="grid3" style="position:absolute; top:185px; left:calc(50% + 254px); width:calc(50% - 294px); height:calc(100% - 215px);"></div>

<div style="position:absolute; top: 200px; left:calc(50% + 209px); width: 40px; height: calc(100% - 224px);">
    <button class="btnMoveRight" onclick="btnMoveRightClick();"></button>
    <button class="btnMoveLeft" onclick="btnMoveLeftClick();"></button>
</div>

</body>
<iframe id="fileIframe" name="fileIframe" style="position: absolute; left:-50px; width:0;"></iframe>
</html>
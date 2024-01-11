<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp" %>
    <script type="text/javascript" src="${myContextPath}/js/project/sy/sy202<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
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

<div class="formTitle" style="top:145px;">메뉴 목록</div>
<form class="rowButtonArea" style="position:absolute; width:calc(100% - 850px); top:145px;">
    <button class="normalButtonSmall" name="excelDown" data-target="grid1" data-excel-name="${PTITLE.pgmNm}" ><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL</button>
</form>
<div id="grid1" style="position:absolute; top:185px; left:40px; width:calc(100% - 850px); height:calc(100% - 215px);"></div>

<form id="postForm" name="postForm" class="formArea" style="top:185px; width: 748px; height: calc(100% - 378px); right: 40px;"  onsubmit="return false;">
    <input id="dupckid" name="dupckid" type="hidden" data-field="dupckid"/>
    <input id="compCd" name="compCd" type="hidden" data-field="compCd"/>
    <div class="formRow">
        <label for="menuId">상위메뉴ID</label>
        <input id="menuId" name="menuId" type="text" size="10" maxlength="10" data-field="menuId" data-required="true" data-format="upper"/>
        <span id="spanmsg1"></span>
    </div>
    <div class="formRow">
        <label for="menuNm">상위메뉴명</label>
        <input id="menuNm" name="menuNm" type="text" maxlength="50" data-field="menuNm" data-required="true" style="width: calc(100% - 310px);"/>
    </div>
    <div class="formRow">
        <label for="sortno">정렬순서</label>
        <input id="sortno" name="sortno" type="text" maxlength="3" data-field="sortno" data-required="true" data-format="number"/>
    </div>
    <div class="formRow">
        <label for="menuImg">메뉴이미지</label>
        <input id="menuImg" name="menuImg" type="text" maxlength="100" data-field="menuImg" style="width: calc(100% - 310px);"/>
        <img id="imgMenuImg" style="width: 23px;height: 23px;margin-bottom: -6px;" src="" onerror="this.style.display='none';"/>
    </div>
    <div class="formRow">
        <label for="menuImgOv">메뉴이미지(OV)</label>
        <input id="menuImgOv" name="menuImgOv" type="text" maxlength="100" data-field="menuImgOv" style="width: calc(100% - 310px);"/>
        <img id="imgMenuImgOv" style="width: 23px;height: 23px;margin-bottom: -6px;" src="" onerror="this.style.display='none';"/>
    </div>
    <div class="formRow">
        <label>사용여부</label>
        <input type="radio" id="useYn_Y" name="useYn" value="Y" data-field="useYn" data-default="Y" /><label class="radio" for="useYn_Y">Y</label>
        <input type="radio" id="useYn_N" name="useYn" value="N" data-field="useYn" data-default="Y" /><label class="radio" for="useYn_N">N</label>
    </div>
    <div class="formRow" style="height: calc(100% - 82px); ">
        <label for="bigo" style="display:block; float:left; height:100%; background-position:10px 16px;">비고</label>
        <textarea id="bigo" style="width:calc(100% - 170px); height: calc(100% - 10px); margin-left:3px; margin-top:5px; margin-bottom:5px; resize:none;" data-field="bigo" maxlength="200"></textarea>
    </div>
</form>
</body>
<iframe id="fileIframe" name="fileIframe" style="position: absolute; left:-50px; width:0;"></iframe>
</html>
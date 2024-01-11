<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp" %>
    <script type="text/javascript" src="${myContextPath}/js/project/sy/sy103<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
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
        <label for="P_compInfo">기관코드/명</label>
        <input id="P_compInfo" name="P_compInfo" type="text" size="20" maxlength="20" data-field="compinfo" data-required="false" data-format="upper"/>
    </div>
</form>

<div class="formTitle" style="top:145px;">
    기관 목록
    <span style="margin-left: 10px;" id="dataCnt"></span>
</div>
<form id="rowButtonArea" class="rowButtonArea" style="position:absolute; width:calc(100% - 850px); top:145px;">
    <button class="normalButtonSmall" name="excelDown" data-target="grid1" data-excel-name="BSY103" ><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL</button>
</form>
<div id="grid1" style="position:absolute; top:185px; left:40px; width:calc(100% - 850px); height:calc(100% - 215px);"></div>

<div class="formTitle" style="top:145px;left:calc(100% - 790px);">상세정보</div>

<form id="postForm" name="postForm" class="formArea" style="top:185px; width: 748px; height: calc(100% - 337px); right: 40px;"  onsubmit="return false;">
    <input id="dupckid" name="dupckid" type="hidden" data-field="dupckid"/>
    <input id="fileid" name="fileid" type="hidden" data-field="fileId"/>
    <div class="formRow c2">
        <label for="compCd">기관코드</label>
        <input id="compCd" name="compCd" type="text" maxlength="20" style="width:calc(100% - 225px);"
               data-field="compCd"
               data-required="true"
               data-format="upper"/>
        <span id="spanmsg1"></span>
    </div>
    <div class="formRow c2">
        <label for="compNm">기관명</label>
        <input id="compNm" name="compNm" type="text" maxlength="50" style="width: calc(100% - 174px);"
               data-field="compNm"
               data-required="true" />
    </div>

    <div class="formRow c2">
        <label for="telNo">전화번호</label>
        <input id="telNo" name="telNo" type="text" maxlength="13" style="width: calc(100% - 174px);"
               data-field="telNo"
               data-format="tel"/>
    </div>
    <div class="formRow c2">
        <label for="faxNo">팩스번호</label>
        <input id="faxNo" name="faxNo" type="text" maxlength="13" style="width: calc(100% - 174px);"
               data-field="faxNo"
               data-format="tel"/>
    </div>
    
    <div class="formRow c2">
        <label for="email">이메일</label>
        <input id="email" name="email" type="text" maxlength="50" style="width: calc(100% - 174px);"
               data-field="email" />
    </div>

    <div class="formRow c2">
        <label>사용여부</label>
        <input type="radio" id="useYn_Y" name="useYn" value="Y" data-field="useYn" data-default="Y" /><label class="radio" for="useYn_Y">Y</label>
        <input type="radio" id="useYn_N" name="useYn" value="N" data-field="useYn" data-default="Y" /><label class="radio" for="useYn_N">N</label>
    </div>

    <div class="formRow" style="height: calc(100%); ">
    	<label for="bigo" style="display:block; float:left; height:100%; background-position:10px 16px;">비고</label>
        <textarea id="bigo" style="width:calc(100% - 172px); height:calc(100% - 10px); margin-left:3px; margin-top:5px; margin-bottom:5px; resize:none;" data-field="bigo" maxlength="500"></textarea>
    </div>
</form>
</body>
</html>
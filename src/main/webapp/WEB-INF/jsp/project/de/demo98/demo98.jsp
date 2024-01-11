<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp" %>
    <script type="text/javascript" src="${myContextPath}/js/project/de/demo98<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
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
        <label for="P_username">기관코드/명</label>
        <input id="P_username" name="P_compInfo" type="text" size="20" maxlength="20" data-field="username" data-required="false" />
    </div>
</form>

<div class="formTitle" style="top:145px;">
    사용자 목록
    <span style="margin-left: 10px;" id="dataCnt"></span>
</div>
<form id="rowButtonArea" class="rowButtonArea" style="position:absolute; width:calc(100% - 850px); top:145px;">
    <button class="normalButtonSmall" name="excelDown" data-target="grid1" data-excel-name="demo98" ><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL</button>
</form>
<div id="grid1" style="position:absolute; top:185px; left:40px; width:calc(100% - 850px); height:calc(100% - 215px);"></div>

<div class="formTitle" style="top:145px;left:calc(100% - 790px);">상세정보</div>

<form id="postForm" name="postForm" class="formArea" style="top:185px; width: 748px; height: calc(100% - 337px); right: 40px;"  onsubmit="return false;">
    <input id="dupckid" name="dupckid" type="hidden" data-field="dupckid"/>
    <div class="formRow c2">
        <label for="user_Id">사용자아이디</label>
        <input id="user_Id" name="user_Id" type="text" maxlength="20" style="width:calc(100% - 225px);"
               data-field="userId"
               data-required="false"
               readonly="true"/>
        <span id="spanmsg1"></span>
    </div>
    <div class="formRow c2">
        <label for="username">사용자명</label>
        <input id="username" name="username" type="text" maxlength="20" style="width: calc(100% - 174px);"
               data-field="username"
               data-required="true" />
    </div>
    
    <div class="formRow c2">
        <label for="email">이메일</label>
        <input id="email" name="email" type="text" maxlength="50" style="width: calc(100% - 174px);"
               data-field="email" />
    </div>




</form>
</body>
</html>
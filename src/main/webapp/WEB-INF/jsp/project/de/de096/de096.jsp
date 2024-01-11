<%--
  Created by IntelliJ IDEA.
  User: sjinc
  Date: 2023-12-08
  Time: 오전 9:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
<%--    <title>Title</title>--%>
<%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp" %>
    <script type="text/javascript" src="${myContextPath}/js/project/de/de096<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version" />"></script>
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
        <label for="P_pgmInfo">프로그램ID/명</label>
        <input id="P_username" name="P_compInfo" type="text" size="20" maxlength="20" data-field="username" data-required="false" />
    </div>
</form>

<div class="formTitle" style="top:145px;">프로그램정보</div>
<form class="rowButtonArea" style="position:absolute; left:40px; width:calc(100% - 80px); top:145px;">
    <button class="rowButton" name="addRow" data-target="grid1"><img src="${myContextPath}/img/mngr/ic_pl.png" />행추가</button>
    <button class="normalButtonSmall" name="excelDown" data-target="grid1" data-excel-name="BSY201"><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL</button>
</form>
<div id="grid1" style="position:absolute; top:185px; left:40px; width:calc(100% - 80px); height:calc(100% - 215px);"></div>

</body>
<iframe id="fileIframe" name="fileIframe" style="position: absolute; left:-50px; width:0;"></iframe>
</html>

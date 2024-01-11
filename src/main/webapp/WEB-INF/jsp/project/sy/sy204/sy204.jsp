<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>

<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp" %>
    <script type="text/javascript" src="${myContextPath}/js/project/sy/sy204<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
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

        <label for="P_userGbCd">사용자구분</label>
        <select id="P_userGbCd" name="P_userGbCd" style="width: 160px;"
                data-options-code="01"
                data-options-param='{"compCd":"<%=COMP_CD%>", "cdGb":"SY020"}'
                data-total="false"
                data-field="userGbCd"
                data-default='["GR01"]'
                onchange="searchByUserGdCd()"
        ></select>
    </div>
</form>

<div class="formTitle" style="top:145px;">메뉴구성</div>
<form class="rowButtonArea" style="position:absolute; left:25px; width:calc(100% - 65px); top:145px;">
    <button class="normalButtonSmall" name="excelDown" data-target="grid1" data-excel-name="SY204" ><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL</button>
</form>
<div id="grid1" style="position:absolute; top:185px; left:40px; width:calc(100% - 80px); height:calc(100% - 215px);"></div>

</body>
<iframe id="fileIframe" name="fileIframe" style="position: absolute; left:-50px; width:0;"></iframe>
</html>
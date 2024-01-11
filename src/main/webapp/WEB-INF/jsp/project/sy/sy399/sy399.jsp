<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp"%>
    <script type="text/javascript" src="${myContextPath}/js/project/sy/sy399<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
    <style>
        #searchArea> .searchRow> label{
            line-height:30px !important;
        }
    </style>
</head>
<body>
<%@include file="/WEB-INF/jsp/frame/common/title.jsp" %>
<form id="searchArea" style="height: 92px;">
    <input type="hidden" data-field="deptNm">
    <div class="searchRow">
        <label for="p_cd">공통코드(SY020)</label>
        <input type="text" name="p_cd" id="p_cd"
               data-field="cd"
               data-target="p_cdNm"
               data-code="01"
               data-param='{ "compCd" : "<%=COMP_CD%>", "cdGb" : "SY020" }'
               data-multiple="true">
        <input type="hidden" name="p_cdNm" id="p_cdNm"
               data-field="cdNm"
               data-code-obj="p_cd"
               readonly >

        <label for="p_userId" >사용자</label>
        <input type="text" name="p_userId" id="p_userId"
               data-code="user"
               data-type="user"
               data-param='{ "compCd" : "<%=COMP_CD%>" }'
               data-field="userId" >
       <input type="hidden" name="p_userNm" id="p_userNm"
               data-field="userNm"
               data-code-obj="p_userId"
               readonly>

        <label for="p_zipcd">주소</label>
        <input type="text" id="p_zipcd" style="width:70px" data-field="zipcd" >
        <input type="text" id="p_addr1" data-field="addr1" >
        <button class="normalButtonSmall" id="btnJuso" >주소</button>

    </div>
    <div class="searchRow">
        <label for="atfiId">첨부</label>
        <input type="text" id="atfiId" data-field="atfiId">
        <button class="normalButtonSmall" id="btnAttach" >팝업</button>
    </div>
</form>

<div class="formTitle" style="top:165px;">CodeHelp <span style="margin-left: 10px;" id="dataCnt"></span> </div>

<form id="rowButtonArea" class="rowButtonArea" style="position:absolute; width:calc(100% - 82px); top:165px;">
    <button class="normalButtonSmall" name="excelDown" data-target="grid1" data-excel-name="ST399" >
        <img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL
    </button>
    <button class="normalButtonSmall" name="excelUpload" data-target="grid1" data-temp-excel-name="ST399_temp">
        <img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL UPLOAD
    </button>
</form>
<div id="grid1" style="position:absolute; top:200px; left:40px; width:calc(100% - 80px); height:calc(100% - 172px);"></div>
</form>
</body>

</html>
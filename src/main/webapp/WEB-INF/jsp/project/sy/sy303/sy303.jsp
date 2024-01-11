<%@ page import="com.sjinc.bss.framework.FrameDateUtil" %>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp"%>
    <script type="text/javascript" src="${myContextPath}/js/project/sy/sy303<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
</head>
<body>
<%@include file="/WEB-INF/jsp/frame/common/title.jsp" %>
<form id="searchArea">
    <div class="searchRow">
        <label>구분</label>
        <input type="radio" id="p_gb1" name="p_gb" value="user" data-field="gb" data-default="user" /><label class="radio" for="p_gb1">사용자</label>
        <input type="radio" id="p_gb2" name="p_gb" value="menu" data-field="gb" data-default="user" /><label class="radio" for="p_gb2">메뉴</label>

        <label for="P_CompCd" >기관</label>
        <select id="P_CompCd" name="P_CompCd" style="width: 150px;margin-bottom: 5px"
                data-options-code="02"
                data-options-param='{"useYn":"Y"}'
                data-options-custom="false"
                data-field="compCd"
        ></select>

        <label for="P_hstrDt1">로그일자</label>
        <label for="P_hstrDt2" style="display: none">로그일자</label>
        <input id="P_hstrDt1" type="text" style="width:100px;" data-field="hstrDt1" data-format="date"
               data-default="<%=FrameDateUtil.getDate(0,"yyyy-MM-dd")%>" data-required="true"  /> ~
        <input id="P_hstrDt2" type="text" style="width:100px;" data-field="hstrDt2" data-format="date"
               data-default="<%=FrameDateUtil.getDate(0,"yyyy-MM-dd")%>" data-required="true" />

        <label for="P_userNm">사용자ID/명</label>
        <input id="P_userNm" name="P_userNm" type="text" size="20" maxlength="20" data-field="userNm">

    </div>
</form>

<div class="formTitle" style="top:145px;"> 로그조회 <span style="margin-left: 10px;" id="dataCnt"></span> </div>

<form class="rowButtonArea" style="position:absolute; left:25px; width:calc(100% - 65px); top:145px;">
    <button class="normalButtonSmall" name="excelDown" data-target="grid1" data-excel-name="${PTITLE.pgmNm}" ><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL</button>
</form>
<div id="grid1" style="position:absolute; top:185px; left:40px; width:calc(100% - 80px); height:calc(100% - 215px);"></div>
</body>

</html>
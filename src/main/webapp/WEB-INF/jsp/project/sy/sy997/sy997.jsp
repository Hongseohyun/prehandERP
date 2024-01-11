<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp"%>
    <script type="text/javascript" src="${myContextPath}/js/project/sy/sy997<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
</head>
<body>
<%@include file="/WEB-INF/jsp/frame/common/title.jsp" %>
<form id="searchArea">
    <div class="searchRow">
        <label for="p_testGbCd">구분</label>
        <select id="p_testGbCd" name="p_testGbCd" data-field="p_testGbCd" style="width: 150px;"
                data-options-code="01"
                data-options-param='{"compCd":"<%=COMP_CD%>", "cdGb":"SY997"}'
                multiple>
        </select>
        <label for="p_testText">텍스트</label>
        <input type="text" name="p_testText" id="p_testText" data-field="p_testText">

        <label>처리URL</label>
        <input type="radio" id="p_logicType1" name="p_logicType" value="01" data-field="logicType" data-default="01" /><label class="radio" for="p_logicType1">Common</label>
        <input type="radio" id="p_logicType2" name="p_logicType" value="02" data-field="logicType" data-default="01" /><label class="radio" for="p_logicType2">Sy997</label>

    </div>
</form>

<div class="formTitle" style="top:145px;">그리드 CRUD 샘플<span style="margin-left: 10px;" id="dataCnt"></span> </div>

<form id="rowButtonArea" class="rowButtonArea" style="position:absolute; width:calc(100% - 82px); top:145px;">
    <button class="rowButton" name="addRow" data-target="grid1">
        <img src="${myContextPath}/img/mngr/ic_pl.png" />행추가 <!-- 그리드 행추가 -->
    </button>
    <button class="normalButtonSmall" name="excelDown" data-target="grid1" data-excel-name="${PTITLE.pgmNm}" > <!-- 엑셀 다운로드 -->
        <img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL
    </button>
    <button class="normalButtonSmall" name="excelUpload" data-target="grid1" data-temp-excel-name="${PTITLE.pgmNm}_양식"> <!-- 엑셀 업로드 -->
        <img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL UPLOAD
    </button>
</form>
<div id="grid1" style="position:absolute; top:180px; left:40px; width:calc(100% - 80px); height:calc(100% - 215px);"></div>
</form>
</body>
</html>
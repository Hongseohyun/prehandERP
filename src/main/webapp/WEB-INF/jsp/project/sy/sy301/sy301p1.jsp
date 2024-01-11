<%@ page import="com.sjinc.bss.framework.FrameDateUtil" %>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp"%>
    <script type="text/javascript" src="${myContextPath}/js/project/sy/sy301p1<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
</head>
<body>
    <%@include file="/WEB-INF/jsp/frame/common/title.jsp" %>
<style>
    .formRow>label:not(.radio) {
        min-width: 172px;
    }
    .buttonArea {
        float: none !important;
        width: 100% !important;
        line-height: 55px !important;
        text-align: right !important;
    }
    #titleArea {
        width: calc(100% - 20px) !important;
        margin-left: 10px !important;
    }
</style>
    <form id="postForm" name="postForm" class="formArea" onsubmit="return false;" style="right:0;top:70px;">
    <div class="formRow c2">
        <label for="enteDd">입사일자</label>
        <input id="enteDd" name="enteDd" type="text" maxlength="20" style="width: calc(100% - 225px);"
               data-field="enteDd" data-required="true" data-format="date"/>
    </div>
    <div class="formRow c2">
        <label for="retiDd">퇴사일자</label>
        <input id="retiDd" name="retiDd" type="text" maxlength="20" style="width: calc(100% - 225px);"
               data-field="retiDd" data-format="date"/>
    </div>
    <div class="formRow c2">
        <label>사용여부</label><%--data-field의 값과 dto의 값이 같아야한다, radio type에서 name와 data-field는 같아야 한다.--%>
        <input type="radio" id="useYn_Y" name="useYn" value="Y" data-field="useYn" data-default="N" /><label class="radio" for="useYn_Y">Y</label>
        <input type="radio" id="useYn_N" name="useYn" value="N" data-field="useYn" data-default="N" /><label class="radio" for="useYn_N">N</label>
    </div>
    <div class="formRow c2">
        <label>근태관리</label><%--data-field의 값과 dto의 값이 같아야한다, radio type에서 name와 data-field는 같아야 한다.--%>
        <input type="radio" id="comuMngrYn_Y" name="comuMngrYn" value="Y" data-field="comuMngrYn" data-default="N" /><label class="radio" for="comuMngrYn_Y">Y</label>
        <input type="radio" id="comuMngrYn_N" name="comuMngrYn" value="N" data-field="comuMngrYn" data-default="N" /><label class="radio" for="comuMngrYn_N">N</label>
    </div>
</form>
</body>
</html>
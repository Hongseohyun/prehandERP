<%@ page import="com.sjinc.bss.framework.FrameDateUtil" %>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp"%>
    <script type="text/javascript" src="${myContextPath}/js/project/main/myInfoPopup<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
</head>
<body>

    <%@include file="/WEB-INF/jsp/frame/common/title.jsp" %>

<style>
    .formRow>label:not(.radio) {
        min-width: 140px;
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
<form id="postForm" name="postForm" class="formArea" style="left:20px; width: calc(100% - 20px);border:1px solid #eee;top:80px"  onsubmit="return false;">

    <div class="formRow c2">
        <label for="userId">아이디</label>
        <input id="userId" name="userId" type="text" maxlength="20" style="width:calc(100% - 160px);"
               data-field="userId"
               data-format="upper"
               value="<%=USER_ID%>"
            disabled />
    </div>

    <div class="formRow c2">
        <label for="userNm">이름</label>
        <input id="userNm" name="userNm" type="text" maxlength="20" style="width:calc(100% - 160px);"
               data-field="userNm"
               data-required="true"
               value="<%=USER_NM%>"
        />
    </div>

    <div class="formRow c2">
        <label for="pwd">비밀번호</label>
        <input id="pwd" name="pwd" type="password" maxlength="20" style="width:calc(100% - 160px);"
               data-field="pwd"/>
        <span id="spanmsg1"></span>
    </div>

    <div class="formRow c2">
        <label for="pwdChk">비밀번호 확인</label>
        <input id="pwdChk" name="pwdChk" type="password" maxlength="20" style="width:calc(100% - 160px);"
               data-field="pwdChk"/>
    </div>

</form>
</body>
</html>
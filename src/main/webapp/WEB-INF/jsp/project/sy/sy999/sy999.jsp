<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>

<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp" %>
    <script type="text/javascript" src="${myContextPath}/js/project/sy/sy999<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
    <style>
        textarea {
            position: relative;
            top: 47%;
            left: 40px;
            width: 91.3%;
            height: 37%;
        }

        .print_button {
            width: 70px !important;
            height: 30px !important;
        }

        #copy {
            color: red;
            position: relative;
            top: 45.5%;
            left: 3%;
            z-index: 100;
            display: none;
        }

        .grid {
            position: absolute;
            top: 150px;
            left: 40px;
            width: calc(100% - 150px);
            height: calc(100% - 540px);
        }
    </style>
</head>
<body>
<%@include file="/WEB-INF/jsp/frame/common/title.jsp" %>
<form id="searchArea">
    <div class="searchRow">
        <label for="gridID"  >그리드_ID</label>
        <input type="text" value="grid1" id="gridID">


        <button class="print_button" style="width: 100px !important;" onclick="addRow();">컬럼 추가</button>
        <button class="print_button" style="width: 160px !important;" onclick="addRow('Y');">hidden 컬럼 추가</button>
        <button class="print_button" onclick="grid_setting();">출력</button>
    </div>
</form>
<div class="formTitle" style="top:160px;">메뉴구성</div>
    <div id="grid1" class="grid"></div>

    <div id="copy">복사 완료</div>
    <textarea id="print">
    </textarea>

</body>
<iframe id="fileIframe" name="fileIframe" style="position: absolute; left:-50px; width:0;"></iframe>
</html>
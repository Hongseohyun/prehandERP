<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp"%>
    <script type="text/javascript" src="${myContextPath}/js/project/bd/bd101p1<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
    <script type="text/javascript" src="${myContextPath}/js/lib/ckeditor/ckeditor<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
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

<form id="postForm" name="postForm" class="formArea"  enctype="multipart/form-data" method="post"
      style="left:20px; width: calc(100% - 20px);border:1px solid #eee;top:80px"
      onsubmit="return false;">
    <input type="hidden" id="compCd" name="compCd" data-field="compCd" />
    <input type="hidden" id="annoYmon" name="annoYmon" data-field="annoYmon" />
    <input type="hidden" id="annoSeq" name="annoSeq" data-field="annoSeq" />
    <input type="hidden" id="atfiId" name="atfiId" data-field="atfiId" />
    <div class="formRow">
        <label for="annoTitl">제목</label>
        <input id="annoTitl" name="annoTitl" data-field="annoTitl" data-required="true"
               type="text"
               style="width: calc(100% - 288px);"
        />
    </div>
    <div class="formRow">
        <label for="postStDd">게시기간</label>
        <input id="postStDd" name="postStDd" data-field="postStDd"
               data-required="true"
               data-format="date"
               type="text"
        />
        &nbsp;~&nbsp;
        <input id="postEdDd" name="postEdDd" data-field="postEdDd"
               data-required="true"
               data-format="date"
               type="text"
        />
    </div>
    <div class="formRow c2">
        <label for="emerYn">긴급여부</label>
        <select id="emerYn" name="emerYn" data-field="emerYn"
                data-options-code="01"
                data-options-param='{ "compCd" : "<%=COMP_CD%>", "cdGb":"SY050", "useYn":"Y" }'
                data-required="true"
                style="width: 200px"
        >
        </select>
    </div>
    <div class="formRow c2">
        <label for="annoYn">공지여부</label>
        <select id="annoYn" name="annoYn" data-field="annoYn"
                data-options-code="01"
                data-options-param='{ "compCd" : "<%=COMP_CD%>", "cdGb":"SY050", "useYn":"Y" }'
                data-required="true"
                style="width: 200px"
        >
        </select>
    </div>
    <div class="formRow">
        <div id="editor1Container" style="height: 100%;">
            <textarea id="annoCont" name="annoCont" data-field="annoCont" data-required="true"></textarea>
        </div>
    </div>
    <div class="formRow">
        <label for="atfiFile">첨부파일</label>
        <input id="atfiFile" name="atfiFile" data-field="atfiFile"
               type="file"
               multiple
        />
    </div>
    <div class="formRow" style="display: flex">
        <label for="atfiArea" style="height: auto">첨부파일 목록</label>
        <div id="atfiArea">
        </div>
    </div>
</form>
<style type="text/css">
    #atfiArea{
        display: inline-block;
    }

    .attach-item{
        margin: 5px;
    }

    .attach-item .origFileNm{
        color: #8d8d8d;
        font-size: 12px;
    }

    .attach-item .fileSize{
        font-size: 12px;
        color: #8d8d8d;
        margin-left: 5px;
    }

    .attach-item .clear{
        cursor: pointer;
        font-size: 12px;
        color: #8d8d8d;
        margin-left: 5px;
    }

    .attach-item .clear:hover{
        color: #5d5d5d;
    }

</style>
</body>
</html>
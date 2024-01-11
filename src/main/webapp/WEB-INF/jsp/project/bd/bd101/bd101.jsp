<%@ page import="com.sjinc.bss.framework.FrameDateUtil" %>
<%@ page import="com.sjinc.bss.framework.FrameStringUtil" %>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp"%>
    <script type="text/javascript" src="${myContextPath}/js/project/bd/bd101<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
    <script type="text/javascript" src="${myContextPath}/js/lib/ckeditor/ckeditor<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
</head>
<body>
<%@include file="/WEB-INF/jsp/frame/common/title.jsp" %>

<form id="fileDownloadForm" name="fileDownloadForm" action="${myContextPath}/common/downloadFile" style="display: none" method="post"
      target="fileDownloadFrame" >
    <input type="hidden" id="fileCompCd" name="compCd" data-field="compCd"/>
    <input type="hidden" id="fileAtfiId" name="atfiId" data-field="atfiId"/>
    <input type="hidden" id="fileAtfiSeq" name="atfiSeq" data-field="atfiSeq"/>
    <input type="hidden" id="fileServPath" name="servPath" data-field="servPath"/>
    <input type="hidden" id="fileServFileNm" name="servFileNm" data-field="servFileNm"/>
    <input type="hidden" id="fileOrigFileNm" name="origFileNm" data-field="origFileNm"/>
</form>

<iframe id="fileDownloadFrame" name="fileDownloadFrame" style="display: none" onload="downloadCallback(event)"></iframe>

<form id="searchArea">
    <div class="searchRow">
        <label for="P_compCd" >기관</label>
        <select id="P_compCd" name="P_compCd" style="width: 150px;margin-bottom: 5px"
                data-options-code="02"
                data-options-param='{"useYn":"Y"}'
                data-options-custom="false"
                data-field="compCd"
        ></select>

        <label for="P_regDd1">등록일</label>
        <label for="P_regDd2" style="display: none">등록일</label>
        <input id="P_regDd1" type="text" style="width:100px;" data-field="regDd1" data-format="date"
               data-default="<%=FrameDateUtil.getDate(-365,"yyyyMMdd")%>" data-required="true"  /> ~
        <input id="P_regDd2" type="text" style="width:100px;" data-field="regDd2" data-format="date"
               data-default="<%=FrameDateUtil.getDate(0,"yyyyMMdd")%>" data-required="true" />

        <label for="P_titlPostRegUserNm">제목/작성자</label>
        <input id="P_titlPostRegUserNm" name="P_titlPostRegUserNm" type="text" size="20" maxlength="20" data-field="titlPostRegUserNm" />
    </div>
</form>

<form id="tabArea" style="top: 150px">
	<span id="tabT0" style="float: left;">
		<button class="tabNavi tabSelected" onclick="viewTab(0)">목록</button>
	</span>
    <span id="tabT1" style="float: left;">
		<button class="tabNavi" style="border-left: none;" onclick="viewTab(1)">상세내용</button>
	</span>
</form>

<div style="position: absolute;left: 40px; top: 215px; width: calc(100% - 80px);height: calc(100% - 235px)">
    <div id="tabContent0" class="tabContent selected">
        <div id="grid1" style="height:calc(100% - 40px);width: 100%"></div>
        <!-- 페이징처리 시작 -->
        <div id="pageArea">
            <ul class="pagination"></ul>
        </div>
        <!-- 페이징처리 끝 -->
    </div>
    <div id="tabContent1" class="tabContent">
        <form id="postForm" name="postForm" class="formArea" style="top:2px; width: 100%; height: 100%; left: 1px; overflow-y: scroll"  onsubmit="return false;">

            <input type="hidden" id="compCd" name="compCd" data-field="compCd" />
            <input type="hidden" id="annoYmon" name="annoYmon" data-field="annoYmon" />
            <input type="hidden" id="annoSeq" name="annoSeq" data-field="annoSeq" />
            <input type="hidden" id="atfiId" name="atfiId" data-field="atfiId" />
            <input type="hidden" id="annoCont" name="annoCont" data-field="annoCont" />
            <input type="hidden" id="emerYn" name="emerYn" data-field="emerYn" />
            <input type="hidden" id="annoYn" name="annoYn" data-field="annoYn" />

            <div class="formRow c1">
                <label for="annoTitl">제목</label>
                <input id="annoTitl" name="annoTitl" style=" border:none; background: transparent; font-size: large; font-weight: bold;"
                       data-field="annoTitl" readonly/>
                <c:forEach var="pgmVo" items="${PTITLE.pgmBtnAuthList}">
                    <c:choose>
                        <c:when test="${pgmVo.btnGb eq 'NEWS'}">
                            <button class="baseButton" id="btnDelete" style="float: right; margin-right: 20px;margin-top: 4px" onclick="btnDeleteClick()" >삭제</button>
                            <button class="baseButton" id="btnModify" style="float: right; margin-right: 10px;margin-top: 4px" onclick="btnModifyClick()" >수정</button>
                        </c:when>
                    </c:choose>
                </c:forEach>
            </div>
            <div class="formRow c2">
                <label for="postRegUserNm">작성자</label>
                <input id="postRegUserNm" name="postRegUserNm" type="text" maxlength="20" style="width:calc(100% - 174px);  border:none; background: transparent;"
                       data-field="postRegUserNm" readonly/>
            </div>
            <div class="formRow c2">
                <label for="regDd">작성일</label>
                <input id="regDd" name="regDd" type="text" maxlength="20" style="width:calc(100% - 174px);  border:none; background: transparent;"
                       data-field="regDd" readonly/>
            </div>
            <div class="formRow c2">
                <label for="postStDd">게시기간</label>
                <input id="postStDd" name="postStDd" type="text" data-format="yyyy-mm-dd" style="width: 80px; border:none; background: transparent;"
                       data-field="postStDd" readonly/> ~
                <input id="postEdDd" name="postEdDd" type="text" data-format="yyyy-mm-dd"  style="border:none; background: transparent;"
                       data-field="postEdDd" readonly/>
            </div>
            <div class="formRow c2">
                <label for="hits">조회수</label>
                <input id="hits" name="hits" type="text" maxlength="20" style="width:calc(100% - 174px);  border:none; background: transparent;"
                       data-field="hits" readonly/>
            </div>
            <div class="formRow c1" style="display: flex">
                <label for="annoAttach" style="height: auto">첨부파일</label>
                <div id="annoAttach">
                </div>
            </div>
            <div class="formRow" style="border-bottom: 0">
<%--                <div id="editor1Container" style="height: 100%;">--%>
<%--                    <textarea id="annoCont" name="annoCont" data-field="annoCont" data-required="true"></textarea>--%>
<%--                </div>--%>
                <iframe id="annoContFrame" width="100%" frameborder="0" marginwidth=”0″ marginheight=”0″ scrolling=””>
                </iframe>
<%--                <textarea id="annoCont" name="annoCont" data-field="annoCont"></textarea>--%>
<%--                <div id="annoCont1"--%>
<%--                style="width:calc(100% - 172px); height:calc(100% - 10px); margin-left:3px; margin-top:5px; margin-bottom:5px; resize:none; border:none; background: transparent;"--%>
<%--                ></div>--%>
            </div>
        </form>
    </div>
</div>
</body>

<style type="text/css">

    .tabContent{
        display: none;
        width: 100%;
        height: calc(100% - 10px);
    }
    .tabContent.selected{
        display: block;
    }

    #annoCont1 *{
        font-size: unset;
    }
    #annoAttach{
        display: inline-block;
    }

    .attach-item{
        margin: 5px;
        cursor: pointer;
    }

    .attach-item:hover{
    }

    .attach-item .origFileNm{
        color: #8d8d8d;
        font-size: 12px;
    }
    .attach-item:hover .origFileNm{
        color: #5d5d5d;
    }

    .attach-item .fileSize{
        font-size: 12px;
        color: #8d8d8d;
        margin-left: 5px;
    }

    #pageArea{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 40px;
    }
    .pagination {
        display: flex;
        padding-left: 0;
        list-style: none;
    }
    .page-item:not(:first-child) .page-link {
        margin-left: -1px;
    }
    .page-link {
        padding: 0.375rem 0.75rem;
    }
    .page-link {
        position: relative;
        display: block;
        color: #435067;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #dee2e6;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .page-item.active .page-link {
        z-index: 3;
        color: #fff;
        background-color: #435067;
        border-color: #435067;
    }
    .page-item.disabled .page-link {
        color: #848a90;
        pointer-events: none;
        background-color: #fff;
        border-color: #dee2e6;
    }

</style>
</html>
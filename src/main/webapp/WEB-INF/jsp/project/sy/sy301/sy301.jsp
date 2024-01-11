<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp" %>
    <script type="text/javascript" src="${myContextPath}/js/project/sy/sy301<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
</head>
<body>
<%@include file="/WEB-INF/jsp/frame/common/title.jsp" %>
<form id="searchArea">
    <div class="searchRow">
        <label for="P_CompCd">기관</label>
        <select id="P_CompCd" name="P_CompCd" style="width: 200px;"
                data-options-code="02"
                data-options-param='{"useYn":"Y"}'
                data-total="false"
                data-options-custom="false"
                data-field="compCd"
                data-default='{"01"}'
        ></select>

        <label for="P_userNm">사용자명/ID</label>
        <input id="P_userNm" name="P_userNm" type="text" size="20" maxlength="100" data-field="userNm"/>

        <label for="P_useYn">사용여부</label>
        <select id="P_useYn" name="P_useYn" style="width: 100px;margin-bottom: 5px"
                data-options-code="01"
                data-options-param='{"compCd":"<%=COMP_CD%>", "cdGb":"SY050"}'
                data-total="true"
                data-field="useYn"
                data-default='{"*"}'
        ></select>
    </div>
</form>

<div class="formTitle" style="top:145px;">
    사용자 목록
    <span style="margin-left: 10px;" id="dataCnt"></span>
</div>
<form id="rowButtonArea" class="rowButtonArea" style="position:absolute; width:calc(100% - 850px); top:145px;">
    <button class="normalButtonSmall" name="excelDown" data-target="grid1" data-excel-name="ST301" ><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL</button>
</form>
<div id="grid1" style="position:absolute; top:185px; left:40px; width:calc(100% - 850px); height:calc(100% - 215px);"></div>

<div class="formTitle" style="top:145px;left:calc(100% - 790px);">사용자 상세 정보</div>
<form class="rowButtonArea" style="position:absolute; width:200px; top:145px;left: auto; right: 40px;">
    <button class="normalButtonSmall" name="pwInit" id="pwInit"  >PW초기화</button>
</form>
<form id="postForm" name="postForm" class="formArea" style="top:185px; width: 748px; height: calc(100% - 180px); right: 40px;overflow-y: auto;overflow-x: hidden"  onsubmit="return false;">
    <input id="dupckid" name="dupckid" type="hidden" data-field="dupckid"/>
    <input id="fileid" name="fileid" type="hidden" data-field="fileId"/>
    <div class="formRow c2">
        <label for="userId">사용자ID</label>
        <input id="userId" name="userId" type="text" maxlength="20" style="width:calc(100% - 225px);"
               data-field="userId"
               data-required="true"/>
        <span id="spanmsg1"></span>
    </div>
    <div class="formRow c2">
        <label for="userNm">사용자명</label>
        <input id="userNm" name="userNm" type="text" maxlength="50" style="width: calc(100% - 174px);"
               data-field="userNm"
               data-required="true" />
    </div>

    <div class="formRow c2">
        <label for="beloCompNm">소속</label>
        <input id="beloCompNm" name="beloCompNm" type="text" maxlength="13" style="width: calc(100% - 174px);"
               data-field="beloCompNm"/>
    </div>
    <div class="formRow c2">
        <label for="posiNm">직책</label>
        <input id="posiNm" name="posiNm" type="text" maxlength="13" style="width: calc(100% - 174px);"
               data-field="posiNm"/>
    </div>

    <div class="formRow c2">
        <label for="deptCd">근무조(팀)</label>
        <%--<select id="deptCd" name="deptCd" type="text" maxlength="20" style="width:180px;"
                data-field="deptCd"
                data-required="true"
        >
        </select>--%>

        <select id="deptCd" name="deptCd" type="text" style="width:180px;"
                data-options-code="04"
                data-options-param='{"useYn":"Y"}'
                data-field="deptCd"
                data-required="true"
        ></select>

    </div>
    <div class="formRow c2">
        <label for="userGbCd">권한</label>
        <select id="userGbCd" name="userGbCd" type="text" maxlength="20" style="width:180px;"
                data-options-code="01"
                data-options-param='{"compCd":"<%=COMP_CD%>", "cdGb":"SY020"}'
                data-field="userGbCd"
                data-required="true"
        >
        </select>
    </div>
    <div class="formRow c2">
        <label for="telNo">전화번호</label>
        <input id="telNo" name="telNo" type="text" maxlength="50" style="width: calc(100% - 174px);"
               data-field="telNo"
               data-format="tel"/>
    </div>
    <div class="formRow c2">
        <label for="email">이메일</label>
        <input id="email" name="email" type="text" maxlength="50" style="width: calc(100% - 174px);"
               data-field="email" />
    </div>
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
    <div class="formRow">
        <label>팀장여부</label>
        <input type="radio" id="cheiYn_Y" name="cheiYn" value="Y" data-field="cheiYn" data-default="N" /><label class="radio" for="cheiYn_Y">Y</label>
        <input type="radio" id="cheiYn_N" name="cheiYn" value="N" data-field="cheiYn" data-default="N" /><label class="radio" for="cheiYn_N">N</label>
        <span id="spanmsg2"></span>
    </div>

    <div class="formRow" style="height: calc(50%); ">
    	<label for="bigo" style="display:block; float:left; height:100%; background-position:10px 16px;">비고</label>
        <textarea id="bigo" style="width:calc(100% - 172px); height:calc(100% - 10px); margin-left:3px; margin-top:5px; margin-bottom:5px; resize:none;" data-field="bigo" maxlength="500"></textarea>
    </div>
</form>
</body>
</html>
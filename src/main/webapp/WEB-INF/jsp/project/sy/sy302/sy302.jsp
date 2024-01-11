<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp"%>
    <script type="text/javascript" src="${myContextPath}/js/project/sy/sy302<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
</head>
<body>
<%@include file="/WEB-INF/jsp/frame/common/title.jsp" %>
<form id="searchArea">
    <div class="searchRow">
        <label for="P_CompCd" >기관</label>
        <select id="P_CompCd" name="P_CompCd" style="width: 200px;margin-bottom: 5px"
                data-options-code="02"
                data-options-param='{"useYn":"Y"}'
                data-options-custom="false"
                data-field="compCd"
        ></select>
        <label for="P_deptNm">팀명</label>
        <input id="P_deptNm" name="P_deptNm" type="text" size="20" maxlength="20" data-field="deptNm" data-format="upper"/>

    </div>
</form>

<div class="formTitle" style="top:145px;"> 팀 목록 <span style="margin-left: 10px;" id="dataCnt"></span> </div>

<form id="rowButtonArea" class="rowButtonArea" style="position:absolute; width:calc(100% - 850px); top:145px;">
    <button class="normalButtonSmall" name="excelDown" data-target="grid1" data-excel-name="ST302" ><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL</button>
</form>
<div id="grid1" style="position:absolute; top:180px; left:40px; width:calc(100% - 850px); height:calc(100% - 215px);"></div>


<div class="formTitle" style="top:145px;left:calc(100% - 790px);">팀 상세 정보</div>

<form id="postForm" name="postForm" class="formArea" style="top:180px; width: 748px; height: calc(100% - 378px); right: 40px;"  onsubmit="return false;" >
    <input id="dupckid" name="dupckid"  type="hidden" data-field="dupckid"/>
    <input id="fileid" name="fileid"  type="hidden" data-field="fileId" />
    <input id="userCnt" name="userCnt"  type="hidden" data-field="userCnt" />

    <div class="formRow c2" >
        <label for="compCd" >기관코드</label>
        <select id="compCd" name="compCd" style="width: 150px;"
                data-options-code="02"
                data-field="compCd"
                data-required="true"
        ></select>
    </div>


    <div class="formRow c2">
        <label for="deptCd">팀ID</label>
        <input id="deptCd" name="deptCd" type="text" maxlength="10" style="width:calc(100% - 225px);"
               data-field="deptCd"
               data-required="true"
               data-format="upper"/>
        <span id="spanmsg1"></span>
    </div>
    <div class="formRow c2">
        <label for="deptNm">팀 이름</label>
        <input id="deptNm" name="deptNm" type="text" maxlength="20" style="width:calc(100% - 225px);"
               data-field="deptNm"
               data-required="true"
               data-format="upper"/>
        <span id="spanmsg1"></span>
    </div>

    <div class="formRow c2">
        <label >관제팀여부</label>
        <input type="radio" id="cotrTeamYn_Y" name="cotrTeamYn" value="Y" data-field="cotrTeamYn" data-default="Y" /><label class="radio" for="cotrTeamYn_Y">Y</label>
        <input type="radio" id="cotrTeamYn_N" name="cotrTeamYn" value="N" data-field="cotrTeamYn" data-default="Y" /><label class="radio" for="cotrTeamYn_N">N</label>
    </div>

    <div class="formRow c2">
        <label >경찰팀여부</label>
        <input type="radio" id="poliTeamYn_Y" name="poliTeamYn" value="Y" data-field="poliTeamYn" data-default="Y" /><label class="radio" for="poliTeamYn_Y">Y</label>
        <input type="radio" id="poliTeamYn_N" name="poliTeamYn" value="N" data-field="poliTeamYn" data-default="Y" /><label class="radio" for="poliTeamYn_N">N</label>
    </div>

    <div class="formRow c2">
        <label>사용여부</label>
        <input type="radio" id="useYn_Y" name="useYn" value="Y" data-field="useYn" data-default="Y" /><label class="radio" for="useYn_Y">Y</label>
        <input type="radio" id="useYn_N" name="useYn" value="N" data-field="useYn" data-default="Y" /><label class="radio" for="useYn_N">N</label>
    </div>

    <div class="formRow">
        <label for="sortno">정렬순서</label>
        <input id="sortno" name="sortno" type="text" data-format="number" maxlength="5" style="width: calc(50% - 225px);"
               data-field="sortno" />
    </div>

    <div class="formRow" style="height: calc(100%); ">
    	<label for="bigo" style="display:block; float:left; height:100%; background-position:10px 16px;">비고</label>
        <textarea id="bigo" style="width:calc(100% - 172px); height:calc(100% - 10px); margin-left:3px; margin-top:5px; margin-bottom:5px; resize:none;" data-field="bigo" maxlength="500"></textarea>
    </div>
</form>
</body>

</html>
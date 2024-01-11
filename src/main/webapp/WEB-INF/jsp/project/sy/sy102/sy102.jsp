<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp" %>
    <script type="text/javascript" src="${myContextPath}/js/project/sy/sy102.<spring:message key="js.addext"/>js?ver=<spring:message key="js.version"/>"></script>
    <style>
        .formRow>label {
            min-width:140px;
        }
    </style>
</head>
<body>
<%@include file="/WEB-INF/jsp/frame/common/title.jsp" %>
<form id="searchArea">
    <div class="searchRow">
        <label for="P_CompCd" >기관</label>
        <select id="P_CompCd" name="P_CompCd" style="width: 200px;"
                data-options-code="02"
                data-options-param='{"useYn":"Y"}'
                data-total="true"
                data-options-custom="false"
                data-field="compCd"
                data-default='{"*"}'   
        ></select>
        <label for="P_stdInfo">기준코드/명</label>
        <input id="P_stdInfo" name="P_stdInfo" type="text" size="20" maxlength="20" data-field="stdInfo" data-format="upper"/>
    </div>
</form>

<div class="formTitle" style="top:145px;">시스템설정정보</div>
<form class="rowButtonArea" style="position:absolute; left:25px; width:calc(100% - 65px); top:145px;">
    <button class="rowButton" name="addRow"  data-target="grid1"><img src="${myContextPath}/img/mngr/ic_pl.png" />행추가</button>
    <button class="normalButtonSmall" name="excelDown" data-target="grid1" data-excel-name="BSY102" ><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL</button>
</form>
<div id="grid1" style="position:absolute; top:185px; left:40px; width:calc(100% - 80px); height:calc(100% - 215px);"></div>

</body>
<iframe id="fileIframe" name="fileIframe" style="position: absolute; left:-50px; width:0;"></iframe>
</html>
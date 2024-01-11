<%@ page import="com.sjinc.bss.framework.FrameDateUtil" %>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/jsp/frame/common/programHeader.jsp" %>

<!DOCTYPE html>
<html>
<head>
    <%@include file="/WEB-INF/jsp/frame/common/programInclude.jsp" %>
    <script type="text/javascript" src="${myContextPath}/js/project/sy/sy998<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
    <style>
        #category {
            width: 120px;
        }

        #grid1 {
            position: absolute;
            top: 180px;
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
        <label for="category"  ></label>
        <select id="category" onchange="changeCategory(this);">
            <option value="1">컴포넌트</option>
            <option value="2">그리드</option>
        </select>
    </div>
</form>

<form id="componentContainer" name="componentContainer" class="formArea" style="top:185px; width: 748px; height: calc(100% - 347px); left: 40px;"  onsubmit="return false;">
    <div class="formRow ">
        <label for="text1">text </label>
        <input id="text1" name="text1" type="text" maxlength="20" style="width:calc(100% - 555px);"
               data-field="text1"
               data-required="true"
               data-format="upper"/>

        <input id="text2" name="text2" type="text" maxlength="20" style="width:calc(100% - 555px);" readonly
               data-field="text2"
               data-required="true"
               data-format="upper"/>
    </div>
    <div class="formRow ">
        <label>radio</label>
        <input type="radio" id="useYn_Y" name="useYn" value="Y" data-field="useYn" data-default="Y" /><label class="radio" for="useYn_Y">Y</label>
        <input type="radio" id="useYn_N" name="useYn" value="N" data-field="useYn" data-default="Y" /><label class="radio" for="useYn_N">N</label>
    </div>
    <div class="formRow ">
        <label>checkbox</label>
        <input type="checkbox" id="checkbox" value="Y" data-field="saveID" />
        <label for="checkbox" style="margin-left: -8px"></label>

        <input type="checkbox" id="checkbox-readonly" value="Y" data-field="saveID" disabled/>
        <label for="checkbox-readonly" style="margin-left: -8px"></label>
    </div>
    <div class="formRow">
        <label for="textarea" style="display:block; float:left; height:100%; background-position:10px 16px;">textarea</label>
        <textarea id="textarea" style="width:calc(100% - 172px); height:calc(100% - 10px); margin-left:3px; margin-top:5px; margin-bottom:5px; resize:none;" data-field="bigo" maxlength="500"></textarea>
    </div>
    <div class="formRow">
        <label for="P_CompCd" >select</label>
        <select id="P_CompCd" name="P_CompCd" style="width: 200px;"
                data-options-code="02"
                data-options-param='{"useYn":"Y"}'
                data-total="false"
                data-options-custom="false"
                data-field="compCd"
                data-default='{"01"}'
        ></select>
    </div>
    <div class="formRow">
        <label >multiSelect</label>
        <select id="sumoSelectId" name="sumoSelectName" multiple="multiple" class="sumoselect_multiple" style="width: 150px;">
            <option value="">선택</option>
            <option value="">첫 번째</option>
            <option value="">두 번째</option>
            <option value="">세 번째</option>
            <option value="">네 번째</option>
            <option value="">다섯 번째</option>
        </select>
    </div>
    <div class="formRow">
        <label  >Button</label>
        <button class="rowButton"><img src="${myContextPath}/img/mngr/ic_pl.png" />추가</button>
        <button class="rowButton"><img src="${myContextPath}/img/mngr/ic_mi.png" />삭제</button>
        <button class="normalButtonSmall"  ><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>Excel</button>
    </div>
    <div class="formRow">
        <label >datePicker</label>
        <input id="P_regDd1" type="text" style="width:100px;" data-field="regDd1" data-format="date"
               data-default="<%=FrameDateUtil.getDate(-365,"yyyyMMdd")%>" data-required="true"  /> ~
        <input id="P_regDd2" type="text" style="width:100px;" data-field="regDd2" data-format="date"
               data-default="<%=FrameDateUtil.getDate(0,"yyyyMMdd")%>" data-required="true" />
    </div>
    <div class="formRow">
        <label >codeHelp</label>
        <input type="text" id="codeHelp" name="codeHelp" type="text" maxlength="20" style="width:100px;"
               data-type="user"
               data-code="01"
               data-param='{ "compCd" : "<%=COMP_CD%>" , "cdGb": "SY040" }'
               data-field="codeHelpField1"
               data-required="true"
        />
        <input type="text" data-field="codeHelpField2" data-code-obj="codeHelp" data-required="true" style="width:200px;" readonly/>
    </div>

</form>

<div id="gridContainer">
    <form id="rowButtonArea2" class="rowButtonArea" style="position:absolute;text-align:left ; top:145px;">
        <button class="rowButton" name="addRow" data-target="grid1"><img src="${myContextPath}/img/mngr/ic_pl.png" />행추가</button>
        <button class="rowButton" name="removeRow" data-target="grid1"><img src="${myContextPath}/img/mngr/ic_mi.png" />행삭제</button>
        <button class="normalButtonSmall" name="excelDown" data-target="grid1" data-excel-name="SY998"><img src="${myContextPath}/img/mngr/ic_ex.png" style="margin-bottom: -3px; padding-right: 5px;"/>EXCEL</button>

        <button class="rowButton" name="focus" id="setReadonly">Set CodeHelp Readonly</button>
        <button class="rowButton" name="focus" id="textUpdate">Text Update Value</button>
        <button class="rowButton" name="focus" id="focus">Text Focus</button>
        <button class="rowButton" name="focus" id="gridData">Get GridData</button>
        <button class="rowButton" name="focus" id="selectedData">Get SelectedData</button>
    </form>
    <div id="grid1"></div>
</div>
</body>
<iframe id="fileIframe" name="fileIframe" style="position: absolute; left:-50px; width:0;"></iframe>
</html>
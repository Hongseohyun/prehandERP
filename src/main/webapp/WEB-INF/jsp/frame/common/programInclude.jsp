<%@page language="java" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="myContextPath" value="${pageContext.request.contextPath}"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
<meta http-equiv="Cache-Control" content="no-cache"/>
<meta http-equiv="Expires" content="0"/>
<meta http-equiv="Pragma" content="no-cache"/>

<link rel="stylesheet" type="text/css" href="${myContextPath}/css/frame/base/base.css?ver=<spring:message key="css.version"/>" charset="utf-8">
<link rel="stylesheet" type="text/css" href="${myContextPath}/css/frame/base/program.css?ver=<spring:message key="css.version"/>" charset="utf-8">

<link rel="stylesheet" type="text/css" href="${myContextPath}/js/lib/webix/webix.css?ver=<spring:message key="css.version"/>" charset="utf-8">
<link rel="stylesheet" type="text/css" href="${myContextPath}/js/lib/sumoselect/sumoselect.css?ver=<spring:message key="css.version"/>" charset="utf-8" />
<link rel="stylesheet" type="text/css" href="${myContextPath}/js/lib/jquery-ui/jquery-ui.css?ver=<spring:message key="css.version"/>" charset="utf-8" />
<link rel="stylesheet" type="text/css" href="${myContextPath}/js/lib/jquery-ui/month/css/MonthPicker.css?ver=<spring:message key="css.version"/>" charset="utf-8" />

<link rel="stylesheet" type="text/css" href="${myContextPath}/css/frame/lib/webix.custom.css?ver=<spring:message key="css.version"/>" charset="utf-8" />
<link rel="stylesheet" type="text/css" href="${myContextPath}/css/frame/lib/smart_editor.custom.css?ver=<spring:message key="css.version"/>" charset="utf-8" />

<link rel="stylesheet" type="text/css" href="${myContextPath}/css/frame/common/userPopup.css?ver=<spring:message key="css.version"/>">
<link rel="stylesheet" type="text/css" href="${myContextPath}/css/frame/common/attachFilePopup.css?ver=<spring:message key="css.version"/>">
<link rel="stylesheet" type="text/css" href="${myContextPath}/css/frame/common/popup.css?ver=<spring:message key="css.version"/>">
<link rel="stylesheet" type="text/css" href="${myContextPath}/css/frame/common/customPopup.css?ver=<spring:message key="css.version"/>">
<link rel="stylesheet" type="text/css" href="${myContextPath}/css/frame/common/filePopup.css?ver=<spring:message key="css.version"/>">

<%--LIBRARY & COMMON--%>
<script type="text/javascript" src="${myContextPath}/js/lib/jquery/jquery-3.2.1.js?ver=<spring:message key="js.version"/>" charset="utf-8" ></script>
<script type="text/javascript" src="${myContextPath}/js/lib/webix/webix_debug.js?ver=<spring:message key="js.version"/>" charset="utf-8" ></script>
<script type="text/javascript" src="${myContextPath}/js/lib/sumoselect/jquery.sumoselect.js?ver=<spring:message key="js.version"/>" charset="utf-8" ></script>
<script type="text/javascript" src="${myContextPath}/js/lib/jquery/jquery.maskedinput.js?ver=<spring:message key="js.version"/>" charset="utf-8" ></script>
<script type="text/javascript" src="${myContextPath}/js/lib/jquery-ui/jquery-ui.js?ver=<spring:message key="js.version"/>" charset="utf-8" ></script>
<script type="text/javascript" src="${myContextPath}/js/lib/jquery-ui/month/MonthPicker.js?ver=<spring:message key="js.version"/>" charset="utf-8"></script>

<script type="text/javascript" src="${myContextPath}/js/frame/lib/hangul-postposition<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>" charset="utf-8" ></script>
<script type="text/javascript" src="${myContextPath}/js/frame/lib/JQueryRC4<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>

<script type="text/javascript" src="${myContextPath}/js/frame/common/common<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
<script type="text/javascript" src="${myContextPath}/js/frame/common/platformUtil<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>

<%--CUSTOM--%>
<script type="text/javascript" src="${myContextPath}/js/frame/common/MonthPicker.custom<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>
<script type="text/javascript" src="${myContextPath}/js/frame/common/webix.custom<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>

<%--INIT SCRIPT--%>
<script type="text/javascript" src="${myContextPath}/js/frame/common/initialize<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>

<%@include file="/WEB-INF/jsp/frame/common/sessionCheck.jsp" %>
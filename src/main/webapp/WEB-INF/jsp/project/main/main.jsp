<%@ page import="com.sjinc.bss.framework.FrameStringUtil" %>
<%@ page import="com.sjinc.bss.project.commonmodule.menuprogram.MenuPgmVo" %>
<%@ taglib prefix="spring" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<c:set var="myContextPath" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
<head http-equiv="Cache-control" content="no-cache">
    <title>${systemName}</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <link rel="shortcut icon" href="${myContextPath}/img/project/favi/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="${myContextPath}/img/project/favi/favicon.ico" type="image/x-icon" />

    <%@include file="/WEB-INF/jsp/frame/common/programIncludeSp.jsp" %>
    <%@include file="/WEB-INF/jsp/frame/common/sessionCheck.jsp" %>

    <link rel="stylesheet" type="text/css" href="${myContextPath}/css/project/main/main.css?ver=<spring:message key="css.version"/>">
    <script type="text/javascript" src="${myContextPath}/js/project/main/main<spring:message key="js.addext"/>.js?ver=<spring:message key="js.version"/>"></script>

</head>
<body style="overscroll-behavior: contain;">

<div id="topArea">
    <%--<div class="topDivL" style="cursor : pointer;line-height: 50px">
        <span style="font-size: 26px; font-weight: bold;cursor: pointer" onclick="window.location.reload();">CCMS v1.0</span>
    </div>--%>
    <div class="topDivL" style="cursor : pointer;display: flex;align-items: center" onclick="window.location.reload();">
        <img alt="로고" src="${myContextPath}/img/project/logo/img-head-logo.png" class="logoImg" />
        <!--<div style="font-size: 20px;font-weight: bold;letter-spacing: -0.1px;padding-left: 10px;">세정 업무지원시스템</div>-->
    </div>
    <div class="topDivR">
        <div class="LogOutImg btn">
            <div class="icoLogout"></div>로그아웃
        </div>
    </div>

    <div class="topDivR">
        <div id="userInfo" class="btn">
            <div class="icoUser"></div>내정보
        </div>
    </div>
    <div class="topDivR">
        <span class="clsUserNm">[<%=FrameStringUtil.isNullDefaultValue(USER_NM, "Guest") %>]</span><span class="clsUserTxt">님이 로그인 하였습니다.</span>
    </div>
</div>
<div id="contentArea">
    <div id="menuArea">
	<span>
		<form id="subMenuArea" name="subMenuArea" onsubmit="return false;" target="programFrame" method="post">
			<input type="hidden" id="programId" name="programId" />
			<input type="hidden" id="programName" name="programName" />
			<input type="hidden" id="programPathName" name="programPathName" />
			<input type="hidden" id="bizGb" name="bizGb" />
            <input type="hidden" id="openParm" name="openParm">

			<ul class="sidebar-top-level-items">
                <li style="display: none">
                    <div class="clsTopSubMenu">
                        <span class="clsTopSubMenuImg">
                            <img id="menuIco" style="cursor: pointer; position:relative;" alt="메뉴" src="${myContextPath}/img/project/main/ico_list.png"/>
                        </span>
                        <span class="clsTopSubMenuTxt" style="position: relative; top: 6px; display: inline;">메뉴</span>
                    </div>
                </li>

                <c:forEach var="menuVo" items="${MENU_LIST}" varStatus="status">
                    <li class="sidebar-top-level-item" >
                        <a class="sidebar-top-level-item-header">
                            <div class="menuIco">
                                <c:choose>
                                    <c:when test="${not empty menuVo.menuImg}">
                                        <img class="menu-image" src="${menuVo.menuImg}"
                                             data-img="${menuVo.menuImg}"
                                             data-img-ov="${menuVo.menuImgOv}"
                                             onerror="this.src='/img/project/menuicon/ico-menu-00.png';"/>
                                    </c:when>
                                    <c:otherwise>
                                        <img class="menu-image" src="/img/project/menuicon/ico-menu-00.png"
                                             data-img="/img/project/menuicon/ico-menu-00.png"
                                             data-img-ov="/img/project/menuicon/ico-menu-00-ov.png"
                                             onerror="this.src='/img/project/menuicon/ico-menu-00.png';">
                                    </c:otherwise>
                                </c:choose>
                            </div>
                            <%--<img alt="메뉴" title="${menuVo.menuNm}" class = "menuIco" style="display:flex" src="${myContextPath}${menuVo.menuImg}"/>--%>
                            <span class="nav-item-name" ><c:out value="${menuVo.menuNm}"/></span>
                            <span class="nav-item-arr" ></span>
                        </a>

                        <ul class="sidebar-sub-level-items">
                            <c:forEach var="pgmVo" items="${menuVo.pgmDtoArrayList}" varStatus="status2">
                                <c:if test="${status.index eq 0 and status2.index eq 0}">
                                    <span style="display: none" id="firstPgmId">${pgmVo.pgmId}</span>
                                </c:if>
                            <li class="btnProgram"
                                title="${pgmVo.pgmNm}"
                                data-program-id="${pgmVo.pgmId}"
                                data-program-name="${pgmVo.pgmNm}"
                                data-program-path="${pgmVo.pgmPath}"
                                data-program-path-name="${pgmVo.depthFullName}"
                                data-program-rmrk="${pgmVo.bigo}"
                            >${pgmVo.pgmNm}</li>
                            </c:forEach>
                        </ul>
                    </li>
                </c:forEach>

                <a class="toggle-sidebar-button js-toggle-sidebar" type="button">
                    <!--<span class="collapse-text">&lt;&lt;</span>-->
                    <span class="collapse-btn"></span>
                </a>
            </ul>

		</form>
	</span>
        <span style="display: none">
		<span></span>
		<span id="menuOpen">&lt;</span>
		<span></span>
	</span>

</div>
    <div id="tabAndPgmArea">
        <div style="display: flex; flex-direction: row; width: 100%;">
            <button id="btnMoveLeft"><img src="/img/project/main/ico-btn-left.png"></button><!-- 탭 영역 오른쪽 이동-->
            <div id="tabContainer">
                <div id="tabBtnArea">
                    <div id="closeAllTab" class="close-tab">전체 닫기</div>
                </div>
            </div>
            <button id="btnMoveRight"><img src="/img/project/main/ico-btn-right.png"></button><!-- 탭 영역 왼쪽 이동-->
        </div>
        <div id="programArea">
            <iframe id="programFrame" name="programFrame" src="" frameborder="0" scrolling="no" style="display: none"></iframe>
        </div>
    </div>
</div>

<div id="messageArea"></div>

<template id="messageBoxTemplate">
    <div class="messageHeader">
        <div class="messageTitle">{title}</div>
        <div class="messageClose" onclick="removeBox(this);"> X </div>
    </div>
    <div class="messageBody">
        <div class="messageContent">{content}</div>
        <div class="messageBtnMove" onclick="btnMessageMoveClick(this);"> [ 이동 ] </div>
    </div>
</template>

<!--<div id="footerArea">
    <div class="fLeftArea"></div>
    <div class="fCenterArea"><span>Copyright@2023 SEJUNG I&C. All Rights Reserverd.</span></div>
    <div class="fRightArea"></div>
</div>-->

<%@include file="/WEB-INF/jsp/frame/common/userPopup.jsp" %>
<%@include file="/WEB-INF/jsp/frame/common/attachFilePopup.jsp" %>
<%@include file="/WEB-INF/jsp/frame/common/popup.jsp" %>
<%@include file="/WEB-INF/jsp/frame/common/customPopup.jsp" %>
<%@include file="/WEB-INF/jsp/frame/common/filePopup.jsp" %>
</body>
</html>
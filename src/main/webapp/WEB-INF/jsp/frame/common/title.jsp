<%@ page import="java.util.ArrayList" %>
<%@ page import="com.sjinc.bss.framework.FrameStringUtil" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/functions" prefix = "fn" %>
<%@page language="java" pageEncoding="utf-8"%>

<div id="titleArea" style="width:calc(100% - 80px); height:80px; margin-left: 40px;">
	<div id="naviArea" style="float: left; width: 30%; line-height: 80px; text-overflow:
	ellipsis; overflow: hidden; white-space: nowrap;" title="${PTITLE.parentMenuNm}${PTITLE.pgmNm}">
		<span style="color:#292929; font-size:18px;font-weight: 500;">
			<c:if test="${not empty PTITLE.parentMenuNm }">
				${PTITLE.parentMenuNm} >
			</c:if>
		</span>
		<font style="color:#000; font-size:18px; font-weight:bold;">${PTITLE.pgmNm}</font>
		<c:if test="${not empty PTITLE.pgmId }">
			[${PTITLE.pgmId}]
		</c:if>
	</div>

	<div class="buttonArea" style="float: left; width: 70%; line-height: 80px; text-align: right;">
		<c:forEach var="pgmVo" items="${PTITLE.pgmBtnAuthList}">
			<c:choose>
				<c:when test="${pgmVo.btnGb eq 'INIT'}">
					<button onclick="(top.btnMenu)?top.btnMenu(this):opener.top.btnMenu(this);" id="init">${FrameStringUtil.isNullDefaultValue(pgmVo.btnNm,'초기화') } (F12)</button>
				</c:when>
				<c:when test="${pgmVo.btnGb eq 'NEWS'}">
					<button onclick="(top.btnMenu)?top.btnMenu(this):opener.top.btnMenu(this);" id="news">${FrameStringUtil.isNullDefaultValue(pgmVo.btnNm,'신규') } (F2)</button>
				</c:when>
				<c:when test="${pgmVo.btnGb eq 'SEARCH'}">
					<button onclick="(top.btnMenu)?top.btnMenu(this):opener.top.btnMenu(this);" id="search">${FrameStringUtil.isNullDefaultValue(pgmVo.btnNm,'조회') } (F3)</button>
				</c:when>
				<c:when test="${pgmVo.btnGb eq 'SAVE'}">
					<button onclick="(top.btnMenu)?top.btnMenu(this):opener.top.btnMenu(this);" id="save">${FrameStringUtil.isNullDefaultValue(pgmVo.btnNm,'저장') } (F9)</button>
				</c:when>
				<c:when test="${pgmVo.btnGb eq 'DEL'}">
					<button onclick="(top.btnMenu)?top.btnMenu(this):opener.top.btnMenu(this);" id="del">${FrameStringUtil.isNullDefaultValue(pgmVo.btnNm,'삭제') } (F5)</button>
				</c:when>
				<c:when test="${pgmVo.btnGb eq 'EDIT'}">
					<button onclick="(top.btnMenu)?top.btnMenu(this):opener.top.btnMenu(this);" id="edit">${FrameStringUtil.isNullDefaultValue(pgmVo.btnNm,'수정') }</button>
				</c:when>
				<c:when test="${pgmVo.btnGb eq 'CLOSE'}">
					<button onclick="(top.btnMenu)?top.btnMenu(this):opener.top.btnMenu(this);" id="close">${FrameStringUtil.isNullDefaultValue(pgmVo.btnNm,'닫기') }</button>
				</c:when>
				<c:when test="${pgmVo.btnGb eq 'PRINT'}">
					<button onclick="(top.btnMenu)?top.btnMenu(this):opener.top.btnMenu(this);" id="print">${FrameStringUtil.isNullDefaultValue(pgmVo.btnNm,'출력') }</button>
				</c:when>

				<c:when test="${fn:startsWith(pgmVo.btnGb, 'ETC')}">
					<c:set var="etcSeq" value="${fn:substring(pgmVo.btnGb, 3, fn:length(pgmVo.btnGb))}" />
					<button onclick="(top.btnMenu)?top.btnMenu(this):opener.top.btnMenu(this);" id="etc${etcSeq}">${FrameStringUtil.isNullDefaultValue(pgmVo.btnNm,'기타'+=etcSeq) }</button>
				</c:when>
			</c:choose>
		</c:forEach>
	</div>
</div>
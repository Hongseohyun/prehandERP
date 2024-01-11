<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%
/**
 * @화면명: 주소검색 결과페이지
 * @작성자: 박재성
 * @작성일: 2022-09-27
 */
%>
<%
request.setCharacterEncoding("utf-8");
String zonecode = nullCheck(request.getParameter("zonecode"));
String postcode = nullCheck(request.getParameter("postcode"));
String postcode1 = nullCheck(request.getParameter("postcode1"));
String postcode2 = nullCheck(request.getParameter("postcode2"));
String address = nullCheck(request.getParameter("address"));
String addressEnglish = nullCheck(request.getParameter("addressEnglish"));
String address1 = nullCheck(request.getParameter("address1"));
String address2 = nullCheck(request.getParameter("address2"));
String relatedAddress = nullCheck(request.getParameter("relatedAddress"));
String addressType = nullCheck(request.getParameter("addressType"));
String userSelectedType = nullCheck(request.getParameter("userSelectedType"));
String userLanguageType = nullCheck(request.getParameter("userLanguageType"));
String roadAddress = nullCheck(request.getParameter("roadAddress"));
String roadAddressEnglish = nullCheck(request.getParameter("roadAddressEnglish"));
String jibunAddress = nullCheck(request.getParameter("jibunAddress"));
String jibunAddressEnglish = nullCheck(request.getParameter("jibunAddressEnglish"));
String autoRoadAddress = nullCheck(request.getParameter("autoRoadAddress"));
String autoRoadAddressEnglish = nullCheck(request.getParameter("autoRoadAddressEnglish"));
String autoJibunAddress = nullCheck(request.getParameter("autoJibunAddress"));
String autoJibunAddressEnglish = nullCheck(request.getParameter("autoJibunAddressEnglish"));
String buildingCode = nullCheck(request.getParameter("buildingCode"));
String buildingName = nullCheck(request.getParameter("buildingName"));
String apartment = nullCheck(request.getParameter("apartment"));
String sido = nullCheck(request.getParameter("sido"));
String sigungu = nullCheck(request.getParameter("sigungu"));
String sigunguCode = nullCheck(request.getParameter("sigunguCode"));
String roadnameCode = nullCheck(request.getParameter("roadnameCode"));
String bcode = nullCheck(request.getParameter("bcode"));
String roadname = nullCheck(request.getParameter("roadname"));
String bname = nullCheck(request.getParameter("bname"));
String bname1 = nullCheck(request.getParameter("bname1"));
String bname2 = nullCheck(request.getParameter("bname2"));
String hname = nullCheck(request.getParameter("hname"));
String query = nullCheck(request.getParameter("query"));
String postcodeSeq = nullCheck(request.getParameter("postcodeSeq"));
%>
<%!
private String nullCheck(String param) {
	return param==null?"":param;
}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>:: 주소검색 ::</title>
</head>
<body>
<form style="display:none">
<input type="text" id="zonecode" name="zonecode" value="<%=zonecode%>">
<input type="text" id="address" name="address" value="<%=address%>">
<input type="text" id="zonecode" name="zonecode" value="<%=zonecode%>">
<input type="text" id="postcode" name="postcode" value="<%=postcode%>">
<input type="text" id="postcode1" name="postcode1" value="<%=postcode1%>">
<input type="text" id="postcode2" name="postcode2" value="<%=postcode2%>">
<input type="text" id="address" name="address" value="<%=address%>">
<input type="text" id="addressEnglish" name="addressEnglish" value="<%=addressEnglish%>">
<input type="text" id="address1" name="address1" value="<%=address1%>">
<input type="text" id="address2" name="address2" value="<%=address2%>">
<input type="text" id="relatedAddress" name="relatedAddress" value="<%=relatedAddress%>">
<input type="text" id="addressType" name="addressType" value="<%=addressType%>">
<input type="text" id="userSelectedType" name="userSelectedType" value="<%=userSelectedType%>">
<input type="text" id="userLanguageType" name="userLanguageType" value="<%=userLanguageType%>">
<input type="text" id="roadAddress" name="roadAddress" value="<%=roadAddress%>">
<input type="text" id="roadAddressEnglish" name="roadAddressEnglish" value="<%=roadAddressEnglish%>">
<input type="text" id="jibunAddress" name="jibunAddress" value="<%=jibunAddress%>">
<input type="text" id="jibunAddressEnglish" name="jibunAddressEnglish" value="<%=jibunAddressEnglish%>">
<input type="text" id="autoRoadAddress" name="autoRoadAddress" value="<%=autoRoadAddress%>">
<input type="text" id="autoRoadAddressEnglish" name="autoRoadAddressEnglish" value="<%=autoRoadAddressEnglish%>">
<input type="text" id="autoJibunAddress" name="autoJibunAddress" value="<%=autoJibunAddress%>">
<input type="text" id="autoJibunAddressEnglish" name="autoJibunAddressEnglish" value="<%=autoJibunAddressEnglish%>">
<input type="text" id="buildingCode" name="buildingCode" value="<%=buildingCode%>">
<input type="text" id="buildingName" name="buildingName" value="<%=buildingName%>">
<input type="text" id="apartment" name="apartment" value="<%=apartment%>">
<input type="text" id="sido" name="sido" value="<%=sido%>">
<input type="text" id="sigungu" name="sigungu" value="<%=sigungu%>">
<input type="text" id="sigunguCode" name="sigunguCode" value="<%=sigunguCode%>">
<input type="text" id="roadnameCode" name="roadnameCode" value="<%=roadnameCode%>">
<input type="text" id="bcode" name="bcode" value="<%=bcode%>">
<input type="text" id="roadname" name="roadname" value="<%=roadname%>">
<input type="text" id="bname" name="bname" value="<%=bname%>">
<input type="text" id="bname1" name="bname1" value="<%=bname1%>">
<input type="text" id="bname2" name="bname2" value="<%=bname2%>">
<input type="text" id="hname" name="hname" value="<%=hname%>">
<input type="text" id="query" name="query" value="<%=query%>">
<input type="text" id="postcodeSeq" value="<%=postcodeSeq%>">
</form>
</body>
</html>
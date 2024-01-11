<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%
/**
 * @화면명: 주소검색
 * @작성자: 박재성
 * @작성일: 2022-09-27
 */
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>:: 주소검색 ::</title>
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<link rel="stylesheet" type="text/css" media="screen" href="guide.v2.min.css" />
<style type="text/css">
    body { width:420px;height:490px;margin-left:10px;overflow:hidden }
</style>
<script type="text/javascript">
    var element_wrap;

    var themeObj = {
       //bgColor: "", //바탕 배경색
       //searchBgColor: "", //검색창 배경색
       //contentBgColor: "", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
       //pageBgColor: "", //페이지 배경색
       //textColor: "", //기본 글자색
       //queryTextColor: "", //검색창 글자색
       //postcodeTextColor: "", //우편번호 글자색
       //emphTextColor: "", //강조 글자색
       //outlineColor: "" //테두리
    };

    function execDaumPostcode() {
        new daum.Postcode({
            theme: themeObj,
            oncomplete: function(data) {
                // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullAddr = data.address; // 최종 주소 변수
                var extraAddr = ''; // 조합형 주소 변수

                // 기본 주소가 도로명 타입일때 조합한다.
                if(data.addressType === 'R'){
                    //법정동명이 있을 경우 추가한다.
                    if(data.bname !== ''){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있을 경우 추가한다.
                    if(data.buildingName !== ''){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById("zonecode").value = data.zonecode; //2015년 8월 1일부터 시행되고 있는 새우편번호
                document.getElementById("postcode").value = data.postcode; //2015년 8월 1일 이후에는 업데이트가 되지 않습니다.
                document.getElementById("postcode1").value = data.postcode1; //2015년 8월 1일 이후에는 업데이트가 되지 않습니다.
                document.getElementById("postcode2").value = data.postcode2; //2015년 8월 1일 이후에는 업데이트가 되지 않습니다.
                document.getElementById("address").value = fullAddr; //도로명 주소인 경우 매핑된 지번 주소와 건물명은 address 값에 포함되지 않습니다.
                document.getElementById("addressEnglish").value = data.addressEnglish; //동일 제공
                document.getElementById("address1").value = data.address1; //제공 안함
                document.getElementById("address2").value = data.address2; //제공 안함
                document.getElementById("relatedAddress").value = data.relatedAddress; //제공 안함
                document.getElementById("addressType").value = data.addressType; //address에 들어간 주소 타입을 의미합니다. 기존에는 지번주소를 'N'으로 표기하였으나, 변수명과의 연관 관계를 이해하기 쉽도록 'J'로 변경하였습니다.
                document.getElementById("userSelectedType").value = data.userSelectedType; //검색 결과에서 사용자가 선택한 주소의 타입
                document.getElementById("userLanguageType").value = data.userLanguageType; //영문주소/한글주소 선택 유무
                document.getElementById("roadAddress").value = data.roadAddress; //도로명 주소
                document.getElementById("roadAddressEnglish").value = data.roadAddressEnglish; //영문 도로명 주소
                document.getElementById("jibunAddress").value = data.jibunAddress; //지번 주소
                document.getElementById("jibunAddressEnglish").value = data.jibunAddressEnglish; //영문 지번 주소
                document.getElementById("autoRoadAddress").value = data.autoRoadAddress; //매핑된 도로명 주소가 여러개인 경우, 사용자가 '선택안함'을 클릭했을 때 임의로 첫번째 매핑 주소를 넣어서 반환합니다. (autoMapping을 false로 설정한 경우에는 값이 채워지지 않습니다.)
                document.getElementById("autoRoadAddressEnglish").value = data.autoRoadAddressEnglish; //autoRoadAddress의 영문 도로명 주소
                document.getElementById("autoJibunAddress").value = data.autoJibunAddress; //매핑된 지번 주소가 여러개인 경우, 사용자가 '선택안함'을 클릭했을 때 임의로 첫번째 매핑 주소를 넣어서 반환합니다. (autoMapping을 false로 설정한 경우에는 값이 채워지지 않습니다.)
                document.getElementById("autoJibunAddressEnglish").value = data.autoJibunAddressEnglish; //autoJibunAddress의 영문 지번 주소
                document.getElementById("buildingCode").value = data.buildingCode; //건물관리번호
                document.getElementById("buildingName").value = data.buildingName; //건물명
                document.getElementById("apartment").value = data.apartment; //공동주택 여부(Y/N)
                document.getElementById("sido").value = data.sido; //도/시 이름
                document.getElementById("sigungu").value = data.sigungu; //시/군/구 이름
                document.getElementById("sigunguCode").value = data.sigunguCode; //시/군/구 코드
                document.getElementById("roadnameCode").value = data.roadnameCode; //도로명 코드
                document.getElementById("bcode").value = data.bcode; //법정동/법정리 코드
                document.getElementById("roadname").value = data.roadname; //도로명
                document.getElementById("bname").value = data.bname; //법정동/법정리 이름
                document.getElementById("bname1").value = data.bname1; //법정리 일때 "읍"/"면" 정보
                document.getElementById("bname2").value = data.bname2; //법정동/법정리 이름
                document.getElementById("hname").value = data.hname; //행정동 이름
                document.getElementById("query").value = data.query; //사용자가 입력한 검색어
                document.getElementById("postcodeSeq").value = data.postcodeSeq; //2015년 8월 1일 이후에는 업데이트가 되지 않습니다.

                // iframe을 넣은 element를 안보이게 한다.
                // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                element_wrap.style.display = 'none';

                // 결과값을 다른 페이지로 넘긴다
                document.resultform.submit();
            },
            width : '100%',
            height : '480'
        }).embed(element_wrap);

        // iframe을 넣은 element를 보이게 한다.
        element_wrap.style.display = 'block';
    }

    function bodyload() {
        // 우편번호 찾기 찾기 화면을 넣을 element
        element_wrap = document.getElementById('wrap');
        execDaumPostcode();
    }
</script>
</head>
<body style="border:none;margin-top:5px" onload="bodyload()">
<div id="wrap" style="display:none;border:#A0A0A0 1px solid;width:405px;height:480px;margin:5px 0;position:relative"></div>
<form name="resultform" style="display:none" method="post" action="postcodeResult">
<input type="text" id="zonecode" name="zonecode" class="d_form large" placeholder="zonecode">
<input type="text" id="postcode" name="postcode" class="d_form large" placeholder="postcode">
<input type="text" id="postcode1" name="postcode1" class="d_form large" placeholder="postcode1">
<input type="text" id="postcode2" name="postcode2" class="d_form large" placeholder="postcode2">
<input type="text" id="address" name="address" class="d_form large" placeholder="address">
<input type="text" id="addressEnglish" name="addressEnglish" class="d_form large" placeholder="addressEnglish">
<input type="text" id="address1" name="address1" class="d_form large" placeholder="address1">
<input type="text" id="address2" name="address2" class="d_form large" placeholder="address2">
<input type="text" id="relatedAddress" name="relatedAddress" class="d_form large" placeholder="relatedAddress">
<input type="text" id="addressType" name="addressType" class="d_form large" placeholder="addressType">
<input type="text" id="userSelectedType" name="userSelectedType" class="d_form large" placeholder="userSelectedType">
<input type="text" id="userLanguageType" name="userLanguageType" class="d_form large" placeholder="userLanguageType">
<input type="text" id="roadAddress" name="roadAddress" class="d_form large" placeholder="roadAddress">
<input type="text" id="roadAddressEnglish" name="roadAddressEnglish" class="d_form large" placeholder="roadAddressEnglish">
<input type="text" id="jibunAddress" name="jibunAddress" class="d_form large" placeholder="jibunAddress">
<input type="text" id="jibunAddressEnglish" name="jibunAddressEnglish" class="d_form large" placeholder="jibunAddressEnglish">
<input type="text" id="autoRoadAddress" name="autoRoadAddress" class="d_form large" placeholder="autoRoadAddress">
<input type="text" id="autoRoadAddressEnglish" name="autoRoadAddressEnglish" class="d_form large" placeholder="autoRoadAddressEnglish">
<input type="text" id="autoJibunAddress" name="autoJibunAddress" class="d_form large" placeholder="autoJibunAddress">
<input type="text" id="autoJibunAddressEnglish" name="autoJibunAddressEnglish" class="d_form large" placeholder="autoJibunAddressEnglish">
<input type="text" id="buildingCode" name="buildingCode" class="d_form large" placeholder="buildingCode">
<input type="text" id="buildingName" name="buildingName" class="d_form large" placeholder="buildingName">
<input type="text" id="apartment" name="apartment" class="d_form large" placeholder="apartment">
<input type="text" id="sido" name="sido" class="d_form large" placeholder="sido">
<input type="text" id="sigungu" name="sigungu" class="d_form large" placeholder="sigungu">
<input type="text" id="sigunguCode" name="sigunguCode" class="d_form large" placeholder="sigunguCode">
<input type="text" id="roadnameCode" name="roadnameCode" class="d_form large" placeholder="roadnameCode">
<input type="text" id="bcode" name="bcode" class="d_form large" placeholder="bcode">
<input type="text" id="roadname" name="roadname" class="d_form large" placeholder="roadname">
<input type="text" id="bname" name="bname" class="d_form large" placeholder="bname">
<input type="text" id="bname1" name="bname1" class="d_form large" placeholder="bname1">
<input type="text" id="bname2" name="bname2" class="d_form large" placeholder="bname2">
<input type="text" id="hname" name="hname" class="d_form large" placeholder="hname">
<input type="text" id="query" name="query" class="d_form large" placeholder="query">
<input type="text" id="postcodeSeq" class="d_form large" placeholder="postcodeSeq">
</form>
</body>
</html>
var paramObj;
$(document).ready(function(){

});
function initPage() {
}

function initFrame(param) {
}

//검색어 특수문자제거
function validateJuso(value){
    value =value.replace(/(^\s*)|(\s*$)/g, ""); //앞뒤 공백 제거
    /* 2014.05.09 특수문자 제거 안하도록 수정 %는 예외 */
    //return value.split(/[~!$%^&*+=|:;?']/).join("");  //특수문자제거
    return value.split(/[%]/).join("");  //특수문자제거
    /* 2014.05.09 특수문자 제거 안하도록 수정 %는 예외 */
}

//검색어 빈 값 체크
function checkKeyWord(form_nm,ele_nm) {
    if (form_nm.value.trim()=="") {
        alert(ele_nm+'을(를) 입력해주세요!     ');
        form_nm.value="";
        form_nm.focus();
        return false;
    }
    return true ;
}

//도로명 엔터키 검색
function enterSearchDiv() {
    var evt_code = (window.netscape) ? ev.which : event.keyCode;
    if (evt_code == 13) {
        if(!checkKeyWord(document.formAPIDiv.keyword,"검색어")) return;
        document.formAPIDiv.currentPage.value='1';
        searchDivAddr(); //jsonp사용시 enter검색
    }
}

//도로명 검색버튼
function searchDivButton() {
    document.formAPIDiv.currentPage.value='1';
    searchDivAddr(); //jsonp사용시 enter검색
}


function searchDivAddr(){
    document.formAPIDiv.keyword.value=validateJuso(document.formAPIDiv.keyword.value) ; //특수문자제거
    $.ajax({
        url :"https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do"  //인터넷망
        ,type:"post"
        ,data:$("#formAPIDiv").serialize()
        ,dataType:"jsonp"
        ,crossDomain:true
        ,success:function(xmlStr){
            if(navigator.appName.indexOf("Microsoft") > -1){
                var xmlData = new ActiveXObject("Microsoft.XMLDOM");
                xmlData.loadXML(xmlStr.returnXml)
            }else{
                var xmlData = xmlStr.returnXml;
            }
            var errCode = $(xmlData).find("errorCode").text();
            var errDesc = $(xmlData).find("errorMessage").text();
            if(errCode != "0"){
                alert(errCode+"="+errDesc);
            }else{
                if(xmlStr != null){
                    makeListDiv(xmlData);
                    pageDivMake(xmlData);
                }
            }
        }
        ,error: function(xhr,status, error){
            alert("에러발생");
        }
    });
}

/*
 * 제공받은 주소정보를 화면에 셋팅하기
 * 사이트에 맞게 화면 구성하기
 */
function makeListDiv(xmlStr){

    var htmlStr = "";
    var tr_index = 0 ;

    if($(xmlStr).find("juso").length > 0) {
        $(xmlStr).find("juso").each(function(){

            var roadAddr = $(this).find('roadAddr').text().replace(/ /gi,"&nbsp;").replace('&nbsp;&nbsp;', '&nbsp;'); //도로명
            var jibunAddr = $(this).find('jibunAddr').text().replace(/ /gi,"&nbsp;").replace('&nbsp;&nbsp;', '&nbsp;'); //지번
            var engAddr = $(this).find('engAddr').text().replace(/ /gi,"&nbsp;").replace('&nbsp;&nbsp;', '&nbsp;'); //영문도로명
            var zipNo = $(this).find('zipNo').text().replace(/ /gi,"&nbsp;"); //우편번호
// 			var addrDetail = $(this).find('addrDetail').text().replace(/ /gi,"&nbsp;").replace('&nbsp;&nbsp;', '&nbsp;');
            var roadAddrPart1 = $(this).find('roadAddrPart1').text().replace(/ /gi,"&nbsp;").replace('&nbsp;&nbsp;', '&nbsp;');
// 			var roadAddrPart2 = $(this).find('roadAddrPart2').text().replace(/ /gi,"&nbsp;").replace('&nbsp;&nbsp;', '&nbsp;');
// 			var admCd = $(this).find('admCd').text().replace(/ /gi,"&nbsp;");
// 			var rnMgtSn = $(this).find('rnMgtSn').text().replace(/ /gi,"&nbsp;");
// 			var bdMgtSn = $(this).find('bdMgtSn').text().replace(/ /gi,"&nbsp;");
// 			var detBdNmList = $(this).find('detBdNmList').text().replace(/ /gi,"&nbsp;").replace('&nbsp;&nbsp;', '&nbsp;');

            htmlStr += "<tr style='cursor:pointer;' onclick =openApiDivCallBack('"+roadAddr+"','"+engAddr+"','"+jibunAddr+"','"+zipNo+"','"+roadAddrPart1+"');>";
            htmlStr += "<td class='subj' style='text-align:center;'>"+zipNo+"</td>";
            htmlStr += "<td class='subj' style='text-align:left;padding-left:10px;'>[도로명] "+roadAddr+"<br/>[지번] "+jibunAddr+"</td>";
            htmlStr += "</tr>";

        });
    }else {
        htmlStr += "<tr>";
        htmlStr += "<td align='center' colspan='2'>검색결과가 없습니다.</td>";
        htmlStr += "</tr>";
    }

    $("#listDiv").html(htmlStr);
}

//페이지 이동
function goPageDiv(pageNum){
    document.formAPIDiv.currentPage.value=pageNum;
    searchDivAddr();
}

// 페이징 처리
function pageDivMake(xmlStr){
    var total = $(xmlStr).find("totalCount").text();
    $('#totalCntDiv').text("(총 "+total+"건)");	 // 총건수 셋팅
    var pageNum = document.formAPIDiv.currentPage.value;
    var paggingStr = "";
    if(total < 1){
    }else{
        var PAGEBLOCK=5;
        var pageSize=document.formAPIDiv.countPerPage.value;;
        var totalPages = Math.floor((total-1)/pageSize) + 1;
        var firstPage = Math.floor((pageNum-1)/PAGEBLOCK) * PAGEBLOCK + 1;

        if( firstPage <= 0 ) firstPage = 1;

        var lastPage = firstPage-1 + PAGEBLOCK;
        if( lastPage > totalPages ) lastPage = totalPages;

        var nextPage = lastPage+1 ;
        var prePage = firstPage-5 ;

        if( firstPage > PAGEBLOCK ){
            paggingStr +=  "<a href='javascript:goPageDiv("+prePage+");'>◁</a>&nbsp;&nbsp;" ;
        }

        for( i=firstPage; i<=lastPage; i++ ){
            if( pageNum == i )
                paggingStr += "<a style='font-weight:bold;color:#F56111;font-size:14px;' href='javascript:goPageDiv("+i+");'>" + i + "</a>&nbsp;&nbsp;";
            else
                paggingStr += "<a href='javascript:goPageDiv("+i+");'>" + i + "</a>&nbsp;&nbsp;";
        }

        if( lastPage < totalPages ){
            paggingStr +=  "<a href='javascript:goPageDiv("+nextPage+");'>▷</a>";
        }

        $("#pageApiDiv").html(paggingStr);
    }
}

function openApiDivCallBack(roadAddr, engaddr, jibunaddr, zipno, roadAddrPart1){
    var data = {"roadAddr":roadAddr.replace(/[" "]/gi," ")
        , "roadAddrPart1":roadAddrPart1.replace(/[" "]/gi," ")
        , "engaddr":engaddr.replace(/[" "]/gi," ")
        , "jibunaddr":jibunaddr.replace(/[" "]/gi," ")
        , "zipno":zipno.replace(/[" "]/gi," ")};

    if(paramObj && paramObj.CALLBACK){
        try {
            var sCallBack = paramObj.CALLBACK;
            if(typeof sCallBack !== "undefined" && sCallBack !== null){
                var strFun = sCallBack+"(data)";
                eval(strFun);
                window.close();
            };
        } catch (e) {console.log(e);}
    }else{
        if(window.self !== window.top){
            parent.customPopup.hide(data);
        }else{
            top.customPopup.hide(data);
        }
    }
}


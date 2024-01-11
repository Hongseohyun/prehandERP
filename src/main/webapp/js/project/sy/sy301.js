$(document).ready(function(){

    //퇴사일자 기입 시 사용여부 N으로 자동변환
    $("#retiDd").on( "blur", function() {
        $("#useYn_N").prop("checked",true);
    });

    //근무조 클릭 시 팀장여부 N으로 자동변환
    $("#deptCd").click(  function() {
        $("#cheiYn_N").prop("checked",true);
        $("#spanmsg2").html("");
    });

    //팀장이 2명이상일 때 메세지
    $("input:radio[name=cheiYn]").click(function(){
        if($("input:radio[name=cheiYn]:checked").val()=='Y'){
            let param = $("#searchArea").getData();
            param["deptCd"] = $("#deptCd").val();

            let callback1 = new Callback(function(result1) {
                let data = result1.resultVO;
                if( (!isEmpty(data) && data.cnt == 0) || (isEmpty(data)) ) {
                    //$("#dupckid").val("Y");
                    $("#spanmsg2").html("<font style='color:green;'>사용가능</font>");
                } else {
                    //$("#dupckid").val("N");
                    $("#spanmsg2").html("<font style='color:red;'>해당팀 팀장존재</font>");
                }
            });
            param["queryid"] = "sy301.selectCountByChei";
            platform.postService("/common/selectOne", param, callback1);
        }else{
            $("#spanmsg2").html("");
        }
    });

    //PW초기화
    $("#pwInit").click(function(){

        if($("#userId").val() == null || $("#userId").val() == ""){
            popup.alert.show("사용자 목록에서 선택해 주세요.");
            return;
        }

        //var param2 = $("#searchArea").getData();
        let param2 = {};
        param2["userId"] = $("#userId").val();
        param2["pwd"] = $.rc4EncryptStr('1234', KEY_ETC);
        param2["userNm"] = $("#userNm").val();
        param2["updateUserId"] = USER_INFO.USER_ID;
        param2["updateUserIp"] = USER_INFO.USER_IP;
        param2["compCd"] = $("#searchArea").getData().compCd;

        let callback2 = new Callback(function(result2) {
            if(result2.resultCode == POST_RESULT.SUCCESS){
                popup.alert.show("비밀번호가 1234로 초기화 되었습니다.", function() {
                    //listener.button.search.click();
                });
            }else{
                popup.alert.show("비밀번호 변경 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function() {
                });
            }
        });

        platform.postService("/sy301/pwinit", param2, callback2);
    });

    //사용자ID 중복체크
    $("#userId").on( "blur", function() {
        if(isEmpty($("#userId").val())){
            $("#spanmsg1").html("");
            $("#dupckid").val("");
            return;
        }

        let param = $("#searchArea").getData();
        param["userId"] = $("#userId").val();

        let callback = new Callback(function(result) { //sy103DupCheck 실행 후 callback 실행
            let data = result.resultVO;
            if(!isEmpty(data) && data.cnt == 0) {
                $("#dupckid").val("Y");
                $("#spanmsg1").html("<font style='color:green;'>사용가능</font>");
            } else {
                $("#dupckid").val("N");
                $("#spanmsg1").html("<font style='color:red;'>사용불가능</font>");
                $("#userId").select();
            }
        });
        param["queryid"] = "sy301.selectCountByPrimaryKey";
        platform.postService("/common/selectOne", param, callback);
    });
});

function initPage() {
    $("#postForm").formDisable();
    listener.button.search.click();
}

webix.ready(function() {
    grid = webix.ui({
        id : "grid1",
        container : "grid1",
        view : "datagrid",
        columns : [
            {id:"ch1", header:{ content:"masterCheckbox", contentId:"mc1" }, css:"textCenter", checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}", width:30},
            {id:"rnum", editor: "", header: "순번", sort: "int", css: "textCenter", width : 80},
            {id: "userId", editor: "", header: "사용자ID", sort: "string", css: "textCenter", width : 100},
            {id: "userNm", editor: "", header: "사용자명", sort: "string", css: "textCenter", width : 100},
            {id: "deptNm", editor: "", header: "근무조(팀)", sort: "string", css: "textCenter", width : 160},
            {id: "beloCompNm", editor: "", header: "소속기관", sort: "string", css: "textLeft", width : 100},
            {id: "posiNm", editor: "", header: "직책", sort: "string", css: "textLeft", width : 120},
            {id: "cdNm", editor: "", header: "권한", sort: "string", css: "textCenter", width : 160},
            {id: "enteDd", editor: "", header: "입사일자", sort: "string", css: "textCenter", width : 120, format : dateFormat},
            {id: "retiDd", editor: "", header: "퇴사일자", sort: "string", css: "textCenter", width : 120, format : dateFormat},
            {id: "comuMngrYn", editor: "", header: "근태관리", sort: "string", css: "textCenter", width : 80, checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}", readonly:true},
            {id: "cheiYn", editor: "", header: "팀장여부", sort: "string", css: "textCenter", width : 80, checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}", readonly:true},
            {id: "useYn", editor: "", header: "사용여부", sort: "string", css: "textCenter", checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}", readonly:true, fillspace:true}
        ],
    });

    $$("grid1").initGrid();
});

listener.select.change = function($el) {
}

listener.editor.keydown = function($el) {
}

listener.gridRow.click = function(record) {
    $("#postForm").formEnable({"EXCLIDS":["userId"]});
    $("#postForm").setData(record);
    $("#userId").prop("disabled",true);
    $("#spanmsg2").html("");
}

listener.button.init.click = function() {
    $("#searchArea").reset();
    $("#dataCnt").text("");
    $("#postForm").reset();
    $$("grid1").clearData();

    $("#postForm").formDisable();
}

listener.button.news.click = function() {
    $("#postForm").formEnable();
    $("#postForm").reset();
    $("#spanmsg1").html("");
    $("#dataCnt").text("");
    $("#postForm").editMode("new");
    $("#rtlstrId").focus();
    $("#userId").prop("disabled",false);
}

listener.button.search.click = function () {
    if (!$("#searchArea").checkValidation()) {
        return;
    }
    let param = $("#searchArea").getData();

    $("#postForm").reset();
    $("#dataCnt").text("");
    $("#postForm").formDisable();

    let callback = new Callback(function(result) {
        let data = result.resultVO;
        $$("grid1").setData(data);
        $("#dataCnt").text("[조회 : " + data.length + " 건]");
    });

    param["queryid"] = "sy301.selectGrid";
    platform.postService("/common/selectList", param, callback);
}

listener.button.save.click = function () {
    let $form = $("#postForm");
    let param = $form.getData();
    let param1 = $("#searchArea").getData();

    if(param["editMode"] == "reset"){popup.alert.show("저장대상이 없습니다.");
        return;
    }

    if(param["userId"] == ""){
        popup.alert.show("사용자ID를 확인하세요.");
        return;
    }
    if(param["userNm"] == ""){
        popup.alert.show("사용자명을 확인하세요.");
        return;
    }
    if(param["deptCd"] == ""){
        popup.alert.show("근무조(팀)을 확인하세요.");
        return;
    }
    if(param["userGbCd"] == ""){
        popup.alert.show("권한을 확인하세요.");
        return;
    }
    if(param["enteDd"] == ""){
        popup.alert.show("입사일자를 확인하세요.");
        return;
    }

    if(param["editMode"] == "new" && checkNull(param["dupckid"], "") != "Y")
    {
        popup.alert.show("\"사용자ID\" 중복확인을 해주세요.");
        return;
    }

    if(param["retiDd"] != "" && param["useYn"] == "Y")
    {
        popup.alert.show("퇴근일자 기입 시 사용여부 N으로 수정하세요.");
        return;
    }

    if(param["retiDd"] != ""){
        if(param["enteDd"] > param["retiDd"])
        {
            popup.alert.show("입사일자는 퇴사일자보다 이전이어야 합니다.");
            return;
        }
    }

    if(param["useYn"] == "N" && param["retiDd"] == "")
    {
        popup.alert.show("사용여부 N이면 퇴사일자를 기입하셔야 합니다.");
        return;
    }

    if(document.getElementById("spanmsg2").textContent == "해당팀 팀장존재"){
        popup.alert.show("해당팀 팀장 존재합니다.\r\n 팀장여부 확인해 주세요.");
        return;
    }

    if (!$form.checkValidation()) {
        return;
    }

    param["enteDd"] = replcDate(param["enteDd"]);
    param["retiDd"] = replcDate(param["retiDd"]);
    param["pwd"] = $.rc4EncryptStr('1234', KEY_ETC);
    param["regUserId"] = USER_INFO.USER_ID;
    param["regUserIp"] = USER_INFO.USER_IP;
    param["updateUserId"] = USER_INFO.USER_ID;
    param["updateUserIp"] = USER_INFO.USER_IP;
    param["compCd"] = param1["compCd"];

    let callback = new Callback(function(result) {
        if(result.resultCode == POST_RESULT.SUCCESS){
            if(document.getElementById("spanmsg1").textContent == "사용가능"){
                popup.alert.show("신규 사용자ID 생성 시 \r\n 비밀번호는 1234로 저장됩니다.", function() {
                    listener.button.search.click();
                });
            }else{
                popup.alert.show("저장되었습니다", function() {
                    listener.button.search.click();
                });
            }

        }else{
            popup.alert.show("저장 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function() {
            });
        }
    });
    platform.postService("/sy301/save", param, callback);
    /*document.getElementById("pwInit").click();
    popup.alert.show("저장되었습니다.", function() {
        listener.button.search.click();
    });*/

}

listener.button.del.click = function () {
    let $form = $("#postForm");
    let param = $form.getData();
    let param1 = $("#searchArea").getData();
    param["compCd"] = param1["compCd"];

    if(param["editMode"] == "reset"){
        popup.alert.show("삭제대상이 없습니다.");
        return;
    }

    popup.confirm.show("삭제 하시겠습니까?", function(result) {
        if (result) {
            let callback = new Callback(function(result) {
                if(result.resultCode == POST_RESULT.SUCCESS){
                    popup.alert.show("삭제되었습니다", function() {
                        listener.button.search.click();
                    });
                }else{
                    popup.alert.show("삭제 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function() {
                    });
                }
            });
            param["queryid"] = "sy301.deleteByPrimaryKey";
            platform.postService("/common/delete", param, callback);
        }
    });
}

//일괄처리
listener.button.etc8.click = function () {

    let grid = $$("grid1");
    let aTrouNo = new Array();

    grid.eachRow(function(row,b,c,d) {
        let record = grid.getItem(row);

        if (record["ch1"] == "Y") {
            record["updateUserId"] = USER_INFO.USER_ID; // 수정자ID
            record["updateUserIp"] = USER_INFO.USER_IP; // 수정자IP
            aTrouNo.push(record);
        }
    });

    if(aTrouNo.length < 1)
    {
        popup.alert.show("처리할 대상이 없습니다.");
        return false;
    }

    let callback = new Callback(function(result){
        if(result != null && result != '' && result != undefined && result == true){
            listener.button.search.click();
        }
    });
    customPopup.show("/sy301/p1?programId=SY301P1", "사용자 정보 일괄 수정", 800, 300, callback, aTrouNo);

    return true;
}
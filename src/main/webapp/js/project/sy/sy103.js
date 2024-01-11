$(document).ready(function(){
    //기관ID 중복체크
    $("#compCd").on( "blur", function() {
        if(isEmpty($("#compCd").val())){
            $("#spanmsg1").html("");
            $("#dupckid").val("");
            return;
        }

        var param = {"cCompCd" : $("#compCd").val()};
        var callback = new Callback(function(result) {
            let data = result.resultVO;
            if(!isEmpty(data) && data.cnt == 0) {
                $("#dupckid").val("Y");
                $("#spanmsg1").html("<font style='color:green;'>사용가능</font>");
            } else {
                $("#dupckid").val("N");
                $("#spanmsg1").html("<font style='color:red;'>사용불가능</font>");
                $("#compCd").select();
            }
        });
        param["queryid"] = "sy103.selectCountByPrimaryKey";
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
            {id:"rnum", editor: "", header: "순번", sort: "int", css: "textCenter", width : 80},
            {id: "compCd", editor: "", header: "기관코드", sort: "string", css: "textCenter", width : 100},
            {id: "compNm", editor: "", header: "기관명", sort: "string", css: "textLeft", width : 150},
            {id: "useYn", editor: "", header: "사용여부", sort: "string", css: "textCenter", width : 80},
            {id: "bigo", editor: "", header: "비고", sort: "string", css: "textLeft", fillspace:true}
        ],
    });

    $$("grid1").initGrid();
});

listener.select.change = function($el) {
}

listener.editor.keydown = function($el) {
}

listener.gridRow.click = function(record) {
    $("#postForm").formEnable({"EXCLIDS":["compCd"]});
    $("#postForm").setData(record);

    /* remark 20220213
    var param = {"FILE_GB_CD":record["COMP_CD"], "FILE_GRP_CD":"F010", "FILE_ID":record["FILE_ID"]};
    var callback = new Callback(function(result) { // 파일명 조회
        var filenmd  = "";
        if(!isNull(result)) {
            for (var i = 0; i < result.length; i++) {
                if (filenmd != "") {
                    filenmd += ", ";
                }
                filenmd += result[i].FILENMD;
            }
        }
        $("#filenmd").val(filenmd);
    });
     */
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
    $("#dataCnt").text("");
    $("#postForm").editMode("new");
    $("#rtlstrId").focus();
}

listener.button.search.click = function () {
    if (!$("#searchArea").checkValidation()) {
        return;
    }
    var param = $("#searchArea").getData();

    $("#postForm").reset();
    $("#dataCnt").text("");
    $("#postForm").formDisable();

    var callback = new Callback(function(result) {
        let data = result.resultVO;
        $$("grid1").setData(data);
        $("#dataCnt").text("[조회 : " + data.length + " 건]");
    });

    param["queryid"] = "sy103.selectGrid";
    platform.postService("/common/selectList", param, callback);
}

listener.button.save.click = function () {
    var $form = $("#postForm");
    var param = $form.getData();

    if(param["editMode"] == "reset"){
        popup.alert.show("저장대상이 없습니다.");
        return;
    }

    if(param["editMode"] == "new" && checkNull(param["dupckid"], "") != "Y")
    {
        popup.alert.show("\"기관코드\" 중복확인을 해주세요.");
        return;
    }

    if (!$form.checkValidation()) {
        return;
    }

    param["userId"] = USER_INFO.USER_ID;
    param["userIp"] = USER_INFO.USER_IP;

    var callback = new Callback(function(result) {
        if(result.resultCode == POST_RESULT.SUCCESS){
            popup.alert.show("저장되었습니다", function() {
                listener.button.search.click();
            });
        }else{
            popup.alert.show("저장 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function() {
            });
        }
    });
    if(param["editMode"] == "new"){
        param["queryid"] = "sy103.insert";
        param["iCompCd"] = param["compCd"];
        platform.postService("/common/insert", param, callback);
    }else{
        param["queryid"] = "sy103.updateByPrimaryKey";
        param["uCompCd"] = param["compCd"];
        platform.postService("/common/update", param, callback);
    }
}

listener.button.del.click = function () {
    var $form = $("#postForm");
    var param = $form.getData();

    if(param["editMode"] == "reset"){
        popup.alert.show("삭제대상이 없습니다.");
        return;
    }

    popup.confirm.show("삭제 하시겠습니까?", function(result) {
        if (result) {
            var callback = new Callback(function(result) {
                if(result.resultCode == POST_RESULT.SUCCESS){
                    popup.alert.show("삭제되었습니다", function() {
                        listener.button.search.click();
                    });
                }else{
                    popup.alert.show("삭제 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function() {
                    });
                }
            });

            param["queryid"] = "sy103.deleteByPrimaryKey";
            param["dCompCd"] = param["compCd"];
            platform.postService("/common/delete", param, callback);
        }
    });
}
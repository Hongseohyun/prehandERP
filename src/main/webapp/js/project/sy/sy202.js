function initPage() {
    $("#postForm").formDisable();

    //메뉴ID 중복체크
    $("#menuId").on( "blur", function() {
        if(isEmpty($("#menuId").val())){
            $("#spanmsg1").html("");
            $("#dupckid").val("");
            return;
        }

        var param = {"menuId" : $("#menuId").val()};
        var callback = new Callback(function(result) {
            let data = result.resultVO;
            if(!isEmpty(data) && data.cnt == 0)
            {
                $("#dupckid").val("Y");
                $("#spanmsg1").html("<font style='color:green;'>사용가능</font>");
            }
            else
            {
                $("#dupckid").val("N");
                $("#spanmsg1").html("<font style='color:red;'>사용불가능</font>");
                $("#userId").select();
            }
        });
        param["queryid"] = "sy202.selectCountByPrimaryKey";
        platform.postService("/common/selectOne", param, callback);
    });

    listener.button.search.click();
}

webix.ready(function() {
    webix.ui({
        id : "grid1",
        container : "grid1",
        view : "datagrid",
        columns : [
            {id:"rnum", editor: "", header: "순번", sort: "int", css: "textCenter", width : 80},
            {id: "menuId", editor: "", sort:"string", header: "상위메뉴ID", css: "textCenter", width : 100},
            {id: "menuNm", editor: "", sort:"string", header: "상위메뉴명", css:"textLeft", width: 300},
            {id: "sortno", editor: "", sort:"string", header: "정렬순서", css: "textCenter", width : 80},
            {id: "useYn", editor: "", sort:"string", header: "사용여부", css: "textCenter", width : 100},
            {id: "menuImg", editor: "", sort:"string", header: "메뉴이미지", css: "textLeft", width : 200},
            {id: "menuImgOv", editor: "", sort:"string", header: "메뉴이미지OV", css: "textLeft", width : 200},
            {id: "bigo", hidden:true},
            {id: "oldMenuId", hidden:true},
            {id: "compCd", hidden:true}
        ],
    });

    $$("grid1").initGrid();
});

listener.select.change = function($el) {
}

listener.editor.keydown = function($el) {
}

listener.gridRow.click = function(record) {
    $("#postForm").formEnable({"EXCLIDS":["menuId"]});
    $("#postForm").setData(record);
    $("#menuImg, #menuImgOv").change();
}

listener.button.init.click = function () {
    $("#searchArea").reset();
    $("#postForm").reset();
    $("#menuImg, #menuImgOv").change();
    $$("grid1").clearData();
    $("#spanmsg1").html("");

    $("#postForm").formDisable();
}

listener.button.news.click = function() {
    $("#postForm").formEnable();
    $("#postForm").reset();
    $("#menuImg, #menuImgOv").change();
    $("#postForm").editMode("new");

    $("#menuId").focus();
}

listener.button.search.click = function () {
    var param = $("#searchArea").getData();

    $("#postForm").reset();
    $("#menuImg, #menuImgOv").change();
    $$("grid1").clearData();
    $("#postForm").formDisable();

    var callback = new Callback(function(result) {
        let data = result.resultVO;
        $$("grid1").setData(data);
    });
    param["queryid"] = "sy202.selectGrid";
    platform.postService("/common/selectList", param, callback);
}

listener.button.save.click = function () {
    var $form = $("#postForm");
    var param = $form.getData();

    if (!$form.checkValidation()) {
        return;
    }
    if(param["editMode"] == "reset"){
        popup.alert.show("저장대상이 없습니다.");
        return;
    }

    if(param["editMode"] == "new" && checkNull(param["dupckid"], "") != "Y"){
        popup.alert.show("\"메뉴ID\" 중복확인을 해주세요.");
        return;
    }

    param["userId"] = USER_INFO.USER_ID;
    param["userIp"] = USER_INFO.USER_IP;
    param["compCd"] = USER_INFO.COMP_CD;

    var callback = new Callback(function(result) {
        if (result.resultCode == POST_RESULT.SUCCESS){
            popup.alert.show("저장되었습니다", function() {
                listener.button.search.click();
            });
        }else{
            popup.alert.show("저장 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function() {
            });
        }
    });
    platform.postService("/sy202/save", param, callback);
}

listener.button.del.click = function () {

    var $form = $("#postForm");
    var param = $form.getData();

    if(param["editMode"] == "reset"){
        popup.alert.show("삭제대상이 없습니다.");
        return;
    }

    popup.confirm.show("삭제 하시겠습니까?", function(result){
        if(result){
            var callback = new Callback(function(result){
                if(result.resultCode == POST_RESULT.SUCCESS){
                    popup.alert.show("삭제되었습니다", function() {
                        listener.button.search.click();
                    });
                }else{
                    popup.alert.show("삭제 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function() {
                    });
                }
            });
            param["queryid"] = "sy202.deleteByPrimaryKey";
            platform.postService("/common/delete", param, callback);
        }
    });
}

$(function(){
    $("#menuImg").on("change", function (){
        $("#imgMenuImg").css("display", "inline");
        $("#imgMenuImg").attr("src", $(this).val());
    });
    $("#menuImgOv").on("change", function (){
        $("#imgMenuImgOv").css("display", "inline");
        $("#imgMenuImgOv").attr("src", $(this).val());
    });
});
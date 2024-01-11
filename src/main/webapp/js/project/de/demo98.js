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
            {id: "userId", editor: "", sort:"string", header: "ID", css: "textCenter", width : 150, },
            {id: "username", editor: "", sort:"string", header: "사용자명", css:"textLeft", width: 230, },
            {id: "email", editor: "", sort:"string", header: "이메일", css: "textLeft", fillspace:true},
        ],
    });

    $$("grid1").initGrid();
});

listener.select.change = function($el) {
}

listener.editor.keydown = function($el) {
}

listener.gridRow.click = function(record) {
    $("#postForm").formEnable();
    $("#postForm").setData(record);
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

    param["queryid"] = "demo98.selectGrid";
    platform.postService("/common/selectList", param, callback);
}

listener.button.save.click = function () {
    var $form = $("#postForm");
    var param = $form.getData();

    if(param["editMode"] == "reset"){
        popup.alert.show("저장대상이 없습니다.");
        return;
    }

    if (!$form.checkValidation()) {
        return;
    }

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
        param["queryid"] = "demo98.insert";
        platform.postService("/common/insert", param, callback);
    }
    else{
        param["queryid"] = "demo98.update";
        platform.postService("/common/update", param, callback);
    }
}

listener.button.del.click = function () {
    var $form = $("#postForm");
    var param = $form.getData();

    if(param["editMode"] == "reset" || param["editMode"] == "new"){
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

            param["queryid"] = "demo98.delete";
            platform.postService("/common/delete", param, callback);
        }
    });
}

function initPage()  {
    listener.button.search.click();
}

webix.ready(function() {
    webix.ui({
        id : "grid1",
        container : "grid1",
        view : "datagrid",
        columns : [
            {id: "userId", editor: "text", sort:"string", header: "ID", css: "textCenter", width : 150, },
            {id: "username", editor: "text", sort:"string", header: "사용자명", css:"textLeft", width: 230, },
            {id: "email", editor: "text", sort:"string", header: "이메일", css: "textLeft", fillspace:true},
        ]
    });
});

listener.select.change = function($el) {
}

listener.editor.keydown = function($el) {
}

//초기화버튼
listener.button.init.click = function () {
    $$("grid1").clearData();
    $("#searchArea").reset();
}

//조회버튼
// listener.button.search.click = function () {
//     var param = $("#searchArea").getData();
//
//     //그리드초기화
//     $$("grid1").clearData();
//
//     var callback = new Callback(function(result) {
//         let data = result.resultVO;
//         //그리드에 값 세팅
//         $$("grid1").setData(data);
//     });
//     param["queryid"] = "de096.selectGrid";
//     platform.postService("/common/selectList", param, callback);
// }

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
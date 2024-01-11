

var selectData1 = getSelectList("01", {"compCd":USER_INFO.COMP_CD, "cdGb":"SY040", "useYn":"Y"}, {nullable:false}); //공통코드(버튼구분)
function initPage() {
    if (selectData1.length > 0) {
        var columns = webix.toArray($$("grid1").config.columns);
        for(var i=0,iLen=selectData1.length; i<iLen; i++){
            var dt = selectData1[i];
            columns.insertAt({id:dt.attrNm1.toLocaleLowerCase(), sort:"string", header:dt.value, css:"textCenter", width:80, checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}",editor: "checkbox"}, (i+6));
        }
        $$("grid1").refreshColumns();
    }

    setTimeout(function () {
        listener.button.search.click();
    }, 100);
}

webix.ready(function() {
    webix.ui({
        id : "grid1",
        container : "grid1",
        view : "datagrid",
        columns : [
            {id: "menuId", editor: "", sort:"string", header: "프로그램ID", css: "textCenter", width : 120},
            {id: "menuNm", editor: "", sort:"string", header: "프로그램명", css: "textLeft", width : 200},
            {id: "upMenuId", editor: "", sort:"string", header: "상위메뉴ID", css: "textCenter", width : 120},
            {id: "upMenuNm", editor: "", sort:"string", header: "상위메뉴명", css: "textLeft", width : 180},
            {id: "menuAuthYn", header: "메뉴권한", css: "textCenter", sort:"string", checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}", width:80,editor: "checkbox"},
            {id: "bigo", editor: "text", sort:"string", header: "비고", css: "textLeft", width : 200},
            {id: "compCd", hidden: true}
        ]
    });

    $$("grid1").initGrid();
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
listener.button.search.click = function () {
    var param = $("#searchArea").getData();

    //그리드초기화
    $$("grid1").clearData();

    var callback = new Callback(function(result) {
        //그리드에 값 세팅
        $$("grid1").setData(result);
    });

    platform.postService("/sy204/selectGrid", param, callback);
}

//저장버튼
listener.button.save.click = function () {
    var grid = $$("grid1");

    var param = $("#searchArea").getData();
    var aPrm = new Array();

    grid.eachRow(function(row,b,c,d) {
        var record = grid.getItem(row);

        record["userGbCd"] = $("#P_userGbCd").val();
        record["bigo"] = checkEmpty(record["bigo"], "");

        record["userId"] = USER_INFO.USER_ID;
        record["userIp"] = USER_INFO.USER_IP;

        aPrm.push(record);
    });

    param["detaillist"] = aPrm;
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
    platform.postService("/sy204/save", param, callback);
}

function searchByUserGdCd(){
    listener.button.search.click();
}
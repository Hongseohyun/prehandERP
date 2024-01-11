function initPage() {
    listener.button.search.click();
}

webix.ready(function() {
    webix.ui({
        id : "grid1",
        container : "grid1",
        view : "datagrid",
        columns : [
            {id: "menuId", editor: "", sort:"string", header: "메뉴ID", css:"textCenter", width: 100},
            {id: "menuNm", editor: "", sort:"string", header: "메뉴명", css: "textLeft", width : 200, },
            {id: "useYn", header: "사용여부", css: "textCenter", sort:"string", checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}", readonly:true},
            {id: "compCd", hidden:true},
        ],
    });

    $$("grid1").attachEvent("onAfterEditStop", function(state, editor, ignoreUpdate){
        if(checkEmpty(state.value,"") != checkEmpty(state.old,""))
        {
            let record = $$("grid1").getItem(editor.row);
            record["gstat"] = (record["gstat"] == "I")?"I":"U";
        }
    });
    $$("grid1").attachEvent("onCheck", function(rowId, colId, state){
        let record = $$("grid1").getItem(rowId);
        record["gstat"] = (record["gstat"] == "I")?"I":"U";
    });

    webix.ui({
        id : "grid2",
        container : "grid2",
        view : "datagrid",
        columns : [
            {id:"ch1", header:{ content:"masterCheckbox", contentId:"mc1" }, css:"textCenter", checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}", width:30},
            {id: "pgmId", editor: "", sort:"string", header: "프로그램ID", css: "textCenter", width : 120},
            {id: "pgmNm", editor: "", sort:"string", header: "프로그램명", css:"textLeft", width: 180, fillspace:true},
        ],
    });

    webix.ui({
        id : "grid3",
        container : "grid3",
        view : "datagrid",
        columns : [
            {id:"ch1", header:{ content:"masterCheckbox", contentId:"mc1" }, css:"textCenter", checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}", width:30},
            {id: "menuId", editor: "", sort:"string", header: "프로그램ID", css: "textCenter", width : 120},
            {id: "menuNm", editor: "", sort:"string", header: "프로그램명", css:"textLeft", width: 180, fillspace:true},
		    {id: "sortno", editor: "text", sort:"int", header: "정렬순서", css:"textCenter", width: 80, option:{maxlength:3}, format:intFormat},
        ],
    });

    $$("grid1").initGrid();
    $$("grid2").initGrid();
    $$("grid3").initGrid();
});

listener.select.change = function($el) {
}

listener.editor.keydown = function($el) {
}

listener.gridRow.click = function(record, grid) {
    if (grid.config.id == "grid1") {
        let param = {};

        param["upMenuId"] = record["menuId"];
        param["compCd"] = record["compCd"];

        let callback2 = new Callback(function(result) {
            let data = result.resultVO;
            $$("grid2").setData(data);
        });

        param["queryid"] = "sy203.selectGrid2";
        platform.postService("/common/selectList", param, callback2);

        let callback3 = new Callback(function(result) {
            let data = result.resultVO;
            $$("grid3").setData(data);
        });

        param["queryid"] = "sy203.selectGrid3";
        platform.postService("/common/selectList", param, callback3);
    }
}

listener.button.search.click = function () {
    let param = $("#searchArea").getData();

    $$("grid1").clearData();
    $$("grid2").clearData();
    $$("grid3").clearData();

    let callback = new Callback(function(result) {
        let data = result.resultVO;
        $$("grid1").setData(data);
    });
    param["queryid"] = "sy203.selectGrid1";
    platform.postService("/common/selectList", param, callback);
}

listener.button.init.click = function () {
    $("#searchForm").reset();

    $$("grid1").clearData();
    $$("grid2").clearData();
    $$("grid3").clearData();
}

listener.button.save.click = function () {
    let grid = $$("grid3");
    if (!grid.checkValidation()) {
        return;
    }

    let param = new Array();

    let masterParam = $$("grid1").getItem($$("grid1").getSelectedId());
    masterParam["upMenuId"] = masterParam["menuId"];

    if (isNull(masterParam)) {
        popup.alert.show("저장할 자료가 없습니다.");
        return;
    }

    grid.eachRow(function(row,b,c,d) {
        let record = grid.getItem(row);

        record["compCd"]   = masterParam["compCd"];
        record["upMenuId"] = masterParam["menuId"];
        record["menuLevel"] = "1";
        record["useYn"]  = "Y";
        record["menuGb"] = "2";
        record["userId"] = USER_INFO.USER_ID;
        record["userIp"] = USER_INFO.USER_IP;
        record["compCd"] = USER_INFO.COMP_CD;

        param.push(record);
    });

    let callback = new Callback(function(result) {
        if (result.resultCode == POST_RESULT.SUCCESS){
            popup.alert.show("저장되었습니다", function() {
                listener.button.search.click();
            });
        }else{
            popup.alert.show("저장 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function() {
            });
        }
    });
    masterParam["detaillist"] = param;
    platform.postService("/sy203/save", masterParam, callback);
}

function btnMoveRightClick() {
    let grid = $$("grid2");

    grid.eachRow(function(row,b,c,d) {
        let record = grid.getItem(row);

        if (record["ch1"] == "Y") {
            let obj = new Object();
            obj["ch1"] = "";
            obj["menuId"] = record["pgmId"];
            obj["menuNm"] = record["pgmNm"];
			obj["sortno"]  = "";
            $$("grid3").addRow(obj);
            grid.removeRow(record);
        }
    });
}

function btnMoveLeftClick() {
    let grid = $$("grid3");

    grid.eachRow(function(row,b,c,d) {
        let record = grid.getItem(row);

        if (record["ch1"] == "Y") {
            let obj = new Object();
            obj["ch1"] = "";
            obj["pgmId"] = record["menuId"];
            obj["pgmNm"] = record["menuNm"];

            $$("grid2").addRow(obj);
            grid.removeRow(record);
        }
    });
}
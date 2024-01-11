function initPage() {
    listener.button.search.click();
}

webix.ready(function() {
    webix.ui({
        id : "grid1",
        container : "grid1",
        view : "datagrid",
        columns : [
            {id:"ch1", header:{ content:"masterCheckbox", contentId:"mc1" }, css:"textCenter", checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}", width:30,editor: "checkbox"},
            {id: "pgmId", editor: "text", sort:"string", header: "프로그램ID", css: "textCenter", width : 150, required:true},
            {id: "pgmNm", editor: "text", sort:"string", header: "프로그램명", css:"textLeft", width: 230, required:true},
            {id: "pgmDesc", editor: "text", sort:"string", header: "프로그램설명", css: "textLeft", fillspace:true},
            {id: "pgmPath", editor: "text", sort:"string", header: "경로", css: "textLeft", fillspace:true},
            {id: "useYn", header: "사용여부", css: "textCenter", sort:"string", checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}",editor: "checkbox"},
            {id: "bigo", editor: "text", sort:"string", header: "비고", css: "textLeft", fillspace:true},
            {id: "oldPgmId", hidden:true},
            {id: "compCd", hidden:true}
        ]
    });

    $$("grid1").initGrid();

    $$("grid1").attachEvent("onBeforeEditStart", function(id){
        var record = $$("grid1").getItem(id.row);
        if( id.column == "pgmId" && checkEmpty(record["gstat"],"U") == "U" ){
            return false;
        }
    });

    $$("grid1").attachEvent("onAfterEditStop", function(state, editor, ignoreUpdate){
        if( checkEmpty(state.value,"") != checkEmpty(state.old,"")) {
            var record = $$("grid1").getItem(editor.row);
            record["gstat"] = (record["gstat"] == "I")?"I":"U";
        }
    });
    $$("grid1").attachEvent("onCheck", function(rowId, colId, state){
        var record = $$("grid1").getItem(rowId);
        record["gstat"] = (record["gstat"] == "I")?"I":"U";
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
listener.button.search.click = function () {
    var param = $("#searchArea").getData();
    param["compCd"] = USER_INFO.COMP_CD;

    //그리드초기화
    $$("grid1").clearData();

    var callback = new Callback(function(result) {
        let data = result.resultVO;
        //그리드에 값 세팅
        $$("grid1").setData(data);
    });
    param["queryid"] = "sy201.selectGrid";
    platform.postService("/common/selectList", param, callback);
}

//저장버튼
listener.button.save.click = function () {
    var grid = $$("grid1");

    if (!grid.checkValidation()) {
        return;
    }
    var selId = grid.getSelectedId(true, true)[0];

    var masterParam = grid.getSelectedItem();
    var records = grid.getData();
    var isPass = true;

    if(grid.getSelectedItem()){
        for(var i = 0, iLen = records.length; i<iLen; i++){
            var dupRecord = records[i];
            if(dupRecord["pgmId"] == masterParam["pgmId"] && selId != dupRecord.id){
                isPass = false;
            }
        }
    }

    if(!isPass){
        popup.alert.show("프로그램ID가 중복되었습니다.");
        return;
    }
    var param = new Array();
	
    grid.eachRow(function(row,b,c,d) {
        var record = grid.getItem(row);

        record["userId"] = USER_INFO.USER_ID;
        record["userIp"] = USER_INFO.USER_IP;
        record["compCd"] = USER_INFO.COMP_CD;
        if(record["gstat"] == "I" || record["gstat"] == "U"){
            param.push(record);
        }
    });

    if ( param.length < 1 ) return;

    //저장 후 실행할 내용
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

    platform.postService("/sy201/save", param, callback);
}

//삭제버튼
listener.button.del.click = function () {
    var grid = $$("grid1");

    var param = new Object();
    var delList = new Array();

    grid.eachRow(function(row,b,c,d) {
        var record = grid.getItem(row);

        if (record["ch1"] == "Y") {
            delList.push(record);
        }
    });

    if (delList.length == 0) {
        popup.alert.show("삭제할 데이터를 선택해주세요.", null);
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
            param["queryid"] = "sy201.deleteByPrimaryKey";
            param["data"] = delList;
            platform.postService("/common/deleteList", param, callback);
        }
    });
}

//행추가
listener.button.addRow.click = function(event) {
    var evt = event || window.event;
    var $el = $(evt.currentTarget);
    var gridId = $el.data("target");

    //추가 행 기본값 세팅
    $$(gridId).addRow({pgmId:"", pgmNm:"", pgmDesc:"", path:"", useYn:"Y", bigo:"", oldPgmId:"", gstat:"I"});
}

//행삭제
listener.button.removeRow.click = function(event) {
    var evt = event || window.event;
    var $el = $(evt.currentTarget);

    var gridId = $el.data("target");
    $$(gridId).removeSelectedRow();
}

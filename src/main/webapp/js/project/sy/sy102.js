var selectData1 = getSelectList("02", {"compCd":USER_INFO.COMP_CD, "useYn":"Y"},{nullable:false}); //기관코드정보

function initPage() {
    listener.button.search.click();
}

webix.ready(function() {
    webix.ui({
        id : "grid1",
		onKeyUp:{ 
        "rank_header" : function  (event, column, target) {
            webix.message("Click on header");
	        }
	    },

        container : "grid1",
        view : "datagrid",
        columns : [
            {id:"ch1", header:{ content:"masterCheckbox", contentId:"mc1" }, css:"textCenter", checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}", width:30 ,editor: "checkbox"},
            {id: "compCd", editor: "select", sort:"string", header: "기관", css: "textCenter", width : 120, options : selectData1, option:{required:true, total:false, custom:false, type:"select", code:"02", param:{"compCd":USER_INFO.COMP_CD, "useYn":"Y"}}},
            {id: "stdCd", editor: "text", sort:"string", header: "기준코드", css: "textCenter", width : 120,option:{maxlength:10, required:true}},
            {id: "stdNm", editor: "text", sort:"string", header: "기준명", css:"textLeft", width: 230, required:true},
            {id: "useYn", editor: "checkbox", header: "사용여부", css: "textCenter", sort:"string", checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}", width: 80 },
            {id: "stdVal", editor: "text", sort:"string", header: "기준값", css: "textLeft", fillspace:true},
            {id: "bigo", editor: "text", sort:"string", header: "비고", css: "textLeft", fillspace:true},
        ]
    });

    $$("grid1").initGrid();

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

    $$("grid1").attachEvent("onBeforeEditStart", function(id){
        let record = $$("grid1").getItem(id.row);

        if(checkEmpty(record["gstat"],"") != "I" && (id.column == "compCd" || id.column == "stdCd")){
            return false;
        }
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
    let param = $("#searchArea").getData();

    //그리드초기화
    $$("grid1").clearData();

    let callback = new Callback(function(result) {
        let data = result.resultVO;
        //그리드에 값 세팅
        $$("grid1").setData(data);
    });

    param["queryid"] = "sy102.selectGrid";
    platform.postService("/common/selectList", param, callback);
}

//저장버튼
listener.button.save.click = function() {
    let grid = $$("grid1");

    if (!grid.checkValidation()) {
        return;
    }
    let selId = grid.getSelectedId(true, true)[0];

    let masterParam = grid.getSelectedItem();
    let records = grid.getData();
    let isPass = true;

    if(grid.getSelectedItem()){
        for(let i = 0, iLen = records.length; i<iLen; i++){
            let dupRecord = records[i];
            if((dupRecord["compCd"] == masterParam["compCd"]) && (dupRecord["stdCd"] == masterParam["stdCd"]) && selId != dupRecord.id){
                isPass = false;
            }
        }
    }

    if(!isPass){
        popup.alert.show("기준코드가 중복되었습니다.");
        return;
    }

    let param = new Object();
    let saveList = new Array();

    //그리드 변경 값 적용
    grid.eachRow(function(row,b,c,d) {
        let record = grid.getItem(row);
        console.log("record",record)

        record["userId"] = USER_INFO.USER_ID;
        record["userIp"] = USER_INFO.USER_IP;

        if(record["gstat"] == "I" || record["gstat"] == "U"){
            record[DATA_SAVE_TYPE] = record["gstat"]; //공통 DATA_SAVE_TYPE 사용
            saveList.push(record);
        }
    });

    if(isEmpty(saveList)){
        popup.alert.show("저장할 자료가 없습니다.");
        return;
    }

    //저장 후 실행할 내용
    let callback = new Callback(function(result) {
        if(result.resultCode == POST_RESULT.SUCCESS){
            popup.alert.show("저장되었습니다", function() {
                listener.button.search.click();
            });
        }else{
            popup.alert.show("저장 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function() {
            });
        }
    });

    param["insertQueryId"] = "sy102.insert";
    param["updateQueryId"] = "sy102.updateByPrimaryKey";
    param["data"] = saveList;
    platform.postService("/common/saveList", param, callback);
}

//삭제버튼
listener.button.del.click = function () {
    let grid = $$("grid1");

    let param = new Object();
    let delList = new Array();

    grid.eachRow(function(row,b,c,d) {
        let record = grid.getItem(row);

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
            param["queryid"] = "sy102.deleteByPrimaryKey";
            param["data"] = delList;
            platform.postService("/common/deleteList", param, callback);
        }
    });
}

//행추가
listener.button.addRow.click = function(event) {
    let evt = event || window.event;
    let $el = $(evt.currentTarget);
    let gridId = $el.data("target");

    //추가 행 기본값 세팅
    $$(gridId).addRow({compCd:"", stdCd:"", stdNm:"", useYn:"Y", stdVal:"" ,bigo:"", gstat:"I"});
}

//행삭제
listener.button.removeRow.click = function(event) {
    let evt = event || window.event;
    let $el = $(evt.currentTarget);

    let gridId = $el.data("target");
    $$(gridId).removeSelectedRow();
}
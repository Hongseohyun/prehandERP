var selectData1 = getSelectList("01", {"compCd":USER_INFO.COMP_CD, "cdGb":"SY997"},{nullable:true});

function initPage() {
    listener.button.search.click();
    $("#searchArea").reset();
}

webix.ready(function() {
    grid = webix.ui({
        id : "grid1",
        container : "grid1",
        view : "datagrid",
        columns : [
            {id:"ch1", header:{ content:"masterCheckbox", contentId:"mc1" }, css:"textCenter", checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}", width:30},
            {id: "compCd", editor: "", sort:"string", header: "기관", css: "textCenter", width : 120, hidden:true},
            {id: "testGbCd", editor: "select", sort:"string", header: "구분", css: "textCenter", width : 120, options : selectData1, option:{required:true}},
            {id: "testText", editor: "text", sort:"string", header: "텍스트", css:"textLeft", width: 300, option:{maxlength:50, required:true}},
            {id: "testNum", editor: "text", sort:"int", header: "숫자", css: "textRight", width : 120, option:{maxlength:5}, format:intFormat},
            {id: "bigo", editor: "text", sort:"string", header: "비고", css:"textLeft", width: 300}
        ],
    });
    $$("grid1").initGrid();
    // 그리드 행 상태변경 이벤트들
    $$("grid1").attachEvent("onAfterEditStop", function(state, editor, ignoreUpdate){
        if(checkEmpty(state.value,"") != checkEmpty(state.old,""))
        {
            var record = $$("grid1").getItem(editor.row);
            record["gstat"] = (record["gstat"] == "I")?"I":"U";
        }
    });
    $$("grid1").attachEvent("onCheck", function(rowId, colId, state){
        var record = $$("grid1").getItem(rowId);
        record["gstat"] = (record["gstat"] == "I")?"I":"U";
    });
    // 그리드 수정시 PK 수정 불가 이벤트
    $$("grid1").attachEvent("onBeforeEditStart", function(id){
        var record = $$("grid1").getItem(id.row);

        if(checkEmpty(record["gstat"],"") != "I" && (id.column == "compCd" || id.column == "testGbCd")){
            return false;
        }
    });
});

//초기화 버튼
listener.button.init.click = function() {
    $("#searchArea").reset();
    $$("grid1").clearData();
}
//신규 버튼
listener.button.news.click = function() {

}
//조회버튼
listener.button.search.click = function () {
    let param = $("#searchArea").getData();
    $$("grid1").clearData();

    let callback = new Callback(function(result) {
        let data = result.resultVO;
        $$("grid1").setData(data);
    });

    if(param.logicType == "02"){
        //단위 프로그램 서비스 이용
        platform.postService("/sy997/selectGrid", param, callback);
    } else {
        //공통 조회 이용
        param["queryid"] = "sy997.selectGrid";
        platform.postService("/common/selectList", param, callback);
    }
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
            if((dupRecord["compCd"] == masterParam["compCd"]) && (dupRecord["testGbCd"] == masterParam["testGbCd"]) && selId != dupRecord.id){
                isPass = false;
            }
        }
    }

    if(!isPass){
        popup.alert.show("구분코드가 중복되었습니다.");
        return;
    }

    var param = new Object();
    var saveList = new Array();

    //그리드 변경 값 적용
    grid.eachRow(function(row,b,c,d) {
        var record = grid.getItem(row);

        record["userId"] = USER_INFO.USER_ID;
        record["userIp"] = USER_INFO.USER_IP;

        if(record["gstat"] == "I" || record["gstat"] == "U"){
            record[DATA_SAVE_TYPE] = record["gstat"]; //공통 저장시 DATA_SAVE_TYPE 사용
            saveList.push(record);
        }
    });

    if(isEmpty(saveList)){
        popup.alert.show("저장할 자료가 없습니다.");
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

    if($("#searchArea").getData()["logicType"] == "02"){
        //단위 프로그램 저장 이용
        platform.postService("/sy997/saveGrid", saveList, callback);
    } else {
        //공통 조회 이용
        param["insertQueryId"] = "sy997.insert";
        param["updateQueryId"] = "sy997.updateByPrimaryKey";
        param["data"] = saveList;
        platform.postService("/common/saveList", param, callback);
    }
    //공통 merge 이용(sql에 DB 제약 존재함)
    /*param["queryid"] = "sy997.merge";
    param["data"] = saveList;
    platform.postService("/common/mergeList", param, callback);*/
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
            if($("#searchArea").getData()["logicType"] == "02"){
                //단위 프로그램 삭제 이용
                platform.postService("/sy997/deleteGrid", delList, callback);
            } else {
                //공통 삭제 이용
                param["queryid"] = "sy997.deleteByPrimaryKey";
                param["data"] = delList;
                platform.postService("/common/deleteList", param, callback);
            }
        }
    });
}
//행추가
listener.button.addRow.click = function(event) {
    let evt = event || window.event;
    let $el = $(evt.currentTarget);
    let gridId = $el.data("target");

    //추가 행 기본값 세팅
    $$(gridId).addRow({compCd:USER_INFO.COMP_CD, testGbCd:"", testText:"", bigo:"", gstat:"I"});
}

//행삭제
listener.button.removeRow.click = function(event) {
    let evt = event || window.event;
    let $el = $(evt.currentTarget);
    let gridId = $el.data("target");

    $$(gridId).removeSelectedRow();
}

$(document).ready(function(){

});
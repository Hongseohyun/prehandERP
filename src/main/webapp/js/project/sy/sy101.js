var selectData1 = getSelectList("02", {"compCd":USER_INFO.COMP_CD, "useYn":"Y"},{nullable:true}); //queryId, parametr,

function initPage() {
    $(".rowButtonArea").formDisable();
    listener.button.search.click();
}

webix.ready(function() {
    webix.ui({
        id : "grid1",
        container : "grid1",
        view : "datagrid",
        columns : [
            {id:"ch1", header:{ content:"masterCheckbox", contentId:"mc1" }, css:"textCenter", template:"{common.checkbox()}", width:30 ,editor: "checkbox"},
            {id: "compCd", editor: "select", sort:"string", header: "기관", css: "textCenter", width : 120, options : selectData1, option:{required:true, total:false, custom:false, type:"select", code:"02", param:{"compCd":USER_INFO.COMP_CD, "useYn":"Y"}}},
            {id: "cd", editor: "text", sort:"string", header: "코드구분", css: "textCenter", width : 80, option:{maxlength:10, required:true}},
            {id: "cdNm", editor: "text", sort:"string", header: "코드구분명", css:"textLeft", width: 220, option:{maxlength:50, required:true}},
            {id: "attrNm1", editor: "text", sort:"string", header: "속성명1", css: "textLeft", width : 100, option:{maxlength:100}},
            {id: "attrNm2", editor: "text", sort:"string", header: "속성명2", css: "textLeft", width : 100, option:{maxlength:100}},
            {id: "attrNm3", editor: "text", sort:"string", header: "속성명3", css: "textLeft", width : 100, option:{maxlength:100}},
            {id: "attrNm4", editor: "text", sort:"string", header: "속성명4", css: "textLeft", width : 100, option:{maxlength:100}},
            {id: "attrNm5", editor: "text", sort:"string", header: "속성명5", css: "textLeft", width : 100, option:{maxlength:100}},
            {id: "bigo", editor: "text", sort:"string", header: "비고", width : 200, css:"textLeft"},
			{id: "dtlSysYn", hidden:true}
        ]
    });

    webix.ui({
        id : "grid2",
        container : "grid2",
        view : "datagrid",
        columns : [
            {id: "cd", editor: "text", sort:"string", header: "코드", css: "textCenter", width : 80, option:{maxlength:10, required:true}},
            {id: "cdNm", editor: "text", sort:"string", header: "코드명", css:"textLeft", width: 220, option:{maxlength:50, required:true}},
            {id: "sortno", editor: "text", sort:"int", header: "정렬순서", css:"textCenter", width: 80, option:{maxlength:3, required:true}, format:intFormat},
            {id: "useYn", header: "사용여부", css: "textCenter", sort:"string", width: 80, checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}" ,editor: "checkbox"},
            {id: "sysYn", header: "시스템여부", css: "textCenter", sort:"string", width: 100},
            {id: "attrNm1", editor: "text", sort:"string", header: "속성명1", css: "textLeft", width : 100, option:{maxlength:100}},
            {id: "attrNm2", editor: "text", sort:"string", header: "속성명2", css: "textLeft", width : 100, option:{maxlength:100}},
            {id: "attrNm3", editor: "text", sort:"string", header: "속성명3", css: "textLeft", width : 100, option:{maxlength:100}},
            {id: "attrNm4", editor: "text", sort:"string", header: "속성명4", css: "textLeft", width : 100, option:{maxlength:100}},
            {id: "attrNm5", editor: "text", sort:"string", header: "속성명5", css: "textLeft", width : 100, option:{maxlength:100}},
            {id: "bigo", editor: "text", sort:"string", header: "비고", width : 200, css:"textLeft"}
        ],
    });

    $$("grid1").initGrid();
    $$("grid2").initGrid();

    $$("grid1").attachEvent("onBeforeEditStart", function(id){
        var record = $$("grid1").getItem(id.row);

        if(checkEmpty(record["gstat"],"") != "I" && (id.column == "compCd" || id.column == "cd")){
            return false;
        }
    });

    $$("grid2").attachEvent("onBeforeEditStart", function(id){
        var record = $$("grid2").getItem(id.row);

        if(id.column == "sysYn"){
            return false;
        }

        if(checkEmpty(record["gstat"],"") != "I" && checkEmpty(record["sysYn"],"") == "Y"){
            return false;
        }
    });
});

listener.select.change = function($el) {
}

listener.gridRow.click = function(record, grid) {
    var param = record;
    var gridId = grid.config.id;

    if (gridId == "grid1") {

        $$("grid2").clearData();

        if(isEmpty(record["cd"])) {
            return;
        }

        param["cdGb"] = record["cd"];
        param["ob2"] = "Y";

        var callback = new Callback(function(result) {
            let data = result.resultVO;
            $("#rowButtonArea2").formEnable();
            $$("grid2").setData(data);
        });
        param["queryid"] = "sy101.selectGrid";
        platform.postService("/common/selectList", param, callback);
    }
}

listener.button.init.click = function () {
    $$("grid1").clearData();
    $$("grid2").clearData();
    $("#searchArea").reset();

    $("#rowButtonArea1").formDisable();
    $("#rowButtonArea2").formDisable();
}

listener.button.search.click = function () {
    if (!$("#searchArea").checkValidation()) {
        return;
    }
    var param = $("#searchArea").getData();

    $$("grid1").clearData();
    $$("grid2").clearData();

    var callback = new Callback(function(result) {
        let data = result.resultVO;
        $("#rowButtonArea1").formEnable();
        $$("grid1").setData(data);
    });

    param["cdGb"] = "999"; //상위코드
    param["ob1"] = "Y";
    param["queryid"] = "sy101.selectGrid";
    platform.postService("/common/selectList", param, callback);
}

listener.button.save.click = function () {
    var grid1 = $$("grid1");
    var grid2 = $$("grid2");

    if (!grid1.checkValidation() || !grid2.checkValidation()) {
        return;
    }

    var selId = grid1.getSelectedId(true, true)[0];

    if (isEmpty(selId)) {
        popup.alert.show("코드구분을 선택하신 후 저장해 주세요.");
        return;
    }

    var masterParam = grid1.getSelectedItem();
    var records = grid1.getData();
    var isPass = true;

    for (var i = 0, iLen = records.length; i < iLen; i++) {
        var record = records[i];

        if (record["compCd"] == masterParam["compCd"] && record["cd"] == masterParam["cd"] && selId != record.id) {
            isPass = false;
        }
    }

    if (!isPass) {
        popup.alert.show("코드구분이 중복되었습니다.");
        return;
    }

    masterParam["userId"] = USER_INFO.USER_ID;
    masterParam["userIp"] = USER_INFO.USER_IP;

    var detailParam = new Array();

    grid2.eachRow(function(row,b,c,d) {
        var record2 = grid2.getItem(row);

        record2["compCd"] 	= masterParam["compCd"];
        record2["cdGb"] 	= masterParam["cd"];
        record2["cdGbNm"]   = masterParam["cdNm"];

        detailParam.push(record2);
    });

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

    masterParam["detaillist"] = detailParam;
    
    platform.postService("/sy101/saveGrid", masterParam, callback);
}

listener.button.del.click = function () {
    var grid1 = $$("grid1");
    var masterParam = grid1.getCheckedData("ch1");

    if (isEmpty(masterParam)) {
        popup.alert.show("삭제할 자료가 없습니다.");
        return;
    }

	var bCk = false;
	var bCkRow;
	
    grid1.eachRow(function(row,b,c,d) {
        var record = grid1.getItem(row);
        if (record["ch1"] == 1 && record["dtlSysYn"] == "Y" && !bCk) {
			bCk = true;
			bCkRow = row;
	        return;
        }
    });

	if (bCk) {
		grid1.select(bCkRow);
	    popup.alert.show("시스템여부 Y가 포함된 공통코드는 삭제 할 수 없습니다.");
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
            platform.postService("/sy101/deleteGrid", masterParam, callback);
        }
    });
}

listener.button.addRow.click = function(event) {
    var evt = event || window.event;
    var $el = $(evt.currentTarget);
    var gridId = $el.data("target");

    if (gridId == "grid1") {

        var bCk = false;
        $$("grid1").eachRow(function(row,b,c,d) {
            var item = $$("grid1").getItem(row);
            if(checkEmpty(item["gstat"],"") == "I")
                bCk = true;
        });

        if(bCk){
            popup.alert.show("저장하신 후 행추가를 해주세요.");
            return;
        }
        var record = $$("grid1").getSelectedItem();

        $$(gridId).addRow({compCd:$("#P_CompCd").val(), cd:"", cdNm:"", sortno:"", bigo:"", sysYn:"N", useYn:"Y", attrNm1:"", attrNm2:"", attrNm3:"", attrNm4:"", attrNm5:"", gstat:"I"});
    } else if (gridId == "grid2") {
        var record = $$("grid1").getSelectedItem();

        if (isEmpty(record) || isEmpty(record["compCd"])) {
            popup.alert.show("코드구분 목록에서 선택해 주세요.");
            return;
        }

        $$(gridId).addRow({compCd:record["compCd"], cd:"", cdNm:"", sortno:"", bigo:"", sysYn:"N", useYn:"Y", attrNm1:"", attrNm2:"", attrNm3:"", attrNm4:"", attrNm5:"", gstat:"I"});
    }
}

listener.button.removeRow.click = function(event) {
    var evt = event || window.event;
    var $el = $(evt.currentTarget);

    var gridId = $el.data("target");
	

	if (gridId == "grid2"){
		var param = $$(gridId).getSelectedItem();
		
		if (param["sysYn"] == "Y"){
          	popup.alert.show("시스템여부가 Y인 코드는 삭제할 수 없습니다.");
          	return;	
		} else {
			$$(gridId).removeSelectedRow();	
		}
	} else {
		$$(gridId).removeSelectedRow();	
	}

    
}
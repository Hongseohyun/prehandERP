let selectData1 = getSelectList("02", {"compCd":USER_INFO.COMP_CD, "useYn":"Y"},{nullable:true}); //queryId, parametr,

function initPage() {
    $("#searchArea").reset();
    $("#searchArea input[name='p_gb']:checked").change();
    listener.button.search.click();
}

webix.ready(function() {
    grid = webix.ui({
        id : "grid1",
        container : "grid1",
        view : "datagrid",
        columns : [
            {id: "rnum", editor: "", header: "순번", sort: "int", css: "textCenter", width : 80},
            {id: "gb", editor: "", header: "구분", sort: "string", css: "textCenter", width : 120},
            {id: "hstrDt", editor: "", header: "로그일자", sort: "string", css: "textCenter", width : 150, format:dateFormat},
            {id: "hstrHh", editor: "", header: "로그시간", sort: "string", css: "textCenter", width : 120, format:timeFormat},
            {id: "regUserIp", editor: "", header: "IP", sort: "string", css: "textCenter", width : 180,},
            {id: "hstrSqor", editor: "", header: "순번", sort: "string", css: "textCenter", width : 100},
            {id: "compCd", editor: "select", header: "기관", sort: "string", css: "textCenter", options : selectData1, width : 120},
            {id: "userNm", editor: "", header: "이름", sort: "string", css: "textCenter", width : 150,},
            {id: "pgmId", editor: "", header: "프로그램ID", sort: "string", css: "textCenter", width : 120},
            {id: "pgmNm", editor: "", header: "프로그램명", sort: "string", css: "textLeft", width :200},
            {id: "tmp", editor: "", sort:"string", header: "", css:"textLeft", width: 100, fillspace:true},
        ]
    });
    // 그리드 readonly
    $$("grid1").attachEvent("onBeforeEditStart", function(id){
        return false;
    });
});

listener.select.change = function($el) {
}

listener.editor.keydown = function($el) {
}

listener.gridRow.click = function(record) {

}

listener.button.init.click = function() {
    $("#searchArea").reset();
    $("#searchArea input[name='p_gb']:checked").change();
    $("#dataCnt").text("");
    $$("grid1").clearData();
}

listener.button.news.click = function() {
}

listener.button.search.click = function () {
    if (!$("#searchArea").checkValidation()) {
        return;
    }
    let param = $("#searchArea").getData();

    let callback = new Callback(function(result) {
        let data = result.resultVO;
        $$("grid1").setData(data);
        $("#dataCnt").text("[조회 : " + data.length + " 건]");
    });

    if(param.gb == "menu"){
        param["queryid"] = "sy303.selectGrid2"; //메뉴로그
    }else {
        param["queryid"] = "sy303.selectGrid1"; //사용자로그
    }
    platform.postService("/common/selectList", param, callback);
}

listener.button.save.click = function () {

}

listener.button.del.click = function () {

}

$(function(){
    $("#searchArea input[name='p_gb']").on("change", function (){
        if($(this).val() == "menu"){
            if(grid._hidden_column_hash.pgmId){
                grid.showColumn("pgmId");
                grid.showColumn("pgmNm");
            }
        }else{
            if(!grid._hidden_column_hash.pgmId) {
                grid.hideColumn("pgmId");
                grid.hideColumn("pgmNm");
            }
        }
        $$("grid1").clearData();
    });
});
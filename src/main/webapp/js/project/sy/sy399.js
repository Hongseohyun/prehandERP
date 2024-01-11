$(document).ready(function(){
    $("#btnAttach").on("click", (e) =>{
        let parm = $("#searchArea").getData();
        popup.attach.show(parm, function(result){
            if(result.resultCode== POST_RESULT.SUCCESS){
                $('#atfiId').val(result.resultVO.atfiId);
            }
        });
    })
    $("#btnJuso").on("click", (e) =>{
        let param = {"addr1":"p_addr1","zipcd":"p_zipcd"} //주소조회 바인딩 할 input id
        param.callback = new Callback(function (result){
            //console.log("btnJuso:", result);
        });
        getJusoInfo(param);
    });
});

function initPage() {
    listener.button.search.click();
}

webix.ready(function() {
    grid = webix.ui({
        id : "grid1",
        container : "grid1",
        view : "datagrid",
        columns : [
            {id: "cdNm",   editor: "", header: "공통코드-권한명", sort: "string", css: "textCenter", width : 120},
            new CodeHelp("cd","권한코드",{width:150,css:"textCenter" }, { code: "01", target:"cdNm", param:{compCd:USER_INFO.COMP_CD,cdGb:"SY020"}} ),
            {id: "compNm", editor: "",     header: "기관명", sort: "string", css: "textCenter", width : 100},
            new CodeHelp("compCd","기관",{width:150,css:"textCenter" }, { code: "02", target:"compNm", param:{compCd:USER_INFO.COMP_CD}} ),
            {id: "userNm", editor: "",     header: "사용자명", sort: "string", css: "textCenter", width : 100},
            new CodeHelp("userId","사용자",{width:150,css:"textCenter" }, { code: "03", target:"userNm", param:{compCd:USER_INFO.COMP_CD}} ),
            {id: "deptNm", editor: "",     header: "팀명", sort: "string", css: "textCenter", width : 100},
            new CodeHelp("deptCd","팀",{width:150,css:"textCenter" }, { code: "04", target:"deptNm", param:{compCd:USER_INFO.COMP_CD}} ),
            {id: "deptUserNm", editor: "",     header: "팀/사용자명", sort: "string", css: "textCenter", width : 100},
            new CodeHelp("deptUserId","팀/사용자",{width:150,css:"textCenter" }, { code: "05", target:"deptUserNm", param:{compCd:USER_INFO.COMP_CD}} ),
        ],
    });

    $$("grid1").initGrid();
});

listener.select.change = function($el) {
}

listener.editor.keydown = function($el) {

}

listener.gridRow.click = function(record) {

}

listener.button.init.click = function() {
    $("#searchArea").reset();
    $$("grid1").clearData();
}

listener.button.news.click = function() {

}

listener.button.search.click = function () {
    $$("grid1").clearData();
    let data = {cd:'',cdNm:'',deptCd:'',deptNm:'',userId:'',userNm:'',compCd:'',compNm:'',deptUserId:'',deptUserNm:'', gstat:"I"};
    let searchParam = $("#searchArea").getData();
    console.log("searchParam", searchParam);

    grid.addRow(data);
}

listener.button.save.click = function () {
    let grid = $$("grid1");
    if (!grid.checkValidation()) {
        return;
    }
    let param = new Object();
    let saveList = new Array();
    grid.eachRow(function(row,b,c,d) {
        let record = grid.getItem(row);
        saveList.push(record);
    });

    param["regUserId"] = USER_INFO.USER_ID;
    param["regUserIp"] = USER_INFO.USER_IP;
    param["data"] = saveList;
    console.log("데이터 확인", param);
}

listener.button.del.click = function () {

}

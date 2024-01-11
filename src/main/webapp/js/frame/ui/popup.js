var popup_grid;
var popup = {
    alert : {
        callback : null,
        show : function(text, callback) {
            this.callback = callback;
            $("#alertText").css("height","50px;");
            $("#alertText").text(text);
            $("#alertPopupWindow").css("display", "block");
            $("#alertClose").focus();
        },

        hide : function() {
            $("#alertPopupWindow").css("display", "none");

            if (this.callback != null) {
                this.callback();
            }
        }
    },

    confirm : {
        callback : null,

        show : function(text, callback) {
            this.callback = callback;

            $("#confirmText").text(text);
            $("#confirmPopupWindow").css("display", "block");
            $("#confirmYes").focus();
            $("#confirmYes").data("isfoucs", "Y");
            $("#confirmNo").data("isfoucs", "N");
        },

        hide : function(val) {
            $("#confirmPopupWindow").css("display", "none");

            if (this.callback != null) {
                this.callback(val);
            }
        }
    },

    loading : {
        cnt : 0,

        show : function() {
            //console.log("show cnt: ", this.cnt, arguments);
            this.cnt++;
            $("#loadingPopupWindow").css("display", "block");
        },
        hide : function() {
            //console.log("hide cnt: ", this.cnt);
            this.cnt--;
            if (this.cnt <= 0) {
                this.cnt = 0;
                $("#loadingPopupWindow").css("display", "none");
            }
        },
    },

    help : {
        callback : null,
        isShow:false,
        show : function(code, value, param, callback, multiple) {
            this.isShow = true;
            let $this = this;
            this.callback = callback;
            _helpcode_set_helpGbNm(code);
            multiple = checkEmpty(multiple, false);

            $("#helpPopupWindow").css("display", "block");
            _helpcode_reset();

            $("#help_popup_code").val(value);
            param["cmminfo"] = $("#help_popup_code").val();


            $("#helpSearchArea").find("input:not([type=hidden]):first").focus();

            //console.log("grid check", $$("help_popup_grid1"));
            //if (!$$("help_popup_grid1")) {
            if (true) {
                var columns = [];

                if (multiple) {
                    columns.push({id:"help_popup_check1", header:{ content:"masterCheckbox", contentId:"help_popup_mastercheck1" }, css:"textCenter", template:"{common.checkbox()}", width:30});
                }

                columns.push({id:"code", header:"코드", editor:"", sort:"string", css:"textCenter", width:150, fillspace:false});
                columns.push({id:"name", header:"명", editor:"", sort:"string", css:"textLeft", width:120, fillspace:true});

                if (popup_grid) {
                    popup_grid.destructor();
                }

                webix.ready(function() {
                    popup_grid = webix.ui({
                        id : "help_popup_grid1",
                        container : "help_popup_grid1",
                        view : "datagrid",
                        columns : columns,
                    });

                    popup_grid.attachEvent("onKeyPress", function(code,e){
                        if(code === KEY_ESC && $this.isShow) {
                            popup.help.hide();
                        }
                    })

                    var help_callback = new Callback(function(result) {
                        $$("help_popup_grid1").setData(result);
                    });

                    param.queryId = code;
                    platform.postService("/getCodeName", param, help_callback);

                    $("#help_popup_search").on("click", function() {
                        __helpcode_popup_search(code, param);
                    });

                    $("#help_popup_select").on("click", function() {
                        var grid = $$("help_popup_grid1");
                        var record = grid.getItem(grid.getSelectedId());

                        if (multiple) {
                            let checkedData = grid.getCheckedData("help_popup_check1");
                            if(checkedData.length === 0 && !record ) return false;
                            checkedData = checkedData.length === 0 ? [record] : checkedData;
                            popup.help.callback.callback(checkedData);
                        } else {
                            if(!record) return false;
                            popup.help.callback.callback(record);
                        }

                        popup.help.hide(true);
                    });
                });

                $$("help_popup_grid1").attachEvent("onItemDblClick", function(id, e, node){
                    var record = $$("help_popup_grid1").getItem(id.row);

                    if (multiple) {
                        let checkedData = popup_grid.getCheckedData("help_popup_check1");
                        let addFlag = true;
                        $.each(checkedData, (idx, obj) => {
                            if (obj.id== record.id) { addFlag = false; return false; }
                        });
                        if (addFlag) checkedData.push(record);

                        popup.help.callback.callback(checkedData);
                    } else {
                        popup.help.callback.callback(record);
                    }

                    popup.help.hide(true);
                });

                $("#help_popup_code").bind( "keydown", function(evt) {
                    if(evt.which  === 13 && $this.isShow) {
                        __helpcode_popup_search(code, param);
                    }
                });

            } else {
                var help_callback = new Callback(function(result) {
                    $$("help_popup_grid1").setData(result);
                });

                param.queryId = code;
                platform.postService("/getCodeName", param, help_callback);
            }
        },
        hide : function(ignore = false) {
            this.isShow = false;
            $("#helpPopupWindow").css("display", "none");
            $("#help_popup_search").off("click");
            $("#help_popup_select").off("click");
            $$("help_popup_grid1").clearData();
            $("#help_popup_code").unbind("keydown")
            if(ignore) return ;

            if(this.callback && this.callback.callback) this.callback.callback();

        }
    }
}

function __helpcode_popup_search(code, param) {

    console.log("param", param);
    console.log("code", code);

    param["cmminfo"] = $("#help_popup_code").val();

    var helpcode_callback = new Callback(function(result) {
        $$("help_popup_grid1").setData(result);
    });


    param.queryId = code;
    platform.postService("/getCodeName", param, helpcode_callback);
}

function _helpcode_reset() {
    $("#help_popup_code").val("");
}

function _helpcode_set_helpGbNm(code) {
    let helpGbNm = "";
    if(code == "01"){
        helpGbNm = "공통코드 ";
    }else if (code == "02"){
        helpGbNm = "회사코드 ";
    }else if (code == "03"){
        helpGbNm = "사용자 ";
    }else if (code == "04"){
        helpGbNm = "팀 ";
    }else if (code == "05"){
        helpGbNm = "팀/사용자 ";
    }
    $(".helpGbNm").text(helpGbNm);
}

function _confirmKeyEvt(evt) {
    if(evt.keyCode == 13){
        if($("#confirmYes").data("isfoucs") == "Y"){
            popup.confirm.hide(true);
        }else{
            popup.confirm.hide(false);
        }
    }

    if(evt.keyCode == 37 || evt.keyCode == 39){
        if($("#confirmYes").data("isfoucs") == "Y"){
            $("#confirmYes").data("isfoucs", "N");
            $("#confirmNo").data("isfoucs", "Y");

            $("#confirmNo").focus();
        }else{
            $("#confirmYes").data("isfoucs", "Y");
            $("#confirmNo").data("isfoucs", "N");

            $("#confirmYes").focus();
        }
    }
}

$(document).ready(function() {
    $("#alertContainer").draggable({
        containment: "parent",
        cursor: "move"
    });
    $("#confirmContainer").draggable({
        containment: "parent",
        cursor: "move"
    });
    $("#helpContainer").draggable({
        containment: "parent",
        cursor: "move"
    });

    $("#helpPopupWindow").on("keydown", e => {
        if(e.keyCode === KEY_ESC){
            popup.help.hide();
        }
    })


    $("#alertPopupWindow").on("keydown", e => {
        if(e.keyCode === KEY_ESC){
            popup.alert.hide();
        }
    })
})
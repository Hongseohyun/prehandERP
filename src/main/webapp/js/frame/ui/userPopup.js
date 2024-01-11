var user_popup_grid;
$(document).ready(function() {

    popup.user = {
        callback : null,
        isShow : false,
        show : function(code, param, callback) {
            this.isShow = true;
            $("#userPopupWindow").css("display", "block");
            let $this = this;
            //console.log("user3", callback);
            popup.user.callback = callback;

            __user_reset();

            if(!isEmpty(param["userinfo"])) $("#user_userinfo").val(param["userinfo"]);
            $("#userSearchArea").find("input:not([type=hidden]):first").focus();

            if (!$$("user_popup_grid1")) {
                webix.ready(function() {
                    user_popup_grid = webix.ui({
                        id : "user_popup_grid1",
                        container : "user_popup_grid1",
                        view : "datagrid",
                        columns : [
                            {id : "rnum", header : "순번", editor : "", sort : "int", css : "textCenter", width : 50, fillspace : false},
                            {id : "userId", header : "사용자ID", editor : "", sort : "string", css : "textCenter", width : 100, fillspace : true},
                            {id : "userNm", header : "사용자명", editor : "", sort : "string", css : "textCenter", width : 100, fillspace : true},
                            {id : "deptNm",  header: "팀", editor : "", sort: "string", css: "textLeft", width : 160},
                            // {id : "COMP_CD", header : "소속코드", editor : "", sort : "string", css : "textCenter", width : 100, fillspace : true},
                        ],
                    });

                    __user_popup_search(param);

                    $("#user_popup_search").click(function() {
                        __user_popup_search(param);
                    });

                    $("#user_popup_select").click(function() {
                        var grid = $$("user_popup_grid1");
                        var record = grid.getItem(grid.getSelectedId());

                        if(!record) return false;

                        popup.user.callback.callback(record);
                        popup.user.hide(true);

                    });
                });

                $$("user_popup_grid1").attachEvent("onItemDblClick", function(id, e, node){
                    var record = $$("user_popup_grid1").getItem(id.row);
                    popup.user.callback.callback(record);
                    popup.user.hide(true);
                });

                $("#user_userinfo").bind( "keydown", function(evt) {
                    if(evt.which  === 13 && $this.isShow) {
                        __user_popup_search({});
                    }
                });
            } else {
                $$("user_popup_grid1").adjust();

                __user_popup_search(param, callback);
            }
        },
        hide : function(ignore = false) {
            this.isShow = false;
            $("#userPopupWindow").css("display", "none");
            if(ignore) return ;

            popup.user.callback.callback();
        }
    };

    $("#userContainer").draggable({
        containment: "parent",
        cursor: "move"
    });


    $("#userPopupWindow").on("keydown", e => {
        if(e.keyCode === KEY_ESC){
            popup.user.hide();
        }
    })

});

function __user_popup_search(param) {
    var param = $("#userSearchArea").getData();
    param["compCd"] = USER_INFO.COMP_CD;
    var user_callback = new Callback(function(result) {
        let data = result.resultVO;
        $$("user_popup_grid1").setData(data);
    });

    param.queryid = "popup.selectUserPopupList";
    platform.postService("/common/selectList", param, user_callback);
}

function __user_reset() {
    $("#user_userinfo").val("");
}
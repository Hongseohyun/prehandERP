let __parm;
let isModify = false;

function initFrame(parm){
    __parm = parm;

    $("#retiDd").on( "blur", function() {
        $("#useYn_N").prop("checked",true);
    });

    $("#postForm").reset();
}

function initPage() {
}

listener.button.save.click = function () {
    var $form = $("#postForm");
    var formData = $form.getData();
    if (!$form.checkValidation()) {
        return;
    }

    var parm = {};
    parm["data"] = __parm;

    $(parm["data"]).each(function(){
        this.loginId = USER_INFO.USER_ID;
        this.loginIp = USER_INFO.USER_IP;
        this.loginNm = USER_INFO.USER_NM;
        this.enteDd = replcDate(formData.enteDd);
        this.retiDd = replcDate(formData.retiDd);
        this.useYn = formData.useYn;
        this.comuMngrYn = formData.comuMngrYn;
        this[DATA_SAVE_TYPE] = DATA_SAVE_UPDATE;
    });

    parm["updateQueryId"] = "sy301p1.save";
    parm["insertQueryId"] = "sy301p1.save";

    var callback = new Callback(function(result) {
        if(result.resultCode == POST_RESULT.SUCCESS){
            popup.alert.show("저장되었습니다", function() {
                isModify = true;
                top.customPopup.hide(isModify);
            });
        }else{
            popup.alert.show("저장 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function() {
            });
        }
    });
    console.log(parm);
    platform.postService("/common/saveList",parm, callback);
}

listener.button.close.click = function () {
    top.customPopup.hide(isModify);
}


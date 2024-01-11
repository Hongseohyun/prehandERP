$(document).ready(function(){
});

function initPage() {
}

function initFrame(param) {
    console.log(param);
}

listener.button.close.click = function(data) {
    customPopup.hide(data);
}

listener.button.save.click = function () {
    var $form = $("#postForm");
    var param = $form.getData();

    if (!$form.checkValidation()) {
        return;
    }

    if (param["pwd"] !== param["pwdChk"]) {
        popup.alert.show("변경 비밀번호를 확인하세요.");
        return false;
    }
    if (!ckRegPwd(param["pwdChk"])) {
        popup.alert.show("영문, 숫자, 특수문자를 조합한\r\n패스워드를 입력해 주세요.(6 ~ 18자리 )", function (result) {
            $("#pwdChk").select();
        });
        return;
    }

    param["pwdChk"] = $.rc4EncryptStr(param["pwdChk"], KEY_ETC);
    param["pwd"] = $.rc4EncryptStr(param["pwd"], KEY_ETC);

    param["updateUserId"] = USER_INFO.USER_ID;
    param["updateUserIp"] = USER_INFO.USER_IP;

    var callback = new Callback(function (result) {
        if (result.resultCode == POST_RESULT.SUCCESS) {
            popup.alert.show("저장되었습니다", function () {
                listener.button.close.click();
            });
        } else {
            popup.alert.show("저장 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function () {
            });
        }
    });

    platform.postService("/myInfo/save", param, callback);
}

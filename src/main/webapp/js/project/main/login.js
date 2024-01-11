$(document).ready(function() {
    if (localStorage && localStorage.getItem("SAVEID") == "Y") {
        var info = {};
        info["userId"] = localStorage.getItem("USERID");
        info["saveID"] = localStorage.getItem("SAVEID");

        $("#searchForm").setData(info);
    }

    if(isEmpty($("#loginID").val())){
        $("#loginID").focus();
    }
    else{
        $("#loginPW").focus();
    }

    $("#loginPW").on("keydown",function(evt){
        if(evt.keyCode == 13){
            btnLoginClick();
        }
    });

    $("#loginID").on("keydown",function(evt){

        /*evt.keyCode != 13*/
        if(($(this).prop("maxlength") == this.value.length)){
            $(this).addClass('item-maxlength');
        }
        else{
            $(this).removeClass('item-maxlength');
        }
    });

    $('#loginID').on('blur',function(evt){
        $(this).removeClass('item-maxlength');
    });


});

listener.button.search.click = function() {
    btnLoginClick();
}

function btnLoginClick() {
    var $form = $("#searchForm");

    if (!$form.checkValidation()) {
        return;
    }

    var param = $form.getData();
    param["passWd"] = $.rc4EncryptStr(param["passWd"], KEY_ETC);

    var callback = new Callback(function(result) {
        console.log(result)
        if (isEmpty(result.loginResultCode) || result.loginResultCode === "1001" || result.loginResultCode === "1002") {
            popup.alert.show("로그인 정보를 확인하세요", function() {
                $("#loginPW").focus();
            });
            return;
        } else if(result.loginResultCode === "1004") {
            popup.alert.show("해당 계정은 잠금처리 되었습니다.\r\n관리자에게 문의하세요.", function() {
                $("#loginID").focus();
            });
            return;
        } else if(result.loginResultCode === "1003") {
            popup.alert.show("해당 계정은 만료되었습니다.\r\n관리자에게 문의하세요.", function() {
                $("#loginID").focus();
            });
            return;
        } else if(result.loginResultCode === "1005") {
            popup.alert.show("해당 계정은 승인되지 않았습니다.\r\n관리자에게 문의하세요.", function() {
                $("#loginID").focus();
            });
            return;
        } else if(result.loginResultCode === "1000") {
            localStorage.setItem("USERID", param["userId"]);
            localStorage.setItem("SAVEID", param["saveID"]);
            //localStorage.setItem("PWDCHGNEEDYN", result["rPwdChgNeedYn"]);loginProcess
            //localStorage.setItem("PWDINITYN", result["rPwRstYn"]);
            //localStorage.setItem("showNone", result["rPopUpYn"]);

            //document.location = commonContextPath + "/main";
            window.parent.document.location = commonContextPath + "/main";

            /*if(result.rPwdChgNeedYn === "Y" || result.rPwRstYn === "Y"){
                var msg = (result.rPwdChgNeedYn === "Y")?"패스워드가 초기화 되었습니다.\r\n패스워드 변경 화면으로 이동합니다.":"패스워드 변경일이 도래하였습니다.\r\n패스워드 변경 화면으로 이동합니다.";
                popup.alert.show(msg, function() {
                    document.location = commonContextPath + "/pwdChange";
                });
            }else {
                document.location = commonContextPath + "/main";
            }*/
        }
    });
    platform.postService("/loginProcess", param, callback);
}
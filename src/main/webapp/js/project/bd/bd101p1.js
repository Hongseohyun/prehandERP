let editor1;
let returnResult = {isModify : false, isDelete : false};
let __parm;

function initFrame(parm){
    __parm = parm;
}

function initPage() {
    isModify = false;

    $("#postForm").editMode(__parm["editMode"]);
    if(__parm["editMode"] == 'new'){
        $('#postRegUserNm').val(USER_INFO.USER_NM);
        $('#del').hide();
    }
    if(__parm["editMode"] == 'edit'){
        $('#postForm').setData(__parm);
        $('#del').show();
    }

    editor1 = CKEDITOR.replace("annoCont", {
        filebrowserUploadUrl: platformContext + "/CKESave",
        on: {
            instanceReady: function(evt) {
                evt.editor.resize($("#editor1Container").width(), $("#editor1Container").height());
            },
            loaded: function(evt) {
            },
            change: function(evt) {
            },
            dataReady: function(evt) {
            },
            afterSetData: function(evt) {
            },
        }
    });
    getAtfi();
}

listener.button.save.click = function () {
    let $form = $("#postForm");
    let param = $form.getData();

    if (!$form.checkValidation()) {
        return;
    }

    let formData = new FormData($("#postForm")[0]);

    formData.set("annoCont",param['annoCont']);
    formData.append('userId',USER_INFO.USER_ID);
    formData.append('userIp',USER_INFO.USER_IP);
    formData.append('userNm',USER_INFO.USER_NM);
    formData.set("insertQueryId", "bd101p1.save");
    formData.set("updateQueryId", "bd101p1.update");
    formData.set("regPgmId", "BD101P01_ATTACH");

    if(param["editMode"] == 'new'){
        formData.set("compCd",USER_INFO.COMP_CD);
        formData.set(DATA_SAVE_TYPE, DATA_SAVE_INSERT);
    }else{
        formData.set(DATA_SAVE_TYPE, DATA_SAVE_UPDATE);
    }

    let callback = new Callback(function(result) {
        if(result.resultCode == POST_RESULT.SUCCESS){
            popup.alert.show("저장되었습니다", function() {
                returnResult.isModify = true;
                returnResult.isDelete = false;
                top.customPopup.hide(returnResult);
            });
        }else{
            popup.alert.show("저장 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function() {
            });
        }
    });
    platform.postFileService("/common/uploadFileList",formData, callback);
}


listener.button.del.click = function () {
    popup.confirm.show("삭제 하시겠습니까?", function(result) {
        if (result) {
            let callback = new Callback(function(result) {
                if(result.resultCode == POST_RESULT.SUCCESS){
                    popup.alert.show("삭제되었습니다", function() {
                        returnResult.isModify = false;
                        returnResult.isDelete = true;
                        top.customPopup.hide(returnResult);
                    });
                }else{
                    popup.alert.show("삭제 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function() {
                    });
                }
            });

            let $form = $("#postForm");
            let param = $form.getData();
            param['userId'] = USER_INFO.USER_ID;
            param['userIp'] = USER_INFO.USER_IP;

            platform.postService("/bd101/delete", param, callback);
        }
    });
}

listener.button.close.click = function () {
    top.customPopup.hide();
}

function getAtfi(){

    $('#atfiArea').empty();
    let $form = $('#postForm');
    let parm = $form.getData();

    if(parm['atfiId'] == '' || parm['atfiId'] ==null || parm['atfiId'] == undefined){
        return;
    }

    let callback = new Callback(function(result) {
        $(result.resultVO).each(function(){
            setAtfi(this);
        });
    });

    parm["queryid"] = "common.selectAttachList";
    platform.postService("/common/selectList", parm, callback);
}

function setAtfi(data){
    let el = document.createElement('div');
    let html = '';

    let fileName = data.origFileNm;
    let fileSize = data.fileSize / 1014 / 1014;
    fileSize = fileSize < 1 ? fileSize.toFixed(3) : fileSize.toFixed(1);
    html += "<span class='origFileNm'>"+fileName+"</span>" +
        "<span class='fileSize'>("+fileSize+" MB)</span>" +
        "<span class='clear'>" + '삭제' + " </span>";
    $(el).addClass('attach-item');
    $(el).data('dataitem',data);
    $(el).html(html);
    $(el).find('.clear').on('click',function(){

        let parm = $(this).parents('.attach-item').data('dataitem');
        parm.userId = USER_INFO.USER_ID;
        parm.userIp = USER_INFO.USER_IP;

        popup.confirm.show("삭제 하시겠습니까?", function(result) {
            returnResult.isModify = false;
            returnResult.isDelete = true;
            if (result) {
                let callback = new Callback(function(result) {
                    if(result.resultCode == POST_RESULT.SUCCESS){
                        popup.alert.show("삭제되었습니다", function() {
                            getAtfi();
                            let data1 = $('#postForm').getData();
                            if(parent[__parm.parentName].getGrid2){
                                parent[__parm.parentName].getGrid2(data1);
                            }
                        });
                    }else{
                        popup.alert.show("삭제 중 문제가 발생되었습니다.\r\n관리자에게 문의하세요.", function() {
                        });
                    }
                });

                platform.postService("/common/deleteFile", parm, callback);
            }
        });
    });

    $('#atfiArea').append(el);

}
//저장파일 배열
var fileList = [];
var __parm = {};

function attach_popup_select_change (){
    var files = document.getElementById('attach_popup_select').files;
    setAttach(files);
}







$(document).ready(function() {

    //드래그앤드랍
    $("#attachDrop").on("dragenter", function(e){
        e.preventDefault();
        e.stopPropagation();
    }).on("dragover", function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).css("background-color", "#aaaaaa");
    }).on("dragleave", function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).css("background-color", "#cccccc");
    }).on("drop", function(e){
        e.preventDefault();

        var files = e.originalEvent.dataTransfer.files;
        setAttach(files);
    });

    popup.attach = {
        callback : null,

        show : function( parm, callback ) {

            __attach_reset();
            popup.attach.callback = callback;
            __parm = parm;
            $("#attachPopupWindow").css("display", "block");

        },
        hide : function() {
            $("#attachPopupWindow").css("display", "none");
        }
    };

    $("#attachContainer").draggable({
        containment: "parent",
        cursor: "move"
    });

    $('#attach_popup_confirm').on('click',function(){
        __attach_save();
    });
});

function setAttach(files){

    if(files == null || files == undefined){
        return false;
    }

    let envFileSize= parseInt(checkEmpty(getSystemEnv(USER_INFO.COMP_CD, 'ES003').stdVal), 10) / 1024 / 1024;
    let envExt = getSystemEnv(USER_INFO.COMP_CD, 'ES009').stdVal;
    let envExtList = envExt.split("|");

    for(i=0; i<files.length; i++){
        var f = files[i];
        fileList.push(f);
        var fileName = f.name;
        //파일 사이즈
        var fileSize = f.size / 1024 / 1024;

        if(fileSize == 0){
            fileList.remove(fileList.length -1);
            top.popup.alert.show("파일이 올바르지 않습니다.");
            return true;
        }

        if(fileSize > envFileSize){
            fileList.remove(fileList.length -1);
            top.popup.alert.show(`용량이 ${envFileSize}M를 초과되었습니다.`);
            return true;
        }

        // 파일확장자 확인
        var ext = fileName.slice(fileName.lastIndexOf(".") + 1).toLowerCase();

        if(envExtList.indexOf(ext) < 0){
            fileList.remove(fileList.length -1);
            top.popup.alert.show("허용되지 않는 첨부파일 입니다.");
            return true;
        }

        fileSize = fileSize < 1 ? fileSize.toFixed(3) : fileSize.toFixed(1);
        var el = document.createElement('div');
        $(el).addClass('fileList');``
        var html =  "<span class='fileName'>"+fileName+"</span>" +
            "<span class='fileSize'>"+fileSize+" MB</span>" +
            "<span class='clear'> X </span>" ;
        $(el).data('dataitem',f);

        $(el).html(html);
        $(el).find('.clear').on('click',function(){
            const fileEl = $(this).parents('.fileList');
            const dataitem = $(fileEl).data('dataitem');

            for(var i=0; i< fileList.length; i++){
                if(fileList[i].name == dataitem.name){
                    $(fileEl).remove();
                    fileList.remove(i);
                    return false;
                }
            }
        });
        $('#attachDrop').append(el);
    }

    $('#attachDrop').css("background-color", "#FFF");
}

function __attachFileChange(){

}

function __attach_save(){

    var formData = new FormData($("#attachPopupForm")[0]);
    if(fileList.length > 0){
        fileList.forEach(function(f){
            formData.append("atfiFile", f);
        });
    }else{
        popup.attach.hide();
        return false;
    }

    formData.append('compCd', USER_INFO.COMP_CD);
    formData.append('userIp', USER_INFO.USER_IP);
    formData.append('userId', USER_INFO.USER_ID);
    formData.set("regPgmId", "FILE_POPUP_ATTACH");

    if(__parm.atfiId){
        formData.append('atfiId', __parm.atfiId);
    }

    var callback = new Callback(function(result) {
        popup.attach.hide();
        popup.attach.callback(result);
    });


    //platform.postFileService("/cm201Save", formData, callback);
    platform.postFileService("/common/uploadFileList",formData, callback);
}

function __attach_reset() {
    $('#attachForm').reset();
    $('#attachDrop').css("background-color", "#aaaaaa");
    $('#attachDrop').html('');
    fileList = [];
    __parm = {};
}

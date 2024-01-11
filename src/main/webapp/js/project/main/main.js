var mainPgmId = "";
var _openParm = {};

$(document).ready(function() {

    setMenuEvent();


    $('.toggle-sidebar-button').click();

    $(".LogOutImg").click(function() {
        btnLogoutClick();
    });

    $("#userInfo").click(function() {
        let callback = new Callback(function () { });
        customPopup.show("/myInfo?programId=SY000P1", "내정보", 750, 250, callback, { });
    });

    $('#btnAtte').click(function () {
        btnAtteClick();
    })

    $('#btnLeav').click(function () {
        btnLeavClick();
    })

    $("#closeAllTab").click(function (){
        $(".onTabClose").trigger("click")
    })

    $('#btnMoveLeft').click(function(){
        tabNavi.moveTabLeft();
    });
    $('#btnMoveRight').click(function(){
        tabNavi.moveTabRight();
    });

    //getMessageBox();

    //개발 초기화면 선택
/*
    if($('.btnProgram[data-program-id="CM103"]').length){
        $('.btnProgram[data-program-id="CM103"]').click();
    }else{
        $('.btnProgram[data-program-id="BD101"]').click();
    }
*/
    $('.btnProgram[data-program-id="'+$("#firstPgmId").text()+'"]').click();


    $('.sidebar-top-level-item-header').on("mouseover",function (e){
        /*const imgSrc = $(this).children().get(0).children[0].src;
        if(imgSrc.indexOf("-ov") === -1) {
            $(this).children().get(0).children[0].src = imgSrc.replace(".png","-ov.png")
        }*/
        let el = $(this).children().get(0).children[0];
        const imgOvSrc = $(el).data("img-ov");
        if (!isEmpty(imgOvSrc)){
            el.src = imgOvSrc;
        }else {
            el.src = $(el).data("img");
        }
    })

    $('.sidebar-top-level-item-header').on("mouseleave",function (e){
        /*const imgSrc = $(this).children().get(0).children[0].src;
        if(imgSrc.indexOf("-ov") !== -1) {
            $(this).children().get(0).children[0].src = imgSrc.replace("-ov.png",".png")
        }*/
        let el = $(this).children().get(0).children[0];
        el.src = $(el).data("img");
    })

    $(window).resize( function() {
        let otherWidth = $("#subMenuArea").outerWidth()+$("#btnMoveLeft").outerWidth()+$("#btnMoveRight").outerWidth();
        $("#tabContainer").css("width", $(window).width()-otherWidth-40);
    });
    setTimeout(() => $(window).trigger('resize'), 300);//메뉴Area 사이즈 조정까지 기다림
});

function setMenuEvent() {

    //sidebar toggle
    $('.toggle-sidebar-button').click(function(){
        $('.sidebar-top-level-item').removeClass('active');
        $('#subMenuArea').toggleClass('open');
        if($('#subMenuArea').hasClass('open')){
            $('#programArea').css({
                'width':'100%',
                'transition' : 'width 0.3s'
            });
            $('#menuArea').css({
                'width':'220px',
                'transition' : 'width 0.3s'
            });
        }else{
            $('#programArea').css({
                'width':'100%',
                'transition' : 'width 0.3s'
            });
            $('#menuArea').css({
                'width':'60px',
                'transition' : 'width 0.3s'
            });
        }
    });

    //menu toggle
    $('.sidebar-top-level-item').click(function(event){
        if($('#subMenuArea').hasClass('open')){

            $(this).toggleClass('active');

            if($(this).hasClass('active')){
                $(this).find('.sidebar-sub-level-items').css({
                    'margin-top' : '0px',
                });
            }
            else{
                let y = $('#subMenuArea').scrollTop();

                $(this).find('.sidebar-sub-level-items').css({
                    'margin-top' : (-54 - y) +'px',
                });
            }

        }
    });

    //menu toggle css
    $('.sidebar-top-level-item').mouseover(function(){

        let items = $(this).find('.sidebar-sub-level-items');
        if($(this).hasClass('active')){
            $(items).css({
                'margin-top' : '0px',
            });
        }else{
            let y = $('#subMenuArea').scrollTop();
            let x = $('#subMenuArea').hasClass('open') ? 0 : 15;
            $(items).css({
                'margin-top' : (-y -54) +'px',
                'margin-left' : (x) +'px'
            });
        }
    });

    //menu toggle css
    $('.sidebar-top-level-item').mouseleave(function(){
        let items = $(this).find('.sidebar-sub-level-items');
        $(items).css({
            'margin-top' : '0px',
        });
    });

    $(".btnProgram").click(function(event) {
        event.preventDefault();
        event.stopPropagation();

        $this = $(this);

        var form = $("form#subMenuArea")[0];

        var programObj = new Object();
        var programPath = $this.data("program-path");

        if(isEmpty(programPath)) {
            popup.alert.show("프로그램 Path정보가 없어서 실행할 수 없습니다.");
            return;
        }

        $("#programId").val($this.data("program-id"));
        $("#programName").val($this.data("program-name"));
        $("#programPathName").val($this.data("program-path-name"));
        $("#bizGb").val($(".menuBtn.selected").html());

        var programId = $("#programId").val();
        var programName = $("#programName").val();

        if(document.getElementById("programId" + programId) || programId == mainPgmId){
            viewTab(programId);
        }
        else{
            if(document.getElementsByClassName("programDiv").length >= tabNavi.maxOpenCnt){
                popup.alert.show("프로그램을 더 열수 없습니다.\r\n최대 오픈가능 프로그램은 "+tabNavi.maxOpenCnt+"개입니다.");
                return;
            }

            tabNavi.addItem(programId, programName);

            // IFRAME 추가
            var elDiv = document.createElement("DIV");
            elDiv.id = "programId" + programId;
            elDiv.className = "programDiv";
            elDiv.setAttribute("pgm_id", programId);
            var elIframe = document.createElement("IFRAME");
            elIframe.id = "programFrame" + programId;
            elIframe.name = "programFrame" + programId;
            elIframe.style.width = "100%";
            elIframe.style.height = "100%";
            elIframe.setAttribute("frameborder", "0");
            elIframe.setAttribute("scrolling", "no");
            elDiv.appendChild(elIframe);
            document.getElementById("programArea").appendChild(elDiv);
            form.target = elIframe.id;
            form.action = commonContextPath + programPath;
            form.submit();

            $("body").removeClass("mainBg");
            $(".clsSubMenu dl[data-selected='Y']").attr("data-selected", "N");
            $(".clsSubMenu li[data-selected='Y']").attr("data-selected", "N");

            $this.parent().closest("div").attr("data-selected", "Y");
            $this.attr("data-selected", "Y");
            viewTab(programId);
        }
    });
}

function btnLogoutClick() {
    popup.confirm.show("로그아웃 하시겠습니까?", function(bool) {
        if(bool) {
            try {
                var param = {"COMP_CD":USER_INFO.COMP_CD, "USER_ID":USER_INFO.USER_ID, "USER_IP":USER_INFO.USER_IP};
                var callback = new Callback(function(result) {
                    document.location = commonContextPath + '/login';
                });
                callback.setShowLoading(false);
                platform.postService("/logout", param, callback);
            } catch (e) {}
        }
    });
}

function btnMenu(bObj){
    var param = {"PGM_ID":checkEmpty($("#programId").val(), "NONE"), "ACTION":$(bObj).prop("id"), "COMP_CD":USER_INFO.COMP_CD, "USER_ID":USER_INFO.USER_ID, "USER_IP":USER_INFO.USER_IP};
    var callback = new Callback(function(result) {});
    callback.setShowLoading(false);
    //platform.postService("/mngr/saveMenuLog", param, callback, false);
}

function fnGoMenu(pgmId, param){
    var menuInfo = getMenuInfo(USER_INFO.USER_GB_CD, pgmId, false);

    if(menuInfo.MENU_ID){
        $("#menuIco").click();

        var form = $("form#subMenuArea")[0];

        $("#programId").val(menuInfo.MENU_ID);
        $("#programName").val(menuInfo.MENU_NM);
        $("#programPathName").val(menuInfo.DEPTH_FULL_NAME);

        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("class", "custom");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", param[key]);
                form.appendChild(hiddenField);
            }
        }
        form.action = "/rdsbody" + menuInfo.PATH;
        form.submit();

        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                if($("input[name='"+key+"']").length>0){
                    $("input[name='"+key+"']").remove();
                }
            }
        }
    }
}

function btnAtteClick(){
    popup.confirm.show("출근 처리 하시겠습니까?", function(bool) {
        if(bool) {
            try {
                var param = {"compCd":USER_INFO.COMP_CD, "userId":USER_INFO.USER_ID, "deptCd":USER_INFO.DEPT_CD, "userIp":USER_INFO.USER_IP};
                var callback = new Callback(function(result) {
                    //console.log(result);
                    if ( result.comuAtteResultCode == "1000") {
                        popup.alert.show("처리가 완료되었습니다.");
                    } else if ( result.comuAtteResultCode == "1001") {
                        popup.alert.show("금일 근태가 이미 생성되어 있습니다.");
                    } else if ( result.comuAtteResultCode == "1002") {
                        popup.alert.show("근태관리 대상 사용자가 아닙니다.");
                    } else if ( result.comuAtteResultCode == "1003") {
                        popup.alert.show("근무 계획이 수립되어 있지 않습니다.\n관리자에게 문의 바랍니다.");
                    } else if ( result.comuAtteResultCode == "1004") {
                        popup.alert.show("근무유형에 대한 근무시간 범위가 없습니다.\n관리자에게 문의 바랍니다.");
                    } else  {
                        popup.alert.show("근태 처리 중 에러가 발생하였습니다.\n관리자에게 문의 바랍니다.");
                    }
                });
                callback.setShowLoading(false);
                platform.postService("/comuatte", param, callback);
            } catch (e) {}
        }
    });
}

function btnLeavClick(){
    popup.confirm.show("퇴근 처리 하시겠습니까?", function(bool) {
        if(bool) {
            try {
                var param = {"compCd":USER_INFO.COMP_CD, "userId":USER_INFO.USER_ID, "deptCd":USER_INFO.DEPT_CD, "userIp":USER_INFO.USER_IP};
                var callback = new Callback(function(result) {
                    //console.log(result);
                    if ( result.comuLeavResultCode == "2000") {
                        popup.alert.show("처리가 완료되었습니다.");
                    } else if ( result.comuLeavResultCode == "2001") {
                        popup.alert.show("금일 퇴근 근태가 이미 생성되어 있습니다.");
                    } else if ( result.comuLeavResultCode == "2002") {
                        popup.alert.show("근태관리 대상 사용자가 아닙니다.");
                    } else if ( result.comuLeavResultCode == "2003") {
                        popup.alert.show("근무 계획이 수립되어 있지 않습니다.\n관리자에게 문의 바랍니다.");
                    } else if ( result.comuLeavResultCode == "2004") {
                        popup.alert.show("근무유형에 대한 근무시간 범위가 없습니다.\n관리자에게 문의 바랍니다.");
                    } else if ( result.comuLeavResultCode == "2005") {
                        popup.alert.show("퇴근 처리가 필요 없는 근태(연차 등)가 이미 생성되어 있습니다.\n관리자에게 문의 바랍니다.");
                    } else  {
                        popup.alert.show("근태 처리 중 에러가 발생하였습니다.\n관리자에게 문의 바랍니다.");
                    }
                });
                callback.setShowLoading(false);
                platform.postService("/comuleav", param, callback);
            } catch (e) {}
        }
    });
}

const __mainMessage = {
    EP : {
        title: '결재 문서 도착 알림',
        content :'결재해야하는 [{count}] 건의 문서가 있습니다.',
    },
    TS : {
        title: '관제 상황 도착 알림',
        content :'확인해야 하는 관제전파가 [{count}] 있습니다.',
    }
};

function getMessageBox(){

    var parm ={};
    parm['compCd'] = USER_INFO.COMP_CD;
    parm['deptCd'] = USER_INFO.DEPT_CD;
    parm['userId'] = USER_INFO.USER_ID;
    parm['userIp'] = USER_INFO.USER_IP;

    var callback = new Callback(function(result) {

        $(result).each(function(){
            if(this.count<1){
                return true;
            }

            if(this.type != 'EP'){
                return true;
            }

            let messageHtml = document.querySelector('#messageBoxTemplate').innerHTML;

            messageHtml = messageHtml.replace("{title}", __mainMessage[this.type].title )
                .replace("{content}",__mainMessage[this.type].content)
                .replace('{count}', this.count);

            let el = document.createElement('div');
            $(el).addClass('messageBox');
            $(el).data('data',this);
            $(el).append(messageHtml);

            document.getElementById('messageArea').append(el);

            moveMessageBox(el);
            setTimeout(removeBox,1000 * 8, el);
        });
    });
    callback.setShowLoading(false);

    platform.postService("/mainMessageGrid", parm, callback);

    setTimeout(function(){
        getMessageBox();
    },1000 * 60);
}

function moveMessageBox(el){

    var bottmHeight= '50px';

    if($('#messageArea').html() !=''){
        bottmHeight = '300px';
    }

    $(el).animate({
        bottom : '50px'
    }, 1000, function(){
        setTimeout(function(el){
            $(el).animate({
                bottom: '-200px'
            },1000);
        },15000, el);
    });

}

function removeBox(el){
    if($(el).hasClass('messageBox')){
        el.remove();
    }{
        $(el).parents('.messageBox').remove();
    }
}

function btnMessageMoveClick(el){
    let data = $(el).parents('.messageBox').data('data');

    popup.confirm.show("이동 하시겠습니까?", function(bool) {
        if(bool){
            if(data.type == 'EP'){
                if($('.btnProgram[data-program-id="EP102"]').length){
                    $('.btnProgram[data-program-id="EP102"]').click();
                    removeBox(el);
                }
            }
        }
    });
}

// 프로그램 탭 내용 보기
function viewTab(programId) {
    var pgmDivs = document.getElementsByClassName("programDiv");
    for (var i=0; i<pgmDivs.length; i++) {
        if (pgmDivs[i].getAttribute("pgm_id") == programId)
            pgmDivs[i].style.display = "block";
        else
            pgmDivs[i].style.display = "none";
    }

    $("#tabBtnArea").find(".mainTabNavi").removeClass("tabSelected");
    $("#tabNavi"+programId).find(".mainTabNavi").addClass("tabSelected");
    tabNavi.setPosition();
}

function menuHitLog(programId){
    let param = new Object();
    param["pgmId"] = programId;
    let callback = new Callback(function(result) { });
    platform.postService("/saveMenuCnnHstr", param, callback);
}

var tabNavi = {
    programId : mainPgmId,
    maxOpenCnt : 10,
    defaultMoveWidth : 250, // 기본 이동 길이
    addItem : function(programId, programName) { //탭버튼 추가
        this.programId = programId;
        $("#tabBtnArea").append("<span id=\"tabNavi"+programId+"\" class=\"spanMainTab\">" +
            "<button class=\"mainTabNavi\"><span class=\"onTabView\" onClick=\"viewTab('"+programId+"')\">"+programName+"</span>" +
            "<span class=\"onTabClose\" onClick=\"closeTab('"+programId+"')\"></span></button></span>");
        $("#tabBtnArea").find(".mainTabNavi").removeClass("tabSelected");
        if(programId == mainPgmId) {
            $("#tabNaviportal").find(".mainTabNavi").addClass("tabSelected");
        } else {
            $("#tabNavi"+programId).find(".mainTabNavi").addClass("tabSelected");
        }
        this.putBar();
        menuHitLog(programId); //메뉴클릭로그
    },
    clickItem : function(programId) { //탭버튼 클릭
        if(this.programId != programId) {
            //menuHitLog(programId); 메뉴클릭로그
        }
        this.programId = programId;
        $("#tabBtnArea").find(".mainTabNavi").removeClass("tabSelected");
        if(programId == mainPgmId) {
            $("#tabNaviportal").find(".mainTabNavi").addClass("tabSelected");
        } else {
            $("#tabNavi"+programId).find(".mainTabNavi").addClass("tabSelected");
            $("#tabNavi"+programId).find(".clscss").addClass("selTabClose");
        }
        this.putBar();
    },
    removeItem : function(programId) { // 탭버튼 삭제
        this.programId = this.getLastProgramId();

        try {
            var frame = document.getElementById("programFrame"+programId);
            frame.contentWindow.document.innerHTML = '';
        } catch(e) {console.log(e);}  // iframe 닫을때 메모리 삭제

        document.getElementById("tabBtnArea").removeChild(document.getElementById("tabNavi"+programId));
        viewTab(this.getLastProgramId());
    },
    getProgramId : function() {
        return this.programId;
    },
    getPrevProgramId : function() {
        var prevProgramId = mainPgmId;
        var arrPgmId = [];
        var cnt = 0;
        var tabMenu = $("#tabBtnArea").children();
        for(var i = 0; i < tabMenu.length; i++) {
            arrPgmId[cnt++] = tabMenu[i].id.replace("tabNavi","").replace("portal",mainPgmId);
        }
        for(var i = 0; i < arrPgmId.length; i++) {
            if(arrPgmId[i] == tabNavi.programId) {
                if(i > 0) prevProgramId = arrPgmId[i-1];
                break;
            }
        }
        return prevProgramId;
    },
    getLastProgramId : function() {
        var arrPgmId = [];
        var tabMenu = $("#tabBtnArea").children();
        for(var i = 0; i < tabMenu.length; i++) {
            arrPgmId[i] = tabMenu[i].id.replace("tabNavi","").replace("portal",mainPgmId);
        }
        return arrPgmId[tabMenu.length-1];
    },
    putBar : function() {  //bar를 넣는다.
        //bar처리 시작
        $("#tabBtnArea").find(".mainTabNavi").addClass("tabbar");
        prevProgramId = this.getPrevProgramId();
        lastProgramId = this.getLastProgramId();
        if(prevProgramId == mainPgmId) {
            $("#tabNaviportal").find(".mainTabNavi").removeClass("tabbar");
        } else {
            $("#tabNavi"+prevProgramId).find(".mainTabNavi").removeClass("tabbar");
        }
        $("#tabNavi"+lastProgramId).find(".mainTabNavi").removeClass("tabbar");
        //bar처리 종료
    },
    setPosition : function() {
        let width = 0; // 선택된 영역까지의 크기
        let selectedWidth = 0;
        width += $("#closeAllTab").outerWidth();//전체 닫기 버튼
        $('.spanMainTab').each(function(index, item){
            width += Number($(item).outerWidth());
            if($(item).find(".mainTabNavi").hasClass("tabSelected")){
                selectedWidth = Number($(item).innerWidth());
                return false;
            }
        });
        let tabCW = $('#tabContainer').innerWidth();
        let startStd = -Number($('#tabBtnArea').css("margin-left").replace("px","")); // 보여지는 영역 시작위치
        let endStd = $('#tabContainer').innerWidth()+startStd; // 보여지는 영역 종료위치
        let lastMl = -(width-tabCW); // 가장 작게 옮겨질 수 있는 margin-left

        if(startStd > (width+10-selectedWidth)){ //선택된 탭이 보여지는 영역보다 앞에 위치할 때
            $('#tabBtnArea').animate({'margin-left': -(width+10-selectedWidth)+'px'},'slow');
        }else if(endStd < width){ //선택된 탭이 보여지는 영역보다 뒤에 위치할 때
            $('#tabBtnArea').animate({'margin-left': lastMl+'px'},'slow');
        }else { // 그 외 위치조정
            if(tabCW < width && width-startStd <= tabCW){
                if( $('#tabBtnArea').innerWidth() <= width){
                    $('#tabBtnArea').animate({'margin-left': lastMl+'px'},'slow');
                }
            }else{
                if( $('#tabBtnArea').innerWidth()  < tabCW){
                    $('#tabBtnArea').animate({'margin-left': 0+'px'},'slow');
                }
            }
        }
    },
    moveTabLeft : function (){
        let currentMl = Number($('#tabBtnArea').css("margin-left").replace("px",""));
        if(currentMl+this.defaultMoveWidth > 0){
            $('#tabBtnArea').animate({'margin-left': '0px'},'slow');
        }else{
            $('#tabBtnArea').animate({'margin-left':'+='+ this.defaultMoveWidth +'px'},'slow')
        }
    },
    moveTabRight : function (){
        let tabCW = $('#tabContainer').innerWidth();
        let width = $('#tabBtnArea').innerWidth();
        if(tabCW < width){
            let lastMl = -(width-tabCW);
            let nextMl = Number($('#tabBtnArea').css("margin-left").replace("px","")) - this.defaultMoveWidth;
            if(nextMl < lastMl){
                $('#tabBtnArea').animate({'margin-left': lastMl+'px'},'slow');
            }else{
                $('#tabBtnArea').animate({'margin-left':'-='+ this.defaultMoveWidth +'px'},'slow')
            }
        }
    }
};

function closeTab(programId) {
    tabNavi.removeItem(programId);	// 탭버튼 삭제

    // 프로그램 IFRAME 삭제
    var programDiv = document.getElementById("programId"+programId);
    var programFrame = document.getElementById("programFrame"+programId);

    programFrame.contentWindow.location = "about:blank";	// IFRAME 웹페이지 공백으로

    setTimeout(function() {
        programDiv.removeChild(programFrame);
        document.getElementById("programArea").removeChild(programDiv);

        if (document.getElementsByClassName("tabSelected").length == 0) {
            tabNavi.clickItem(mainPgmId);
        }
    }, 100);
}
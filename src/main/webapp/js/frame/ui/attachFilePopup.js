var isUploaded = false;
let paramObj ;

var attachFilePopup = {
    callback : null,
    show : function(width, height, callback, params) {
        this.callback = callback;

        $(document).off("iframeready");

        $(document).on("iframeready", function(evt, frameId) {

            if (frameId == "attachFilePopupFrame") {
                var frame = $("#attachFilePopupFrame").get(0).contentWindow;
				var strInitFrame = "frame.initFrame(" + JSON.stringify(params) + ")";

				eval(strInitFrame);
            }
        });
        
        //$("#attachFilePopupFrame").attr("src", url);
        //$("#attachFilePopupTitle").text(title);
        $("#attachFilePopupContainer").css("width", width);
        $("#attachFilePopupContainer").css("height", height);
        $("#attachFilePopupContainer").css("left", "calc(50% - " + width / 2 + "px)");
        $("#attachFilePopupContainer").css("top", "calc(30% - " + height / 2 + "px)");
        $("#attachFilePopupWindow").css("display", "block");
        //$("#customClose").focus();

		let colNameList = new Array();
		let colHeaderList= new Array();
		$.each(params.grid.config.columns, function(index, item){ // 매핑시킬 컬럼id 셋팅
			colNameList.push(item.id);
			colHeaderList.push(item.header);
		});
		$("#fileColNames").val(colNameList.toString());

		$("#btnForm").on("click", () => {
			btnFormDown(params.grid, params.tempExcelName);
		})
    },

    hide : function(val) {
        $("#attachFilePopupWindow").css("display", "none");
		btnFileClear();
		$("#btnForm").off();
    }
};

$(document).ready(function() {
    $("#attachFilePopupContainer").draggable({
        containment: "parent",
        cursor: "move"
    });

    $("#upfile").on("change", function() {
		if (isEmpty(this.value))
			return;
		
		var fileName = this.value;
		// 파일확장자 확인
		var ext = fileName.slice(fileName.lastIndexOf(".") + 1).toLowerCase();
		if (ext != "xls" && ext != "xlsx") {
			popup.alert.show("첨부 가능한 파일 확장자가 아닙니다.", function() {
			});
			btnFileClear();
			return;
		}
		
		// 파일사이즈 표시
		var fileSize = 0;	// Bytes
		var browser = navigator.appName;
		
		if (browser == "Microsoft Internet Explorer") {
			// IE
			var oas = new ActiveXObject("Scripting.FileSystemObject");
			var file = oas.getFile(this.value);
			fileSize = Math.round(file.size);
		} else {
			// IE 이외
			fileSize = Math.round(this.files[0].size);
		}
		
		var maxFileSize = parseInt(checkEmpty(getSystemEnv(USER_INFO.COMP_CD, 'ES003').stdVal), 10);
		if (fileSize > maxFileSize) {
			top.popup.alert.show("첨부 가능한 파일 크기를 초과합니다. (" + numberToHumanSize(fileSize) + " / " + numberToHumanSize(maxFileSize) + ")", function() {
	 		});
			btnFileClear();
			return;
		}
	});
	$("#confirmYes").on("click", () => {
		btnUploadExcelClick();
	});
});

function btnFileClear() {
	$("#upfile").replaceWith($("#upfile").val('').clone(true));
	$("#upfile").val("");
}

function btnFormDown(grid, excelName) {
	grid.clearData();
	var param = {"XML":replcHtml(grid.getXmlData()), "FILENAME":checkEmpty(excelName,"temp") + ".xls"};
	createForm("/xmlToExcel", param, "fileIframe").submit();
}

function btnUploadExcelClick() {
	var $form = $("#attachPostForm");
	
	if (isEmpty($("#upfile").val())) {
		popup.alert.show("업로드 파일을 확인하세요.");
		return;
	}

	getUploadExcelData();
}

function getUploadExcelData() {
	var $form = $("#attachPostForm");
	var param = new FormData($form[0]);
	param.append("upfile", document.getElementById('upfile').files[0]);

	var callback = new Callback(function(result) {
		if(result.resultCode == POST_RESULT.ERROR){
			top.popup.alert.show("엑셀 데이터 추출에 실패했습니다.");
			top.popup.loading.hide();
		}if(result.resultCode == POST_RESULT.WARN){
			top.popup.alert.show("엑셀 데이터가 존재하지 않습니다.\n 파일을 확인해주세요.");
			top.popup.loading.hide();
		}else{
			isUploaded = true;
			btnFileClear();
			$.each(result.resultVO, (idx, obj) => { obj.gstat = "I"; });
			attachFilePopup.callback.callback(result);
			attachFilePopup.hide();
		}
	});
	
	callback.setShowLoading(true);
	platform.postFileService("/uploadExcelFile", param, callback);
}
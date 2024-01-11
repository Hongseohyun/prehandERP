
//var commonContextPath = "/rdsbody";
var commonContextPath = "";

const POST_RESULT = {SUCCESS:"O", WARN:"W", ERROR:"E"};

const KEY_F1 = 0x70;
const KEY_F2 = 0x71;
const KEY_F3 = 0x72;
const KEY_F4 = 0x73;
const KEY_F5 = 0x74;
const KEY_F6 = 0x75;
const KEY_F7 = 0x76;
const KEY_F8 = 0x77;
const KEY_F9 = 0x78;
const KEY_F10 = 0x79;
const KEY_F11 = 0x7A;
const KEY_F12 = 0x7B;
const KEY_ESC = 0x1B;

const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;

var KEY_F2_VALID = true; // Default 'true'이며 F2 Key 사용여부

// 일반 KEY의 ASCII 코드값을 선언한다.
const KEY_TAB = 0x09;
const KEY_ENTER = 0x0D;
const KEY_SPACE = 0x20;
const KEY_BACKSPACE = 0x08;
const KEY_DELETE = 0x2E;
const KEY_ETC = '0x010000002F6BC673E04B0820FD92A74CC8CF7B3EC27699FD8C54B3E7';

/*정규식 정의*/
const telRegExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?([0-9]{3,4})-?([0-9]{4})$/;
const timeRegExp = /^(0[0-9]|1[0-9]|2[0-3]):?([0-5][0-9])$/;
const positiveIntRegExp = /^0$|^[1-9][0-9]*$/;
const negativeIntRegExp = /^0$|^-[1-9][0-9]*$/;
const intRegExp = /^0$|^-?[1-9][0-9]*$/;
const positivePercentRegExp = /^0( ?%)?$|^[1-9][0-9]*%?$/;
const negativePercentRegExp = /^0( ?%)?$|^-[1-9][0-9]*%?$/;
const percentRegExp = /^0( ?%)?$|^-?[1-9][0-9]*%?$/;
const positiveNumberRegExp = /^0$|^0.[0-9]*[1-9]$|^[1-9][0-9]*(.[0-9]*[1-9])?$/;
const negativeNumberRegExp = /^0$|^-0.[0-9]*[1-9]$|-[1-9][0-9]*(.[0-9]*[1-9])?$/;
const numberRegExp = /^-?[0-9]+(.[0-9]*[1-9])?$/;
const yearMonthRegExp = /^([\d]{4})-?(0[1-9]|1[0-2])$/;
const dateRegExp = /^(19[0-9][0-9]|20\d{2})-?(0[0-9]|1[0-2])-?(0[1-9]|[1-2][0-9]|3[0-1])$/;
const mailRegExp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

var browser = (function() {
	var s = navigator.userAgent.toLowerCase();
	var match = /(webkit)[ \/](\w.]+)/.exec(s) || /(opera)(?:.*version)?[ \/](\w.]+)/.exec(s) || /(msie) ([\w.]+)/.exec(s) || /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) || [];
	return {
		name : match[1] || "",
		version : match[2] || "0"
	};
}());

var defaultArray = [{id:'*', value:'전체'}];

(function() {
	if (!window['console']) {
		window['console'] = {
			log : function() {
			}
		};
	}

	if (!window['initPage']) {
		window['initPage'] = function() {
			//console.log(initPage);
		}
	}

	// CSS 에서 브라우저 구분용 html[data-useragent*='MSIE 9.0'] #element
	document.documentElement.setAttribute('data-useragent', navigator.userAgent);

	//IE startsWith 생성
	if (!String.prototype.startsWith) {
		String.prototype.startsWith = function(search, pos) {
			return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
		};
	}

//	console.log("funcion initialize");
})();

var listener = {
	select : {
		change : function() {
		}
	},

	monthpicker : {
		select : function() {
//			console.log("monthpicker.select ", arguments);
		}
	},

	gridRow : {
		itemClick : function(rowId, colId, record, grid) {
//			console.log("gridRow.itemClick default", rowId, colId, record, grid);
		},

		click : function(record, grid) {
//			console.log("gridRow.click default", record, grid);
		},

		dblclick : function(record, grid) {
//			console.log("gridRow.dblclick default", record, grid);
		},

		callback : function(gridId, rowIdx, columnIdx) {
//			console.log("gridRow.callback default", gridId, rowIdx, columnIdx);
		},
		onFocusedRowChanged : function (gridID, rowIndex, rowData) {

		}
	},

	gridEditor : {
		keydown : function(grid, state, editor, evt) {
//			console.log("gridEditor.keydown default", grid, state, editor, evt);
		},

		changed : function(grid, state, editor, ignore) {
//			console.log("gridEditor.changed default", grid, state, editor, ignore);
		},
		beforeEditStart : function(grid, record, curCol) {
//			console.log("gridEditor.beforeEditStart default", grid, record, curCol);
			return true;
		},
		checked : function(grid, row, column, state) {
//			console.log("gridEditor checked", grid, row, column, state);
		},
		selectchanged : function(colId, $el){
//			console.log("gridEditor.selectchanged default", oSel);
		},
		onHelpClick : function (grid, rowIndex, column , data) {

		},
	},

	editor : {
		keydown : function($el) {
//			console.log("editor.keydown", $el);
		},
		change : function($el) {
//			console.log("editor.change", $el);
		}
	},

	button : {
		"init" : {click : function() {console.log("button.init.click default", arguments);}},
		"news" : {click : function() {console.log("button.news.click default", arguments);}},
		"search" : {click : function() {console.log("button.search.click default", arguments);}},
		"save" : {click : function() {console.log("button.save.click default", arguments);}},
		"edit" : {click : function() {console.log("button.edit.click default", arguments);}},
		"del" : {click : function() {console.log("button.del.click default", arguments);}},

		"etc1" : {click : function() {console.log("button.etc1.click default", arguments);}},
		"etc2" : {click : function() {console.log("button.etc2.click default", arguments);}},
		"etc3" : {click : function() {console.log("button.etc3.click default", arguments);}},
		"etc4" : {click : function() {console.log("button.etc4.click default", arguments);}},
		"etc5" : {click : function() {console.log("button.etc5.click default", arguments);}},
		"etc6" : {click : function() {console.log("button.etc6.click default", arguments);}},
		"etc7" : {click : function() {console.log("button.etc7.click default", arguments);}},
		"etc8" : {click : function() {console.log("button.etc8.click default", arguments);}},
		"etc9" : {click : function() {console.log("button.etc9.click default", arguments);}},
		"etc10" : {click : function() {console.log("button.etc10.click default", arguments);}},

		"addRow" : {click : function() {console.log("button.addRow.click default", arguments);}},
		"removeRow" : {click : function() {console.log("button.removeRow.click default", arguments);}},

		"copy" : {click : function() {console.log("button.copy.click default", arguments);}},
		"calc" : {click : function() {console.log("button.calc.click default", arguments);}},
		"calc_cancel" : {click : function() {console.log("button.calc_cancel.click default", arguments);}},
		"reCalc" : {click : function() {console.log("button.reCalc.click default", arguments);}},
		"reCalc_cancel" : {click : function() {console.log("button.reCalc_cancel.click default", arguments);}},

		"close" : {click : function() {console.log("listener.button.close.click default", arguments);}},
		"help" : {callback : function() {console.log("listener.button.help.callback default", arguments);}},
		"confirm" : {click : function() {console.log("listener.button.confirm.click default", arguments);}},
		"confirm_cancel" : {click : function() {console.log("listener.button.confirm_cancel.click default", arguments);}},
		"apply" : {click : function() {console.log("listener.button.apply.click default", arguments);}},
		"approve" : {click : function() {console.log("listener.button.approve.click default", arguments);}},
		"refuse" : {click : function() {console.log("listener.button.refuse.click default", arguments);}},
		"expired" : {click : function() {console.log("listener.button.expired.click default", arguments);}},

		"browse" : {change : function() {console.log("listener.button.browse.change default", arguments);}},
		"fileDown" : {click : function() {console.log("listener.button.fileDown.click default", arguments);}},
		"fileDownAll" : {click : function() {console.log("listener.button.fileDownAll.click default", arguments);}},
		"fileDelete" : {click : function() {console.log("listener.button.fileDelete.click default", arguments);}},
		"fileDeleteAll" : {click : function() {console.log("listener.button.fileDeleteAll.click default", arguments);}},
		"excelDown" : {click : function() {console.log("button.excelDown.click default", arguments);}},

		"file_upload" : {click : function() {console.log("button.file_upload.click default", arguments);}},
		"fileAttach" : {click : function() {console.log("button.fileAttach.click default", arguments);}},
		"print" : {click : function() {console.log("button.print.click default", arguments);}},
		"chgpwd" : {click : function() {console.log("button.chgpwd.click default", arguments);}}
	}
};

/*******************************************************************************
 * function isValidKey() : 현재 입력된 키가 처리해야될 키인지 체크하여 여부를 반환한다.
 *
 * 반환값 : 처리해야될 키일 경우 true를 반환하고, 그렇지 않으면 false를 반환한다.
 *
 * 처리 이벤트 : onKeyUp 이벤트에서 호출되는 함수내에서 사용가능하다.
 ******************************************************************************/
function isValidKey(evt) {
	if (evt == null)
		return false;

	// 키 이벤트가 발생하지 않았을 경우
	if (evt.which == 0x00)
		return true;

	// 기타 Function Key가 눌러졌을 경우
	if (evt.which == KEY_F12 || evt.which == KEY_F9 || evt.which == KEY_F5 || evt.which == KEY_F11) {
		return true;
	}

	// ALT, CTRL KEY가 눌러졌을 경우
	if (evt.altKey || evt.ctrlKey) {
		if (evt.which == 86 || evt.which == 88) {// CTRL+V,CTRL+X 를 유효한
			// evt로 처리하기 위해서
			return true;
		} else {
			return false;
		}
	}

	// 특수키(SPACE,DELETE,BACKSPACE)일 경우)
	if (evt.which == KEY_SPACE || evt.which == KEY_BACKSPACE || evt.which == KEY_DELETE)
		return true;

	// 숫자키(0~9)일 경우
	if (evt.which >= 0x30 && evt.which <= 0x39)
		return true;

	// 문자키(A~Z)일 경우
	if (evt.which >= 0x41 && evt.which <= 0x5A)
		return true;

	// 기호키(-=\,./;'[])일 경우
	if ((evt.which >= 0xBA && evt.which <= 0xBF) || (evt.which >= 0xDB && evt.which <= 0xDE))
		return true;

	// 키패드에 존재하는 키일 경우
	if ((evt.which >= 0x60 && evt.which <= 0x6B) || (evt.which >= 0x6D && evt.which <= 0x6F))
		return true;

	return false;
}

function Callback(callbackFunc) {
	this.callback = callbackFunc;

	var isShowLoading = true;
	this.async = true;

	this.setShowLoading = function(bool) {
		isShowLoading = bool;
	};

	this.preHook = function() {
		if (isShowLoading) {
			popup.loading.show();
		}
	};

	this.postHook = function() {
		if (isShowLoading) {
			popup.loading.hide();
		}
	};
	return this;
}

/*******************************************************************************
 * function isValidKey2() : 현재 입력된 키가 처리해야될 키인지 체크하여 여부를 반환한다. (isValidKey()와
 * 차이점은 Enter Key를 유효한 key로 return한다는 점이다.)
 *
 * 반환값 : 처리해야될 키일 경우 true를 반환하고, 그렇지 않으면 false를 반환한다.
 *
 * 처리 이벤트 : onKeyUp 이벤트에서 호출되는 함수내에서 사용가능하다.
 ******************************************************************************/
function isValidKey2(evt) {
	if (evt == null)
		return false;

	if (evt.which == KEY_F1 || evt.which == KEY_F2 || evt.which == KEY_F3 || evt.which == KEY_F4) {
		return false;
	}
	if (evt.which == KEY_F5 || evt.which == KEY_F6 || evt.which == KEY_F7 || evt.which == KEY_F8) {
		return false;
	}
	if (evt.which == KEY_F9 || evt.which == KEY_F10 || evt.which == KEY_F11 || evt.which == KEY_F12) {
		return false;
	}
	// shift, alt, ctrl
	if (evt.which == 16 || evt.which == 17 || evt.which == 18) {
		return false;
	}

	// Enter Key를 눌렀을 경우에 유효한 key로 true를 return한다.
	if (evt.which == KEY_ENTER || evt.which == KEY_BACKSPACE || evt.which == KEY_DELETE)
		if (evt.which == KEY_ENTER) {
			evt.preventDefault();
			return true;
		}

	return isValidKey(evt);
}

function disableAllControl(disabled) {
	if (disabled) {
		$(':input').each(function() {
			var $this = $(this);
			$this.prop('orgDisabled', $this.prop('disabled'));
			$this.prop('disabled', true);
		});
	} else {
		$(':input').each(function() {
			var $this = $(this);
			$this.prop('disabled', $this.prop('orgDisabled'));
		});
	}
	if (disabled) {
		$('.webix_dtable').each(function() {
			var $this = $(this);
			$this.parent().webix_datatable().disable();
		});
	} else {
		$('.webix_dtable').each(function() {
			var $this = $(this);
			$this.parent().webix_datatable().enable();
		});
	}
}

function isValidCondition(formSelector) {
	var $notValidCondList = $(formSelector + ' .has-error');
	if ($notValidCondList.length != 0) {
		alertModal($notValidCondList.first().find('.cond-input').attr('placeholder') + ' 을(를) 확인하세요.', '경고', function() {
			$notValidCondList.first().find('.cond-input').focus();
		});
		return false;
	}
	return true;
}

function gridGroupBy(gridObj, columndId) {
	var columns = gridObj.config.columns;
	var header = null;
	for (var i = 0; i < columns.length; i++) {
		header = columns[i].header;
		for (var j = 0; j < header.length; j++) {
			if (header[j] && header[j]['content'] == 'masterCheckbox') {
				$(document).ready(function() {
					columns[i] = $.extend(columns[i], {
						template : function(obj, common, value) {
							if (obj.$level == 1)
								return '';
							else
								return common.checkbox(obj, common, value, {
									checkValue : true
								});
						}
					});
				});
			}
		}
	}

	for (var i = 0; i < columns.length; i++) {
		if (columns[i]['id'] == columndId) {
			$(document).ready(function() {
				columns[i] = $.extend(columns[i], {
					template : function(obj, common) {
						if (obj.$level == 1)
							return common.icon(obj, common) + obj.value;
						else
							return obj[columndId];
					}
				});
			});
		}
	}

	var newMap = {};

	var footer = null;
	var summeryType = '';
	var footerId = '';
	for (var i = 0; i < columns.length; i++) {
		footer = columns[i].footer;
		for (var j = 0; j < footer.length; j++) {
			if (columns[i] != columndId && footer[j] && footer[j]['content'] && footer[j]['content'] != '') {
				footerId = columns[i]['id'];
				summeryType = null;
				if (footer[j]['content'] == 'summColumn' || footer[j]['content'] == 'sum') {
					summeryType = 'sum';
				} else if (footer[j]['content'] == 'maxColumn' || footer[j]['content'] == 'max') {
					summeryType = 'max';
				} else if (footer[j]['content'] == 'minColumn' || footer[j]['content'] == 'min') {
					summeryType = 'min';
				} else if (footer[j]['content'] == 'avgColumn' || footer[j]['content'] == 'avg') {
					summeryType = 'avg';
				} else if (footer[j]['content'] == 'cntColumn' || footer[j]['content'] == 'count') {
					summeryType = 'count';
				}
				if (summeryType) {
					newMap[footerId] = [
							footerId, summeryType
					];
					columns[i] = $.extend(columns[i], {
						template : function(obj, common) {
							if (obj.$level == 1) {
								return '<span style="width:100%;display:block;text-align:right">' + obj[footerId] + '</span>'
							} else
								return obj[footerId];
						}
					});
				}
			}
		}
	}

	return {
		scheme : {
			by : columndId,
			map : newMap
		}
	};
}

function getGroupConfig(config, columnId) {
	var columns = config.columns;
	var header = null;
	for (var i = 0; i < columns.length; i++) {
		header = columns[i].header;
		for (var j = 0; j < header.length; j++) {
			if (header[j] && header[j]['content'] == 'masterCheckbox') {
				columns[i] = $.extend(columns[i], {
					template : function(obj, common, value) {
						if (obj.$level == 1)
							return '';
						else
							return common.checkbox(obj, common, value, {
								checkValue : true
							});
					}
				});
			}
		}
	}

	for (var i = 0; i < columns.length; i++) {
		if (columns[i]['id'] == columnId) {
			columns[i] = $.extend(columns[i], {
				template : function(obj, common) {
					if (obj.$level == 1)
						return common.icon(obj, common) + obj.value;
					else
						return obj[columnId];
				}
			});
		}
	}

	var newMap = {};

	var footer = null;
	var summeryType = '';
	var footerId = '';
	for (var i = 0; i < columns.length; i++) {
		footer = columns[i].footer;
		for (var j = 0; j < footer.length; j++) {
			if (columns[i] != columnId && footer[j] && footer[j]['content'] && footer[j]['content'] != '') {
				footerId = columns[i]['id'];
				summeryType = null;
				if (footer[j]['content'] == 'summColumn' || footer[j]['content'] == 'sum') {
					summeryType = 'sum';
				} else if (footer[j]['content'] == 'maxColumn' || footer[j]['content'] == 'max') {
					summeryType = 'max';
				} else if (footer[j]['content'] == 'minColumn' || footer[j]['content'] == 'min') {
					summeryType = 'min';
				} else if (footer[j]['content'] == 'avgColumn' || footer[j]['content'] == 'avg') {
					summeryType = 'avg';
				} else if (footer[j]['content'] == 'cntColumn' || footer[j]['content'] == 'count') {
					summeryType = 'count';
				}
				if (summeryType) {
					formatter = columns[i].format || function(obj) {
						return obj;
					};
					newMap[footerId] = [
							footerId, summeryType
					];
					columns[i] = $.extend(columns[i], {
						template : function(obj, common) {
							if (obj.$level == 1) {
								return '<span style="width:100%;display:block;text-align:right">' + formatter(obj[footerId]) + '</span>'
							} else
								return formatter(obj[footerId]);
						}
					});
				}
			}
		}
	}

	return {
		by : columnId,
		map : newMap
	};
}

function checkFormValidation($formObj) {
	var $notValidCondList = $formObj.find('.has-error');
	if ($notValidCondList.length != 0) {
		alertModal($notValidCondList.first().find('.cond-input').attr('placeholder') + ' 을(를) 확인하세요.', '경고');
		$notValidCondList.first().find('.cond-input').focus();
		return false;
	} else {
		return true;
	}
}

/*
 * 자바스크립트 Date format()
 * //2011년 09월 11일 오후 03시 45분 42초
 * console.log(new Date().format("yyyy년 MM월 dd일 a/p hh시 mm분 ss초"));
 * //2011-09-11
 * console.log(new Date().format("yyyy-MM-dd"));
 * //'11 09.11
 * console.log(new Date().format("'yy MM.dd"));
 * //2011-09-11 일요일
 * console.log(new Date().format("yyyy-MM-dd E"));
 * //현재년도 : 2011
 * console.log("현재년도 : " + new Date().format("yyyy"));
 */
Date.prototype.format = function(f) {
	if (!this.valueOf())
		return " ";

	var weekName = [
			"일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"
	];
	var d = this;

	return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
		switch ($1) {
		case "yyyy":
			return d.getFullYear();
		case "yy":
			return (d.getFullYear() % 1000).zf(2);
		case "MM":
			return (d.getMonth() + 1).zf(2);
		case "dd":
			return d.getDate().zf(2);
		case "E":
			return weekName[d.getDay()];
		case "HH":
			return d.getHours().zf(2);
		case "hh":
			return ((h = d.getHours() % 12) ? h : 12).zf(2);
		case "mm":
			return d.getMinutes().zf(2);
		case "ss":
			return d.getSeconds().zf(2);
		case "a/p":
			return d.getHours() < 12 ? "오전" : "오후";
		default:
			return $1;
		}
	});
};

String.prototype.string = function(len) {
	var s = '', i = 0;
	while (i++ < len) {
		s += this;
	}
	return s;
};
String.prototype.zf = function(len) {
	return "0".string(len - this.length) + this;
};
Number.prototype.zf = function(len) {
	return this.toString().zf(len);
};

Array.prototype.removeValue = function(name, value){
   var array = $.map(this, function(v,i){
      return v[name] === value ? null : v;
   });
   this.length = 0; //clear original array
   this.push.apply(this, array); //push all elements except the one we want to delete
}

function toQueryString(obj) {
	var result = "";

	try {
		for (var key in obj) {
			result += "&" + key + "=" + encodeURIComponent(obj[key]);
			//console.log(key, result);
		}
	} catch (e) {
		console.log(e);
	}

	//console.log(result);

	return result;
}

function isNull(data) {
	if (typeof data !== "undefined" && data !== null) {
		return false;
	} else {
		return true;
	}
}

function checkNull(val, rep) {
	if (isNull(val)) {
		return rep;
	} else {
		return val;
	}
}

function isEmpty(val) {
	if (typeof(val) == "string" || typeof(val) == "number" || val == null) {
		if (isNull(val) || val == "" || (val+"").toLowerCase() == "null") {
			return true;
		} else {
			return false;
		}
	} else if (typeof(val) == "array" || typeof(val) == "object") {
		if (val.length == 0) {
			return true;
		}

		return false;
	} else {
		return true;
	}
}

function checkEmpty(val, rep) {
	if (isNull(val) || val == "") {
		return rep;
	} else {
		return val;
	}
}

/**
 * 숫자체크
 * @param val 입력값
 * @returns [boolean] true: 숫자포멧, false: 숫자포멧 아님
 */
function checkNumber(val){
	if(typeof val == "undefined" || val == null || !val) return false;
	return (/^-?\d*\.?\d+$/.test(val.toString()));
}

/* code list (for combo)
* total : true 전체
* */
function getSelectList(queryId, param, total) {
	var selectList = null;
	var callback = new Callback(function(result) {
		// console.log("result selectlist", result);
		selectList = JSON.parse(result);
	});

	//param.TYPE = "HELP";
	param.queryId = queryId;
	param.total   = total.nullable;
	callback.setShowLoading(false);
	platform.postService("/getSelectList", param, callback, false);

	return selectList;
}

/* remark 20220211
function getSelectCommList(code, param, comm) {
	var selectList = null;
	var callback = new Callback(function(result) {
		// console.log("result selectlist", result);
		selectList = JSON.parse(result);
	});

	param.TYPE = "HELP";
	param.QUERY_ID = code;
	param.COMM = comm.nullable;
	callback.setShowLoading(false);
	platform.postService("/getSelectCommList", param, callback, false);

	return selectList;
}
*/

function downloadForm(PGMID) {
	var frame = $('<iframe class="downloadFrame" style="display: none;"></iframe>');
	frame.attr('src', commonContextPath + "/jsp/frame/common/downloadForm.jsp?PGMID=" + PGMID);
	$("body").after(frame);

	setTimeout(function() {
		$("iframe.downloadFrame").remove();
	}, 1000);
}

/* remark 20220215
function fnDownload(obj) {
	var downclick = function() {
		var frame = $('<iframe class="downloadFrame" style="display: none;"></iframe>');
		frame.attr('src', commonContextPath + "/jsp/common/download.jsp?BLLT_CLAS_CD=" + obj["BLLT_CLAS_CD"] + "&ATTC_FL_ID=" + obj["ATTC_FL_ID"] + "&ATTC_FILE_SQOR=" + obj["ATTC_FILE_SQOR"]);
		$("body").after(frame);

		setTimeout(function() {
			$("iframe.downloadFrame").remove();
		}, 1000);
	}
	downclick();
}


function fnRemove(obj) {
	var removeclick = function() {
		var frame = $('<iframe class="removeFrame" style="display: none;"></iframe>');
		frame.attr('src', commonContextPath + "/jsp/common/remove.jsp?BLLT_CLAS_CD=" + obj["BLLT_CLAS_CD"] + "&ATTC_FL_ID=" + obj["ATTC_FL_ID"] + "&ATTC_FILE_SQOR=" + obj["ATTC_FILE_SQOR"]);
		$("body").after(frame);

		setTimeout(function() {
			$("iframe.removeFrame").remove();
		}, 1000);
	}
	removeclick();
}
*/

/*
function check(){
	$$("dt").getHeaderContent("mc1").check();
};
function uncheck(){
	$$("dt").getHeaderContent("mc1").uncheck();
};
function isChecked(){
	var state = $$("dt").getHeaderContent("mc1").isChecked();
	webix.message(state?"checked":"unchecked");
};
*/

function rpad(value, length, str) {
	var addLen = length - value.length;
	for (var i = 0; i < addLen; i++) {
		value += str;
	}
	return value;
}

function lpad(value, len, str) {
	var v = value + "";
	var size = len - v.length;

	if (v.length < len) {
		for (var i = 0; i < size; i++) {
			v = str + v;
		}
	}

	return v;
}

function getQuarter(strDate) {
	var result = "";

	if (isEmpty(strDate)) {
		strDate = new Date().format("yyyy-MM");
	}

	var month = Number(strDate.substring(5, 7));

	if (month > 12 || month < 1) {
		month =  Number(new Date().format("yyyy-MM").substring(5, 7));
	}

	if (month >= 1 && month <= 3) {
		result = "1";
	} else if (month >= 4 && month <= 6) {
		result = "2";
	} else if (month >= 7 && month <= 9) {
		result = "3";
	} else if (month >= 10 && month <= 12) {
		result = "4";
	}

	return result;
}

Array.prototype.remove = function(idx) {
	this.splice(idx, 1);
}

/**
 * 비동기 통신
 * @param url
 * @param params
 * @param callback
 * @param async
 */
function httpRequest(url, params, callback, async) {
	$.ajax({
		type : 'post',
		dataType : 'json',
		crossDomain:true,
		url : url,
		data : params,
		async : async,
		success : function(data, textStatus, jqXHR) {
			if (data) {
				callback(data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("E", "server-side failure with response: ", jqXHR);
		},
		cache : false
	});
}

/**
 * 문자열의 Byte 길이를 구하는 함수.
 * @param str 입력 문자열
 * @returns {Number}
 */
function getByteSize(str){
	if(typeof str == "undefined" || str == null || !str) return 0;
	var b,i,c, s=str.toString();
    for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?2:c>>7?2:1){}; //DB 케릭터셋에 따라 한글 바이트 수 변경(기본 2 byte)
    return b;
}

/**
 * 문자열의 콤마포멧을 처리하는 함수
 * @param str 입력값
 * @param opt (on : comma 추가, off : comma 제거)
 * @param rpStr 대체문자 0
 */
function replcComma(str, opt, rpStr){
	if(typeof str == "undefined" || str == null || !str) return checkEmpty(rpStr,"");
	var rtnVal = str.toString().replace(/[^0-9|.]/g,"");
	var sIntgr = (rtnVal.lastIndexOf(".") == -1)?rtnVal:rtnVal.substring(0, rtnVal.lastIndexOf("."));
	var sDp = (rtnVal.lastIndexOf(".") == -1)?"":rtnVal.substring(rtnVal.lastIndexOf("."), rtnVal.length);
	return (opt == "on") ? sIntgr.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")+sDp : rtnVal;
}

/**
 * 문자열의 날짜포멧을 처리하는 함수
 * @param str 입력값
 * @param opt (on: [sprtr("-"), tmsprtr(":")] 추가, off: [sprtr("-"), tmsprtr(":")] 제거)
 * @param sprtr 일자구분자
 * @param tmsprtr 시간구분자
 */
function replcDate(str, opt, sprtr, tmsprtr){
	if(typeof str == "undefined" || str == null || !str) return "";
	var rtnVal = str.toString().replace(/[^0-9]/gi,"");
	var sSprtr = (sprtr) ? sprtr : "-";
	var sTmsprtr = (tmsprtr) ? tmsprtr : ":";

	if(opt == "on"){
		if(rtnVal.length == 14){
			rtnVal = rtnVal.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1"+sSprtr+"$2"+sSprtr+"$3 $4"+sTmsprtr+"$5"+sTmsprtr+"$6");
		}else if(rtnVal.length == 12){
			rtnVal = rtnVal.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1"+sSprtr+"$2"+sSprtr+"$3 $4"+sTmsprtr+"$5");
		}else if(rtnVal.length == 10){
			rtnVal = rtnVal.replace(/(\d{4})(\d{2})(\d{2})(\d{2})/, "$1"+sSprtr+"$2"+sSprtr+"$3"+" $4");
		}else if(rtnVal.length == 8){
			rtnVal = rtnVal.replace(/(\d{4})(\d{2})(\d{2})/, "$1"+sSprtr+"$2"+sSprtr+"$3");
		}else if(rtnVal.length == 6){
			rtnVal = rtnVal.replace(/(\d{4})(\d{2})/, "$1"+sSprtr+"$2");
		}else{
			rtnVal = str;
		}
	}
	return rtnVal;
}

/**
 * 문자열 특수문자 치환
 * @param val 문자열
 * @param len 길이
 * @param div (왼쪽:l, 오른쪽:r(기본))
 * @param spcchr 치환문자(기본:*)
 */
function replcTxt(val, len, div, spcchr) {
	if(isEmpty(val) || !checkNumber(len))
		return val;

	var sLen = val.length;
	if(sLen<=len)
		return val;

	var sDiv = (isEmpty(div))?"r":div;
	var sPcchr = (isEmpty(spcchr))?"*":spcchr;
	var sRpt = "";
	for(var i=0;i<len;i++){sRpt+=sPcchr;}
	return (sDiv=="l")?(sRpt+val.substring(len)):(val.substring(0,(sLen-len))+sRpt);
}

function getSystemEnv(compcd, stdcd) {
	var param = {"compcd":compcd,"stdcd":stdcd};
	var rtn = {};
	var callback = new Callback(function(result) {
		rtn = result;
	});

	callback.setShowLoading(false);
	platform.postService("/getSystemEnv", param, callback, false);

	return rtn;
}

/* remark 20220210
function getMenuInfo(userGbCd, pgmId, rf) {
	var param = {"USERGBCD":userGbCd,"PGMID":pgmId,"RF":rf};
	var rtn = {};
	var callback = new Callback(function(result) {
		rtn = result;
	});
	callback.setShowLoading(false);
	platform.postService("/getMenuInfo", param, callback, false, false);
	return rtn;
}
*/

function ckRegPwd(val){
	var regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*+=-])(?=.*[0-9]).{6,16}/;

	return regex.test(val);
}

/**
 * juso.go.kr에서 제공해 주는 주소검색 함수
 * @param param 주소값을 반환받을 객체정보
 */
function getJusoInfo(param) {
	var sZipId = param.zipcd;
	var sAddr1Id = param.addr1;
	var sAddr2Id = param.addr2;
	var sJibunAddr = param.jibun;
	var sCallBack = param.callback;
	//var sOw = param.ow;

	var customCallback = new Callback(function(result) {
		if(typeof result != "undefined")
		{
			if (typeof sJibunAddr != "undefined") {
				$("#"+sJibunAddr).val(result.jibunaddr);
			}
			$("#"+sZipId).val(result.zipno);
			$("#"+sAddr1Id).val(result.roadAddr);
			$("#"+sAddr2Id).focus();
		}
		else
		{
			if (typeof sJibunAddr != "undefined") {
				$("#"+sJibunAddr).val("");
			}
			$("#"+sJibunAddr).val("");
			$("#"+sZipId).val("");
			$("#"+sAddr1Id).val("");
			$("#"+sAddr2Id).val("");
		}

		try {
			if(!isNull(sCallBack)){
				//var strFun = sCallBack+"callback(result)";
				//eval(strFun);
				sCallBack.callback(result);
			};
 		} catch (e) {console.log(e);}
	});

	var param = new Array();
	param[0] = "";
	//if(sOw && sOw == "true"){
	//	openWindow(commonContextPath + "/jusocode", "jusocodeForm", {width:520, height:700, resizable:1}, {"ow":sOw, "callback":sCallBack});
	//}else{
		customPopup.show(commonContextPath + "/jusocode", "주소 찾기", 520, 700, customCallback, param);
	//}
}

/**
 * POST 방식 팝업오픈 함수
 * @param url 주소정보
 * @param name 팝업타켓
 * @param specs open.window에서 사용되는 options 값(JSON 형식)
 * @param param POST전송 파라메타
 * @returns
 */
function openWindow(url, name, specs, param)
{
	var scw = checkEmpty(specs.scw, 1920);
	var dualmntr = checkEmpty(specs.dualmntr, false);
	var winLeft = window.screenLeft ? window.screenLeft : window.screenX; //부모창의 x좌표
	var winTop = window.screenTop ? window.screenTop : window.screenY; //부모창의 y좌표
	var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width; //모니터 가로
	var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height; //모니터 세로
	var iWidth = (specs.width ? specs.width : 500);
	var iHeight = (specs.height ? specs.height : 500);
	var top, left;

	if(dualmntr && getBroswerType() == "IE"){
		left = (winLeft>=scw)?10:(scw+10);
		top = 10;
	}else{
		left = ((width / 2) - (iWidth / 2)) + winLeft;
		top = ((height / 2) - (iHeight / 2)) + winTop;
	}

	if($(document).find("#"+name).length > 0){
		$(document).find("#"+name).remove();
	}

	var oForm = document.createElement("form");
	oForm.setAttribute("method", "post");
	oForm.setAttribute("onsubmit", "return false");
	oForm.setAttribute("action", commonContextPath + url); //for context path
	oForm.setAttribute("target", name);
	oForm.setAttribute("id", name);

	for (var key in param) {
		if (param.hasOwnProperty(key)) {
			var hiddenField = document.createElement("input");
			hiddenField.setAttribute("type", "text");
			hiddenField.setAttribute("name", key);
			hiddenField.setAttribute("value", param[key]);
			oForm.appendChild(hiddenField);
			console.log("val", param[key])
		}
	}

	var sSpecs = "";
	var bInTop = specs.hasOwnProperty("top"), bInLeft = specs.hasOwnProperty("left"), bInScrollbars = specs.hasOwnProperty("scrollbars")
	  , bInResizable = specs.hasOwnProperty("resizable"), bInLocation = specs.hasOwnProperty("location"), bInMenubar = specs.hasOwnProperty("menubar");
	for(var key in specs){
		if (specs.hasOwnProperty(key) && (key !== "dualmntr" || key !== "scw")) {
			sSpecs += ((sSpecs.length > 0) ? "," : "") + key + "=" + specs[key];
		}
	}

	sSpecs += bInTop ? "" : ((sSpecs.length > 0) ? ",top="+top : "");
	sSpecs += bInLeft ? "" : ((sSpecs.length > 0) ? ",left="+left : "");
	sSpecs += bInScrollbars ? "" : ((sSpecs.length > 0) ? ",scrollbars=0" : "");
	sSpecs += bInResizable ? "" : (sSpecs.length > 0) ? ",resizable=0" : "";
	sSpecs += bInLocation ? "" : (sSpecs.length > 0) ? ",location=0" : "";
	sSpecs += bInMenubar ? "" : (sSpecs.length > 0) ? ",menubar=0" : "";

	document.body.appendChild(oForm);

	var oWin;
	try {
		oWin = window.open("", name, sSpecs, true);
	} catch (e) {console.log(e);}

	if(!isNull(oWin)){
		oForm.submit();

		if($("form[id='"+name+"']").length>0){
			$("form[id='"+name+"']").remove();
		}

		if(dualmntr && getBroswerType() == "IE"){
			var iPopWd = oWin.screen.width;
			var iPopHd = oWin.screen.height;
			var iPopLf = ((iPopWd / 2) - (iWidth / 2)) + left;
			var iPopTp = ((iPopHd / 2) - (iHeight / 2)) + top;
			oWin.moveTo(iPopLf, iPopTp);
		}
	}

	return oWin;
}

/**
 * 핸드폰 번호 식별함수
 * @param telno
 * @returns {Boolean} true : 핸드폰번호, false : 전화번호
 */
function isCellPhone(telno){
	if(typeof telno == "undefined" || telno == null || !telno) return false;

	var aMlcmn = ["010","011","016","017","018","019"];
	var sTmp = telno.replace(/[^0-9,;]/g,"").substring(0,3);

	return ($.inArray(sTmp,aMlcmn) != -1);
}

/**
 * 대한민국 지역국번 변경함수
 * @param telno 전화번호
 * @param opt (on: 지역번호 추가, off: 지역번호 제거)
 * @param areastr 지역번호문자(opt가 "on"일경우 대처될 지역번호)
 * @returns {String} 변경/제거 전화번호
 */
function replcTelofcno(telno, opt, areastr){
	if(typeof telno == "undefined" || telno == null || !telno) return "";
	if(isCellPhone(telno)) return telno;

	var jTelofcno = {"02":"서울특별시", "031":"경기도", "032":"인천광역시", "033":"강원도", "041":"충청남도"
		, "042":"대전광역시", "043":"충청북도", "044":"세종특별자치시", "051":"부산광역시", "052":"울산광역시"
		, "053":"대구광역시", "054":"경상북도", "055":"경상남도", "061":"전라남도", "062":"광주광역시"
		, "063":"전라북도", "064":"제주특별자치도"};

	var jAdisvcno = {"1588":"KT", "1577":"KT", "1899":"KT", "1544":"LG유플러스", "1644":"LG유플러스"
		, "1661":"LG유플러스", "1566":"SK브로드밴드", "1600":"SK브로드밴드", "1670":"SK브로드밴드", "1688":"세종텔레콤"
		, "1666":"세종텔레콤", "1599":"SK텔링크", "1877":"한국케이블텔레콤", "1855":"CJ헬로비전", "1800":"티온텔레콤"
		, "1541":"KT", "1633":"LG유플러스", "08217":"LG유플러스", "1655":"SK브로드밴드", "1677":"세종텔레콤"
		, "1682":"SK텔링크", "070":"인터넷전화"
		};

	var sRtn = telno;
	var sTelno = telno.replace(/[^0-9]/g,"");
	var sAreastr = (areastr) ? areastr : "052"; //대표지역번호
	var sReprsntno = "";

	if(sTelno.length < 7) return sRtn; //7자리 미만

	for (var key in jAdisvcno) { //부서서비스, 콜렉트콜 번호
		if (jAdisvcno.hasOwnProperty(key) && (sTelno.indexOf(key, 0) === 0)) {
			return sRtn;
		}
	}

	for (var key in jTelofcno) {
		if (jTelofcno.hasOwnProperty(key) && (sTelno.indexOf(key, 0) === 0)) {sReprsntno = key;}
	}

	if(opt == "on"){
		sRtn = (isEmpty(sReprsntno)?(sTelno.length>8?"":sAreastr):(isEmpty(areastr)?sReprsntno:sAreastr)) + sTelno.substring(sReprsntno.length);
	}else{
		sRtn = sTelno.substring( !isEmpty(areastr)?(sTelno.indexOf(sAreastr, 0) === 0?sAreastr.length:0):sReprsntno.length );
	}

	return sRtn;
}

/**
 * 파일크기 표시
 * @param num 바이트단위 파일 사이즈
 * @param prec 소수점 이하 개수 (default : 2)
 * @param comma 천 단위 콤마 붙이기 (default : on)
 * @returns {포멧적용값}
 */
function numberToHumanSize(num, prec, comma) {
	var s = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
	var e = Math.floor(Math.log(num) / Math.log(1024));
	return replcComma((num / Math.pow(1024, e)).toFixed(prec ? prec : 2), comma ? comma : "on") + " " + s[e];
}


function httpRequest(url, params, callback, async, dt) {
	$.ajax({
		type : 'post',
		dataType : (isEmpty(dt)?'text':dt),
		crossDomain:true,
		url : url,
		data : params,
		async : async,
		success : function(data, textStatus, jqXHR) {
			if (data) {
				callback(data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			overlay(false);
			console.log("E", "server-side failure with response: ", jqXHR);
		},
		cache : false
	});
}

function httpRequest4File(url, params, callback) {
	$.ajax({
		url : url,
		type : 'POST',
		data : params,
		cache : false,
		contentType : false,
		processData : false,
		xhr : function(){
			//Get XmlHttpRequest object
	        var xhr = $.ajaxSettings.xhr();

	        //Set onprogress event handler
	        xhr.upload.onprogress = function(event){
	        	var perc = Math.round((event.loaded / event.total) * 100);
	        	console.log("onprogress", perc);
//	            $('#progressBar').text(perc + '%');
//	            $('#progressBar').css('width',perc + '%');
	        };
	        return xhr ;
		},
		beforeSend : function( xhr ) {
			//Reset alert message and progress bar
//	        $('#progressBar').text('');
//	        $('#progressBar').css('width','0%');
		},
		success : function(data, textStatus, jqXHR) {
			if(data){
				callback(data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("E", "server-side failure with response: ", jqXHR);
		}
	});
}

function fnFileDown(f) {
	var frame = $('<iframe class="downloadFrame" style="display: none;"></iframe>');
	frame.attr('src', commonContextPath + "/mngr/fdownload?sfn=" + f["STRG_FL_NM"]);
	$("body").after(frame);

	setTimeout(function() {
		$("iframe.downloadFrame").remove();
	}, 1000);
}

function fnFormFileDown(f) {
	var frame = $('<iframe class="downloadFrame" style="display: none;"></iframe>');
	frame.attr('src', commonContextPath + "/mngr/formFiledownload?sfn=" + f["FORM_NM"]);
	$("body").after(frame);

	setTimeout(function() {
		$("iframe.downloadFrame").remove();
	}, 1000);
}

function fnFileDel(f) {
	var frame = $('<iframe class="deleteFrame" style="display: none;"></iframe>');
	frame.attr('src', commonContextPath + "/mngr/fremove?sfn=" + f["STRG_FL_NM"]);
	$("body").after(frame);

	setTimeout(function() {
		$("iframe.deleteFrame").remove();
	}, 1000);
}

function compareDate(sDate, eDate, type){
	if(isEmpty(sDate) || isEmpty(eDate) || sDate.length < 6 || eDate.length < 6)
		return false;

	var tSd = sDate.replace(/[^0-9]/g,"");
	var tEd = eDate.replace(/[^0-9]/g,"");
	var tType = isEmpty(type)?"le":type;

	var sYear = tSd.substring(0,4);
	var sMnth = tSd.substring(4,6) - 1;
	var sDay = (tSd.length>7)?tSd.substring(6,8):"01";
	var sdt = new Date(sYear, sMnth, sDay);

	var eYear = tEd.substring(0,4);
	var eMnth = tEd.substring(4,6) - 1;
	var eDay = (tEd.length>7)?tEd.substring(6,8):"01";
	var edt = new Date(eYear, eMnth, eDay);

	var result = false;

	 //eq:=, lt:<, le:<=, gt:>, ge:>=
	switch (tType) {
		case "eq":
			result = (sdt.getTime() == edt.getTime())
			break;

		case "lt":
			result = (sdt.getTime() < edt.getTime())
			break;

		case "le":
			result = (sdt.getTime() <= edt.getTime())
			break;

		case "gt":
			result = (sdt.getTime() > edt.getTime())
			break;

		case "ge":
			result = (sdt.getTime() >= edt.getTime())
			break;

		default:
			break;
	}

	return result;
}

/**************************************************************
 * 객체 키를 소문자로 변환
 * {ID: 1, VALUE: "하나"} => {id: 1, value: "하나"}
 **************************************************************/
function keysToLowerCase(obj) {
    var build, key, destKey, value;

    if (obj instanceof Array) {
        build = [];
        for (key in obj) {
            value = obj[key];

            if (typeof value === "object") {
                value = keysToLowerCase(value);
            }
            if (typeof value !== "function") {
            	build.push(value);
            }
        }
    } else {
        build = {};
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                destKey = key.toLowerCase();
                value = obj[key];
                if (value !== null && typeof value === "object") {
                    value = keysToLowerCase(value);
                }

                build[destKey] = value;
            }
        }
    }

    return build;
}

/**
 * 동적폼 생성함수
 * @param act 폼의 action
 * @param prms 전송될 파라메터(JSON 형식)
 * @param trg 폼의 target
 * @param mth 폼의 method
 * @returns 폼객체
 */
function createForm(act, prms, trg, mth){
	var $form = $("<form></form>");

	$form.attr("action",act);
	$form.attr("method",checkEmpty(mth, "post"));
	$form.attr("target",checkEmpty(trg, ""));
	$form.appendTo("body");
	for(var key in prms) {
        if(prms.hasOwnProperty(key)) {
        	var $input = $("<input type=\"hidden\" name=\""+key+"\" value=\""+prms[key]+"\"\">");
        	$form.append($input);
        }
	}
	return $form;
}

/**
 * 시작, 종료일의 차이일수 계산함수
 * @param startDd 시작일자
 * @param endDd 종료일자
 * @returns 계산일
 */
function dffrncDays(startDd, endDd){
	var sDt = startDd.replace(/[.,?!\s,-]/gi,'').replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
	var eDt = endDd.replace(/[.,?!\s,-]/gi,'').replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
	return Math.round((new Date(eDt) - new Date(sDt))/(1000*60*60*24));
}


function isValidKeyType(type){
	var tType = (type instanceof RegExp)?"DF":type;
	var _element = event.srcElement;
	var _value = _element.value;
	var _regexp;

	switch (tType) {
		case "KOR":
			_regexp = /[^ㄱ-ㅎㅏ-ㅣ가-힣]/gi;
			break;

		case "KORS":
			_regexp = /[^ㄱ-ㅎㅏ-ㅣ가-힣\s]/gi;
			break;

		case "KORENG":
			_regexp = /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]/gi;
			break;

		case "KORENGS":
			_regexp = /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z\s]/gi;
			break;

		case "ENG":
			_regexp = /[^a-zA-Z]/gi;
			break;

		case "ENGS":
			_regexp = /[^a-zA-Z\s]/gi;
			break;

		case "NUM":
			_regexp = /[^0-9]/gi;
			break;

		case "ENGNUM":
			_regexp = /[^0-9a-zA-Z]/gi;
			break;

		case "EMAIL":
			_regexp = /[^0-9a-zA-Z.!#$%&'*+/=?^_`{|}~-]/gi;
			break;

		case "ID":
			_regexp = /[^0-9a-zA-Z\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\(]/gi;
			break;

		case "DOMAIN":
			_regexp = /[^0-9a-zA-Z.]/gi;
			break;

		case "DF":
			_regexp = type;
			break;

		default:
			break;
	}
	_element.value = _value.replace(_regexp,"");
}

function replcHtml(str, type){
    if(type == "de"){
        str = str.replace(/&amp;/g, "&");
        str = str.replace(/&quot;/g, "\"");
        str = str.replace(/&lt;/g, "<");
        str = str.replace(/&gt;/g, ">");
        str = str.replace(/&#146;/g, "'");
    }else {
        str = str.replace(/&/g, "&amp;");
        str = str.replace(/"/g, "&quot;");
        str = str.replace(/</g, "&lt;");
        str = str.replace(/>/g, "&gt;");
        str = str.replace(/'/g, "&#146;");
    }
    return str;
}

/**
 * localStorage, sessionStorage에 저장된 값을 가져오는 함수
 * @param type (sesn: sessionStorage, local: localStorage)
 * @param key 키
 * @returns storage에 저장된 값
 */
function getStrge(type, key){
	var strge = (type=="sesn") ? sessionStorage : localStorage;
	return strge.getItem(key);
}

/**
 * localStorage, sessionStorage에 값을 저장하는 함수
 * 저장용량 : Chrome(40▲), Opera(27▲), Firefox(34▲), Internet Explorer(9▲): 10M, Safari(6▲): 5M
 * @param type type (sesn: sessionStorage, local: localStorage)
 * @param key 키
 * @param value storage에 저장할 값
 * @returns
 */
function setStrge(type, key, value){
	var strge = (type=="sesn") ? sessionStorage : localStorage;
	return strge.setItem(key, value);
}

/**
 * localStorage, sessionStorage에 값을 저장된 값 삭제함수.
 * @param type (sesn: sessionStorage, local: localStorage)
 * @param key 키
 * @param isLike (true: 키값이 포함된 경우 삭제, false: 해당사항없음)
 * @param isStrt (true: 키값으로 시작할 경우 삭제, false: 해당사항없음)
 */
function removeStrge(type, key, isLike, isStrt){
	var strge = (type=="sesn") ? sessionStorage : localStorage;
	if(checkNull(isLike, false) || checkNull(isStrt, false)){
		for(var sKey in strge){
			if(isLike && sKey.indexOf(key) != -1){
				strge.removeItem(sKey);
			}

			if(isStrt && (sKey.indexOf(key, 0) === 0)){
				strge.removeItem(sKey);
			}
		}
	}else{
		strge.removeItem(key);
	}
}

/**
 * 브라우저 종류확인
 * @returns OPERA, FIREFOX, SAFARI, IE, EDGE, CHROME
 */
function getBroswerType(){
	var rStr = "";
	if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0){ //Opera 8.0+
		rStr = "OPERA";
	}else if(typeof InstallTrigger !== 'undefined'){ //Firefox 1.0+
		rStr = "FIREFOX";
	}else if(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0){ //At least Safari 3+: "[object HTMLElementConstructor]"
		rStr = "SAFARI";
	}else if(/*@cc_on!@*/false || !!document.documentMode){ //Internet Explorer 6-11 ,Edge 20+
		rStr = "IE";
	}else if(!(/*@cc_on!@*/false || !!document.documentMode) && !!window.StyleMedia){ //Edge 20+
		rStr = "EDGE";
	}else if(!!window.chrome && !!window.chrome.webstore){ //Chrome 1+
		rStr = "CHROME";
	}
	return rStr;
}

function getCsrfToken() {
	var _csrfToken = {};
	_csrfToken[$("meta[name='csrf_parameter_name']").attr("content")] = $("meta[name='csrf_token']").attr("content");
	return _csrfToken;
}
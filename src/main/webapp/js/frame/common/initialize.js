//var initializeContextPath =  "/rdsbody"; //"/ding";
var initializeContextPath =  "";

var popup = {
	alert : {
		show : function() {
			top.popup.alert.show.apply(top.popup.alert, arguments);
		},
		hide : function() {
			top.popup.alert.hide.apply(top.popup.alert, arguments);
		},
	},

	confirm : {
		show : function() {
			top.popup.confirm.show.apply(top.popup.confirm, arguments);
		},
		hide : function() {
			top.popup.confirm.hide.apply(top.popup.confirm, arguments);
		},
	},

	loading : {
		cnt : 0,
		show : function() {
			top.popup.loading.show.apply(top.popup.loading, arguments);
		},
		hide : function() {
			top.popup.loading.hide.apply(top.popup.loading, arguments);
		},
	},

	help : {
		show : function() {
			top.popup.help.show.apply(top.popup.help, arguments);
		},
		hide : function() {
			top.popup.help.init.apply(top.popup.help, arguments);
		},
	},
	
	user : {
		show : function() {
			top.popup.user.show.apply(top.popup.user, arguments);
		},
		hide : function() {
			top.popup.user.hide.apply(top.popup.user, arguments);
		},
	},

	attach : {
		show : function() {
			top.popup.attach.show.apply(top.popup.attach, arguments);
		},
		hide : function() {
			top.popup.attach.hide.apply(top.popup.attach, arguments);
		},
	},
};

var customPopup = {
	show : function() {
		top.customPopup.show.apply(top.customPopup, arguments);
	},
	hide : function() {
		top.customPopup.hide.apply(top.customPopup, arguments);
	},
};

var attachFilePopup = {
		show : function() {
			top.attachFilePopup.show.apply(top.attachFilePopup, arguments);
		},
		hide : function() {
			top.attachFilePopup.hide.apply(top.attachFilePopup, arguments);
		},
	};

$.fn.nextFocus = function() {
	let $el = this;
	
	if ($el.prop("tagName") == "BUTTON" && $el.data("select-id")) {
		$el = $("#" + $el.data("select-id"));
	}
	
	let $next = $el.nextAll().filter("input:enabled:not([readonly]):not([type=hidden]), select:enabled:not([readonly]), div.SumoSelect");
	//var $next = $el.nextAll().filter("input:enabled:not([readonly]):not([type=hidden]), select:enabled:not([readonly])");
	
	//console.log("$next1", $next);
	
	/*if ($next.length > 0) {
		if ($next.hasClass("SumoSelect")) {
			$next = $next.find("select");
		}
	}*/
	
	if ($next.length == 0) {
		$next = $el.nextAll().find("input:enabled:not([readonly]), select:enabled:not([readonly])");
		//console.log("next2", $next);
	}
	
	if ($next.length == 0) {
		$next = $el.parent().nextAll().find("input:enabled:not([readonly]), select:enabled:not([readonly])");
		//console.log("next3", $next);
	}
	
	if ($next.length == 0) {
		if (checkEmpty($el.parents("form").attr("id"), "").indexOf("search") > -1) {
			listener.button.search.click();
		}
	}
	
	//$next = $next.first();
	//$next.focus();

	if ($next.prop("tagName") == "SELECT") {
		$next = $next.get(0).sumo.setFocus();
	} else {
		$next = $next.length > 1 ? $next.get(0) : $next;
		$next.select();
		$next.focus();
	}
};

$.fn.setData = function(data, opts) {
	var $el = $(this);
	
	$el.editMode("edit");
	
	if ($el.prop("tagName") == "FORM") {
		for (var field in data) {
			if (field.indexOf("$") > -1) {
				continue;
			}
			
			if(!isNull(opts) && $.inArray(field, opts.EXCLIDS) != -1) {
				continue;
			};
			
			$target = $el.find("[data-field=" + field + "]");
			
			//console.log(field, $target, $target.prop("tagName"), $target.prop("type"));
			
			if (($target.prop("tagName") == "INPUT" || $target.prop("tagName") == "TEXTAREA") && $target.prop("type") != "radio" && $target.prop("type") != "checkbox") {
				if(!isNull($target.data("format")) && !isNull(data[field]) && ($target.data("format") == "date" || $target.data("format") == "yyyy-mm-dd" || $target.data("format") == "date-month" || $target.data("format") == "yyyy-mm")){
					$target.val( (data[field].length == 6) ? data[field].replace(/(\d{4})(\d{2})/, '$1-$2') : data[field].replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3') );
				}else if(!isNull($target.data("format")) && !isNull(data[field]) && ($target.data("format") == "hh:mi" || $target.data("format") == "yyyy-mm-dd hh:mi" || $target.data("format") == "yyyy-mm-dd hh:mi:ss")){
					$target.val( (data[field].length == 4) ? data[field].replace(/(\d{2})(\d{2})/, '$1:$2') : ( (data[field].length == 12) ? data[field].replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5') : data[field].replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:$6') ) );
					// CKE
				}else if ($target.prop("tagName") == "TEXTAREA" && typeof CKEDITOR != "undefined" && CKEDITOR.instances[$target.prop("id")]) {
					try {
						CKEDITOR.instances[$target.prop("id")].setData(data[field]);
					} catch (e) {
						console.error(e);
					}
				} else{
					$target.val(data[field]);
				}






			} else if ($target.prop("tagName") == "INPUT" && ($target.prop("type") == "radio" || $target.prop("type") == "checkbox")) {
				$target.each(function(idx, obj) {
					if (obj.value == data[field]) {
						obj.checked = true;
					}
				});
			} else if ($target.prop("tagName") == "SELECT") {
				/*if(!$($target).prop('disabled')){
					$($target).val([checkEmpty(data[field],"")]).change();
				}*/

				if ($target.get(0).sumo.enabled) {
					$target.get(0).sumo.selectItems([checkEmpty(data[field],"")]);
					
					var $children = $("select[data-parent-id=" + $target.prop("id") + "]");
					
					if ($children.length > 0) {
						$children.each(function(idx, obj) {
							var childField = $(obj).data("field");
							
							obj.sumo.selectItems([data[childField]]);
						});
					}
				}
			}
		}
	}
};

$.fn.getData = function() {
	//console.log("GetData", this);
	var $el = $(this);
	
	var result = new Object();
	
	if ($el.prop("tagName") == "FORM") {
		var $targets = $el.find("[data-field]");
		
		$targets.each(function(idx, obj) {
			$target = $(obj);
			
			var field = $target.data("field");
			
			if (($target.prop("tagName") == "INPUT" || $target.prop("tagName") == "TEXTAREA") && $target.prop("type") != "radio" && $target.prop("type") != "checkbox") {
				// CKE
				if ($target.prop("tagName") == "TEXTAREA" && typeof CKEDITOR != "undefined" && CKEDITOR.instances[$target.prop("id")]) {
					try {
						result[field] = CKEDITOR.instances[$target.prop("id")].getData();
					} catch (e) {
						console.error(e);
					}
				}else if(!isEmpty($target.data("code"))){ //codeHelp
					result[field] = $target.val().split(",");
				}
				else{
					result[field] = $target.val();
				}
			} else if ($target.prop("tagName") == "INPUT" && $target.prop("type") == "radio") {
				$target.each(function(idx, obj) {
					if (obj.checked) {
						result[field] = $target.val();
					}
				});
			} else if ($target.prop("tagName") == "INPUT" && $target.prop("type") == "checkbox") {
				if ($target.prop("checked")) {
					result[field] = $target.val();
				}
			} else if ($target.prop("tagName") == "SELECT") {
				//var selected = $target.multipleSelect("getSelects");
				var selected = $target.get(0).sumo.getSelectedItems();
				
				if ($target.attr("multiple") == "multiple") {
					result[field] = selected;
					let codeListStr = ""; //멀티 선택시 조회용 텍스트 처리 추가
					if (selected != null){
						codeListStr += "'";
						$.each(selected, (idx, obj) => {
							codeListStr += (obj+"','")
						});
						codeListStr = codeListStr.substring(0,codeListStr.length-2);
						result[field+"ListStr"] = codeListStr.trim();
					}
				} else {
					if (selected.length > 0) {
						result[field] = selected[0];
					} else {
						result[field] = "";
					}
				}
				result[field] = $($target).val();

			}
			
			if (isNull(result[field])) {
				result[field] = "";
			}
		});
	}
	
	result["EDITMODE"] = $el.editMode();
	result["editMode"] = $el.editMode();
	
	return result;
};

$.fn.reset = function(opts) {
	var $el = $(this);
	
	$el.editMode("reset");
	
	var $target = $el.find("input, select, textarea, span:not(.notreset)");
	
	$target.each(function(idx, obj) {
		$obj = $(obj);
		
		if(!isNull(opts) && $.inArray($obj.prop("id"), opts.EXCLIDS) != -1) {
	        return true;
	    }
		
		if ((obj.tagName == "INPUT" || obj.tagName == "TEXTAREA") && obj.type != "radio" && obj.type != "checkbox") {
			$obj.val(checkNull($obj.data("default"), ""));

			// CKE
			if (obj.tagName == "TEXTAREA" && typeof CKEDITOR != "undefined" && CKEDITOR.instances[$obj.prop("id")]) {
				try {
					CKEDITOR.instances[$obj.prop("id")].setData("");
				} catch (e) {
					console.error(e);
				}
			}

		} else if (obj.tagName == "INPUT" && (obj.type == "radio" || obj.type == "checkbox")) {
			if ($obj.val() == $obj.data("default")) {
				obj.checked = true;
			} else {
				obj.checked = false;
			}
		} else if (obj.tagName == "SELECT") {
			//$(obj).find('option:eq(0)').prop('selected', true);  // To select via value

			$(obj).get(0).sumo.reload();
			$(obj).get(0).sumo.unSelectAll();
			$(obj).get(0).sumo.selectItems(checkEmpty($(obj).data("default"), [""]));
		} else if (obj.tagName == "SPAN") {
			if (!$(obj).is("[class^=cke]")) {	// CKEDITOR 제외
				$obj.text("");
				$obj.html("");
			}
		}
	});
}

$.fn.checkValidation = function(opts) {
	var $el = $(this);
	
	if ($el.prop("tagName") != "FORM") {
		return false;
	}
	
	var $target = $el.find("input:enabled:not([readonly]), select:enabled:not([readonly]), textarea");
	
	var isPass = true;
	var errorField = "";
	var $errorObj = null;
	
	$target.each(function(idx, obj) {
		var $obj = $(obj);
		var required = checkNull($obj.data("required"), false);
		
		$errorObj = $obj;
		
		if(!isNull(opts) && $.inArray($obj.prop("id"), opts.EXCLIDS) != -1) {
	        return true;
	    }
		
		//console.log($obj, required);

		var title = $("label[for=" + $obj.attr("id") + "]").html();

		if (required) {
			if ($obj.prop("tagName") == "INPUT" || $obj.prop("tagName") == "TEXTAREA") {
				var $nameObj = $("input[data-code-obj=" + $obj.attr("id") + "]");

			 	if ($obj.prop("tagName") == "TEXTAREA" && typeof CKEDITOR != "undefined" && CKEDITOR.instances[$obj.prop("id")]) {
					if (CKEDITOR.instances[$obj.prop("id")].getData() == "") {
						errorField = title;
						isPass = false;
						return false;
					}
				}
				else if ($obj.val() == "") {
					errorField = title;
					isPass = false;
					return false;
				} else if ($nameObj.length > 0 && $nameObj.val() == "") {
					errorField = title;
					isPass = false;
					return false;
				}
			} else if ($obj.prop("tagName") == "SELECT") {
				/*if($($obj).find('option').length ==0 ){
					errorField = title;
					isPass = false;
					return false;
				} else if($($obj).find('option').length == 1 && $($obj).val() == '' ){
					errorField = title;
					isPass = false;
					return false;
				}*/

				if ($obj.get(0).sumo.getSelectedItems().length == 0) {
					errorField = title;
					isPass = false;
					return false;
				} else if ($obj.get(0).sumo.getSelectedItems().length == 1 && $obj.get(0).sumo.getSelectedItems()[0] == "") {
					errorField = title;
					isPass = false;
					return false;
				}
				
				/*
				if ($obj.multipleSelect("getSelects").length == 0) {
					errorField = title;
					isPass = false;
					return false;
				}
				*/
			}
		}
		
		if ($obj.data("format") == "date-year") {
			if ($obj.val().length != 4) {
				errorField = title;
				isPass = false;
				return false;
			}
		} else if ($obj.data("format") == "date-month") {
			if ($obj.val().length != 7) {
				errorField = title;
				isPass = false;
				return false;
			}
		}
	});
	
	if (!isPass) {
		popup.alert.show(hanp.translatePostpositions(errorField + "을(를) 확인하세요."), function() {
			if ($errorObj.prop("tagName") == "INPUT") {
				$errorObj.focus();
			} else if ($errorObj.prop("tagName") == "SELECT") {
				//$($errorObj).focus();
				$errorObj.get(0).sumo.setFocus();
				//$errorObj.multipleSelect("focus");
			}
		});
	}
	
	return isPass;
};

$.fn.checkValidationParent = function(opts) {
	var $el = $(this);
	
	if ($el.prop("tagName") != "FORM") {
		return false;
	}
	
	var $target = $el.find("input:enabled:not([readonly]), select:enabled:not([readonly]), textarea");
	
	var isPass = true;
	var errorField = "";
	var $errorObj = null;
	
	$target.each(function(idx, obj) {
		var $obj = $(obj);
		var required = checkNull($obj.data("required"), false);
		
		$errorObj = $obj;
		
		if(!isNull(opts) && $.inArray($obj.prop("id"), opts.EXCLIDS) != -1) {
	        return true;
	    }
		
		//console.log($obj, required);

		var title = $("label[for=" + $obj.attr("id") + "]", parent.document).html();

		if (required) {
			if ($obj.prop("tagName") == "INPUT" || $obj.prop("tagName") == "TEXTAREA") {
				var $nameObj = $("input[data-code-obj=" + $obj.attr("id") + "]", parent.document);
				
				if ($obj.val() == "") {
					errorField = title;
					isPass = false;
					return false;
				} else if ($nameObj.length > 0 && $nameObj.val() == "") {
					errorField = title;
					isPass = false;
					return false;
				}
			} else if ($obj.prop("tagName") == "SELECT") {
				/*if($($obj).find('option').length ==0 ){
					errorField = title;
					isPass = false;
					return false;
				} else if($($obj).find('option').length == 1 && $($obj).val() == '' ){
					errorField = title;
					isPass = false;
					return false;
				}*/


				if ($obj.get(0).sumo.getSelectedItems().length == 0) {
					errorField = title;
					isPass = false;
					return false;
				} else if ($obj.get(0).sumo.getSelectedItems().length == 1 && $obj.get(0).sumo.getSelectedItems()[0] == "") {
					errorField = title;
					isPass = false;
					return false;
				}
				
				/*
				if ($obj.multipleSelect("getSelects").length == 0) {
					errorField = title;
					isPass = false;
					return false;
				}
				*/
			}
		}
		
		if ($obj.data("format") == "date-year") {
			if ($obj.val().length != 4) {
				errorField = title;
				isPass = false;
				return false;
			}
		} else if ($obj.data("format") == "date-month") {
			if ($obj.val().length != 7) {
				errorField = title;
				isPass = false;
				return false;
			}
		}
	});
	
	if (!isPass) {
		popup.alert.show(hanp.translatePostpositions(errorField + "을(를) 확인하세요."), function() {
			if ($errorObj.prop("tagName") == "INPUT") {
				$errorObj.focus();
			} else if ($errorObj.prop("tagName") == "SELECT") {
				$errorObj.get(0).sumo.setFocus();
				//$errorObj.focus();
				//$errorObj.multipleSelect("focus");
			}
		});
	}
	
	return isPass;
};



$.fn.formDisable = function(opts) {
	var $el = $(this);
	
	if ($el.prop("tagName") != "FORM") {
		return false;
	}
	
	var $target = $el.find("input:enabled:not([readonly]), select:enabled:not([readonly]), textarea:enabled:not([readonly]), button");
	
	for (var i = 0; i < $target.length; i++) {
		$obj = $($target.get(i));
		
		if(!isNull(opts) && $.inArray($obj.prop("id"), opts.EXCLIDS) != -1) {
	        continue;
	    }
		
		$obj.data("form-disabled", true);
		
		if ($obj.prop("tagName") == "SELECT") {
			//$obj.prop("disabled", true);
			$obj.get(0).sumo.disable();
		} else {
			$obj.prop("disabled", true);
		}
	}
};

$.fn.formEnable = function(opts) {
	var $el = $(this);
	
	if ($el.prop("tagName") != "FORM") {
		return false;
	}
	
	var $target = $el.find("input:not([readonly]), select:not([readonly]), textarea:not([readonly]), button");
	
	for (var i = 0; i < $target.length; i++) {
		$obj = $($target.get(i));
		
		if(!isNull(opts) && $.inArray($obj.prop("id"), opts.EXCLIDS) != -1) {
			continue;
	    }
		
		if ($obj.data("form-disabled")) {
			$obj.data("form-disabled", false);
			
			if ($obj.prop("tagName") == "SELECT") {
				//$obj.prop("disabled", false);
				$obj.get(0).sumo.enable();
			} else {
				$obj.prop("disabled", false);
			}
		}
	}
};

$.fn.editMode = function(val) {
	var $el = $(this);
	
	if (!isNull(val)) {
		$el.data("editMode", val);
	}
	
	if (isNull($el.data("editMode"))) {
		$el.data("editMode", "reset");
	}
	
	return $el.data("editMode");
};

/* Korean initialisation for the jQuery calendar extension. */
/* Written by DaeKwon Kang (ncrash.dk@gmail.com), Edited by Genie. */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['ko'] = {
	closeText: '닫기',
	prevText: '이전달',
	nextText: '다음달',
	currentText: '오늘',
	monthNames: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월'],
	monthNamesShort: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월'],
	dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
	dayNamesShort: ['일','월','화','수','목','금','토'],
	dayNamesMin: ['일','월','화','수','목','금','토'],
	weekHeader: '주',
	dateFormat: 'yy-mm-dd',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: '년'};
datepicker.setDefaults(datepicker.regional['ko']);

return datepicker.regional['ko'];

}));

(function($) {
	// Number Onry
	$.fn.allowOnlyNumeric = function() {

		/**
		 * The interval code is commented as every 250 ms onchange of the textbox
		 * gets fired.
		 */

		// var createDelegate = function(context, method) {
		// return function() { method.apply(context, arguments); };
		// };
		/**
		 * Checks whether the key is only numeric.
		 */
		var isValid = function(key) {
			var validChars = "0123456789.-";
			var validChar = validChars.indexOf(key) != -1;
			return validChar;
		};

		/**
		 * Fires the key down event to prevent the control and alt keys
		 */
		var keydown = function(evt) {
			const regExp = /[^0-9.,]/g;
			const del = event.target;
			if (regExp.test(del.value)) {
				del.value = del.value.replace(regExp, '');
			}

			if (evt.ctrlKey || evt.altKey) {
				evt.preventDefault();
			}
		};

		/**
		 * Fires the key press of the text box
		 */
		var keypress = function(evt) {
			if ($(this).prop('readOnly')) return;
			var scanCode;
			// scanCode = evt.which;
			if (evt.charCode) { // For ff
				scanCode = evt.charCode;
			} else { // For ie
				scanCode = evt.which;
			}

			if (scanCode && scanCode >= 0x20 /* space */) {
				var c = String.fromCharCode(scanCode);
				if (!isValid(c)) {
					evt.preventDefault();
				}
			}
		};

		/**
		 * Fires the lost focus event of the textbox
		 */
		var onchange = function() {
			var result = [];
			var enteredText = $(this).val();
			for (var i = 0; i < enteredText.length; i++) {
				var ch = enteredText.substring(i, i + 1);
				if (isValid(ch)) {
					result.push(ch);
				}
			}
			var resultString = result.join('');
			if (enteredText != resultString) {
				$(this).val(resultString);
			}

		};

		function keyup(event) {
			const regExp = /[^0-9.,]/g;
			const del = event.target;
			if (regExp.test(del.value)) {
				del.value = del.value.replace(regExp, '');
			}
		};



		// var _filterInterval = 250;
		// var _intervalID = null;

		// var _intervalHandler = null;

		/**
		 * Dispose of the textbox to unbind the events.
		 */
		this.dispose = function() {
			$(this).die('change', onchange);
			$(this).die('keypress', keypress);
			$(this).die('keydown', keydown);
			// window.clearInterval(_intervalHandler);
		};

		$(this).on('change', '', onchange);
		$(this).on('keypress', '', keypress);
		$(this).on('keydown', '', keydown);
		$(this).on('keyup', '', keyup);
		// _intervalHandler = createDelegate(this, onchange);
		// _intervalID = window.setInterval(_intervalHandler, _filterInterval);
		return this;
	}

	$(window).on('load', function() {
		$('[data-format=number]').each(function() {
			var $spy = $(this)
			$spy.allowOnlyNumeric()
		})
	});
})(jQuery);


(function($) {
// Upper Case Only
	$.fn.allowOnlyUpperCase = function() {

		var keypress = function(evt) {
			if (evt.which == 0) return;
			
			if ($(this).prop('readOnly')) return;

			if (evt.target.value.length >= evt.target.maxLength && evt.target.maxLength != -1) {
				if (evt.target.selectionStart == evt.target.selectionEnd) {
					evt.preventDefault();
					return;
				}
			}

			var stNum = evt.target.selectionStart;
			var endNum = evt.target.selectionEnd;

			var curValue = evt.target.value;

			var leftValue = curValue.substring(0, stNum);
			var rightValue = curValue.substring(endNum);

			var keyChar = String.fromCharCode(evt.which);
            
			if (keyChar >= 'a' && keyChar <= 'z') {
				evt.target.value = leftValue + String.fromCharCode(Number(evt.which) - 32) + rightValue;
				evt.preventDefault();
			} else if (keyChar >= 'A' && keyChar <= 'Z') {
				evt.target.value = leftValue + String.fromCharCode(evt.which) + rightValue;
				evt.preventDefault();
			} else if (keyChar >= '0' && keyChar <= '9') {
				evt.target.value = leftValue + String.fromCharCode(evt.which) + rightValue;
				evt.preventDefault();
			} else if (keyChar == '*') {
				evt.target.value = leftValue + '*' + rightValue;
				evt.preventDefault();
			}

			evt.target.selectionStart = stNum + 1;
			evt.target.selectionEnd = stNum + 1;
		};

		this.dispose = function() {
			$(this).off('keypress', keypress);
		};

		$(this).on('keypress', keypress);

		//$(this).css('text-transform', 'uppercase');
		return this;
	}

	$(window).on('load', function() {
		$('[data-format=upper]').each(function() {
			var $spy = $(this)
			$spy.allowOnlyUpperCase()
		})
	});
})(jQuery);

var initializeConfig = {
	setMultipleSelect : function() {
		var selects = $("select");

		selects.each(function(idx, obj) {
			var $el = $(obj);
			
			if ($el.attr("multiple") == "multiple") {
				$el.SumoSelect({selectAll:true});
			} else {
				$el.SumoSelect();
			}

			// set options 
			
			if (!isNull($el.data("options-code"))) {
				var code = $el.data("options-code") + "";
				var param = checkNull($el.data("options-param"), {});
				var isTotal = checkNull($el.data("total"), false);
				var isNone = checkNull($el.data("options-none"), false);
				var isCustom = checkNull($el.data("options-custom"), false);
				var isText = checkNull($el.data("options-text"), false);
				var isUnapply = checkNull($el.data("options-unapply"), false);

				var defaultSelect = checkEmpty($el.data("default"), []);

				var callback = new Callback(function(result) {

					/*if (isTotal) {
						$($el).append(createOption('*', '전체'));
					}
					if (isNone) {
						$($el).append(createOption('', '없음'));
					}
					if (isCustom) {
						$($el).append(createOption('#', '공통'));
					}
					if(isUnapply){
						$($el).append(createOption('', '미적용'));
					}
					if(isText){
						$($el).append(createOption('', $el.data("options-text")));
					}

					if(result){
						$(result).each(function(){
							$($el).append(createOption(this.code, this.name));
						});
					}*/

					if (isTotal) {
						$el.get(0).sumo.add("*", "전체");
					}
					if (isNone) {
						$el.get(0).sumo.add("", "없음");
					}
					if (isCustom) {
						$el.get(0).sumo.add("#", "공통");
					}
					if(isUnapply){
						$el.get(0).sumo.add("", "미적용");
					}

					if(result){
						for (var resultIdx = 0; resultIdx < result.length; resultIdx++) {
							$el.get(0).sumo.add(result[resultIdx]["code"] + "", result[resultIdx]["name"] + "");
						}
					}
				
					$el.get(0).sumo.reload();
					$el.get(0).sumo.unSelectAll();
					$el.get(0).sumo.selectItems(defaultSelect);
				});

				//param.TYPE = "HELP";
				param.queryId = code;
				callback.setShowLoading(false);
				platform.postService("/getCodeName", param, callback);
			}

			$($el).change(function(evt){
				listener.select.change($el);
			});

			/*$el.change(function(evt) {
				var $parent = $(evt.currentTarget);
				var $targets = $("select[data-parent-id=" + $parent.attr("id") + "]");

				if ($targets.length > 0) {
					$targets.each(function(idx, obj) {
						var $target = $(obj); 
						
						var code = $target.data("options-code");
						var param = $target.data("options-param");
						var refcd = $target.data("options-refcd");
						var isTotal = checkNull($target.data("total"), false);
						var isNone = checkNull($target.data("options-none"), false);
						var isCustom = checkNull($el.data("options-custom"), false);
						var defaultSelect = checkEmpty($el.data("default"), []);
						
						var selectedItems = $parent.get(0).sumo.getSelectedItems();
						
						if (selectedItems.length == 1) {
							param["REFCD"] = $parent.get(0).sumo.getSelectedItems()[0];
							param["TSK_KD_CD"] = $parent.get(0).sumo.getSelectedItems()[0];
						} else {
							param["REFCD"] = "";
							param["TSK_KD_CD"] = "";
						}
						
						for(var key in refcd){
							var $oTarget = $("#"+key).length > 0 ? $("#"+key) : $("input[name="+key+"]");
							if($oTarget.length == 0) continue;
							var sPKey = checkEmpty(refcd[key], key.toUpperCase());
							param[sPKey] = $oTarget.val(); 
						}

						//console.log("$parent", $parent.attr("id"), $parent.multipleSelect("getSelects"));
						
						var targetCallback = new Callback(function(result) {
							// console.log("target result",$target.attr("id"), result);
							
							$target.get(0).sumo.removeAll();
							
							if (isTotal) {
								$target.get(0).sumo.add("*", "전체");
							} else if (isNone) {
								$target.get(0).sumo.add("", "없음");
							} else if (isCustom) {
								$target.get(0).sumo.add("#", isCustom);
							}
							
							$.each(result, function(idx, obj) {
								$target.get(0).sumo.add(obj["CODE"], obj["NAME"])
								
								/!*
								var option = new Option(obj["NAME"], obj["CODE"]); 
								$target.append(option);
								*!/
							});
							
							$target.get(0).sumo.reload();
							//$target.multipleSelect("refresh");
							
							$target.trigger("change");
						});

						//param.TYPE = "HELP";
						param.queryId = code;
						targetCallback.setShowLoading(false);
						//alert('code22 : ' + code);
						
						platform.postService("/getCodeName", param, targetCallback);
					});
				}
				
				listener.select.change($parent);
			});*/
		});
	},

	setCodeNameInput : function() {
		var $inputObj = $("input[data-code]");
		
		$inputObj.each(function(idx, obj) {
			$obj = $(obj);
			if(!$obj.attr("data-type")) $obj.attr("data-type","help");
			$obj.after("<button class='btnCodeHelp' data-target='" + $obj.attr("id") + "' >&nbsp;</button>");
		});
		
		var helpButton = $("button.btnCodeHelp[data-target]");

		//console.log("setCodeNameInput", helpButton);
		
/*		$inputObj.change(function(){
			//alert('onchange');
		})
		*/
		$inputObj.keypress(function(){
			var $el = $(this);
			var $target = $("#" + $el.data("target"));
			var $codTarget = $("input[data-code-obj=" + $target.attr("id") + "]");
			
			$codTarget.val("");
		})

		$("button.btnCodeHelp[data-target]").prev().on("keydown",function(e){
			if( e.keyCode === KEY_F1) {
				$(this).next().click()
				e.preventDefault();
			}
		})

		helpButton.click(function() {
			var $el = $(this);
			var $target = $("#" + $el.data("target"));
			var multiple = checkEmpty($target.data("multiple"), false);

			var type = checkEmpty($target.data("type"), "help");

			var code = $target.data("code");
			var param = $target.data("param");
			var refcd = $target.data("options-refcd");
			
			for(var key in refcd){
				var $oTarget = $("#"+key).length > 0 ? $("#"+key) : $("input[name="+key+"]");
				if($oTarget.length == 0) continue;
				var sPKey = checkEmpty(refcd[key], key.toUpperCase());
				param[sPKey] = $oTarget.val(); 
			}


			if (type == "user") {
				var $codTarget = $("input[data-code-obj=" + $target.attr("id") + "]");


				// param["userinfo"] = $target.val();
				param["userinfo"] = ""		//클릭 , f1의 경우 CodeHelp List 전체 조회
				
				var callback = new Callback(function(result) {
					if(!isEmpty(result)){
						$target.val(result["userId"]);
						$codTarget.val(result["userNm"]);
					}else{
						if(isEmpty($codTarget.val())){
							$target.val("");
						}
					}
					if(result) {
						$target.nextFocus();
					} else {
						$target.select();
						$target.focus();
					}

					listener.button.help.callback($target, result);
				});

				popup[type].show(code, param, callback);
			}
			else {
				var $nameTarget = $("input[data-code-obj=" + $target.attr("id") + "]");
				
				var callback = new Callback(function(result) {
					console.log("helpButton callback", result);

					if(Array.isArray(result)){
						let nameList = new Array(), codeList = new Array();
						$.each(result, (idx, obj) => {
							nameList.push(obj["name"]);
							codeList.push(obj["code"]);
						});
						$nameTarget.val(nameList.toString());
						$target.val(codeList.toString());
					}else{
						if(result) {
							$nameTarget.val(result["name"]);
							$target.val(result["code"]);
						}
					}
					if(result) {
						$target.nextFocus();
					} else {
						$target.select();
						$target.focus();
					}


					listener.button.help.callback($target, result);
				});
				
				//console.log("type", type, code, $target.val(), param, callback, multiple);
				popup[type].show(code, "", param, callback, multiple);		//클릭 , f1의 경우 CodeHelp List 전체 조회
			}
		});
	},
	
	preventFormSubmit : function() {
		$("form").submit(function(){
			return false;
		});
	},
	
	addGridResizeEvent : function() {
		$(window).resize(function() {
			$('.webix_dtable').each(function() {
				var $this = $(this);
				var _dataTable = $$($this.parent().attr("id"));
				_dataTable.adjust();
			});
		});
	},
	
	setNextFocus : function(target) {
		$("." + target + "Row>input[data-end!='true']:enabled:not([readonly]), ." + target + "Row select").on("keydown", function(evt) {
			if (evt.keyCode == KEY_ENTER) {
				$el = $(evt.currentTarget);
				$el.nextFocus();
			}
		});
		
		var $firstObj = $("." + target + "Row>input:enabled:not([readonly]), ." + target + "Row select").first();
		
		if ($firstObj.prop("tagName") == "SELECT" || ($firstObj.prop("tagName") == "DIV" && $firstObj.hasClass("SumoSelect"))) {
			//$firstObj = $firstObj.get(0).sumo.setFocus();
			//$firstObj = $firstObj.multipleSelect("focus");
		} else {
			//$firstObj.focus();
		}
	},
	
	setCodeName : function(target) {
		let $codeObjs = $("." + target + "Row>input[data-code]");
		$codeObjs.on("keydown", function(evt) {
			$this = $(this);
			let multiple = checkEmpty($this.data("multiple"), false);
			let codeObjID = $this.attr("id");
			let $nameObj = $("." + target + "Row>input[data-code-obj=" + codeObjID + "]");
			let $codeObj = $this;

			if (evt.keyCode !== KEY_ENTER && evt.keyCode !== KEY_F1) {
				if (isValidKey2(evt)) { 
					$nameObj.val("");
					listener.editor.keydown($this, evt)
				}
				return;
			}
			
			var param = $this.data("param");
			var refcd = $this.data("options-refcd");
			
			for(var key in refcd){
				var $oTarget = $("#"+key).length > 0 ? $("#"+key) : $("input[name="+key+"]");
				if($oTarget.length == 0) continue;
				var sPKey = checkEmpty(refcd[key], key.toUpperCase());
				param[sPKey] = $oTarget.val(); 
			}

			if ($this.data("type") == "help") {
				if(isEmpty($this.val()) && evt.keyCode !== KEY_F1 ) return;

				param["CODE"] = $this.val();
				
				var callback = new Callback(function(result) {
					 //console.log(result, isEmpty(result), result.length);
					if(result.length > 1 || result.length === 0) {
						let innerCallBack = new Callback(function(result) {
							if(result){
								if(Array.isArray(result)) {
									let nameList = new Array(), codeList = new Array();
									$.each(result, (idx, obj) => {
										nameList.push(obj["name"]);
										codeList.push(obj["code"]);
									});
									$codeObj.val(codeList.toString());
									$nameObj.val(nameList.toString());
								} else {
									$codeObj.val(result["code"]);
									$nameObj.val(result["name"]);
								}
								$codeObj.nextFocus()
							} else {
								$codeObj.val("");
								$nameObj.val("")
								$codeObj.focus();
							}
						})
						let value = $this.val();
						if(result.length === 0) value = "";

						popup[$codeObj.data("type")].show($codeObj.data("code"), value ,param, innerCallBack,multiple);
					} else {
						$codeObj.val(result[0]["code"]);
						$nameObj.val(result[0]["name"]);
					}
				});

				//F1 일경우 조회 하지않고 바로 팝업호출
				if(evt.keyCode === KEY_F1) {
					callback.callback([]);
				}else {
					//param.TYPE = "CODE";
					param.queryId = $this.data("code");
					param.cmminfo = $this.val();
					callback.setShowLoading(false);
					platform.postService("/getCodeName", param, callback);
				}

			} else if ($this.data("type") == "user") {
				console.log("user2");
				if(isEmpty($this.val()) && evt.keyCode !== KEY_F1 ) return;

				param["USERINFO"] = $this.val();
				param["USERNM"] = "";
				
				var callback = new Callback(function(res) {
					let result = res.resultVO;
					if(!isEmpty(result) && result.length == 1){
						$codeObj.val(result[0]["userId"]);
						$nameObj.val(result[0]["userNm"]);
						
						listener.button.help.callback($codeObj, result);

						$codeObj.nextFocus();
					}else{
						let callback = new Callback(function(result) {

							if(!isEmpty(result)){
								$codeObj.val(result["userId"]);
								$nameObj.val(result["userNm"]);
								$codeObj.nextFocus();
							}else{
								if(isEmpty($nameObj.val())){
									$codeObj.val("");
									$codeObj.select();
									$codeObj.focus();
								}
							}

							listener.button.help.callback($codeObj, result);
						});
						if(result.length === 0 ) param.userinfo = "";

						popup[$codeObj.data("type")].show($codeObj.data("code"), param, callback);
					}
				});

				//F1 일경우 조회 하지않고 바로 팝업호출
				if(evt.keyCode === KEY_F1) {
					callback.callback({resultVO:[]});
				}else {
					param.userinfo = $this.val();
					param.queryid = "popup.selectUserPopupList";
					platform.postService("/common/selectList", param, callback);
				}

			}
			/*
			else if ($this.data("type") == "work") {
				if(isEmpty($this.val()))
					return;

				param["WORKINFO"] = $this.val();
				param["WORKNM"] = "";

				var callback = new Callback(function(result) {
					var $yymmObj = $("." + target + "Row>input[data-code-obj=" + codeObjID + "1]");
					var $statusObj = $("." + target + "Row>input[data-code-obj=" + codeObjID + "2]");
					console.log("result:", result);
					if(!isEmpty(result) && result.length == 1){
						$codeObj.val(result[0]["WORK_NO"]);
						$nameObj.val(result[0]["WORK_NM"]);
						$yymmObj.val(result[0]["WORK_YYMM"]);
						$statusObj.val(result[0]["PRO_STATUS_NM"]);


						listener.button.help.callback($codeObj, result);
					}else{
						popup[$codeObj.data("type")].show($codeObj.data("code"), param, function(result) {

							if(!isEmpty(result)){
								$codeObj.val(result["WORK_NO"]);
								$nameObj.val(result["WORK_NM"]);
							}else{
								if(isEmpty($nameObj.val())){
									$codeObj.val("");
								}
							}

							$codeObj.select();
							$codeObj.focus();

							listener.button.help.callback($codeObj, result);
						});
					}
				});

				param.TYPE = "HELP";
				param.QUERY_ID = $this.data("code");
				callback.setShowLoading(false);
				platform.postService("/getCodeName", param, callback);
			}
			*/
		});
		
		$codeObjs.on("blur", function(evt) {
			$this = $(this);
			var codeObjID = $this.attr("id");
			var $nameObj = $("." + target + "Row>input[data-code-obj=" + codeObjID + "]");
			
			if(isEmpty($this.val())){
				$nameObj.val("");
			}
		});
	},
	
	setButtonListener : function() {
		
		$("#btn_here button").each(function (idx, obj) {
			$el = $(obj);
			var buttonID = $el.attr("id");
			
			if (buttonID && listener.button[buttonID]) {
				$el.on("click", listener.button[buttonID].click);
			}
		});
		
		$("#searchArea .searchRow button").each(function (idx, obj) {
			$el = $(obj);
			var buttonID = $el.attr("id");
			
			if (buttonID && listener.button[buttonID]) {
				$el.on("click", listener.button[buttonID].click);
			}
		});
		
		$("#titleArea .buttonArea button").each(function (idx, obj) {
			$el = $(obj);
			var buttonID = $el.attr("id");
			
			if (buttonID && listener.button[buttonID]) {
				$el.on("click", listener.button[buttonID].click);
			}
		});
		
		$(".rowButtonArea button").each(function (idx, obj) {
			$el = $(obj);
			var buttonID = $el.attr("name");

			if (buttonID && listener.button[buttonID]) {
				$el.on("click", listener.button[buttonID].click);
			}
		});
		
		$(".fileButtonArea button").each(function (idx, obj) {
			$el = $(obj);
			var buttonID = $el.attr("id");
			
			if (buttonID && listener.button[buttonID]) {
				$el.on("click", listener.button[buttonID].click);
			}
		});
	},
	
	setInputKeyHandler : function(target) {
		var $inputObjs = $("." + target + "Row>input:not([data-code])");
		
		$inputObjs.on("keydown", function(evt) {
			$this = $(this);
			
			if (isValidKey2(evt)) {
				listener.editor.keydown($this, evt);
				return;
			}
		});
		
		//$codeObjs.on("keydown", function(evt) {
	},

	checkAuth : function (type) {
		const btn = $(`#${type}`);
		return btn.length !== 0;
	},

	setFunctionKey : function () {
		$(document).on("keydown",e => {
			let ignore = false;
			switch (e.keyCode) {
				case KEY_F1:
					ignore = true;
					break;
				case KEY_F2:
					ignore = true;
					if(this.checkAuth("news")) listener.button.news.click();
					break;
				case KEY_F3:
					ignore = true;
					if(this.checkAuth("search")) listener.button.search.click();
					break;
				case KEY_F5:
					ignore = true;
					if(this.checkAuth("del")) listener.button.del.click();
					break;
				case KEY_F9:
					ignore = true;
					if(this.checkAuth("save")) listener.button.save.click();
					break;
				case KEY_F12:
					ignore = true;
					if(this.checkAuth("init")) listener.button.init.click();
					break;
			}
			if(ignore) {
				e.preventDefault();
			}
		})
	},
	
	setRequiredLabel : function() {
		$("input[data-required=true], select[data-required=true], textarea[data-required=true]").each(function(idx, obj) {
			var $obj = $(obj);
			var objId = $(obj).attr("id");
			var $labelObj = $("label[for=" + objId + "]");
			
			if ($labelObj.length > 0) {
				$labelObj.addClass("required");
			}
		});
	},
	
	setDatePicker : function() {
		$("input[data-format=time]").each(function(idx, obj) {
			if (isEmpty($(obj).data("default"))) {
				$(obj).data("default", new Date().format("hhmm"));
			}
			
			$(obj).val($(obj).data("default"));
			$(obj).mask("9999",{placeholder:"hhmm"});
		});
		
		$("input[data-format=date-year]").each(function(idx, obj) {
			if (isEmpty($(obj).data("default"))) {
				$(obj).data("default", new Date().format("yyyy"));
			}
			
			$(obj).val($(obj).data("default"));
			$(obj).mask("9999",{placeholder:"yyyy"});
		});
		
		$("input[data-format=date-month]").each(function(idx, obj) {
			$(obj).MonthPicker();
			
			if (isEmpty($(obj).data("default"))) {
				$(obj).data("default", new Date().format("yyyy-MM"));
			}
			
			$(obj).val($(obj).data("default"));
			$(obj).mask("9999-99",{placeholder:"yyyy-mm"});
		});
		
		$("input[data-format=date]:not([readonly])").each(function(idx, obj) {
			$(obj).datepicker({
				showOn : "button",
				buttonImageOnly : false,
			});
			$(obj).next(".ui-datepicker-trigger").attr("tabindex", -1);
			
			$(obj).val($(obj).data("default"));
			$(obj).mask("9999-99-99",{placeholder:"yyyy-mm-dd"});
		});
	},
	
	setFormatter : function() {
		$("input[data-format]").each(function(idx, obj) {
			$obj = $(obj);
			
			if ($obj.data("format") == "number" && $obj.attr("maxlength")) {
				//console.log("mask", $obj.attr("id") , $obj.attr("maxlength"));
				var maskStr = lpad("", $obj.attr("size"), "9");
				
				//$obj.mask(maskStr);
			}
			
			if ($obj.data("format") == "tel") {
				$(obj).val($(obj).data("default"));
				$(obj).bind( "focus", function() {
					var sVal = $(obj).val().replace(/[^0-9]/g,"");
					$(obj).val(sVal);
				});
				$(obj).bind( "focusout change", function() {
					var sVal = $(obj).val().replace(/[^0-9]/g,"");
					sVal = replcTelofcno(sVal, "on"); //2016.11.2 지역번호 빼고 입력처리
					
					var bCk = /^02/i.test(sVal);
					
					if(sVal.length > 11){
						$(obj).val(sVal.replace(/(\d+)(\d{4})(\d{4})/, '$1-$2-$3'));
					}else if(sVal.length == 11){
						$(obj).val(sVal.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
					}else if(sVal.length == 10){
						$(obj).val(bCk ? sVal.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3') : sVal.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
					}else if(sVal.length == 9){
						$(obj).val(sVal.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3'));
					}else if(sVal.length == 8){
						$(obj).val(sVal.replace(/(\d{4})(\d{4})/, '$1-$2'));
					}else if(sVal.length == 6){
						$(obj).val(sVal.replace(/(\d{3})(\d{3})/, '$1-$2'));
					}else if(sVal.length == 5 && bCk){
						$(obj).val(sVal.replace(/(\d{2})(\d{3})/, '$1-$2'));
					}else {
						$(obj).val(sVal);
					}
				});
			}
			
			if ($obj.data("format") == "price") {
				$(obj).val($(obj).data("default"));
				$(obj).bind( "focus", function() {
					var sVal = $(obj).val().replace(/[^-0-9]/g,"");
					$(obj).val(sVal);
				});
				$(obj).bind( "focusout change", function() {
					var sVal = $(obj).val().replace(/[^-0-9]/g,"");
					$(obj).val(sVal.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
				});
			}
		});
	},
	
	setExcelDownloader : function(trgId) {
		var $trg = (isNull(trgId)) ? $("button[name=excelDown]") : $("#"+trgId+" button[name=excelDown]");
		
		$trg.on("click", function(evt) {
			var $el = $(evt.currentTarget);
			var gridId = $el.data("target");
			var excelName = $el.data("excel-name");
			var bigmth = $el.data("big-mth");
			var bigprm = $el.data("big-prm");
			
			if($$(gridId).count() == 0){
				popup.alert.show("엑셀저장 데이터가 없습니다.");
				return;
			}
			
			if(!isEmpty(bigmth)){
				var param = {}, cols = {};
				try {cols = $$(gridId).getHeaderData()} catch (e) {cols = null;}
				try {param = $("#"+bigprm).getData(); $.extend(param, {"ISCHG":"Y", "USER_ID":USER_INFO.USER_ID, "USER_IP":USER_INFO.USER_IP, "DWEXCEL":"Y", "BIGMTH":bigmth, "COLS":cols, "FILENAME":excelName + ".xls"});} catch (e) {param = null;}
				createForm("/gridToExcel", param, "fileIframe").submit();
			}
			else{
				var param = {"XML":replcHtml($$(gridId).getXmlData()), "FILENAME":excelName + ".xls"};
				createForm("/xmlToExcel", param, "fileIframe").submit();
			}

		});
	},
	setExcelUploader : function(trgId) {
		var $trg = (isNull(trgId)) ? $("button[name=excelUpload]") : $("#"+trgId+" button[name=excelUpload]");

		$trg.on("click", function(evt) {
			var $el = $(evt.currentTarget);
			var gridId = $el.data("target");
			var tempExcelName = $el.data("temp-excel-name");

			let param = new Object();
			let grid = $$(gridId);
			param["grid"] = grid;
			param["tempExcelName"] = tempExcelName;

			let callback = new Callback(function (result){
				let data = result.resultVO;
				if(data.length > 0){
					grid.setData(data);
				}
			});
			attachFilePopup.show(410, 180, callback, param);
		});
	},
	setOnInputForNumber : function() {
		$("input[type='number']").on("input", function (){ // 숫자 input maxLength 체크
			this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
			if(this.maxLength){
				if (this.value.length > this.maxLength){
					this.value = this.value.slice(0, this.maxLength);
				}
			}
		});
	},
	setAddInputClear : function() {
		$(".searchRow input:not([type=radio]):not([type=checkbox]):not([disabled]):not([readonly]), .formRow input:not([type=radio]):not([type=checkbox]):not([disabled]):not([readonly])").each(function() {
			if($(this).next(".inputClear").length === 0 ){
				$(this).after("<button type='button' class='inputClear' tabindex='-1'></button>");
			}
		});
		$('.searchRow, .formRow').on("mousedown", ".inputClear", function(){
			$(this).prev().val("");
		}).on("keyup input", "input", function(e){
			if($(this).next().hasClass("inputClear")) $(this).next().addClass("active");
		}).on("blur", "input", function(e){
			if($(this).next().hasClass("inputClear")) $(this).next().removeClass("active");
		}).on("focus", "input", function(e){
			if($(this).next().hasClass("inputClear")) $(this).next().addClass("active");
		});
	}
}

$(document).ready(function() {
	initializeConfig.setMultipleSelect();
	initializeConfig.setDatePicker();
	initializeConfig.setFormatter();
	initializeConfig.setCodeNameInput();
	initializeConfig.preventFormSubmit();
	initializeConfig.addGridResizeEvent();
	initializeConfig.setNextFocus("form");
	initializeConfig.setNextFocus("search");
	initializeConfig.setCodeName("search");
	initializeConfig.setCodeName("form");
	initializeConfig.setInputKeyHandler("search");
	initializeConfig.setFunctionKey();
	initializeConfig.setButtonListener();
	initializeConfig.setRequiredLabel();
	initializeConfig.setExcelDownloader();
	initializeConfig.setExcelUploader();
	initializeConfig.setOnInputForNumber();
	initializeConfig.setAddInputClear();

	$("input[readonly]").on("focus", function() {
		//$(this).blur();
	});
	
	webix.ready(function() {
		setTimeout(initPage, 1);
	});
});

$(function() {
	var w = window;
	if (w.frameElement != null && w.frameElement.nodeName === "IFRAME" && w.parent.jQuery) {
		w.parent.jQuery(w.parent.document).trigger("iframeready", w.frameElement.id);
	}
});

function createOption(value, name) {
	var el= document.createElement('option');
	$(el).prop('value',value);
	$(el).html(name);
	return el;
}
webix.csv.escape = true;

var delTmpList = []; //grid 삭제된 데이타 temp List 

webix.i18n.locales["ko-KR"]={	 //"es-ES" - the locale name, the same as the file name
	groupDelimiter:",",				 //a mark that divides numbers with many digits into groups
	groupSize:3,								//the number of digits in a group
	decimalDelimeter:".",			 //the decimal delimiter
	decimalSize:2,							//the number of digits after the decimal mark

	dateFormat:"%Y-%m-%d",			//applied to columns with 'format:webix.i18n.dateFormatStr'
	dateFormatMD:"%m-%d",			//applied to columns with 'format:webix.i18n.dateFormatStr'
	timeFormat:"%H:%i",				 //applied to columns with 'format:webix.i18n.dateFormatStr'
	longDateFormat:"%Y년%F%d일",	//applied to columns with 'format:webix.i18n.longDateFormatStr'
	fullDateFormat:"%Y-%m-%d %H:%i",//applied to cols with 'format:webix.i18n.fullDateFormatStr'
	parseFormat : "%Y-%m-%d",		// data select시에 보여지는 포맷값
	priceSettings: {
		groupDelimiter:",",
		groupSize:3,
		decimalDelimeter:".",
		decimalSize:0
	},
	price:"{obj}",//EUR - currency name. Applied to cols with 'format:webix.i18n.priceFormat'
	calendar:{
		monthFull:["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		monthShort:["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		dayFull:["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
		dayShort:["일", "월", "화", "수", "목", "금", "토"]
	}
};
/*! process ctrl+V pressing	 */
webix.clipbuffer._paste =  function() {
	var text = this._area.value;
	var last_active = webix.UIManager.getFocus();
	if (last_active) {
		last_active.callEvent("onPaste", [text]);
	}
}


webix.i18n.setLocale("ko-KR");

webix.editors.traditional_text = webix.editors.text;

webix.editors.editdate = webix.extend({

	render:function(){
		let icon = "<span class='_icon_calendar' style='position:absolute; cursor:pointer; top:20%; right:2px;'></span>";
		let node = webix.html.create("div", {"class":"webix_dt_editor"}, "<input type='text'>"+icon);

		node.childNodes[1].onclick = function(){
			let master = webix.UIManager.getFocus();
			let editor = master.getEditor();
			master.editStop(false);
			let config = master.getColumnConfig(editor.column);
			config.format = dateFormat;
			config.editor = "date";
			config.node.childNodes[0].innerHTML = "";
			master.editCell(editor.row, editor.column);
			config.editor = "editdate";
		}
		return node;
	}
}, webix.editors.text);

webix.editors.text = {
	focus : function() {
		this.getInputNode(this.node).focus();
		this.getInputNode(this.node).select();
	},
	getValue : function() {
		return this.getInputNode(this.node).value;
	},
	setValue : function(value) {
		this.getInputNode(this.node).value = value;
	},
	getInputNode : function() {
		return this.node.firstChild;
	},
	render : function() {
		$editor = this;
		let maxLengthStr = '';
		if (this.config && this.config.maxLength) {
			maxLengthStr = ' maxlength="' + this.config.maxLength + '" ';
		}
		let el = webix.html.create("div", {
			"class" : "webix_dt_editor"
		}, "<input type='text' " + maxLengthStr + ">");
		
		if (this.config && this.config.option) {
			if (this.config.option.type === 'code'
				|| this.config.option.type === 'uppercase') {
				$(el).allowOnlyUpperCase();
			}
			
		}
		
		return el;
	}
}

webix.editors.number = {
	...webix.editors.text,
	getValue : function() {
		return this.getInputNode(this.node).value.replaceAll(",","") * 1;
	},

	render : function() {
		var el = webix.html.create("div", {
			"class" : "webix_dt_editor"
		}, "<input type='text' " + ">");

		$(el).allowOnlyNumeric();

		return el;
	}
}

webix.editors.checkbox = {
	focus:function(){
		this.getInputNode().focus();
	},
	getValue:function(){
		return this.getInputNode().checked ? this.config.checkValue : this.config.uncheckValue;
	},
	setValue:function(value){
		if(value === 'Y') value = true;
		if(value === 'N') value = false;

		this.getInputNode().checked = value
	},
	getInputNode:function(){
		return this.node.firstChild.firstChild;
	},

	render : function () {
		const html = `<div onclick='clickCell(this.firstChild)' class="checkbox_container"><input type='checkbox' class='webix_table_checkbox'></div>`;
		return webix.html.create("div", {
			"class":"webix_dt_editor checkbox_border"
		}, html);
	}
}

function clickCell (node) {
	if(event.target.type === 'checkbox') return false;
	node.checked = !node.checked;

	const gridID = $(node).parents(".webix_dtable").attr("view_id");
	const grid = $$(gridID);
	let rowIndex = grid.getRowIndex(gridID);
	let editor = $$(gridID).getEditor();
	let val = node.checked ? editor.checkValue : editor.uncheckValue;
	grid.setCellValue(rowIndex,editor.column,val);
}

/*
webix.editors.select = {
	focus:function(){
		this.getInputNode().focus();
	},
	getValue:function(){
		return this.getInputNode().value;
	},
	setValue:function(value){
		this.getInputNode().value = value;
	},
	getInputNode:function(){
		return this.node.firstChild;
	},
	render:function(){
		console.log("select render");
		var html = "";
		var options = this.config.options || this.config.collection;
		//webix.assert(options,"options not defined for select editor");
		
		var option = this.config.option;
		
		console.log("1", options, options.prototype);
		
		//options = null;
		
		var that = this;
		
		if (!options && option && option.code) {
			var param = option.param;
			var callback = new Callback(function(result) {
				console.log("result", result);
				
				if (isEmpty(result)) {
				} else {
					var opts = new Array();
					
					for (var i = 0; i < result.length; i++) {
						var obj = new Object();
						obj["id"] = result[i]["ID"];
						obj["value"] = result[i]["VALUE"];
						
						opts.push(obj);
					}
					opts = new webix.DataCollection({data:webix.toArray(opts)});
					console.log("2", opts);
					console.log("3", that);
					console.log("4", that.config);
					
					that.config.options = opts;
					options = opts;
					
					console.log("5", opts);
					console.log("6", that);
					console.log("7", that.config);
				}
			});
			
			callback.async = false;
			CodeService.getCodeName("HELP", option.code, param, callback);
		}
		
		if (options.data && options.data.each) {
			options.data.each(function(obj){
				html +="<option value='"+obj.id+"'>"+obj.value+"</option>";
			});
		} else {
			if (webix.isArray(options)){
				for (var i=0; i<options.length; i++)
					html +="<option value='"+options[i]+"'>"+options[i]+"</option>";
			} else for (var key in options){
				html +="<option value='"+key+"'>"+options[key]+"</option>";
			}
		}
		
		var el = webix.html.create("div", {
			"class":"webix_dt_editor"
		}, "<select>"+html+"</select>");
		
		$(el).on("change", function(evt) {
			console.log(evt, that, that.config);
		});
		return el;
	},
}
*/
webix.type(webix.ui.list, {
	name:"checklist",
	templateStart:webix.template('<div webix_l_id="#!id#" class="{common.classname()}" style="width:{common.widthSize()}; height:{common.heightSize()}; overflow:hidden; white-space:nowrap;padding:2px; 2px;">{common.checkbox()}'),
	checkbox: function(obj){
		var icon = obj.$checked?"fa-check-square":"fa-square-o";
		return "<span class='webix_icon "+icon+"'></span>";
	},
	template: webix.template("#value#")
}, "default");

webix.GroupMethods.median = function(prop, data) {
	if (!data.length) {
		return 0;
	}

	var summ = 0;
	
	for (var i = data.length - 1; i >= 0; i--) {
		summ += prop(data[i]) * 1;
	}
	
	return summ / data.length;
};


webix.protoUI({
	name : "datagrid",
	delTmpList : [],
	getData : function() {
		this.editStop();
		var tmpList = this.serialize();
		var resultList = [];
		while (tmpList.length != 0) {
			var item = tmpList.shift();
			if (item.data && Array.isArray(item.data) && item.data.length > 0) {
				for (var i = 0; i < item.data.length; i++) {
					tmpList.push(item.data[i]);
				}
			} else {
				resultList.push(item);
			}
		}
		return resultList;
	},
	getCheckedData : function(checkboxId) {
		var resultList = this.getData();
		var config = this.getColumnConfig(checkboxId);
		var ckVal = checkEmpty(config.checkValue, "");
		
		resultList = resultList.filter(function(value) {
			if (isEmpty(ckVal)?(value[checkboxId]):(ckVal == value[checkboxId]))
				return true;
			else
				return false;
		});
		return resultList;
	},
	getRowStatusModified : function() {
		var returnResult = false;
		var resultList = this.getData();
		var delLen = this.delTmpList.length;
//		console.log("delLen:" + delLen);
		resultList = resultList.filter(function(value) {
			if (value["ROWSTAT"] == "C" || value["ROWSTAT"] == "U"){
				returnResult = true;
			}
		});
		if(delLen > 0) returnResult = true;
//		console.log("returnResult2:" + returnResult);
		return returnResult;
	},
	clearFilter: function () {
		let grid = this;
		grid.eachColumn(function(id, col){
			let filter = grid.getFilter(id);
			if (filter){
				if (filter.setValue) filter.setValue("")
				else filter.value = "";
			}
		})
		grid.filterByAll();
	},
	editNext:function(next, from){
		next = next !== false; //true by default
		if (this._in_edit_mode === 1 || from){
			//only if one editor is active
			let editor_next = this._find_cell_next((this._last_editor || from), function(id){
				if (this._get_editor_type(id))
					return true;
				return false;
			}, next);

			if (this.editStop()){
				if (editor_next){
					this.edit(editor_next);
					this._after_edit_next(editor_next);
				} else {
					if( this.config.autoAddRow ) {
						this.addRow();
					}
				}
				return false;
			}
		}
	},
	getCellValue: function (rowIndex, dataField) {
		try {
			if (this.data.count() === 0) return '';

			if(rowIndex === -1) rowIndex = this.getRowIndex();
			return this.getItem(this.getIdByIndex(rowIndex))[dataField];
		} catch (e) {
			console.log(e);
		}
	},

	setCellValue : function(rowIndex, columnName, data) {
		if (this.data.count() === 0) return;

		if(rowIndex === -1){
			rowIndex = this.getRowIndex();
		}
		const colInfo = this.getColumnConfig(columnName);
		if(colInfo && colInfo.maxLength > 0) {
			data = String(data).substring(0,colInfo.maxLength);
		}
		const rowId = this.getIdByIndex(rowIndex);
		const record = this.getItem(rowId);
		record[columnName] = data;
		this.updateItem(rowId, record);
		this.refreshFilter();
		this.setFocus(rowIndex,columnName)
	},

	/*
	*  그리드 필터 , 기본세팅(추가 예정) 등등 디폴트값 세팅
	* */
	initGrid: function () {
		const grid = this;
		grid.filterMode = 'off';
		grid.config.columns.forEach(function (col) {
			col.oldEditor = checkNull(col.editor,"");
			if(col.editor){
				col.liveEdit = true;
			}
		});

		webix.ui({
			view:"contextmenu",
			master:grid.config.id,
			data:[
				{ value:"Filter On", submenu:[
						"Text",
						"Multicombo",
						"Number",
					]
				},
				{ value:"Clear Filter" },
				{ value:"Filter Off" },

			],

			on:{
				onMenuItemClick:function (id) {
					let item = this.getItem(id);
					let val = item ? item.value : id;

					if(val === 'Text') {
						grid.setFilter(true , "textFilter")
					} else if (val === 'Multicombo') {
						grid.setFilter(true , "multiComboFilter")
					} else if(val === 'Number') {
						grid.setFilter(true , "numberFilter")
					} else if (val === 'Clear Filter'){
						grid.clearFilter();
					} else if (val === 'Filter Off'){
						grid.setFilter(false)
					}
				}
			}
		});
	},

	setFilter: function (bool , filter) {
		let grid = this;
		grid.config.columns.forEach(function (col) {
			if (bool) {
				if(grid.filterMode === 'on') return false;

				col.header.push({content: filter});
			} else {
				if(grid.filterMode === 'off') return false;
				grid.clearFilter()
				col.header.pop();
			}
		});

		if(bool) grid.filterMode = "on";
		else grid.filterMode = "off";

		if(!bool && grid.filterMode === 'on') grid.clearFilter();

		grid.refreshColumns();
	},

	/*
	*		bool
	* 		true  : edit 가능
	* 		false : 읽기전용
	* */
	setReadonly : function (dataField , bool) {
		this.editStop();
		let colInfo = this.getColumnConfig(dataField)
		colInfo.readonly = bool;
		colInfo.liveEdit = !bool;
		if(bool) {
			colInfo.oldEditor = colInfo.editor;
			colInfo.editor = "";
		} else {
			colInfo.editor = colInfo.oldEditor;
		}

		this.refreshColumns();
	},

	getNextEditableColumn : function(rowId, columnId) {
		var nextRowId = rowId;
		var lastColIdx = this.getColumnIndex(columnId);
		if (columnId == null) {
			lastColIdx = -1;
		}
		var cnt = 0;
		var nextColIdx = (lastColIdx + 1) % this.config.columns.length;
		
		//console.log("nextColIdx:" + nextColIdx);
		if (nextColIdx < lastColIdx) {
			try {
				nextRowId = this.getNextId(nextRowId);
			} catch (ex) {
//				console.log(ex);
				nextRowId = null;
			}
		}

		while (!this.config.columns[nextColIdx].editor || this.config.columns[nextColIdx].hidden) {
			lastColIdx = nextColIdx;
			nextColIdx = (lastColIdx + 1) % this.config.columns.length;
			if (nextColIdx < lastColIdx) {
				cnt++
				try {
					nextRowId = this.getNextId(nextRowId);
				} catch (ex) {
//					console.log(ex);
					nextRowId = null;
				}
			}
			if (cnt > this.data.count()) {
				nextColIdx = null;
				nextRowId = null;
				break;
			}
		}
		var nextColId = null;
		if (nextColIdx) {
			nextColId = this.config.columns[nextColIdx].id
		}
		return {
			rowId : nextRowId,
			colId : nextColId
		};
	},
	checkValidation : function() {
		this.editStop();
		
		var isValid = true;
		for ( var rowId in this.invalidCellMap) {
			for ( var columnId in this.invalidCellMap[rowId]) {
				var columnIndex = this.getColumnIndex(columnId);
				var self = this;
				var maxlength = (this.config.columns[columnIndex].option)?this.config.columns[columnIndex].option.maxlength:null;
				var value = this.getItem(rowId)[columnId];
				
				// 길이 확인
				if (maxlength && getByteSize(value) > parseInt(maxlength)) {
					var msg =$(this.getHeaderNode(columnId)).text() + '을(를) 확인하세요. 데이터 길이가 ' + maxlength + 'Byte를 초과할 수 없습니다.(현재: ' + getByteSize(value) + 'Byte)';
					popup.alert.show(msg, function() {
						self.select(rowId, columnId);
						if (self.config.editable) {
							self.editCell(rowId, columnId, false, true);
						}
					});
				} else {
					popup.alert.show($(this.getHeaderNode(columnId)).text() + '을(를) 확인하세요.', function() {
						self.select(rowId, columnId);
						if (self.config.editable) {
							self.editCell(rowId, columnId, false, true);
						}
					});
				}				
				self.select(rowId);
				self.editCell(rowId);
				self.showCell(rowId);
				isValid = false;
				break;
			}
		}
		return isValid;
	},
	clearData : function() {
//		console.log(this);
		//self = this;
		this.invalidCellMap = {}; 
		this.editStop();
		this.blockEvent();
		this.clearAll();
		this.unblockEvent();
		this.delTmpList = [];
		this._spans_pull = {};
	},
	setData : function(data) {
		this.clearData();
		this.parse(data, 'json');
	},
	showLoadingMsg : function(msg) {
		this.__oldEnabled = this.isEnabled();
		this.disable();
		this.showOverlay(msg);
	},
	hideLoadingMsg : function() {
		this.hideOverlay();
		if (this.__oldEnabled) {
			this.enable();
		}
	},
	
	addRow : function(rowObj = {}) {
		this.editStop();

		const cols = this.config.columns
		cols.forEach(function(col) {
			let defaultVal = ""

			if(col.editor === 'checkbox') defaultVal = col.uncheckValue;

			rowObj[col.id] = rowObj[col.id] ? rowObj[col.id] : defaultVal;
		});

		var id = this.add(checkEmpty(rowObj, {}));

		if (id) {
			this.select(id);
			var editableColNm = "";
			var columnArr = this.config.columns;
			for(var i = 0; i < columnArr.length; i++) {
				var column = columnArr[i];
				if(column.editor) {
					editableColNm = column.id;
					break;
				}
			}
			this.editCell(id, editableColNm);
			this.showCell(id);
		}
		this.refreshFilter();
	},
	
	addRows : function(rows) {
		this.editStop();
		var id;
		
		for (var i = 0; i < rows.length; i++) {
			id = this.add(checkEmpty(rows[i], {}));
		}
		this.refreshFilter();
		if (id) {
			this.select(id);
			this.editCell(id);
		}
	},
	
	removeRow : function(row) {
		if (!isNull(row) && !isNull(row["id"])) {
			this.blockEvent();
			this.editStop();
			
			var focusId = this.getPrevId(row["id"], 1);
			
			if (isNull(focusId)) {
				focusId = this.getNextId(row["id"], 1);
			}
			
			if (row["id"]) {
				delete this.invalidCellMap[row["id"]];
				this.remove(row["id"]);
			}
			
			this.unblockEvent();
		}
	},
	
	removeRows : function(rows) {
		this.blockEvent();
		this.editStop();
		
		if (rows && rows[0] && rows[0]["id"]) {
			var focusId = this.getPrevId(rows[0]["id"], 1);
			
			if (isNull(focusId)) {
				focusId = this.getNextId(rows[rows.length - 1]["id"], 1);
			}
			
			for (var i = 0; i < rows.length; i++) {
				delete this.invalidCellMap[row[i]["id"]];
				this.remove(rows[i]["id"]);
			}

			this.unblockEvent();
			
			if (!isNull(focusId)) {
				this.select(focusId);
			}
		}
	},
	
	removeSelectedRow : function() {
		var focusId = this.getPrevId(this.getSelectedId(), 1);
		
		if (isNull(focusId)) {
			focusId = this.getNextId(this.getSelectedId(), 1);
		}
		
		if (this.getSelectedId()) {
			this.blockEvent();
			this.editStop();
			var selectedId = this.getSelectedId();
			var resultList = this.getData();
			var record = this.getItem(selectedId);

			//console.log(record["ROWSTAT"]);
			while (resultList.length != 0) {
				var item = resultList.shift();
				if(item.id == selectedId && record["ROWSTAT"] != "C") this.delTmpList.push(item);
			}

			delete this.invalidCellMap[this.getSelectedId()];
			this.remove(this.getSelectedId());
			
//			console.log(this.delTmpList);
			this.unblockEvent();
			
			if (focusId) {
				this.select(focusId);
			}
		}
	},

	delDataAdd : function(param) {
		while (this.delTmpList.length != 0) {
			var item = this.delTmpList.shift();
			item["ROWSTAT"] = "D";
			param.push(item);
		}
	},

	setFocus: function (rowIndex, dataField) {
		const grid = this;
		try {
			if (grid.data.count() === 0) return;

			let rowId = grid.getIdByIndex(rowIndex);
			let columnConfig = grid.getColumnConfig(dataField);

			grid.select(rowId);
			grid.edit({
				row: rowId,
				column: dataField,
			});
			grid.focusEditor({
				row: rowId,
				column: dataField,
			});
			grid.showItem(rowId);
		} catch (e) {
			console.log(e);
		}
	},
	getRowIndex: function () {
		try {
			const grid = this;
			if (grid.data.count() === 0) return;

			let selectedId = grid.getSelectedId(false);
			if(Array.isArray(selectedId)){
				return grid.getIndexById(selectedId[0])
			}
			return grid.getIndexById(selectedId);
		} catch (e) {
			console.log(e);
			return -1;
		}
	},

	setFooter: function (footers) {
		const grid = this;
		const columns = grid.config.columns;

		footers.forEach(function (footer) {
			if(isNull(footer.css)){
				footer.css = "defaultFooterCss";
			}
			columns.forEach(function (col) {
				if (col.id === footer.dataField) {
					col.footer = footer;
				}
			});
		})
		grid.editStop();
		grid.config.footer = true;
		grid.refreshColumns();
	},

	getRowData:function (rowIndex) {
		try {
			let grid = this;
			if (grid.data.count() === 0) return;
			return grid.getItem(grid.getIdByIndex(rowIndex));
		} catch (e) {
			console.log(e);
		}
	},


	/*
	focusCell : function(rowIdx, columnId, blockEvent) {
		var itemId = rowIdx;
		if (typeof (rowIdx) == "number") {
			itemId = this.getIdByIndex(rowIdx);
		}
		if (!itemId) {
			itemId = rowIdx;
		}
		if (blockEvent) {
			this.blockEvent();
			itemId.column = columnId;
			this.lastSelectedItemId = itemId;
		}
		if (this.config.select == 'row') {
			this.select(itemId);
		} else {
			this.select(itemId, columnId);
		}
		if (blockEvent) {
			this.unblockEvent();
		}
		if (this.config.editable) {
			this.editCell(itemId, columnId, false, true);
		}
		this.showItem(itemId);
	},
	*/
	defaults : {
		leftSplit : 0,
		rightSplit : 0,
		columnWidth : 100,
		minColumnWidth : 20,
		minColumnHeight : 54,
		prerender : false,
		autoheight : false,
		autowidth : false,
		header : true,
		fixedRowHeight : true,
		scrollAlignY : true,
		datafetch : 50,

		'export' : true,
		dragColumn : false,
		resizeColumn : true,
		editable : true,
		checkboxRefresh : true,
		scrollY : true,
		scrollX : true,
		footer : false,
		blockselect : false,
		clipboard : false,
		select : 'row',
		navigation : true,
		tooltip : true,
		autoselect : false,
		enablerowclick : false,
		

		on : {
			onStructureLoad: function(){ // 필수컬럼 헤더표기
				const grid = this;
				grid.config.columns.forEach(function (col) {
					if(col.option){
						if (col.option.required){
							col.header.forEach(function (header) {
								header.css = isEmpty(header.css) ? "gridRequired" : header.css+" gridRequired";
							});
						}
					}else{
						if (col.required){
							col.header.forEach(function (header) {
								header.css = isEmpty(header.css) ? "gridRequired" : header.css+" gridRequired";
							});
						}
					}
				});
			},
			onValidationSuccess : function(id, value, columnNames) {
				delete this.invalidCellMap[id];
			},
			onValidationError : function(id, value, columnNames) {
				this.invalidCellMap[id] = columnNames;
			},
			onAfterLoad : function() {
				if (!this.count() && !this.config.editable) {
					this.showOverlay("표시할 데이터가 없습니다.");
				}
				
				if (window['onGridDataLoaded']) {
					onGridDataLoaded(this.config.id);
				}
				
				if(this.config && this.config.view === "datagrid" && !isNull(this.getFirstId()) && this.config.autoselect){
					this.select(this.getFirstId());
				}
			},

			onHeaderClick: function (id) {
				const state = this.getState().sort;
				if (state !== null && state !== undefined) {
					if (id.column === state.id) {

						// sort 초기화
						if (state.dir === "desc") {
							this.sort("id", "asc");
							this.markSorting();
							return false;
						}
					}
				}
			},
			onKeyPress: function(code, e){

				let editor = this.getEditor();
				let grid = this;
				if(editor && editor.config.isCodeHelp && code === KEY_F1) {
					if (!editor.config.option || !editor.config.option.code) return;

					let { code , param , target  } = editor.config.option
					let value = "";

					let callback = new Callback( function(result) {
						grid.setFocus(grid.getIndexById(editor.row),editor.column)
						if(!result) return ;
						grid.getEditor().setValue(result["code"]);

						let record = grid.getItem(editor.row);
						record[editor.column] = result["code"];
						record[target] = result["name"];
						grid.updateItem(editor.row, record);

						if(record["gstat"] !== "I") record["gstat"] = "U";
						grid.editNext(true)

						listener.gridRow.callback(grid.config.id, editor.row, editor.column);
					});
					popup.help.show(code, value, param, callback);
					e.preventDefault();
				}
			},

			onBeforeAdd : function() {
				this.hideOverlay();
			},
			
			onBeforeEditStart : function(obj) {
//				console.log("onBeforeEditStart", obj, window.event, this);
				
				
				var grid = this;
				var col = grid.getColumnConfig("cat_id");
				var record = grid.getItem(obj.row);
				var curCol = grid.getColumnConfig(obj.column);

				if (curCol.editor == "select" || curCol.editor == "combo") {
					if (curCol.option && curCol.option.parent_id) {
						//console.log("filter start");
						//console.log(curCol.option.parent_id, grid.getColumnConfig(curCol.option.parent_id));
						
						var record = grid.getItem(obj.row);
						var refvalue = record[curCol.option.parent_id]
						
						curCol.collection.filter(function(item) {
							//console.log(item);
							if (item.refcd == '*' || item.refcd == refvalue) {
								return true;
							} else {
								return false;
							}
						});
					}
				}
				
				if((typeof listener.gridEditor.beforeEditStart(grid, record, curCol) != "undefined") && !listener.gridEditor.beforeEditStart(grid, record, curCol))
				{
					return false;
				}
			},
			
			onAfterEditStart : function(obj) {
				//console.log("onAfterEditStart", obj, window.event);
				
				var evt = event || window.event;
				
				if (evt && evt.type == "click" && evt.srcElement.tagName == "BUTTON" && $(evt.srcElement).hasClass("btnCodeHelpGrid")) {
					this.editStop(null, true, true);
				} else {
					/*
					var editor  = this.getEditor();
					console.log(editor);
					//console.log(editor.getInputNode().blur());
					console.log($(editor.getInputNode()));
					
					//var input = editor.getInputNode();
					//$(input).select();
					
					editor.focus();
					
					*/
				}
			},
			
			onBeforeEditStop : function(state, editor, ignore) {
//				console.log("state",state, "editor", editor, "grid", grid);
				//console.log("onBeforeEditStop", state, editor, ignore, window.event, grid.getItem(editor.row));

				/*
				var record = grid.getItem(editor.row);
				var column = grid.getColumnConfig("cat_id");

				if (column) {
					//console.log(column);
					column.options = {"1" : "T3","2" : "t4","3" : "t5"};
				}
				*/
			},

			onAfterEditStop : function(state, editor, ignore) {
				let grid = this;
				let evt = event || window.event;
				let record = grid.getItem(editor.row);
				let oldVal = state.old;
				let newVal = state.value;
				let column = grid.getColumnConfig(editor.column);
				let option;

				if(oldVal == null) {
					oldVal = "";
				}

				if(record["gstat"] != "I" && oldVal != newVal){
					record["gstat"] = "U";
				}

				if(column.editor =="editdate"){
					let f2 = webix.i18n.dateFormatStr;
					let dataField = editor.column;
					if(newVal.length !== 8){
						if(newVal.length != null && newVal.length < 8){
							newVal = "";
						}else{
							newVal = f2(newVal).replace(/[^0123456789]/g,"");
						}
					}

					if (newVal.length === 8 ){
						let year = newVal.substr(0,4);
						let month = newVal.substr(4,2);
						let day = newVal.substr(6,2);
						if ( year < 1900 || year > 9999 || month == 0 || month > 12 || day == 0 || day > 31  ){
							newVal = "";
							alert( "잘못된 날짜 입니다." );
						}else {
							newVal =year+month+day;
						}
						record[dataField]=newVal;
					}else{
						record[dataField]="";
					}
					grid.updateItem(editor.row, record);
				}

				if (evt && evt.type == "click" && evt.srcElement.tagName == "BUTTON" && $(evt.srcElement).hasClass("btnCodeHelpGrid")) {
					if (column.option) {
						option = column.option;
					} else {
						return;
					}
					//console.log("btnCodeHelpGrid click", state, editor, editor.row, evt.type, column);
					let { code , param , target  } = option
					let value = editor.getValue();
					if(!code) return ;

//console.log("btnCodeHelpGrid ::", option.type, param);
					if (option.type == "code") {
						param["cmminfo"] = value;

						let callback = new Callback( function(result) {
							grid.setFocus(grid.getIndexById(editor.row),editor.column)
							if(!result) return ;

							grid.getEditor().setValue(result["code"]);
							record[editor.column] = result["code"];
							record[target] = result["name"];
							grid.updateItem(editor.row, record);

							if(record["gstat"] != "I" && oldVal != (isEmpty(result) ? "" : result["code"])){
								record["gstat"] = "U";
							}
							grid.editNext(true)

							listener.gridRow.callback(grid.config.id, editor.row, editor.column);
						});
						popup.help.show(code, "", param, callback);
					}
				}

				if(column.option && column.option.code && (column.option.type === "code")){
					var value = editor.getValue();
					var target = column.option.target;

					if(!isEmpty(value) && isEmpty(record[target])){
						editor.setValue("");
						record[editor.column] = "";
						record[target] = "";
						grid.updateItem(editor.row, record);
					}
				}

				if(grid.getColumnConfig(editor.column).format == dateFormat && dateRegExp.test(newVal)){
					newVal = newVal.replace(/\-|\./g,"");
					record[editor.column] = newVal.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
				} else if(grid.getColumnConfig(editor.column).format == dateFormatMD && dateRegExp.test(newVal)){
					newVal = newVal.replace(/\-|\./g,"");
					record[editor.column] = newVal.replace(/(\d{2})(\d{2})/, '$1-$2');
				}

				listener.gridEditor.changed(grid, state, editor, ignore);
			},

			onLiveEdit : function(state, editor) {
				let grid = this;
				let record = grid.getItem(editor.row);
				let evt = window.event;
				let column = grid.getColumnConfig(editor.column);
				let option;
				let { old : oldValue , value : newValue } = state;

				if( column.editor === "editdate" && /[^0123456789]/g.test(editor.value) ){
					let val = editor.value.replace(/[^0123456789]/g,"");
					editor.value = val;
					editor.setValue(val);
					return false;
				}

				if(record["gstat"] !== "I" && oldValue !== newValue) record["gstat"] = "U";

				if (column.option) {
					option = column.option;
				} else {
					listener.gridEditor.keydown(grid, editor, evt);
					return;
				}

				if (option.type === "code") {
					record[option.target] = "";
					grid.updateItem(editor.row, record);
				}

				listener.gridEditor.keydown(grid, editor, evt);
			},

			onItemClick : function(target, evt, html) {

				const htmlClass = html.getAttribute("class");
				/*
				2023-07-31
				그리드에서 클릭후 드래그시 마우스이벤트가 튀는 현상(rowIndex가 컬럼의 index로 가져와지는 현상) 발생해서 막아줌
				html이 cell이 아닌 column일경우 이벤트 skip
				*/
				if(htmlClass.indexOf("webix_column") !== -1) return false;
				let { column , row } = target;
				const columnConfig = this.getColumnConfig(column);

				if ($(evt.srcElement).hasClass("btnCodeHelpGrid") && !columnConfig.readonly ) {
					this.editStop();
					listener.gridEditor.onHelpClick (this, this.getIndexById(target.row), column , this.getItem(row)[column] );
				} else {

					if(columnConfig && columnConfig.editor === 'checkbox'){
						let editor = this.getEditor();
						if(editor) {
							let rowIndex = this.getIndexById(target.row);
							let chkValue = this.getCellValue( rowIndex, column) === columnConfig.checkValue ? columnConfig.uncheckValue : columnConfig.checkValue;
							let record = this.getItem(editor.row);
							record[column] = chkValue
							record["gstat"] = "U"
							this.updateItem(editor.row, record);
							editor.setValue(chkValue);
							editor.value = chkValue;
							editor.focus();
						}
					}

					listener.gridRow.itemClick(row, column, this.getItem(row), this);
				}

			},
			
			onItemDblClick : function(target, evt, html) {
				//console.log("onitemdblclick", target, evt, html);
				var record = this.getItem(target.row);
//				listener.gridRow.dblclick(record, this);
				listener.gridRow.dblclick(target.row, target.column, record, this);
			},
			
			onBeforeSelect : function(data, preserve) {
				if (this.config.autoselect && this.lastSelectedItemId == data.row) {
//					console.log("onBeforeSelect", data, preserve, this.lastSelectedItemId, data.row);
					this.callEvent("onAfterSelect",[data, preserve, "onBeforeSelect"]);
				}
			},
			
			onAfterSelect: function(target, prevent, evttype) {
				try {
//					console.log("onAfterSelect", target, this.lastSelectedItemId, target.row, evttype);
					if (this.lastSelectedItemId != target.row || evttype == "onBeforeSelect") {
						let gridID = this.config.id; //gridID
						let rowIndex = this.getIndexById(target.row); // rowIndex;
						let record = this.getItem(target.row);
						listener.gridRow.click(record, this);
						this.lastSelectedItemId = target.row;

						listener.gridRow.onFocusedRowChanged(gridID, rowIndex, record)
					}

				} catch (ex) { }
			},
			onCheck : function(row, column, state) {
				var grid = this;
				var record = this.getItem(row);

//				console.log("record",record);
				if(record["ROWSTAT"] != "C") {
					record["ROWSTAT"] = "U";
				}
				
				listener.gridEditor.checked(grid, row, column, state);
			}
		},

		rules : {
			$all : function(value, item, columnId) {
				var result = true;
				var columns = this.config.columns;
				var columnIdx = this.getColumnIndex(columnId);
				if (columnIdx > -1) {
					if (columns[columnIdx].option) {
						if (columns[columnIdx].option.required && (isNull(value) || value == "")) {
							result = false;
						}
						
						// maxlength 확인 (byte 기준)
						if (columns[columnIdx].option.maxlength && getByteSize(value) > parseInt(columns[columnIdx].option.maxlength)) {
							result = false;
						}
						
						if (columns[columnIdx].option.type == 'codelist') {
							var gridCodeMapping = (columns[columnIdx].option.gridCodeMapping || columns[columnIdx].returnCodeMapping || '').split(',');
							if (isNull(item[gridCodeMapping[0]]) || item[gridCodeMapping[0]] == '') {
								result = false;
							}
						} else if (columns[columnIdx].option.type == 'positiveNumber') {
							result = value > 0;
						} else if (columns[columnIdx].option.type == 'negativeNumber') {
							result = value < 0;
						} else if (!isEmpty(columns[columnIdx].option.strtdt) || !isEmpty(columns[columnIdx].option.enddt)) {
							var bCk = isEmpty(columns[columnIdx].option.strtdt);
							var sId = !bCk ? columns[columnIdx].option.strtdt : columns[columnIdx].option.enddt;
							
							var sStrDt = !bCk ? ( (item[sId] instanceof Date) ? item[sId] : checkNull(item[sId], "").replace(/\-|\./g,"") ) : ( (value instanceof Date) ? value : checkNull(value, "").replace(/\-|\./g,"") );
							var sEndDt = !bCk ? ( (value instanceof Date) ? value : checkNull(value, "").replace(/\-|\./g,"") ) : ( (item[sId] instanceof Date) ? item[sId] : checkNull(item[sId], "").replace(/\-|\./g,"") );
//							console.log("item :: ", item,"sStrDt :: ",sStrDt, "sEndDt :: ", sEndDt);
							
							if(!isEmpty(sEndDt) && !isEmpty(sStrDt)){
								var oSDate, oEDate;
								if(dateRegExp.test(sStrDt)){
									var iSYear = parseInt(sStrDt.substr(0,4), 10);
									var iSMnth = parseInt(sStrDt.substr(4,2), 10);
									var iSDate = parseInt(sStrDt.substr(6), 10);
									oSDate = new Date(iSYear, iSMnth-1, iSDate);
//									console.log("sStrDt1 :: ", oSDate);
								} else if(sStrDt instanceof Date){
									oSDate = sStrDt;
//									console.log("sStrDt2 :: ", oSDate);
								}
								
								if(dateRegExp.test(sEndDt)){
									var iEYear = parseInt(sEndDt.substr(0,4), 10);
									var iEMnth = parseInt(sEndDt.substr(4,2), 10);
									var iEDate = parseInt(sEndDt.substr(6), 10);
									oEDate = new Date(iEYear, iEMnth-1, iEDate);
//									console.log("oEDate1 :: ", oEDate);
								} else if(sEndDt instanceof Date){
									oEDate = sEndDt;
//									console.log("oEDate2 :: ", oEDate);
								}
								result = (!isEmpty(oSDate) && !isEmpty(oEDate)) ? (oSDate <= oEDate) : result;
//								console.log("result :: ", result);
							}
						}
						
					} else {
						if (!isEmpty(columns[columnIdx].editor) && columns[columnIdx].required && (isNull(value) || value == "")) {
							result = false;
						}
					}
					
					
					if (columns[columnIdx].format == dateFormat) {
						if (!isEmpty(columns[columnIdx].editor) && value && !dateRegExp.test(value)) {
							result = false;
						}
					} else if (columns[columnIdx].format == dateFormatMD) {
						if (!isEmpty(columns[columnIdx].editor) && value && !dateRegExpMD.test(value)) {
							result = false;
						}
					} else if (columns[columnIdx].format == fullDateFormat) {
						if (!isEmpty(columns[columnIdx].editor) && value && !fullDateRegExp.test(value)) {
							result = false;
						}
					} else if (columns[columnIdx].format == telFormat) {
						if (!isEmpty(columns[columnIdx].editor) && value && !telRegExp.test(value)) {
							result = false;
						}
					} else if (columns[columnIdx].format == timeFormat) {
						if (!isEmpty(columns[columnIdx].editor) && value && !timeRegExp.test(value)) {
							result = false;
						}
					} else if (columns[columnIdx].format == mailFormat) {
						if (!isEmpty(columns[columnIdx].editor) && value && !mailRegExp.test(value)) {
							result = false;
						}
					} else if (columns[columnIdx].format == intFormat) {
						if (!isEmpty(columns[columnIdx].editor) && value && !intRegExp.test(value)) {
							result = false;
						}
					} else if (columns[columnIdx].format == intFormat2) {
						if (!isEmpty(columns[columnIdx].editor) && value && !intRegExp.test(value)) {
							result = false;
						}
					} else if (columns[columnIdx].format == numberFormat) {
						if (!isEmpty(columns[columnIdx].editor) && value && !numberRegExp.test(value)) {
							result = false;
						}
					}
				}
//				console.log(columnId, " :: ", result);
				return result;
			}
		}

	},


	type : {
		checkbox : function(obj, common, value, config) {
			let checked = (value == config.checkValue) ? 'checked="true"' : '';
			let html = "<input class='webix_table_checkbox' type='checkbox' "+checked+">";
			if(config.readonly){
				html = "<input disabled class='webix_table_checkbox' type='checkbox' "+checked+">";
			}
			return html;
			
		},
		radio : function(obj, common, value, config) {
			var checked = (value == config.checkValue) ? 'checked="true"' : '';
			return "<input class='webix_table_radio' type='radio' " + checked + ">";
		},
		editIcon : function() {
			return "<span class='webix_icon fa-pencil'></span>";
		},
		trashIcon : function() {
			return "<span class='webix_icon fa-trash'></span>";
		}
		
	},


	lastSelectedItemId : null,
	invalidCellMap : {},
	
}, webix.ui.treetable);

webix.GroupMethods = {
	sum:function(property, data){
		data = data || this;
		var summ = 0;
		for (var i = 0; i < data.length; i++)
			summ+=property(data[i])*1;

		return summ;
	},
	avg:function(property, data){
		data = data || this;
		var summ = 0;
		for (var i = 0; i < data.length; i++)
			summ+=property(data[i])*1;

		return Math.round(summ / data.length);
	},
	min:function(property, data){
		data = data || this;
		var min = Infinity;

		for (var i = 0; i < data.length; i++)
			if (property(data[i])*1 < min) min = property(data[i])*1;

		return min*1;
	},
	max:function(property, data){
		data = data || this;
		var max = -Infinity;

		for (var i = 0; i < data.length; i++)
			if (property(data[i])*1 > max) max = property(data[i])*1;

		return max*1;
	},
	count:function(property, data){
		return data.length;
	},
	count2:function(property, data){
		return data.length;
	},
	any:function(property, data){
		return property(data[0]);
	},
	string:function(property, data){
		return property.$name;
	}
};

webix.ui.datafilter.summColumn = webix.extend({
	getValue:function(){},
	setValue: function(){},
	refresh:function(master, node, value){
		var result = 0;
		master.mapCells(null, value.columnId, null, 1, function(value){
			if(value && typeof value === 'string' ) value = value.replaceAll(",","");
			value = value*1;
			if (!isNaN(value))
				result+=value;
			
			if (value !==  0)
				return value;
			else
				return "";
		});
		
		if (value.format)
			result = value.format(result);
		if (value.template)
			result = value.template({value:result});

		value.text = result;

		const view = webix.$$(master.config.id);
		let css = view.getColumnConfig(value.columnId).footer[0].css;
		let defaultTextAlign = css ? "" : "text-align:right";
		node.firstChild.innerHTML = `<span class="${css}" style="width:100%;display:block;${defaultTextAlign}">` + value.desc + result + '</span>';
	},
	trackCells:true,
	render:function(master, config){ 
		if (config.template)
			config.template = webix.template(config.template);
		return ""; 
	}
}, webix.ui.datafilter.summColumn);

webix.ui.datafilter.avgColumn = webix.extend({
	refresh : function(master, node, value) {
		var result = 0;
		master.mapCells(null, value.columnId, null, 1, function(value) {
			value = value * 1;
			if (!isNaN(value))
				result += value;
			return value;
		});

		if (isNaN(result/master.count())) {
			result = 0;
        } else {
        	result = Math.round(result/master.count());	
        }
		//result = Math.round(result / master.count());
		
		if (value.format)
			result = value.format(result);
		if (value.template)
			result = value.template({value:result});

		value.text = String(result);
		node.firstChild.innerHTML = '<span style="width:100%;display:block;text-align:right">' + value.desc + result + '</span>';
	}
}, webix.ui.datafilter.summColumn);

webix.ui.datafilter.maxColumn = webix.extend({
	refresh : function(master, node, value) {
		var result = '';
		master.mapCells(null, value.columnId, null, 1, function(value) {
			value = value * 1;
			if (!isNaN(value)) {
				if (result == '' || value > result) {
					result = value;
				}
			}
			return value;
		});
		
		if (value.format)
			result = value.format(result);
		if (value.template)
			result = value.template({value:result});

		value.text = result;
		node.firstChild.innerHTML = '<span style="width:100%;display:block;text-align:right">' + value.desc + result + '</span>';
	}
}, webix.ui.datafilter.summColumn);

webix.ui.datafilter.minColumn = webix.extend({
	refresh : function(master, node, value) {
		var result = '';
		master.mapCells(null, value.columnId, null, 1, function(value) {
			value = value * 1;
			if (!isNaN(value)) {
				if (result == '' || value < result) {
					result = value;
				}
			}
			return value;
		});
		
		if (value.format)
			result = value.format(result);
		if (value.template)
			result = value.template({value:result});

		value.text = result;
		node.firstChild.innerHTML = '<span style="width:100%;display:block;text-align:right">' + value.desc + result + '</span>';
	}
}, webix.ui.datafilter.summColumn);

webix.ui.datafilter.cntColumn = webix.extend({
	refresh : function(master, node, value) {
		var result = 0;
		master.mapCells(null, value.columnId, null, 1, function(value) {
			if (value != '') result += 1;
			return value;
		});
		
		result = intFormat(result);
		
		value.text = result;

		const view = webix.$$(master.config.id);
		let css = view.getColumnConfig(value.columnId).footer[0].css;
		let defaultTextAlign = css ? "" : "text-align:right";
		node.firstChild.innerHTML = `<span class="${css}" style="width:100%;display:block;${defaultTextAlign}">` + value.desc + result + '</span>';
	}
}, webix.ui.datafilter.summColumn);

webix.ui.datafilter.cnt2Column = webix.extend({
	refresh : function(master, node, value) {
		var result = 0;
		master.mapCells(null, value.columnId, null, 1, function(value) {
			if (value != '') result += 1;
			return value;
		});
		
		result = intFormat(result);
		
		value.text = result+'건';
		node.firstChild.innerHTML = '<span style="width:100%;display:block;text-align:right">' + result + '건</span>';
	}
}, webix.ui.datafilter.summColumn);

webix.ui.datafilter.timeColumn = webix.extend({
	refresh:function(master, node, value){ 
		var result = 0;
		master.mapCells(null, value.columnId, null, 1, function(value){
			value = value*1;
			if (!isNaN(value))
				result+=value;
			
			return (value+"").toHHMMSS();
		});
		
		value.text = (result+"").toHHMMSS();
		node.firstChild.innerHTML = '<span style="width:100%;display:block;text-align:right;">' + (result+"").toHHMMSS(); + '</span>';
	}
}, webix.ui.datafilter.summColumn);

webix.ui.datafilter.textColumn = webix.extend({
	refresh: function (master, node, value) {
		const view = webix.$$(master.config.id);
		let css = view.getColumnConfig(value.columnId).footer[0].css;
		let defaultTextAlign = css ? "" : "text-align:right";
		node.firstChild.innerHTML = `<span class="${css}" style="width:100%;display:block;${defaultTextAlign}">` + value.desc + '</span>';
	}
}, webix.ui.datafilter.summColumn);

// grouping method alias

webix.ui.datafilter.count = webix.ui.datafilter.cntColumn;
webix.ui.datafilter.count2 = webix.ui.datafilter.cnt2Column;
webix.ui.datafilter.min = webix.ui.datafilter.minColumn;
webix.ui.datafilter.max = webix.ui.datafilter.maxColumn;
webix.ui.datafilter.avg = webix.ui.datafilter.avgColumn;
webix.ui.datafilter.sum = webix.ui.datafilter.summColumn;
webix.ui.datafilter.time = webix.ui.datafilter.timeColumn;
webix.ui.datafilter.text = webix.ui.datafilter.textColumn;

// format method alias

webix.ui.datafilter.textFilter.render = function(master, config){
	if (this.init) this.init(config);
	config.css = "webix_ss_filter";
	return "<input style='height:30px;'"+(config.placeholder?('placeholder="'+config.placeholder+'" '):"")+"type='text'>";
}

webix.ui.datafilter.numberFilter.render = function(master, config){
	if (this.init) this.init(config);
	config.css = "webix_ss_filter";
	return "<input style='height:30px;'"+(config.placeholder?('placeholder="'+config.placeholder+'" '):"")+"type='text'>";
}


var intFormat = function(obj) {
	if (isNull(obj)) {
		return '0';
	} else {
		let result = isNaN(obj) ? '' : webix.i18n.intFormat(obj);
		return result;
	}
};

var intFormat2 = function(obj) {
	if (isNull(obj)) {
		return '';
	} else {
		let result = isNaN(obj) ? '' : webix.i18n.intFormat(obj);
		return obj == 0 ? '' : result;
	}
};

var numberFormat = function(obj) {
	if (isNull(obj)) {
		return '0';
	} else {
		let result = isNaN(obj) ? '' : webix.i18n.numberFormat(obj);
		return result;
	}
};

var priceFormat = function(obj) {
	if (isNull(obj)) {
		return webix.i18n.locales["ko-KR"].price.replace(/{obj}/g, '') + '0';
	} else {
		return webix.i18n.priceFormat(obj);
	}
};

var dateFormat = function(dateStr) {
	if (dateStr == null || dateStr == '' || dateStr.length < 8) return dateStr;
	try {
		dateStr = dateStr.replace(/-/g, '');
		dateStr = dateStr.replace(/\\./g, '');
		var yearStr = dateStr.substring(0, 4);
		var monthStr = dateStr.substring(4, 6);
		var dayStr = dateStr.substring(6, 8);
		return webix.i18n.dateFormatStr( webix.i18n.parseFormatDate(yearStr + '.' + monthStr + '.' + dayStr) );
	} catch (ex) {
		return dateStr;
	}
}

var dateFormatMD = function(dateStr) {
	if (isNull(dateStr)) {
		return '';
	} else if (dateStr == '') {
		return '';
	} else {
		var res = dateRegExpMD.exec(dateStr);
		if (!isNull(res)) {
			return res[1] + '-' + res[2];
		} else {
			return dateStr;
		}
	}
}

var longDateFormat = function(dateStr) {
	if (dateStr == null || dateStr == '' || dateStr.length < 8) return '';
	dateStr = dateStr.replace(/-/g, '');
	dateStr = dateStr.replace(/\\./g, '');
	var yearStr = dateStr.substring(0, 4);
	var monthStr = dateStr.substring(4, 6);
	var dayStr = dateStr.substring(6, 8);
	return webix.i18n.longDateFormatMDStr( webix.i18n.parseFormatDate(yearStr + '.' + monthStr + '.' + dayStr) );
}

var fullDateFormat = function(dateStr) {
	if (dateStr == null || dateStr == '' || dateStr.length < 12) return '';
	dateStr = dateStr.replace(/-/g, '');
	dateStr = dateStr.replace(/\\./g, '');
	var yearStr = dateStr.substring(0, 4);
	var monthStr = dateStr.substring(4, 6);
	var dayStr = dateStr.substring(6, 8);
	var hourStr = dateStr.substring(8, 10);
	var minStr = dateStr.substring(10, 12);
	return webix.i18n.fullDateFormatStr( webix.i18n.parseFormatDate(yearStr + '-' + monthStr + '-' + dayStr + ' ' + hourStr + ':' + minStr) );
}

var webixDatagridCheckboxHandler = function(gridId, itemId) {
	var $grid = $('*[view_id=' + gridId + '').parent().webix_datagrid();
	var rowData = $grid.getItem(itemId);
	try {
		if ($grid.config.editable
				&& $grid.config.columns
				&& $grid.config.columns[0].header
				&& $grid.config.columns[0].header[0].content
				&& $grid.config.columns[0].header[0].content == 'masterCheckbox') {
			rowData[$grid.config.columns[0].id] = 1;
			$grid.updateItem(itemId, rowData);
		}
	} catch (ex) {}
}

var telFormat = function(telStr) {
	if (isNull(telStr)) {
		return '';
	} else if (telStr == '') {
		return '';
	} else {
		var res = telRegExp.exec(telStr);
		if (!isNull(res)) {
			telStr = res[1];
			telStr += res[2] ? "-" + res[2] : "";
			telStr += res[3] ? "-" + res[3] : "";
			
			return telStr;
		} else {
			return telStr;
		}
	}
}

var timeFormat = function(timeStr) {
	if (isNull(timeStr)) {
		return '';
	} else if (timeStr == '') {
		return '';
	} else {
		var res = timeRegExp.exec(timeStr);
		if (!isNull(res)) {
			return res[1] + ':' + res[2];
		} else {
			return timeStr;
		}
	}
}

var mailFormat = function(mailStr) {
	if (isNull(mailStr)) {
		return '';
	} else if (mailStr == '') {
		return '';
	} else {
		var res = mailRegExp.exec(mailStr);
		if (!isNull(res)) {
			return res[1] + ':' + res[2];
		} else {
			return mailStr;
		}
	}
}

var column = {
	codehelp : function(value, target) {
		return checkEmpty(value,"")+"<button class='btnCodeHelpGrid' data-target='" + target + "' style='position:absolute; right:0px; z-index:9; border: 1px solid #c8c8c8;'></button>";
	}
};

webix.ready(function() {
	/*
	$(webix.editors).on("keydown",  function(evt) {
		console.log("editor keydown");
	});
	*/
	
	//if (!webix.env.touch && webix.ui.scrollSize) {
	webix.CustomScroll.init();
	//}

	webix.UIManager.addHotKey("up", function(view, evt){
		if (!view || !view._custom_tab_handler && !view._custom_tab_handler(true, evt)) {
			return false;
		}
		
		var editor = view.getEditor();
		
		if (editor) {
			if (editor.config.editor == "select" || editor.config.editor == "combo") {
				var select = editor.getInputNode();
				if ($(select).is(":focus")) {
					return;
				}
			}
			
			var prevRowId = view.getPrevId(editor.row);
			if (prevRowId) {
				view.editStop();
				view.select(prevRowId);
				view.editCell(prevRowId, editor.column);
				
				evt.preventDefault();
				evt.stopPropagation()
				evt.stopImmediatePropagation()
				return false;
			}
		}
	});
	
	webix.UIManager.addHotKey("down", function(view, evt){
		if (!view || !view._custom_tab_handler && !view._custom_tab_handler(true, evt)) {
			return false;
		}
		
		var editor = view.getEditor();
		
		if (editor) {
			if (editor.config.editor == "select" || editor.config.editor == "combo") {
				var select = editor.getInputNode();
				if ($(select).is(":focus")) {
					return;
				}
			}
			
			var nextRowId = view.getNextId(editor.row);
			if (nextRowId) {
				view.editStop();
				view.select(nextRowId);
				view.editCell(nextRowId, editor.column);
				
				evt.preventDefault();
				evt.stopPropagation()
				evt.stopImmediatePropagation()
				return false;
			}
		}
	});
	
	webix.UIManager.removeHotKey("enter");
	webix.UIManager.addHotKey("enter", function(view, evt){
		if (!view || !view._custom_tab_handler) {
//		if (!view || !view._custom_tab_handler && !view._custom_tab_handler(true, evt)) {
			return false;
		}
		
		var isNext = false;
		var editor = view.getEditor();
		
		if (isNull(editor)) {
			return;
		}
		
		var check = true;
		if (editor.getValue) {
			check = (editor.getValue() != "");
		}
		
		var column = view.getColumnConfig(editor.column);
		
		var option;
		
		if (column && column.option) {
			option = column.option;
		} else {
			option = {};
			isNext = true;
		}
		
		if (option.required) {
			if (!check) {
				return false;
			}
		}
		if ((option.type == "code") && check) {
			let { code , param , target  } = option
			if(!code) return false;
			let record = view.getItem(editor.row);
			let rltcolnm = checkEmpty(option.rltcolnm, "name");
			
//console.log("webix.UIManager.addHotKey enter ::",column.id, option.code, param);
			
			param["cmminfo"] = editor.getValue();

			var isPass = false;
			
			var callback = new Callback(function(result) {
//console.log("webix.UIManager.addHotKey callback ::",result);
				if (isEmpty(result)) {
					let thisCallBack = new Callback( function(result) {
						if(!result) {
							editor.focus();
							return ;
						}
						editor.setValue(result["code"]);
						record[editor.column] = result["code"];
						record[target] = result["name"];
						view.updateItem(editor.row, record);
						view.editNext(true)
						isPass = false;
					});
					popup.help.show(option.code, "", param, thisCallBack);
				} else {
					if(result.length == 1){
						editor.setValue(result[0]["code"]);
						record[editor.column] = result[0]["code"];
						record[target] = result[0]["name"];
						view.updateItem(editor.row, record);
						view.editNext(true)
						isPass = false;
					}else{
						let callback2 = new Callback( function(result) {
							if(!result) {
								editor.focus();
								return ;
							}
							editor.setValue(result["code"]);
							record[editor.column] = result["code"];
							record[target] = result["name"];
							view.updateItem(editor.row, record);
							view.editNext(true)
							isPass = false;
						});
						popup.help.show(option.code, editor.getValue(), param, callback2);
					}
				}
			});

			param.queryId = option.code;
			platform.postService("/getCodeName", param, callback);

			if (!isPass) {
				editor.focus();
				editor.getInputNode().select();
				view.select(editor.row, false);
				return false;
			} else {
				isNext = true;
			}
		} else {
			isNext = true;
		}
		
		if (isNext) {
			if (view && view._in_edit_mode) {
				if (view.editNext) {
					return view.editNext(true);
				}
			}
		}
		//*/
		/*
		if (view && view.editStop && view._in_edit_mode){
			view.editStop();
			return true;
		} else if (view && view.touchable){
			var form = view.getFormView();
			if (form && !view._skipSubmit)
				form.callEvent("onSubmit",[view,ev]);
		}
		*/
		/*
		if (view && view._custom_tab_handler && !view._custom_tab_handler(true, evt))
			return false;

		if (view && view._in_edit_mode){
			if (view.editNext) {
				console.log("view1; " + view.isEditing);
				return view.editNext(true);
			} else if (view.editStop) {
				console.log("view2; " + view.isEditing);
				view.editStop();
				return true;
			}
		} else
			webix.delay(function(){
				webix.UIManager.setFocus(webix.$$(document.activeElement), true);
			},1);
		//*/
	});
});

class Footer {
	constructor(dataField, type, text,css) {
		this.dataField = dataField;
		this.content = type;
		this.desc = text;
		if(!isNull(css)) this.css = css;
	}
}

class CodeHelp {
	constructor(id, header ,option,popupParam) {
		this.id = id
		this.header = header;
		this.editor = "text";
		this.isCodeHelp = true;
		this.option = popupParam;
		this.tooltip=`#${id}#`
		this.readonly=false;

		if(this.option) {
			this.option.type =  this.option.type ? this.option.type : "code";
		}

		Object.keys(option).forEach(key => {
			this[key] = option[key];
		})

		if(this.readonly) {
			this.editor = "";
		}

		this.template = `#${this.id}# <button type='button' class='btnCodeHelpGrid' style='position:absolute; right:0px; z-index:9; border: 1px solid #c8c8c8;'></button>`;
	}
}


/*
* 	type
*   intFormat : 정수
*   numberFormat : 소수
* */
function webixNumberFormat(type) {
	return {
		editFormat : function(value) {
			return type === 'intFormat' ? intFormat(value) : webix.i18n.numberFormat(value);
		},
		format: function(value){
			return type === 'intFormat' ? intFormat(value) : webix.i18n.numberFormat(value);
		},
	}
}
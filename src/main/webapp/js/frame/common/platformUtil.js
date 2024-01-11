var platformContext = "";

if (!("platform" in window)) {
	window.platform = {
		_version: "0.1"
	};
}

platform.getService = function(url, callbackFunc, async) {
	if (typeof async !== "boolean") {
		async = true;
	}

	$.ajax({
		type: "get",
		url: platformContext + url,
		dataType: "json",
		async: async,
		success: function(data) {
			callbackFunc.callback(data);
		},
		beforeSend:function(){
			if(callbackFunc && callbackFunc.preHook)
				callbackFunc.preHook();
		},
		complete:function(){
			if(callbackFunc && callbackFunc.postHook)
				callbackFunc.postHook();
		},
		error: function(xhr, stat, err) {
			// 오류 메시지 표시 후 종료
			// showErrorMsg (overlay 사용);
			console.error(xhr, stat, err);
		}
	});
};

platform.postService = function(url, data, callbackFunc, async) {
	if (typeof async !== "boolean") {
		async = true;
	}
	
	//url = "${pageContext.request.contextPath}" + url;	

	$.ajax({
		type: "post",
		url: platformContext + url,
		contentType: "application/json",
		data: JSON.stringify(data),
		async: async,
		success: function(data) {
			var result = data;
			callbackFunc.callback(data);
		},
		beforeSend:function(){
			if(callbackFunc && callbackFunc.preHook)
				callbackFunc.preHook();
		},
		complete:function(){
			if(callbackFunc && callbackFunc.postHook)
				callbackFunc.postHook();
		},
		error: function(xhr, stat, err) {
			// 오류 메시지 표시 후 종료
			// showErrorMsg (overlay 사용);
			console.error(xhr, stat, err);
		}
	});
}



platform.putService = function(url, data, callbackFunc, async) {
	if (typeof async !== "boolean") {
		async = true;
	}

	$.ajax({
		type: "put",
		url: platformContext + url,
		contentType: "application/json",
		data: JSON.stringify(data),
		async: async,
		success: function(data) {
			var result = data;
			callbackFunc.callback(data);
		},
		beforeSend:function(){
			if(callbackFunc && callbackFunc.preHook)
				callbackFunc.preHook();
		},
		complete:function(){
			if(callbackFunc && callbackFunc.postHook)
				callbackFunc.postHook();
		},
		error: function(xhr, stat, err) {
			// 오류 메시지 표시 후 종료
			// showErrorMsg (overlay 사용);
			console.error(xhr, stat, err);
		}
	});
};

platform.deleteService = function(url, callbackFunc, async) {
	if (typeof async !== "boolean") {
		async = true;
	}

	$.ajax({
		type: "delete",
		url: platformContext + url,
		dataType: "json",
		async: async,
		success: function(data) {
			var result = data;
			callbackFunc.callback(data);
		},
		beforeSend:function(){
			if(callbackFunc && callbackFunc.preHook)
				callbackFunc.preHook();
		},
		complete:function(){
			if(callbackFunc && callbackFunc.postHook)
				callbackFunc.postHook();
		},
		error: function(xhr, stat, err) {
			// 오류 메시지 표시 후 종료
			// showErrorMsg (overlay 사용);
			console.error(xhr, stat, err);
		}
	});
};

platform.postFileService = function(url, formData, callbackFunc, async) {
	if (typeof async !== "boolean") {
		async = true;
	}
	
	$.ajax({
		type: "post",
		url: platformContext + url,
		contentType: false,
		data: formData,
		async: async,
		processData: false,
		success: function(data) {
			callbackFunc.callback(data);
		},
		beforeSend:function(){
			if(callbackFunc && callbackFunc.preHook)
				callbackFunc.preHook();
		},
		complete:function(){
			if(callbackFunc && callbackFunc.postHook)
				callbackFunc.postHook();
		},
		error: function(xhr, stat, err) {
			// 오류 메시지 표시 후 종료
			// showErrorMsg (overlay 사용);
			console.error(xhr, stat, err);
		}
	});
};
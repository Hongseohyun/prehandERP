$(function () {
	var ws = new WebSocket("ws://"+window.location.host+"/ws/absol-ws");
	ws.onopen = function(evt){
		console.log("onopen", evt);
	}
	ws.onmessage = function(evt){
		fnOnMessage(evt.data);
	}
	ws.onerror = function(evt){
		console.log("onerror", evt);
	}
});
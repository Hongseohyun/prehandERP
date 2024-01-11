
var customPopupContextPath = ""; //"/ding";
var customPopup = {
    callback : null,    
    show : function(url, title, width, height, callback, params) {
        this.callback = callback;

        $(document).off("iframeready");

        $(document).on("iframeready", function(evt, frameId) {
            if (frameId == "customPopupFrame") {
                var frame = $("#customPopupFrame").get(0).contentWindow;
                var strInitFrame = "frame.initFrame(" + JSON.stringify(params) + ")";

                eval(strInitFrame);
            }
        });

        $("#customPopupFrame").attr("src", customPopupContextPath + url); /* for context path */
        $("#customPopupTitle").text(title);
        $("#customPopupContainer").css("width", width);
        $("#customPopupContainer").css("height", height);
        $("#customPopupContainer").css("left", "calc(50% - " + width / 2 + "px)");
        $("#customPopupContainer").css("top", "calc(50% - " + height / 2 + "px)");
        $("#customPopupWindow").css("display", "block");
        $("#customPopupWindow").focus();
    },

    hide : function() {
        $("#customPopupWindow").css("display", "none");
        $("#customPopupFrame").attr("src", "");

        var strParam = "";

        for (var i = 0; i < arguments.length; i++) {
            strParam += "arguments[" + i + "]";

            if (i < arguments.length - 1) {
                strParam += ",";
            }
        }

        var strCallback = "this.callback.callback(" + strParam + ")";

        if (this.callback != null) {
            eval(strCallback);
        }
    }
};

$(document).ready(function() {
    $("#customClose").css("display", "none !important");
    $("#customClose").css("display", "none");

    $("#customPopupContainer").draggable({
        containment: "parent",
        cursor: "move"
    });

    $("#customPopupWindow").on("keydown", e => {
        if( e.keyCode === KEY_ESC ) {
            customPopup.hide();
            return ;
        }
    })

    $('#customPopupFrame').load(function(){
        const contents = $(this).contents();
        $(contents).find("body").on('keydown', function (e){
            if( e.keyCode === KEY_ESC ) {
                customPopup.hide();
                return ;
            }
        });
    });

});
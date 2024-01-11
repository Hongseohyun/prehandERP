'use strict';

var groups = {};

function getGroup(name) {
    if (!name) {
        return;
    }
    var group = groups[name];
    if (!group) {
        group = groups[name] = graph.createGroup(name);
        group.groupType = Q.Consts.GROUP_TYPE_ELLIPSE;
        group.setStyle(Q.Styles.GROUP_STROKE_LINE_DASH, [8, 8]);
        group.setStyle(Q.Styles.GROUP_BACKGROUND_COLOR, "rgba(0,0,0,0.15)");
        group.setStyle(Q.Styles.LABEL_FONT_SIZE, 14);
    }
    return group;
}

var graph = new Q.Graph('canvas');

graph.editable = false;
graph.enableDoubleClickToOverview = false;

function createEdge(name, from, to) {
    var edge = graph.createEdge(name, from, to);
    edge.setStyle(Q.Styles.ARROW_TO, Q.Consts.SHAPE_ROUNDRECT);
    edge.setStyle(Q.Styles.ARROW_TO_SIZE, 1);
    edge.setStyle(Q.Styles.ARROW_TO_FILL_COLOR, "#444");
    // edge.setStyle(Q.Styles.ARROW_TO_STROKE, 1);
    // edge.setStyle(Q.Styles.ARROW_TO_STROKE_STYLE, "#444");
    // edge.uiClass = HFlexEdgeUI;
}

function createText(text, x, y) {
    var node = graph.createNode(text, x, y);
    node.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, x, y);

    node.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, new Q.Gradient(Q.Consts.GRADIENT_TYPE_RADIAL, ['#727272', '#000'], null, Math.PI / 2));
    node.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#000");
    node.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_MIDDLE);
    node.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_MIDDLE);
    node.setStyle(Q.Styles.LABEL_COLOR, "#FFFFFF");

    //node.setStyle(Q.Styles.LABEL_BACKGROUND_COLOR, "#2898E0");
    //node.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT, new Q.Gradient(Q.Consts.GRADIENT_TYPE_LINEAR, ['#00d4f9', '#1ea6e6'], null, Math.PI / 2));
    //node.setStyle(Q.Styles.LABEL_COLOR, "#FFF");
    //node.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(5, 10));
    //node.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_MIDDLE);
    //node.setStyle(Q.Styles.LABEL_BORDER, 0.5);
    //node.setStyle(Q.Styles.LABEL_BORDER_STYLE, "#1D4876");
    //node.setStyle(Q.Styles.SELECTION_COLOR, "#0F0");
    return node;
}

function localToGlobal(x, y, canvas) {
    x += window.pageXOffset;
    y += window.pageYOffset;
    var clientRect = canvas.getBoundingClientRect();
    return {x: x + clientRect.left, y: y + clientRect.top};
}

// var layouter = new Q.TreeLayouter(graph);
// layouter.isLayoutable = function (node, from) {
//     return node == ROOT || node.host != null;
// }
// layouter.vGap = 20;

var layouter = new Q.SpringLayouter(graph, 200);

graph.interactionDispatcher.addListener(function (evt) {
    if (evt.kind == Q.InteractionEvent.ELEMENT_MOVING) {
        layouter.start();
    }
})
var default_repulsion = 115;
var default_attractive = 0.7;
var default_elastic = 3;
layouter.repulsion = default_repulsion;
layouter.attractive = default_attractive;
layouter.elastic = default_elastic;

graph.onmouseover = function (evt) {
    var element = graph.getElementByMouseEvent(evt);
    if (element) {
        element.style.cursor = 'pointer';
        return;
    }

    //var xy = graph.toLogical(evt);
    //var newItem = createText(getI18NString('New Project'), xy.x, xy.y);
    //graph.selectionModel.select(newItem);
}

graph.ondblclick = function (evt) {
    var element = graph.getElementByMouseEvent(evt);

    if (element) {
        alert("node double clicked");
        return;
    }
    //var xy = graph.toLogical(evt);
    //var newItem = createText(getI18NString('New Project'), xy.x, xy.y);
    //graph.selectionModel.select(newItem);
}

graph.onclick = function (evt) {
    var element = graph.getElementByMouseEvent(evt);
    if (element) {
        console.log(element);
//    	 location.href="/bbs/content.php?co_id=dataset&me_code=3020&tag="+element.name;
//		alert("node clicked : "+ element.name);
        $('#disabled-output').prepend('<p>' + element.name + ' was selected</p>');

        return;
    }
    //var xy = graph.toLogical(evt);
    //var newItem = createText(getI18NString('New Project'), xy.x, xy.y);
    //graph.selectionModel.select(newItem);
}

// graph.interactionDispatcher.addListener(function (evt) {
//     if (evt.data == ROOT) {
//         return;
//     }
//     if (evt.kind == Q.InteractionEvent.ELEMENT_MOVING && evt.data) {
//         var node = evt.data;
//         var host = findNearNode(node);
//         if (node.host == host) {
//             return;
//         }
//         if (node.host) {
//             unlinkToParent(node);
//         }
//         if (host) {
//             linkToParent(node, host);
//         }
//     } else if (evt.kind == Q.InteractionEvent.ELEMENT_MOVE_END && evt.data) {
//         layouter.doLayout();
//     }
// })

function atLeft(bounds1, bounds2) {
    if (bounds1.right < bounds2.x) {
        return true;
    }
    if (bounds1.x > bounds2.right) {
        return false;
    }
}

function findNearNode(node) {
    if (node == ROOT) {
        return null;
    }
    var x = node.x;
    var y = node.y;

    var rootBounds = graph.getUIBounds(ROOT);
    var uiBounds = graph.getUIBounds(node);

    var inLeft = atLeft(uiBounds, rootBounds);
    if (inLeft === undefined) {
        if (Q.calculateDistance(x, y, ROOT.x, ROOT.y) > 300) {
            return null;
        }
        return ROOT;
    }

    var nearNode, xDistance;

    graph.forEachVisibleUI(function (ui) {
        var data = ui.data;
        if (!(data instanceof Q.Node) || data == ROOT || data == node || data.isFollow(node)) {
            return;
        }
        var dataAtROOTLeft = data.x < ROOT.x;
        if (dataAtROOTLeft != inLeft) {
            return;
        }
        var dy = Math.abs(y - data.y);
        var dx = Math.abs(x - data.x);
        if (dy < 20 && (xDistance === undefined || xDistance > dx)) {
            xDistance = dx;
            nearNode = data;
        }
    })
    if (!nearNode || xDistance > 200) {
        if (node.host && Q.calculateDistance(x, y, node.host.x, node.host.y) > 300) {
            return null;
        }
        return node.host;
    }
    while (nearNode && inLeft !== atLeft(uiBounds, graph.getUIBounds(nearNode))) {
        nearNode = nearNode.host;
    }
    return nearNode;
}

function createItem(data, parent, level) {
    if (Q.isArray(data)) {
        var children = data;
        for (var i = 0, l = children.length; i < l; i++) {
            var child = children[i];
            createItem(child, parent, level);
        }
        return;
    }
    // var node = createText("<" + data.name + ">");
    var node = createText(data.name);
    //NDMI
    if (level == 0) {
        node.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 80, 80);
        node.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, new Q.Gradient(Q.Consts.GRADIENT_TYPE_RADIAL, ['#727272', '#000'], null, Math.PI / 2));
    }
    //자연재난, 사회재난
    if (level == 1) {
        node.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 70, 70);
        node.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#fff");
        node.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, new Q.Gradient(Q.Consts.GRADIENT_TYPE_RADIAL, ['rgba(255,255,2555,0.32)', '#fff'], null, Math.PI / 2));
        //node.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, new Q.Gradient(Q.Consts.GRADIENT_TYPE_RADIAL, ['#fff', '#ffba00'], null, Math.PI / 3));
        node.setStyle(Q.Styles.LABEL_COLOR, "#000");
        node.setStyle(Q.Styles.LABEL_FONT_SIZE, 14);
    }
    //기후성, 지질성 등
    if (level == 2) {
        node.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 60, 60);
        node.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#c9e4f0");
        node.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, new Q.Gradient(Q.Consts.GRADIENT_TYPE_RADIAL, ['#497186', '#4282a5'], null, Math.PI / 2));
        node.setStyle(Q.Styles.LABEL_COLOR, "#fff");
        node.setStyle(Q.Styles.LABEL_FONT_SIZE, 12);
    }
    //children
    if (level == 3) {
        node.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 50, 50);
        node.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#c29700");
        node.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, new Q.Gradient(Q.Consts.GRADIENT_TYPE_RADIAL, ['#fff', '#ffca14'], null, Math.PI / 2));
        node.setStyle(Q.Styles.LABEL_COLOR, "#000");
        node.setStyle(Q.Styles.LABEL_FONT_SIZE, 10);
    }

    node.tooltipType = "text";
    node.data = data;
    level = level || 0;
    node.level = level;
    if (parent) {
        linkToParent(node, parent);
    }
    node.parentChildrenDirection = Q.Consts.DIRECTION_MIDDLE;
    node.layoutType = Q.Consts.LAYOUT_TYPE_TWO_SIDE;

    if (data.children) {
        createItem(data.children, node, level + 1);
    }
    if (data.group) {
        var group = getGroup(data.group);
        //node.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT, new Q.Gradient(Q.Consts.GRADIENT_TYPE_LINEAR, ['#f1fffc', '#d4fff7'], null, Math.PI / 2));
        node.setStyle(Q.Styles.LABEL_COLOR, "#000");
        group.addChild(node);
    }
    node.setStyle(Q.Styles.LABEL_ON_TOP, true);
    return node;
}

function linkToParent(node, parent) {
    node.host = parent;
    return createEdge(parent, node);
}

function unlinkToParent(node) {
    node.host = null;
    node.forEachInEdge(function (edge) {
        graph.graphModel.remove(edge);
    });
}

//var ROOT = createItem(data);
//ROOT.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 100, 100);
//
//ROOT.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#2898F0");
//ROOT.setStyle(Q.Styles.LABEL_FONT_SIZE, 20);
//ROOT.setStyle(Q.Styles.LABEL_SIZE, new Q.Size(80, 60));

// graph.callLater(function () {
//     layouter.doLayout();
//     graph.zoomToOverview();
// })
//setTimeout(function () {
//    layouter.doLayout();
//    graph.zoomToOverview();
//    console.log(graph.toJSON());
//}, 200);

function toJSONClicked() {

    var filename = "qunee.json";
    var a = document.createElement("a"),
        file = new Blob([JSON.stringify(graph.toJSON())], {
            type: "text/plain;charset=UTF-8",
            encoding: "UTF-8"
        });
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

function loadFromJSON() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.

        // Closure to capture the file information.
        reader.onloadend = function (theFile) {
            console.log(reader.result);
            try {
                var obj = JSON.parse(reader.result);
                graph.clear();
                graph.parseJSON(obj);
            } catch (err) {
                console.log('로딩 에러 json형식이 아닙니다.');
            }
        };
        var input = document.getElementById('file');
        var file = input.files[0];
        if (file) {
            // reader.readAsText(input.files[0]);
            reader.readAsText(file);
        }

        // Read in the image file as a data URL.
        // reader.readAsDataURL(f);
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
}
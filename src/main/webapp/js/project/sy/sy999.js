webix.ready(function() {
    const editors = [
        { id:'No Editor',value:'No Editor' },
        { id:'text',value:'text' },
        { id:'memo',value:'memo' },
        { id:'codeHelp',value:'codeHelp' },
        { id:'select',value:'select' },
        { id:'checkbox',value:'checkbox' },
        { id:'date',value:'date' },
        { id:'combo',value:'combo' },
        { id:'richselect',value:'richselect' },
    ]

    const css = [
        {id:"Center", value: "Center"},
        {id:"Left", value: "Left"},
        {id:"Right", value: "Right"},
    ];

    webix.ui({
        id : "grid1",
        container : "grid1",
        view : "datagrid",
        columns : [
            {id: "columnId", editor: "text",     sort:"string",  header: "컬럼_ID",  css: "textCenter",  width : 120},
            {id: "header",   editor: "text",     sort:"string",  header: "헤더명",   css: "textCenter",  width : 120},
            {id: "editor",   editor: "combo",    sort:"string",  header: "에디터",   css: "textCenter",  width : 200, collection : editors},
            {id: "css",      editor: "combo",    sort:"string",  header: "CSS",      css: "textCenter",  width : 180, collection : css},
            {id: "width",    editor: "text",     sort:"string",  header: "width",    css: "textCenter",  width : 180},
            {id: "hidden",   editor: "checkbox", sort:"string",  header: "hidden",   css: "textCenter",  width : 120, checkValue:'Y', uncheckValue:'N', template:"{common.checkbox()}",   },
        ]
    });
    $$("grid1").initGrid();
    addRow();
});
const addRow = (isHidden = 'N') => {
    let data = {header:'',columnId:'',width:120,css:'Center',editor:"No Editor"};
    if(isHidden === 'Y') {
        data = {id: "", hidden:'Y'}
    }
    $$("grid1").addRow(data);
}

const grid_setting = () => {
    const gridID = $("#gridID").val();
    const result = makeColumns();
    let text = `let ${gridID} = webix.ui({
        id : "${gridID}",
        container : "${gridID}",
        view : "datagrid",
        columns : [
            ${result}
        ]
    });
    
    ${gridID}.initGrid();
    `
    $("#print").text(text);
    copyAndAni();

}
const copyAndAni = () => {
    const content = document.getElementById('print');
    content.select();
    document.execCommand('copy');
    $("#copy").toggle( 'slow' )
    setTimeout(()=> {$("#copy").toggle( 'slow' )},1000);
}
const makeColumns = () => {
    let gridData = $$("grid1").getData();
    let result = "";
    gridData.forEach(row => {
        let { columnId , editor , header , css , width ,hidden } = row;
        editor = editor ? editor : 'No Editor'
        let resultEditor;
        switch (editor) {
            case 'No Editor':
                resultEditor = `editor : ''`;
                break;
            case 'text':
                resultEditor = `editor : 'text'`;
                break;
            case 'memo' :
                resultEditor = `editor : 'popup'`;
                break;
            case 'codeHelp':
                result += ` new CodeHelp('${columnId}','${header}',{width:${width},css:'text${css}'}), \n             `
                break;
            case 'select' :
                resultEditor = `editor : '${editor}' , options : [] `
                break;
            case 'date' :
                resultEditor = `editor : '${editor}' , format:webix.Date.dateToStr('%Y-%m-%d')`
                break;
            case 'checkbox' :
                resultEditor = `editor : '${editor}' , checkValue:'Y',uncheckValue:'N',template:"{common.checkbox()}"`
                break;
            case 'combo' :
                resultEditor = `editor : '${editor}' , collection : [] `
                break;
            case 'richselect' :
                resultEditor = `editor : '${editor}' , collection : [] `
                break;

        }



        if(editor !== 'codeHelp') {
            if(hidden === 'Y') {
                result += ` { id:'${columnId}' , header:'${header}', hidden:true  }, \n             `
            } else {
                result += ` { id:'${columnId}' , header:'${header}', ${resultEditor} , sort:'string',  css:'text${css}' ,width:${width}  }, \n             `
            }
        }
    })
    return result;
}


listener.button.init.click = function() {
    $$("grid1").clearData();
    $("#gridID").val("grid1");
    $("#print").val("");
    addRow();
}




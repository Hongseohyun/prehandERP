package com.sjinc.bss.framework.utils.excel;

import org.w3c.dom.Element;
import org.w3c.dom.Node;

public class ExcelColumn {

    private String colName;
    private String type;
    private String align;
    private String sort;
    private String format;
    private String cryption;
    private String paging;
    private int colspan;
    private int rowspan;
    private int width = 0;
    private int height = 1;
    private boolean is_footer = false;

    public void parse(Element parent) {
        is_footer = parent.getParentNode().getParentNode().getNodeName().equals("foot");

        Node textnode = parent.getFirstChild();
        if (textnode != null)
            colName = textnode.getNodeValue();
        else
            colName = "";

        String widthstring = parent.getAttribute("width");
        if (widthstring.length() > 0) {
            width = Integer.parseInt(widthstring);
        }
        type = parent.getAttribute("type");
        align = parent.getAttribute("align");
        sort = parent.getAttribute("sort");
        format = parent.getAttribute("format");
        cryption = parent.getAttribute("cryption");
        paging = parent.getAttribute("paging");
        String colspanstring = parent.getAttribute("colspan");
        if (colspanstring.length() > 0) {
            colspan = Integer.parseInt(colspanstring);
        }
        String rowspanstring = parent.getAttribute("rowspan");
        if (rowspanstring.length() > 0) {
            rowspan = Integer.parseInt(rowspanstring);
        }
    }

    public int getWidth() {
        return width;
    }

    public boolean isFooter() {
        return is_footer;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getColspan() {
        return colspan;
    }

    public int getRowspan() {
        return rowspan;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public String getName() {
        return colName;
    }

    public String getAlign() {
        return align;
    }

    public String getSort() {
        return sort;
    }

    public String getFormat() {
        return format;
    }

    public String getType() {
        return type;
    }

    public String getCryption() {
        return cryption;
    }

    public String getPaging() {
        return paging;
    }
}

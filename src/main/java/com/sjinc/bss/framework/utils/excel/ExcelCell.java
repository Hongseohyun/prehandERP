package com.sjinc.bss.framework.utils.excel;

import org.w3c.dom.Element;
import org.w3c.dom.Node;

public class ExcelCell {

    private String value = "";
    private String bgColor = "";
    private String textColor = "";
    private String bold = "";
    private String italic = "";
    private String align = "";
    private String sort = "";
    private String format = "";
    private String cryption = "";
    private String paging = "";

    public void parse(Node parent) {
        //(REV)we may have empty cell, which will return null for getFirstChild
        value = (parent.getFirstChild() == null) ? "" : parent.getFirstChild().getNodeValue();

        Element el = (Element) parent;
        bgColor = (el.hasAttribute("bgColor")) ? el.getAttribute("bgColor") : "";
        textColor = (el.hasAttribute("textColor")) ? el.getAttribute("textColor") : "";
        bold = (el.hasAttribute("bold")) ? el.getAttribute("bold") : "";
        italic = (el.hasAttribute("italic")) ? el.getAttribute("italic") : "";
        align = (el.hasAttribute("align")) ? el.getAttribute("align") : "";
        sort = (el.hasAttribute("sort")) ? el.getAttribute("sort") : "";
        format = (el.hasAttribute("format")) ? el.getAttribute("format") : "";
        cryption = (el.hasAttribute("cryption")) ? el.getAttribute("cryption") : "";
        paging = (el.hasAttribute("paging")) ? el.getAttribute("paging") : "";
    }

    public String getValue() {
        return value;
    }

    public String getBgColor() {
        return bgColor;
    }

    public String getTextColor() {
        return textColor;
    }

    public Boolean getBold() { //(REV)why we store string , and not boolean?
        boolean rst = false;

        if ("bold".equals(bold))
            rst = true;
        else
            rst = false;

        return rst;
    }

    public Boolean getItalic() { //(REV)why we store string , and not boolean?
        boolean rst = false;

        if ("italic".equals(italic))
            rst = true;
        else
            rst = false;

        return rst;
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

    public String getCryptions() {
        return cryption;
    }

    public String getPaging() {
        return paging;
    }
}
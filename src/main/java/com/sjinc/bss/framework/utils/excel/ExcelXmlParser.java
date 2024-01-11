package com.sjinc.bss.framework.utils.excel;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;
import java.io.IOException;
import java.io.StringReader;


public class ExcelXmlParser {
    private Element root;
    private ExcelRow[] rows;
    private int[] widths;
    private Boolean header = false;
    private Boolean footer = false;
    private Boolean without_header = false;
    private String profile = "gray";
    private static final Logger logger = LoggerFactory.getLogger(ExcelXmlParser.class);

    public void setXML(String xml)
            throws IOException, ParserConfigurationException, SAXException {
        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        DocumentBuilder db = dbf.newDocumentBuilder();

        Document dom = null;
        try {
            dom = db.parse(new InputSource(new StringReader(xml)));
        } catch (SAXException se) {
            logger.info(se.getMessage());
        } catch (IOException ioe) {
            logger.info(ioe.getMessage());
        }

        if (dom != null) {
            root = dom.getDocumentElement();

            String headerText = root.getAttribute("header");
            if ((headerText != null) && (headerText.equalsIgnoreCase("true"))) {
                header = true;
            }
            String footerText = root.getAttribute("footer");
            if ((footerText != null) && (footerText.equalsIgnoreCase("true"))) {
                footer = true;
            }
            String profileText = root.getAttribute("profile");
            if (profileText != null) {
                profile = profileText;
            }
            String wHeader = root.getAttribute("without_header");
            if ((wHeader != null) && (wHeader.equalsIgnoreCase("true")))
                without_header = true;
        }
    }

    public ExcelColumn[][] getColumnsInfo(String mode) {
        ExcelColumn[] colLine = null;
        ExcelColumn[][] columns = null;

        XPathFactory xpathFactory = XPathFactory.newInstance();
        XPath xpath = xpathFactory.newXPath();
        try {
            String path = "/rows/".concat(mode).concat("/columns");
            NodeList n1 = (NodeList) xpath.evaluate(path, root,
                    XPathConstants.NODESET);

            if ((n1 != null) && (n1.getLength() > 0)) {

                columns = new ExcelColumn[n1.getLength()][];
                for (int i = 0; i < n1.getLength(); i++) {
                    Element cols = (Element) n1.item(i);
                    NodeList n2 = cols.getElementsByTagName("column");
                    if ((n2 != null) && (n2.getLength() > 0)) {
                        colLine = new ExcelColumn[n2.getLength()];
                        for (int j = 0; j < n2.getLength(); j++) {
                            Element colXml = (Element) n2.item(j);
                            ExcelColumn col = new ExcelColumn();
                            col.parse(colXml);
                            colLine[j] = col;
                        }
                    }
                    columns[i] = colLine;
                }
            } else {
                return columns;
            }
        } catch (XPathExpressionException e) {
            logger.info(e.getMessage());
        }

        if (columns != null) {
            createWidthsArray(columns);
            columns = optimizeColumns(columns);
        }
        return columns;
    }

    private void createWidthsArray(ExcelColumn[][] columns) {
        widths = new int[columns[0].length];
        for (int i = 0; i < columns[0].length; i++) {
            widths[i] = columns[0][i].getWidth();
        }
    }

    private ExcelColumn[][] optimizeColumns(ExcelColumn[][] columns) {
        for (int i = 1; i < columns.length; i++) {
            for (int j = 0; j < columns[i].length; j++) {
                columns[i][j].setWidth(columns[0][j].getWidth());
            }
        }
        for (int i = 0; i < columns.length; i++) {
            for (int j = 0; j < columns[i].length; j++) {
                if (columns[i][j].getColspan() > 0) {
                    for (int k = j + 1; k < j + columns[i][j].getColspan(); k++) {
                        columns[i][j].setWidth(columns[i][j].getWidth() + columns[i][k].getWidth());
                        columns[i][k].setWidth(0);
                    }
                }
                if (columns[i][j].getRowspan() > 0) {
                    for (int k = i + 1; k < i + columns[i][j].getRowspan(); k++) {
                        columns[i][j].setHeight(columns[i][j].getHeight() + 1);
                        columns[k][j].setHeight(0);
                    }
                }
            }
        }
        return columns;
    }

    public ExcelRow[] getGridContent() {
        NodeList nodes = root.getElementsByTagName("row");
        if ((nodes != null) && (nodes.getLength() > 0)) {
            rows = new ExcelRow[nodes.getLength()];
            for (int i = 0; i < nodes.getLength(); i++) {
                rows[i] = new ExcelRow();
                rows[i].parse(nodes.item(i));
            }
        }
        return rows == null ? null : rows.clone();
    }

    public int[] getWidths() {
        return (int[]) widths.clone();
    }

    public boolean getHeader() {
        return header;
    }

    public Boolean getFooter() {
        return footer;
    }

    public String getProfile() {
        return profile;
    }

    public boolean getWithoutHeader() {
        return without_header;
    }

}
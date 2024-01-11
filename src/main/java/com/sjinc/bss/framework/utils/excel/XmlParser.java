package com.sjinc.bss.framework.utils.excel;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.*;
import org.xml.sax.InputSource;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.File;
import java.io.InputStream;
import java.io.StringReader;
import java.util.ArrayList;

public class XmlParser {
    private final DocumentBuilderFactory dbFactory;
    private final DocumentBuilder dBuilder;
    private Document document;
    private final static String MSG = "Child TagName not Found tag [";
    private static final Logger logger = LoggerFactory.getLogger(XmlParser.class);
//    private TransformerFactory tFactory;
//    private Transformer transformer;

    public XmlParser() throws Exception {

        dbFactory = DocumentBuilderFactory.newInstance();
        dBuilder = dbFactory.newDocumentBuilder();
        document = null;
//        tFactory = TransformerFactory.newInstance();
//        transformer = tFactory.newTransformer();
    }

    public void domLoad(InputStream in) throws Exception {
        document = dBuilder.parse(in);
    }

    public void domLoad(String xmlPath) throws Exception {
        document = dBuilder.parse(new File(xmlPath));
    }

    public void domParse(String xmlString) throws Exception {
        StringReader sr = new StringReader(xmlString);
        InputSource is = new InputSource(sr);

        document = dBuilder.parse(is);
    }

    public NodeList getNodeList(String tagName) {
        return document.getDocumentElement().getElementsByTagName(tagName);

    }

    public NodeList getNodeList(Element element, String sTagName) {
        return element.getElementsByTagName(sTagName);

    }

    public NodeList getNodeList(String pTagName, String sTagName) {
        NodeList pNodeList = getNodeList(pTagName);

        if ((pNodeList == null) || (pNodeList.getLength() == 0)) {
            throw new DOMException(DOMException.NOT_FOUND_ERR, MSG + pTagName + "]");
        }

        return getNodeList((Element) pNodeList.item(0), sTagName);

    }

    public Node getNode(String tagName) {
        Node rNode = null;

        NodeList list = getNodeList(tagName);

        if (list != null && list.getLength() > 0)
            rNode = list.item(0);

        return rNode;

    }

    public Node getNode(Element element, String sTagName) {
        NodeList nodeList = getNodeList(element, sTagName);

        if ((nodeList == null) || (nodeList.getLength() == 0)) {
            throw new DOMException(DOMException.NOT_FOUND_ERR, MSG + sTagName + "]");
        }

        return nodeList.item(0);
    }

    public Node getNode(String pTagName, String sTagName) {
        NodeList nodeList = getNodeList(pTagName, sTagName);

        if ((nodeList == null) || (nodeList.getLength() == 0)) {
            throw new DOMException(DOMException.NOT_FOUND_ERR, MSG + sTagName + "]");
        }

        return nodeList.item(0);
    }

    public Node getNode(String sTagName, String sAttName, String sAttValue) {
        NodeList listNode = getNodeList(sTagName);

        Node findNode = null;
        Node curNode = null;
        Node curAttNode = null;
        NamedNodeMap curNameNode = null;

        for (int i = 0; i < listNode.getLength(); i++) {
            curNode = listNode.item(i);
            curNameNode = curNode.getAttributes();

            if (curNameNode == null)
                continue;

            curAttNode = curNameNode.getNamedItem(sAttName);
            if (curAttNode == null)
                continue;

            if (curAttNode.getNodeValue().equals(sAttValue)) {
                findNode = curNode;
                break;
            }
        }

        if (findNode == null) {
            throw new DOMException(DOMException.NOT_FOUND_ERR, MSG + sTagName + "]");
        }

        return findNode;
    }

    public Node getNode(Element element, String sTagName, String sAttName, String sAttValue) {
        NodeList listNode = getNodeList(element, sTagName);

        if ((listNode == null) || (listNode.getLength() == 0)) {
            throw new DOMException(DOMException.NOT_FOUND_ERR, MSG + sTagName + "]");
        }

        Node findNode = null;
        Node curNode = null;
        Node curAttNode = null;
        NamedNodeMap curNameNode = null;

        for (int i = 0; i < listNode.getLength(); i++) {
            curNode = listNode.item(i);
            curNameNode = curNode.getAttributes();

            if (curNameNode == null)
                continue;

            curAttNode = curNameNode.getNamedItem(sAttName);
            if (curAttNode == null)
                continue;

            if (curAttNode.getNodeValue().equals(sAttValue)) {
                findNode = curNode;
                break;
            }
        }

        if (findNode == null) {
            throw new DOMException(DOMException.NOT_FOUND_ERR, MSG + sTagName + "]");
        }

        return findNode;
    }

    public Node getNode(String pTagName, String sTagName, String sAttName, String sAttValue) {
        NodeList listNode = getNodeList(pTagName, sTagName);

        if ((listNode == null) || (listNode.getLength() == 0)) {
            throw new DOMException(DOMException.NOT_FOUND_ERR, MSG + sTagName + "]");
        }

        Node findNode = null;
        Node curNode = null;
        Node curAttNode = null;
        NamedNodeMap curNameNode = null;

        for (int i = 0; i < listNode.getLength(); i++) {
            curNode = listNode.item(i);
            curNameNode = curNode.getAttributes();

            if (curNameNode == null)
                continue;

            curAttNode = curNameNode.getNamedItem(sAttName);
            if (curAttNode == null)
                continue;

            if (curAttNode.getNodeValue().equals(sAttValue)) {
                findNode = curNode;
                break;
            }
        }

        if (findNode == null) {
            throw new DOMException(DOMException.NOT_FOUND_ERR, MSG + sTagName + "]");
        }

        return findNode;
    }

    public String readAttribute(String sTagName, String sAttName) {
        String sValue = null;
        try {
            Node curNode = getNode(sTagName);
            NamedNodeMap curNameNode = curNode.getAttributes();
            if ((curNameNode == null) || (curNameNode.getLength() == 0))
                return null;
            Node curAttNode = curNameNode.getNamedItem(sAttName);
            if (curAttNode != null)
                sValue = curAttNode.getNodeValue();
        } catch (Exception e) {
            logger.info(e.getMessage());
        }
        return sValue;
    }

    public String readAttribute(String sParent, String sTagName, String sAttName) {
        String sValue = null;
        try {
            Node curNode = getNode(sParent, sTagName);
            NamedNodeMap curNameNode = curNode.getAttributes();
            if ((curNameNode == null) || (curNameNode.getLength() == 0))
                return null;
            Node curAttNode = curNameNode.getNamedItem(sAttName);
            if (curAttNode != null)
                sValue = curAttNode.getNodeValue();
        } catch (Exception e) {
            logger.info(e.getMessage());
        }
        return sValue;
    }

    public String read(Node node) {
        String sValue = null;
        try {
            Node textNode = node.getFirstChild();

            if (textNode != null)
                sValue = textNode.getNodeValue();
        } catch (Exception e) {
            logger.info(e.getMessage());
        }

        return sValue;
    }

    public String readCDATA(Node node) {
        String sValue = null;
        try {
            NodeList listChildNode = node.getChildNodes();
            if ((listChildNode == null) || (listChildNode.getLength() == 0))
                return null;
            Node dataNode = null;
            Node findNode = null;
            for (int i = 0; i < listChildNode.getLength(); i++) {
                dataNode = listChildNode.item(i);
                if (dataNode.getNodeType() == Node.CDATA_SECTION_NODE) {
                    findNode = dataNode;
                    break;
                }
            }
            if (findNode != null)
                sValue = findNode.getNodeValue();
        } catch (Exception e) {
            logger.info(e.getMessage());
        }
        return sValue;
    }

    public ArrayList readAll(String sTagName) {
        ArrayList lstTag = new ArrayList();
        try {
            Node rootNode = getNode(sTagName);
            readTagAll(rootNode, lstTag, "");

            // String[] saTag = null;
            // String sName, sValue;
            //
            // for (int i = 0; i < lstTag.size(); i++)
            // saTag = (String[]) lstTag.get(i);
        } catch (Exception e) {
            logger.info(e.getMessage());
        }

        return lstTag;
    }

    private void readTagAll(Node oNode, ArrayList lstTag, String sTagName) {
        NodeList listCurNode = oNode.getChildNodes();

        if ((listCurNode == null) || (listCurNode.getLength() == 0)) {
            return;
        }

        Node dataNode = null;
        // Node childNode = null;

        if (listCurNode.getLength() == 1) {
            dataNode = listCurNode.item(0);

            String[] saTag = new String[2];
            saTag[0] = sTagName;
            saTag[1] = dataNode.getNodeValue();

            if (oNode.hasAttributes()) {
                NamedNodeMap oMap = oNode.getAttributes();
                Node attNode = oMap.getNamedItem("compid");

                saTag[0] = saTag[0].concat("[").concat(attNode.getNodeValue()).concat("]");
            }

            lstTag.add(saTag);
        } else {
            if (sTagName.length() != 0)
                sTagName = sTagName.concat(".");

            for (int k = 0; k < listCurNode.getLength(); k++) {
                dataNode = listCurNode.item(k);
                if (dataNode.getNodeType() != Node.ELEMENT_NODE)
                    continue;

                readTagAll(dataNode, lstTag, sTagName + dataNode.getNodeName());
            }
        }
    }

    // ////////////////////////////////////////////////////////////////////////
    // Node Reading Part - END
    // ////////////////////////////////////////////////////////////////////////

    // ////////////////////////////////////////////////////////////////////////
    // Node Handling Part - START
    // ////////////////////////////////////////////////////////////////////////

    public boolean importNode(String sTagName, Node node) {
        NodeList nlElements = document.getElementsByTagName(sTagName);

        if (nlElements == null || nlElements.getLength() == 0 || node == null) {
            return false;
        }

        Node target = nlElements.item(0);
        Node newNode = document.importNode(node, true);
        target.appendChild(newNode);

        return true;
    }

    public boolean importNode(Node orgNode, Node addNode) {
        Node newNode = document.importNode(addNode, true);
        orgNode.appendChild(newNode);

        return true;
    }

    public Element makeNode(String sTagName, String sValue) {
        Element oElement = document.createElement(sTagName);
        oElement.appendChild(document.createTextNode(sValue));

        return oElement;
    }

    // ////////////////////////////////////////////////////////////////////////
    // Node Handling Part - END
    // ////////////////////////////////////////////////////////////////////////
}

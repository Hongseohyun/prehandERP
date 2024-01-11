package com.sjinc.bss.framework.utils.excel;

import com.sjinc.bss.framework.FrameBRCryptlib;
import com.sjinc.bss.framework.FrameConstants;
import com.sjinc.bss.framework.FrameStringUtil;
import com.sjinc.bss.framework.helper.WebServiceHelper;
import com.sjinc.bss.framework.model.base.BaseMapParmVo;
import jxl.Workbook;
import jxl.write.Number;
import jxl.write.*;
import jxl.write.biff.RowsExceededException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.crypto.Data;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.Method;
import java.net.URLEncoder;
import java.util.Iterator;
import java.util.List;
import java.util.Set;


public class ExcelWriter extends BaseWriter {
    private WritableWorkbook wb;
    private WritableSheet sheet;
    private ExcelColumn[][] cols;
    private int colsNumber = 0;
    private ExcelXmlParser parser;

    private static final String ZERO6 = "000000";

    private int headerOffset = 0;
    private int scale = 6;
    private String pathToImgs = "";//optional, physical path
    private int fontSize = 10;

    String bgColor = "";
    String lineColor = "";
    String headerTextColor = "";
    String scaleOneColor = "";
    String scaleTwoColor = "";
    String gridTextColor = "";
    String watermarkTextColor = "";

    private int cols_stat;
    private int rows_stat;
    RGBColor colors;
    private String watermark = null;

    private static final Logger logger = LoggerFactory.getLogger(ExcelWriter.class);

    public void generate(String xml, HttpServletResponse resp, String fileName) {
        parser = new ExcelXmlParser();
        try {
            parser.setXML(xml);
            createExcel(resp);
            setColorProfile();
            headerPrint(parser);
            rowsPrint(parser);
            footerPrint(parser);
            insertHeader(parser);
            insertFooter(parser);
            watermarkPrint(parser);
            outputExcel(resp, fileName);
        } catch (Throwable e) {
            logger.info(e.getMessage());
        }
    }

    public void generate(String xml, ByteArrayOutputStream resp, String fileName) {
        parser = new ExcelXmlParser();

        try {
            parser.setXML(xml);
            createExcel(resp);
            setColorProfile();
            headerPrint(parser);
            rowsPrint(parser);
            footerPrint(parser);
            insertHeader(parser);
            insertFooter(parser);
            watermarkPrint(parser);
            outputExcel(resp, fileName);
        } catch (Throwable e) {
            logger.info(e.getMessage());
        }
    }

    public void generate(String xml, ByteArrayOutputStream resp, int sheetpage) {
        parser = new ExcelXmlParser();

        try {
            parser.setXML(xml);

            if (sheetpage == 0) {
                createWorkbook(resp);
                setColorProfile();
            }
            createSheet(sheetpage);
            headerPrint(parser);
            rowsPrint(parser);
            footerPrint(parser);
            insertHeader(parser);
            insertFooter(parser);
            watermarkPrint(parser);
        } catch (Throwable e) {
            logger.info(e.getMessage());
        }
    }

    public void generate(String xml, HttpServletResponse resp, int sheetpage) {
        parser = new ExcelXmlParser();

        try {
            parser.setXML(xml);

            if (sheetpage == 0) {
                createWorkbook(resp);
                setColorProfile();
            }
            createSheet(sheetpage);
            headerPrint(parser);
            rowsPrint(parser);
            footerPrint(parser);
            insertHeader(parser);
            insertFooter(parser);
            watermarkPrint(parser);
        } catch (Throwable e) {
            logger.info(e.getMessage());
        }
    }

    public void generate(ByteArrayOutputStream buffer, String fileName, String bigmth, HttpServletRequest request, BaseMapParmVo param, String[] columns) {

        try {

            if (!bigmth.isEmpty() && bigmth.indexOf('.') != -1) {
                //1.define variable
                String sClassNm = bigmth.substring(0, bigmth.lastIndexOf('.'));
                String sMethodNm = bigmth.substring(bigmth.lastIndexOf('.') + 1);
                String sRowcountperpage = "50000"; //Global.getSystemEnv("#", "ES004").getSTDVAL(); //sheet별 ROW 개수
                String sMaxRowcount = "100000"; //Global.getSystemEnv("#", "ES005").getSTDVAL(); //최대 다운로드 ROW개수
                StringBuffer sb = new StringBuffer();
                StringBuffer sbHeader = new StringBuffer();
                String[] aHeader = null;
                String openTag = "<rows profile=\"color\">";
                String closeTag = "</rows>";

                int iCurrentpage = 1;
                int iTotalpagecount = 2;

                //2.define class and method
                ServletContext ctx = request.getSession().getServletContext();
                String classNm = Character.toLowerCase(sClassNm.charAt(0)) + sClassNm.substring(1);
                Object obj = WebServiceHelper.getService(ctx, classNm);

                Method m = null;

                try {
                    m = obj.getClass().getMethod(sMethodNm, Data.class);
                } catch (Exception e) {
                    // TODO: handle exception
                    m = obj.getClass().getMethod(sMethodNm, HttpServletRequest.class, Data.class);
                }

                //3.header generator
                if (columns != null && columns.length > 0) {
                    aHeader = new String[columns.length];
                    sbHeader.append("<head><columns>");

                    for (int i = 0, iLen = columns.length; i < iLen; i++) {
                        BaseMapParmVo hmVO = new BaseMapParmVo(columns[i]);
                        sbHeader.append("<column width=\"").append(FrameStringUtil.isNullDefaultValue(hmVO.get("width").toString(), "100"))
                                .append("\" paging=\"").append(FrameStringUtil.isNullDefaultValue(hmVO.get("paging").toString(), ""))
                                .append("\" cryption=\"").append(FrameStringUtil.isNullDefaultValue(hmVO.get("cryption").toString(), ""))
                                .append("\" align=\"").append(FrameStringUtil.isNullDefaultValue(hmVO.get("align").toString(), "left"))
                                .append("\" sort=\"").append(FrameStringUtil.isNullDefaultValue(hmVO.get("sort").toString(), "string"))
                                .append("\" format=\"").append(FrameStringUtil.isNullDefaultValue(hmVO.get("format").toString(), ""))
                                .append("\"><![CDATA[").append(hmVO.get("header").toString()).append("]]></column>");
                        aHeader[i] = hmVO.get("id").toString();
                    }

                    sbHeader.append("</columns></head>");
                } else {
                    openTag = "<rows profile=\"color\" without_header=\"true\">";
                }

                //4.body generator
                while (iTotalpagecount >= iCurrentpage) {
                    param.put("ROWCOUNTPERPAGE", sRowcountperpage);
                    param.put("CURRENTPAGE", String.valueOf(iCurrentpage));

                    BaseMapParmVo hashMapVO = null;
//					Object obj = null;

                    try {
                        hashMapVO = (BaseMapParmVo) m.invoke(obj, param);
                    } catch (Exception e) {
                        // TODO: handle exception
                        hashMapVO = (BaseMapParmVo) m.invoke(obj, request, param);
                    }

                    if (Integer.parseInt(hashMapVO.get("TOTALROWCOUNT").toString()) > Integer.parseInt(sMaxRowcount)) {
                        sb.append("<row id=\"0\" level=\"0\">");
                        sb.append("<cell><![CDATA[" + sMaxRowcount + "건 이상의 데이터는 다운받을 수 없습니다.]]></cell>");
                        sb.append("</row>");
                    } else {
                        List<BaseMapParmVo> dList = (List<BaseMapParmVo>) hashMapVO.get("LIST");

                        sb.delete(0, sb.length());
                        if (dList != null && !dList.isEmpty()) {
                            //aHeader가 없을경우 리스트의 헤드정보로 대체
                            if (aHeader == null || aHeader.length < 1) {
                                BaseMapParmVo hmVO = dList.get(0);
                                Set<String> keySet = hmVO.keySet();
                                Iterator<String> iterator = keySet.iterator();

                                aHeader = new String[keySet.size()];
                                int i = 0;
                                while (iterator.hasNext()) {
                                    String key = iterator.next();
                                    aHeader[i++] = key;
                                }
                            }

                            for (int i = 0, iLen = dList.size(); i < iLen; i++) {
                                sb.append("<row id=\"").append(i).append("\" level=\"0\">");
                                for (int j = 0, jLen = aHeader.length; j < jLen; j++) {
                                    sb.append("<cell><![CDATA[").append(dList.get(i).get(aHeader[j])).append("]]></cell>");
                                }
                                sb.append("</row>");
                            }
                        }

                    }


                    //System.out.println("EXCELWRITER ROWCOUNTPERPAGE :: "+sRowcountperpage+", TOTALROWCOUNT :: "+hashMapVO.get("TOTALROWCOUNT")+", CURRENTPAGE :: "+iCurrentpage+", TOTALPAGECOUNT :: "+hashMapVO.get("TOTALPAGECOUNT"));
                    generate(openTag + sbHeader.toString() + sb.toString().replaceAll("&nbsp;", " ") + closeTag, buffer, (iCurrentpage - 1));

                    iTotalpagecount = Integer.parseInt(hashMapVO.get("TOTALPAGECOUNT").toString());
                    param.put("ISCHG", "N");
                    iCurrentpage++;

                }

                outputExcel(buffer, "");
            }


        } catch (RuntimeException e) {
            throw e;
        } catch (Exception e) {
            logger.info(e.getMessage());
        }
    }

    public void generate(HttpServletResponse resp, String fileName, String bigmth, HttpServletRequest request, BaseMapParmVo param, String[] columns) {

        try {

            if (!bigmth.isEmpty() && bigmth.indexOf('.') != -1) {
                //1.define variable
                String sClassNm = bigmth.substring(0, bigmth.lastIndexOf('.'));
                String sMethodNm = bigmth.substring(bigmth.lastIndexOf('.') + 1);
                String sRowcountperpage = "50000"; //Global.getSystemEnv("RSM", "ES004").getSTDVAL(); //sheet별 ROW 개수
                String sMaxRowcount = "100000"; //Global.getSystemEnv("RSM", "ES005").getSTDVAL(); //최대 다운로드 ROW개수
                StringBuffer sb = new StringBuffer();
                StringBuffer sbHeader = new StringBuffer();
                String[] aHeader = null;
                String openTag = "<rows profile=\"color\">";
                String closeTag = "</rows>";

                int iCurrentpage = 1;
                int iTotalpagecount = 2;

                //2.define class and method
                ServletContext ctx = request.getSession().getServletContext();
                String classNm = Character.toLowerCase(sClassNm.charAt(0)) + sClassNm.substring(1);
                Object obj = WebServiceHelper.getService(ctx, classNm);

                Method m = null;

                try {
                    m = obj.getClass().getMethod(sMethodNm, Data.class);
                } catch (Exception e) {
                    // TODO: handle exception
                    m = obj.getClass().getMethod(sMethodNm, HttpServletRequest.class, Data.class);
                }

                //3.header generator
                if (columns != null && columns.length > 0) {
                    aHeader = new String[columns.length];
                    sbHeader.append("<head><columns>");

                    for (int i = 0, iLen = columns.length; i < iLen; i++) {
                        BaseMapParmVo hmVO = new BaseMapParmVo(columns[i]);
                        sbHeader.append("<column width=\"").append(FrameStringUtil.isNullDefaultValue(hmVO.get("width").toString(), "100"))
                                .append("\" paging=\"").append(FrameStringUtil.isNullDefaultValue(hmVO.get("paging").toString(), ""))
                                .append("\" cryption=\"").append(FrameStringUtil.isNullDefaultValue(hmVO.get("cryption").toString(), ""))
                                .append("\" align=\"").append(FrameStringUtil.isNullDefaultValue(hmVO.get("align").toString(), "left"))
                                .append("\" sort=\"").append(FrameStringUtil.isNullDefaultValue(hmVO.get("sort").toString(), "string"))
                                .append("\" format=\"").append(FrameStringUtil.isNullDefaultValue(hmVO.get("format").toString(), ""))
                                .append("\"><![CDATA[").append(hmVO.get("header").toString()).append("]]></column>");
                        aHeader[i] = hmVO.get("id").toString();
                    }

                    sbHeader.append("</columns></head>");
                } else {
                    openTag = "<rows profile=\"color\" without_header=\"true\">";
                }

                //4.body generator
                while (iTotalpagecount >= iCurrentpage) {
                    param.put("ROWCOUNTPERPAGE", sRowcountperpage);
                    param.put("CURRENTPAGE", String.valueOf(iCurrentpage));

                    BaseMapParmVo hashMapVO = null;
//					Object obj = null;

                    try {
                        hashMapVO = (BaseMapParmVo) m.invoke(obj, param);
                    } catch (Exception e) {
                        // TODO: handle exception
                        hashMapVO = (BaseMapParmVo) m.invoke(obj, request, param);
                    }

                    if (Integer.parseInt(hashMapVO.get("TOTALROWCOUNT").toString()) > Integer.parseInt(sMaxRowcount)) {
                        sb.append("<row id=\"0\" level=\"0\">");
                        sb.append("<cell><![CDATA[" + sMaxRowcount + "건 이상의 데이터는 다운받을 수 없습니다.]]></cell>");
                        sb.append("</row>");
                    } else {
                        List<BaseMapParmVo> dList = (List<BaseMapParmVo>) hashMapVO.get("LIST");

                        sb.delete(0, sb.length());
                        if (dList != null && !dList.isEmpty()) {
                            //aHeader가 없을경우 리스트의 헤드정보로 대체
                            if (aHeader == null || aHeader.length < 1) {
                                BaseMapParmVo hmVO = dList.get(0);
                                Set<String> keySet = hmVO.keySet();
                                Iterator<String> iterator = keySet.iterator();

                                aHeader = new String[keySet.size()];
                                int i = 0;
                                while (iterator.hasNext()) {
                                    String key = iterator.next();
                                    aHeader[i++] = key;
                                }
                            }

                            for (int i = 0, iLen = dList.size(); i < iLen; i++) {
                                sb.append("<row id=\"").append(i).append("\" level=\"0\">");
                                for (int j = 0, jLen = aHeader.length; j < jLen; j++) {
                                    sb.append("<cell><![CDATA[").append(dList.get(i).get(aHeader[j])).append("]]></cell>");
                                }
                                sb.append("</row>");
                            }
                        }

                    }


                    //System.out.println("EXCELWRITER ROWCOUNTPERPAGE :: "+sRowcountperpage+", TOTALROWCOUNT :: "+hashMapVO.get("TOTALROWCOUNT")+", CURRENTPAGE :: "+iCurrentpage+", TOTALPAGECOUNT :: "+hashMapVO.get("TOTALPAGECOUNT"));
                    generate(openTag + sbHeader.toString() + sb.toString().replaceAll("&nbsp;", " ") + closeTag, resp, (iCurrentpage - 1));

                    iTotalpagecount = Integer.parseInt(hashMapVO.get("TOTALPAGECOUNT").toString());
                    param.put("ISCHG", "N");
                    iCurrentpage++;

                }

                outputExcel(resp, fileName);
            }


        } catch (RuntimeException e) {
            throw e;
        } catch (Exception e) {
            logger.info(e.getMessage());
        }
    }

    public void generate(String xml, HttpServletResponse resp) {
        generate(xml, resp, "grid.xls");
    }

    private void createExcel(HttpServletResponse resp) throws IOException {
        /* Save generated excel to file.
         * Can be useful for debug output.
         * */
		/*
		FileOutputStream fos = new FileOutputStream("d:/test.xls");
		wb = Workbook.createWorkbook(fos);
		*/
        wb = Workbook.createWorkbook(resp.getOutputStream());
        sheet = wb.createSheet("First Sheet", 0);
        colors = new RGBColor();
    }

    private void createExcel(ByteArrayOutputStream resp) throws IOException {
        /* Save generated excel to file.
         * Can be useful for debug output.
         * */
		/*
		FileOutputStream fos = new FileOutputStream("d:/test.xls");
		wb = Workbook.createWorkbook(fos);
		 */
        wb = Workbook.createWorkbook(resp);
        sheet = wb.createSheet("First Sheet", 0);
        colors = new RGBColor();
    }

    private void createWorkbook(ByteArrayOutputStream resp) throws IOException {
        wb = Workbook.createWorkbook(resp);
        colors = new RGBColor();
    }

    private void createWorkbook(HttpServletResponse resp) throws IOException {
        wb = Workbook.createWorkbook(resp.getOutputStream());
        colors = new RGBColor();
    }

    private void createSheet(int position) throws IOException {
        sheet = wb.createSheet("sheet" + position, position);
    }

    private void outputExcel(HttpServletResponse resp, String fileName) throws IOException, WriteException {
        resp.setHeader("Content-Type", "application/vnd.ms-excel;charset=UTF-8");
        resp.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(fileName,"UTF-8").replaceAll("\\+", "%20"));
        resp.setHeader("Content-Transfer-Encoding", "binary;");
        resp.setHeader("Pragma", "no-cache;");
        resp.setHeader("Expires", "-1;");


        wb.write();
        wb.close();
    }

    private void outputExcel(ByteArrayOutputStream resp, String fileName) throws IOException, WriteException {
        //resp.setContentType("application/vnd.ms-excel");
        //resp.setCharacterEncoding("UTF-8");
        //resp.setHeader("Content-Disposition", "attachment;filename=" + fileName);
        //resp.setHeader("Cache-Control", "max-age=0");
        wb.write();
        wb.close();
    }

    private void headerPrint(ExcelXmlParser parser) throws WriteException {
        cols = parser.getColumnsInfo("head");

        int widths[] = parser.getWidths();
        this.cols_stat = (widths.length == 0) ? 0 : widths.length;

//		int sumWidth = 0;
//		for (int i = 0; i < widths.length; i++) {
//			sumWidth += widths[i];
//		}

        if (parser.getWithoutHeader()) {
            for (int i = 0; i < cols.length; i++) {
                sheet.setRowView(i, 450);
                sheet.getSettings().setVerticalFreeze(i + 1);
                for (int j = 0; j < cols[i].length; j++) {
                    sheet.setColumnView(j, widths[j] / scale);
                    WritableFont font = new WritableFont(WritableFont.ARIAL, fontSize - 1, WritableFont.BOLD);
                    font.setColour(colors.getColor(headerTextColor, wb));
                    WritableCellFormat f = new WritableCellFormat(font);
                    f.setBackground(colors.getColor(bgColor, wb));
                    f.setBorder(Border.ALL, BorderLineStyle.THIN, colors.getColor(lineColor, wb));
                    f.setVerticalAlignment(VerticalAlignment.CENTRE);

                    f.setAlignment(Alignment.CENTRE);
                    String name = cols[i][j].getName();
                    Label label = new Label(j, i, name, f);
                    sheet.addCell(label);
                    colsNumber = j;
                }
            }
            headerOffset = cols.length;
            for (int i = 0; i < cols.length; i++) {
                for (int j = 0; j < cols[i].length; j++) {
                    int cspan = cols[i][j].getColspan();
                    if (cspan > 0) {
                        sheet.mergeCells(j, i, j + cspan - 1, i);
                    }
                    int rspan = cols[i][j].getRowspan();
                    if (rspan > 0) {
                        sheet.mergeCells(j, i, j, i + rspan - 1);
                    }
                }
            }
        }
    }

    private void footerPrint(ExcelXmlParser parser) throws WriteException {
        cols = parser.getColumnsInfo("foot");
        if (cols == null) return;
        if (parser.getWithoutHeader()) {
            for (int i = 0; i < cols.length; i++) {
                sheet.setRowView(i + headerOffset, 450);
                for (int j = 0; j < cols[i].length; j++) {
                    WritableFont font = new WritableFont(WritableFont.ARIAL, fontSize, WritableFont.BOLD);
                    font.setColour(colors.getColor(headerTextColor, wb));
                    WritableCellFormat f = new WritableCellFormat(font);
                    f.setBackground(colors.getColor(bgColor, wb));
                    f.setBorder(Border.ALL, BorderLineStyle.THIN, colors.getColor(lineColor, wb));
                    f.setVerticalAlignment(VerticalAlignment.CENTRE);

                    f.setAlignment(Alignment.CENTRE);
                    String name = cols[i][j].getName();
                    Label label = new Label(j, i + headerOffset, name, f);
                    sheet.addCell(label);
                }
            }
            for (int i = 0; i < cols.length; i++) {
                for (int j = 0; j < cols[i].length; j++) {
                    int cspan = cols[i][j].getColspan();
                    if (cspan > 0) {
                        sheet.mergeCells(j, headerOffset + i, j + cspan - 1, headerOffset + i);
                    }
                    int rspan = cols[i][j].getRowspan();
                    if (rspan > 0) {
                        sheet.mergeCells(j, headerOffset + i, j, headerOffset + i + rspan - 1);
                    }
                }
            }
        }
        headerOffset += cols.length;
    }

    private void watermarkPrint(ExcelXmlParser parser) throws WriteException {
        if (watermark == null) return;

        WritableFont font = new WritableFont(WritableFont.ARIAL, fontSize, WritableFont.BOLD);
        font.setColour(colors.getColor(watermarkTextColor, wb));
        WritableCellFormat f = new WritableCellFormat(font);
        f.setBorder(Border.ALL, BorderLineStyle.THIN, colors.getColor(lineColor, wb));
        f.setVerticalAlignment(VerticalAlignment.CENTRE);

        f.setAlignment(Alignment.CENTRE);
        Label label = new Label(0, headerOffset, watermark, f);
        sheet.addCell(label);
        sheet.mergeCells(0, headerOffset, colsNumber, headerOffset);
    }

    private void rowsPrint(ExcelXmlParser parser) throws WriteException, IOException {
        //do we really need them?
        ExcelRow[] rows = parser.getGridContent();
        if (rows != null) {
            this.rows_stat = rows.length;

            NumberFormat nfFlat = new NumberFormat("#,###.#");
            NumberFormat nfInt = new NumberFormat("#,###");

            for (int i = 0; i < rows.length; i++) {
                ExcelCell[] cells = rows[i].getCells();
                sheet.setRowView(i + headerOffset, 400);
                for (int j = 0; j < cells.length; j++) {
                    // sets cell font
                    WritableFont font = new WritableFont(WritableFont.ARIAL, fontSize, (cells[j].getBold()) ? WritableFont.BOLD : WritableFont.NO_BOLD, (cells[j].getItalic()) ? true : false);
                    if ((!cells[j].getTextColor().equals("")) && (parser.getProfile().equals("full_color")))
                        font.setColour(colors.getColor(cells[j].getTextColor(), wb));
                    else
                        font.setColour(colors.getColor(gridTextColor, wb));
                    WritableCellFormat f = new WritableCellFormat(font);

                    // sets cell background color
                    if ((!cells[j].getBgColor().equals("")) && (parser.getProfile().equals("full_color"))) {
                        jxl.format.Colour col = colors.getColor(cells[j].getBgColor(), wb);
                        f.setBackground(col);
                    } else {
                        JxlColour bg;
                        if (i % 2 != 0) {
                            bg = (JxlColour) colors.getColor(scaleOneColor, wb);
                        } else {
                            bg = (JxlColour) colors.getColor(scaleTwoColor, wb);
                        }
                        f.setBackground(bg);
                    }

                    f.setBorder(Border.ALL, BorderLineStyle.THIN, colors.getColor(lineColor, wb));
                    f.setVerticalAlignment(VerticalAlignment.CENTRE);

                    String al = cells[j].getAlign();

                    String sort = (cols == null) ? "" : (FrameStringUtil.isNullDefaultValue(cols[0][j].getSort(), cells[j].getSort()));
                    String format = (cols == null) ? "" : cols[0][j].getFormat();
                    String cryption = (cols == null) ? "" : cols[0][j].getCryption();
                    String paging = (cols == null) ? "" : cols[0][j].getPaging();

                    String aInfo[] = new String[]{};

                    if (al.isEmpty())
                        al = (cols == null) ? "left" : cols[0][j].getAlign();
                    if (al.equalsIgnoreCase("left")) {
                        f.setAlignment(Alignment.LEFT);
                    } else {
                        if (al.equalsIgnoreCase("right")) {
                            f.setAlignment(Alignment.RIGHT);
                        } else {
                            f.setAlignment(Alignment.CENTRE);
                        }
                    }

                    try {
                        String name = cells[j].getValue();

                        if (name.indexOf("‡‡") != -1) {
                            aInfo = name.substring(name.indexOf("‡‡") + 2).split(",");
                            name = name.substring(0, name.indexOf("‡‡"));
                        }

                        name = ("de".equals(cryption) && "Y".equals(paging)) ? FrameBRCryptlib.recordDecrypt(name, FrameConstants.BRENCRYPTKEY) : name;

                        if (aInfo != null && aInfo.length > 0) {
                            if ("COUPONSTATE".equals(aInfo[0]) && !"CS03".equals(aInfo[1])) { //쿠폰상태 사용중지
                                name = (name.length() > 4) ? name.substring(0, name.length() - 4) + "****" : name;
                            }
                        }

                        //쿠폰번호 뒷 4자리 처리
                        if ("de4".equals(cryption) && (FrameStringUtil.isNullDefaultValue(name, "").length() > 4))
                            name = name.substring(0, (name.length() - 4)) + "****";

                        if ((sort.isEmpty() && name.matches("^[0-9,]*[.]{0,1}[0-9%]+$")) || ("int".equals(sort))) {
                            WritableCellFormat nf;
                            double dName = 0;

                            if (name.indexOf('%') > -1) {
                                nf = new WritableCellFormat((WritableFont) f.getFont(), NumberFormats.PERCENT_FLOAT);
                                nf.setBackground(f.getBackgroundColour());
                                nf.setBorder(Border.ALL, BorderLineStyle.THIN, colors.getColor(lineColor, wb));
                                nf.setVerticalAlignment(VerticalAlignment.CENTRE);
                                nf.setAlignment(Alignment.RIGHT);

                                dName = Double.parseDouble(name.replaceAll(",", "").replaceAll("%", ""));
                                dName = (dName == 0) ? 0 : dName / 100;
                            } else {
                                NumberFormat decimalNo = (name.indexOf('.') > -1) ? nfFlat : nfInt;
                                nf = new WritableCellFormat((WritableFont) f.getFont(), decimalNo);
                                nf.setBackground(f.getBackgroundColour());
                                nf.setBorder(Border.ALL, BorderLineStyle.THIN, colors.getColor(lineColor, wb));
                                nf.setVerticalAlignment(VerticalAlignment.CENTRE);
                                nf.setAlignment(Alignment.RIGHT);

                                dName = Double.parseDouble(name.replaceAll(",", ""));
                            }

                            Number label = new Number(j, i + headerOffset, dName, nf);
                            sheet.addCell(label);

                        } else {

                            if ("telFormat".equals(format)) {
                                name = FrameStringUtil.telFormat(name.replaceAll("\\p{Punct}", ""));
                            }

                            Label label = new Label(j, i + headerOffset, name, f);
                            sheet.addCell(label);
                        }
                    } catch (Exception e) {
                        logger.info(e.getMessage());
                        String name = cells[j].getValue();
                        Label label = new Label(j, i + headerOffset, name, f);
                        sheet.addCell(label);
                    }
                }
            }
            headerOffset += rows.length;
        }
    }

    private void insertHeader(ExcelXmlParser parser) throws IOException, RowsExceededException {
        if (parser.getHeader()) {
            sheet.insertRow(0);
            sheet.setRowView(0, 5000);
            File imgFile = new File(pathToImgs + "/header.png");
            WritableImage img = new WritableImage(0, 0, cols[0].length, 1, imgFile);
            sheet.addImage(img);
            headerOffset++;
        }
    }

    private void insertFooter(ExcelXmlParser parser) throws IOException, RowsExceededException {
        if (parser.getFooter()) {
            sheet.setRowView(headerOffset, 5000);
            File imgFile = new File(pathToImgs + "/footer.png");
            WritableImage img = new WritableImage(0, headerOffset, cols[0].length, 1, imgFile);
            sheet.addImage(img);
        }
    }

    public int getColsStat() {
        return this.cols_stat;
    }

    public int getRowsStat() {
        return this.rows_stat;
    }

    private void setColorProfile() {
        String profile = parser.getProfile();
        if ((profile.equalsIgnoreCase("color")) || profile.equalsIgnoreCase("full_color")) {
            bgColor = "D1E5FE";
            lineColor = "A4BED4";
            headerTextColor = ZERO6;
            scaleOneColor = "FFFFFF";
            scaleTwoColor = "E3EFFF";
            gridTextColor = ZERO6;
            watermarkTextColor = "8b8b8b";
        } else {
            if (profile.equalsIgnoreCase("gray")) {
                bgColor = "E3E3E3";
                lineColor = "B8B8B8";
                headerTextColor = ZERO6;
                scaleOneColor = "FFFFFF";
                scaleTwoColor = "EDEDED";
                gridTextColor = ZERO6;
                watermarkTextColor = "8b8b8b";
            } else {
                bgColor = "FFFFFF";
                lineColor = ZERO6;
                headerTextColor = ZERO6;
                scaleOneColor = "FFFFFF";
                scaleTwoColor = "FFFFFF";
                gridTextColor = ZERO6;
                watermarkTextColor = ZERO6;
            }
        }
    }

    public void setWatermark(String mark) {
        watermark = mark;
    }

    public void setFontSize(int fontsize) {
        this.fontSize = fontsize;
    }
}

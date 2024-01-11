package com.sjinc.bss.framework.utils.excel;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLDecoder;


@SuppressWarnings("serial")
public class ExcelGenerator extends HttpServlet {
    //	private String mode = "csv";
    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String xml = req.getParameter("grid_xml");
        xml = URLDecoder.decode(xml, "UTF-8");
        (new ExcelWriter()).generate(xml, resp);
    }

}
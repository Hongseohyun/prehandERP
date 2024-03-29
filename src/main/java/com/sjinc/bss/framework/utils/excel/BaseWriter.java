package com.sjinc.bss.framework.utils.excel;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public abstract class BaseWriter {
    public abstract void generate(String xml, HttpServletResponse resp) throws IOException;

    public abstract int getColsStat();

    public abstract int getRowsStat();

    public abstract void setWatermark(String watermark);

    public abstract void setFontSize(int fontsize);
}

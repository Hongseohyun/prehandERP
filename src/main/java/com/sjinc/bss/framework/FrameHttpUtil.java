package com.sjinc.bss.framework;


import com.sjinc.bss.framework.model.base.BaseMapParmVo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.FilenameUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.*;

/**
 * 프레임 공통 String 함수 정의
 */
@Slf4j
public class FrameHttpUtil {

    /**
     * request의 파라메터 정보 변환함수
     *
     * @param request
     * @param fCharct
     * @param tCharct
     * @return
     * @throws Exception
     */
    public static Map<String, Object> getParamtrData(HttpServletRequest request, String fCharct, String tCharct) throws Exception {
        Map<String, Object> mRtn = new HashMap<String, Object>();

        try {
            if (ServletFileUpload.isMultipartContent(request)) {
                FileItemFactory factory = new DiskFileItemFactory();
                ServletFileUpload upload = new ServletFileUpload(factory);
                List<FileItem> items = upload.parseRequest(request);
                Iterator<FileItem> iterator = items.iterator();
                List<Object> lFile = new ArrayList<Object>();

                if (fCharct == null || fCharct.isEmpty())
                    fCharct = "8859_1";

                if (tCharct == null || tCharct.isEmpty())
                    tCharct = request.getCharacterEncoding();

                while (iterator.hasNext()) {
                    FileItem fileItem = (FileItem) iterator.next();

                    if (fileItem.isFormField()) {
                        String fieldName = fileItem.getFieldName();
                        String fieldValue = fileItem.getString();
                        String[] oldValue, newValue;

                        fieldValue = new String(fieldValue.getBytes(fCharct), tCharct);
                        String[] value = {fieldValue};

                        if (mRtn.containsKey(fieldName)) {
                            oldValue = (String[]) mRtn.get(fieldName);
                            mRtn.remove(fieldName);
                            newValue = new String[oldValue.length + 1];

                            for (int j = 0; j < oldValue.length; j++) {
                                newValue[j] = oldValue[j];
                            }

                            newValue[oldValue.length] = value[0];
                            mRtn.put(fieldName, newValue);
                        } else {
                            mRtn.put(fieldName, value);
                        }
                    } else {
                        BaseMapParmVo dFile = new BaseMapParmVo();
                        String fieldName = fileItem.getFieldName();
                        String fileName = FilenameUtils.getName(fileItem.getName()).replaceAll("/", "").replaceAll("\\\\", "");
                        String contentType = fileItem.getContentType();
                        long fileSize = fileItem.getSize();

                        if (fileSize > 0) {
                            dFile.put("fieldName", fieldName);
                            dFile.put("contentType", contentType);
                            dFile.put("fileSize", fileSize);
                            dFile.put("fileName", fileName);
                            dFile.put("fileData", fileItem.get());

                            lFile.add(dFile);
                        }
                    }
                }

                mRtn.put("fileInfo", lFile);

                Map<String, String[]> mTmp = request.getParameterMap();
                if (mTmp != null) {
                    for (Map.Entry<String, String[]> entry : mTmp.entrySet()) {

                        String key = entry.getKey();
                        String[] val = entry.getValue();

                        if (fCharct != null && !fCharct.isEmpty() && tCharct != null && !tCharct.isEmpty()) {
                            for (int i = 0, len = val.length; i < len; i++) {
                                val[i] = new String(val[i].getBytes(fCharct), tCharct);
                            }
                        }

                        mRtn.put(key, val);
                    }
                }
            } else {
                Map<String, String[]> mTmp = request.getParameterMap();
                if (mTmp != null) {

                    for (Map.Entry<String, String[]> entry : mTmp.entrySet()) {

                        String key = entry.getKey();
                        String[] val = entry.getValue();

                        if (fCharct != null && !fCharct.isEmpty() && tCharct != null && !tCharct.isEmpty()) {
                            for (int i = 0, len = val.length; i < len; i++) {
                                val[i] = new String(val[i].getBytes(fCharct), tCharct);
                            }
                        }

                        mRtn.put(key, val);
                    }
                }
            }

            //쿠키정보
            mRtn.putAll(getCookie(request));
            //세션정보
            mRtn.putAll(getSession(request));

        } catch (Exception e) {
            log.error("", e);
            throw e;
        }

        return mRtn;
    }


    /**
     * Map의 Value를 객체타임에 맞도록 변경처리하는 함수
     *
     * @param map
     * @return
     * @throws Exception
     */
    public static Map<String, Object> getConvertData(Map<String, Object> map) throws Exception {
        Map<String, Object> mRtn = new HashMap<String, Object>();

        try {
            if (map == null || map.isEmpty())
                return map;

            for (Map.Entry<String, Object> entry : map.entrySet()) {

                String key = entry.getKey();
                Object val = entry.getValue();

                if (val != null) {
                    if (val instanceof String) {
                        mRtn.put(key, val.toString());
                    } else if (val instanceof String[]) {
                        if (((String[]) val).length > 1) {
                            mRtn.put(key, (String[]) val);
                        } else {
                            mRtn.put(key, ((String[]) val)[0] == null ? "" : ((String[]) val)[0]);
                        }
                    } else {
                        mRtn.put(key, val);
                    }
                } else {
                    mRtn.put(key, "");
                }
            }

        } catch (Exception e) {
            log.error("", e);
            throw e;
        }

        return mRtn;
    }


    /**
     * 쿠키정보를 Map 객체에 저장하여 반환하는 함수.
     *
     * @param request
     * @return
     * @throws Exception
     */
    public static Map<String, Object> getCookie(HttpServletRequest request) throws Exception {
        Map<String, Object> mRtn = new HashMap<String, Object>();

        try {
            javax.servlet.http.Cookie[] cookies = request.getCookies();

            if (cookies != null) {
                for (javax.servlet.http.Cookie cookie : cookies) {
                    mRtn.put(cookie.getName(), cookie.getValue());
                }
            }
        } catch (Exception e) {
            log.error("", e);
            throw e;
        }

        return mRtn;
    }

    /**
     * 세션정보를 Map 객체에 저장하여 반환하는 함수.
     *
     * @param request
     * @return
     * @throws Exception
     */
    public static Map<String, Object> getSession(HttpServletRequest request) throws Exception {
        Map<String, Object> mRtn = new HashMap<String, Object>();

        try {
            HttpSession httpSession = request.getSession();

            if (httpSession != null) {

                Enumeration<String> enumeration = httpSession.getAttributeNames();

                while (enumeration.hasMoreElements()) {
                    String key = enumeration.nextElement();
                    mRtn.put(key, httpSession.getAttribute(key));
                }
            }
        } catch (Exception e) {
            log.error("", e);
            throw e;
        }
        return mRtn;
    }
}

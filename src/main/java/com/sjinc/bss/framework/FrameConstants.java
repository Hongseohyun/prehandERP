package com.sjinc.bss.framework;

public class FrameConstants {

    /* error constants */
    public static final String ERROR_MAPPER = "[Mapper Error]";
    public static final String ERROR_SERVICE = "[Service Error]";
    public static final String ERROR_CONTROLLER = "[Controller Error]";

    /* encoding properties */
    public static final String PROP_ALGORITHM = "PBEWithMD5AndDES";
    public static final String PROP_PSWD = "SJINC_PASS";
    public static final String BRENCRYPTKEY = "0x010000002F6BC673E04B0820FD92A74CC8CF7B3EC27699FD8C54B3E7";
    public static final String DBENCRYPTKEY = "$2A$10$MRXYJLUXWCLXJGYK7SVDN.WERIRPTOXIWNIGGYIRM3AX8XHDFBQV2";

    /* session attribute */
    public static final String LOGIN_USER_ATTR = "userInfoPlatform"; //login user info
    public static final String PAGE_TITLE_ATTR = "PTITLE";           //page call request parameter

    /* base company cd */
    public static final String DEFAULT_COMP_CD = "01";

    /* DATA SAVE TYPE */
    public static final String DATA_SAVE_TYPE = "data_save_type";
    public static final String DATA_SAVE_INSERT = "I";
    public static final String DATA_SAVE_UPDATE = "U";

    /* grid state */
    public static final String GRID_GSTAT_INSERT = "I";
    public static final String GRID_GSTAT_UPDATE = "U";

    /* form edit mode */
    public static final String FORM_EDIT_MODE_NEW = "new";
    public static final String FORM_EDIT_MODE_RESET = "rest";

    public static String REAL_PATH = "";

    public static final String LOGIN_MSG_USE_NO = "LOGIN_USE_NO";
    public static final String LOGIN_MSG_PWD = "LOGIN_MSG_PWD";
    public static final String LOGIN_MSG_OK = "LOGIN_MSG_OK";
    public static final String LOGIN_MSG_LOCK = "LOGIN_MSG_LOCK";

    public static void setRealPath(String realPath) {
        if(realPath ==null){
            REAL_PATH = "";
        }else{
            REAL_PATH = realPath;
        }

    }



}

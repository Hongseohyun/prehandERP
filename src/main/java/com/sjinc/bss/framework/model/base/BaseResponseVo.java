package com.sjinc.bss.framework.model.base;

import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.sjinc.bss.framework.FrameUtil;
import lombok.Getter;
import lombok.Setter;

import javax.security.sasl.AuthenticationException;
import java.lang.reflect.Type;

/**
 * UI로 돌려주는 Response 의 기본
 */

@Getter
@Setter
public class BaseResponseVo<T> {

    public static final String RESULT_CODE_OK = "O";
    public static final String RESULT_CODE_WARN = "W";
    public static final String RESULT_CODE_ERROR = "E";
    public static final String RESULT_CODE_SESSION_ERROR = "SE";

    private String resultCode;
    private String resultMessage;

    private T resultVO;


    /* 생성자 */
    public BaseResponseVo(T t) {
        setResultVO(t);
        makeResultError();
    }

    public BaseResponseVo() {
        makeResultError();
    }


    /* ok, warn, error, session_error */
    public void makeResultOk() {
        resultCode = RESULT_CODE_OK;
    }

    public void makeResultWarn() {
        resultCode = RESULT_CODE_WARN;
    }

    public void makeResultError() {
        resultCode = RESULT_CODE_ERROR;
    }

    public void makeResultError(Exception e) {
        resultCode = RESULT_CODE_ERROR;
        if (e != null) {
            resultMessage = e.getMessage();
        }
    }
    public void makeResultError(Exception e, boolean isConvertErr) {
        resultCode = RESULT_CODE_ERROR;
        if (e != null) {
            if(isConvertErr){
                resultMessage = FrameUtil.convertErrorMsg(e.getMessage());
            }else{
                resultMessage = e.getMessage();
            }
        }
    }

    public void makeResultSessionError() {
        resultCode = RESULT_CODE_SESSION_ERROR;
    }

    public void makeResultSessionError(AuthenticationException e) {
        resultCode = RESULT_CODE_SESSION_ERROR;
        if (e != null) {
            resultMessage = e.getMessage();
        }
    }

    public String toJson() {
        return (new GsonBuilder().disableHtmlEscaping().serializeNulls().create()).toJson(this);
    }

    public static <T> BaseResponseVo<T> fromJson(String js) {
        Type paramType = new TypeToken<T>() {}.getType();
        Type finalType = TypeToken.getParameterized(BaseResponseVo.class, paramType).getType();
        return new GsonBuilder().disableHtmlEscaping().serializeNulls().create().fromJson(js, finalType);
    }

    public static <T> BaseResponseVo<T> fromJson(String js, Type type) {
        Type finalType = TypeToken.getParameterized(BaseResponseVo.class, type).getType();
        return new GsonBuilder().disableHtmlEscaping().serializeNulls().create().fromJson(js, finalType);
    }

    public static Type getType(Type type) {
        return TypeToken.getParameterized(BaseResponseVo.class, type).getType();
    }
}

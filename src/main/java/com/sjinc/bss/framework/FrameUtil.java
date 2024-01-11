package com.sjinc.bss.framework;

import com.sjinc.bss.framework.model.LoginUserVo;
import org.springframework.util.ObjectUtils;

import javax.security.sasl.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import java.net.InetAddress;
import java.util.Map;

public class FrameUtil {

    public static void addUserInfo(Map map, LoginUserVo loginUserVo) throws AuthenticationException {
        if(ObjectUtils.isEmpty(loginUserVo)){
            throw new AuthenticationException();
        }
        map.put("compCd", loginUserVo.getCompCd());
        map.put("UserId", loginUserVo.getUserId());
        map.put("UserNm", loginUserVo.getUserNm());
    }

    public static String convertErrorMsg(String msg){
        if(msg == null || "".equals(msg)){
            return msg;
        }

        if(msg.indexOf("고유 제약 조건을 위반함") >0){
            return "중복된 키값이 존재합니다. "+  msg.substring(msg.lastIndexOf("Detail"));
        }

        if(msg.indexOf("STARTOFERRMSG") >0){
            return msg.substring(msg.lastIndexOf("STARTOFERRMSG") + 13,msg.lastIndexOf("ENDOFERRMSG"));
        }

        return msg;
    }

    public static String getRemoteIP(HttpServletRequest request) throws Exception{
        String ip = request.getHeader("X-Forwarded-For");

        if (ip == null) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null) {
            ip = request.getHeader("HTTP_CLIENT_IP");
        }
        if (ip == null) {
            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
        }
        if (ip == null) {
            ip = request.getHeader("X-Real-IP");
        }
        if (ip == null) {
            ip = request.getHeader("X-RealIP");
        }
        if (ip == null) {
            ip = request.getHeader("REMOTE_ADDR");
        }
        if (ip == null) {
            ip = request.getRemoteAddr();
        }
        if(ip.equals("0:0:0:0:0:0:0:1") || ip.equals("127.0.0.1"))
        {
            InetAddress address = InetAddress.getLocalHost();
            ip = address.getHostAddress();
        }
        return ip;
    }
}

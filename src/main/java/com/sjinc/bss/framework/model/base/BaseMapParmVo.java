package com.sjinc.bss.framework.model.base;

import com.google.gson.Gson;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

/**
 * UI에서 호출하는 request parameter 기본
 */

@Getter
@Setter
public class BaseMapParmVo extends HashMap<String, Object> implements Serializable {
    private static Gson gson = new Gson();

    public BaseMapParmVo() {
        super();
    }

    public BaseMapParmVo(String jsonString) {
        super(gson.fromJson(jsonString, BaseMapParmVo.class));
    }

    public BaseMapParmVo(Map<String, Object> map) {
        this.putAll(map);
    }

    public String toJson() {
        return gson.toJson(this);
    }
}

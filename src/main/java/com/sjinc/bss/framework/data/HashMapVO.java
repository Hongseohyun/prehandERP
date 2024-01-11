package com.sjinc.bss.framework.data;

import com.google.gson.Gson;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class HashMapVO extends HashMap<String, Object> implements Serializable {
	private static final long serialVersionUID = 3600945741204808626L;

	private static Gson gson = new Gson();

	public HashMapVO(){super();}

	public HashMapVO(String jsonString){
		super(gson.fromJson(jsonString, HashMapVO.class));
	}

	public HashMapVO(Map<String, Object> map){
		this.putAll(map);
	}

	public String toJson() {
		return gson.toJson(this);
	}
}

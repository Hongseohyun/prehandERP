package com.sjinc.bss.framework.data;

import com.google.gson.Gson;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class HashMapStringVO extends HashMap<String, String> implements Serializable {

	private static Gson gson = new Gson();

	public HashMapStringVO(){super();}

	public HashMapStringVO(String jsonString){
		super(gson.fromJson(jsonString, HashMapStringVO.class));
	}

	public HashMapStringVO(Map<String, String> map){
		this.putAll(map);
	}

	public String toJson() {
		return gson.toJson(this);
	}

}

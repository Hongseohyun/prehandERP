package com.sjinc.bss.framework.data;

import com.google.gson.Gson;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

/**
 * 조회 결과 매핑용 HashMap (CamelCase 적용)
 */
public class HashMapResultVO extends HashMap<String, Object> implements Serializable {
	private static final long serialVersionUID = 1L;
	private static Gson gson = new Gson();

	public HashMapResultVO(){super();}

	public HashMapResultVO(String jsonString){
		super(gson.fromJson(jsonString, HashMapResultVO.class));
	}

	public HashMapResultVO(Map<String, Object> map){
		this.putAll(map);
	}

	public String toJson() {
		return gson.toJson(this);
	}

	private String toCamelCase(String txt) {
		String[] words = txt.split("[\\W_]+");
		StringBuilder builder = new StringBuilder();
		for (int i = 0; i < words.length; i++) {
			String word = words[i];
			if(words.length > 1){
				if (i == 0) {
					word = word.isEmpty() ? word : word.toLowerCase();
				} else {
					word = word.isEmpty() ? word : Character.toUpperCase(word.charAt(0)) + word.substring(1).toLowerCase();
				}
			}
			builder.append(word);
		}
		return builder.toString();
	}

	@Override
	public Object put(String key, Object value) {
		return super.put(toCamelCase(key), value);
	}
}

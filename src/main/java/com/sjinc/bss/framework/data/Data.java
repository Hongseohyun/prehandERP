package com.sjinc.bss.framework.data;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.Type;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.internal.LinkedTreeMap;
import com.google.gson.reflect.TypeToken;

public class Data<T> extends HashMap<String, T> implements java.io.Serializable, Map<String, T> {

	private static final long serialVersionUID = -1L;

	private Gson gson = new GsonBuilder().disableHtmlEscaping().serializeNulls().create();

	public Data() {
		super();
	}

	public Data(Map<String, T> map) {
		super();
		for (String key : map.keySet()) {
			this.put(key, map.get(key));
		}
	}

	public static <T> Data<T> fromJson(String js) {
		Type paramType = new TypeToken<T>() {}.getType();
		Type finalType = TypeToken.getParameterized(Data.class, paramType).getType();
		return new GsonBuilder().disableHtmlEscaping().serializeNulls().create().fromJson(js, finalType);
	}

	public static <T> Data<T> fromJson(String js, Type type) {
		Type finalType = TypeToken.getParameterized(Data.class, type).getType();
		return new GsonBuilder().disableHtmlEscaping().serializeNulls().create().fromJson(js, finalType);
	}

	public static Data<String> fromMap(Map<String, Object> map) {
		if (map == null) return null;
		Data<String> result = new Data<String>();
		for (String key : map.keySet()) {
			Object value = map.get(key);
			if (value == null) result.put(key, "");
			else result.put(key, value.toString());
		}
		return result;
	}
	
	public static Data<String> fromRequest(HttpServletRequest request) throws UnsupportedEncodingException {
		Data<String> data = new Data<String>();
		
		Enumeration<String> keys = request.getParameterNames();
		
		while (keys.hasMoreElements()) {
			
			String key = keys.nextElement();
			data.add(URLDecoder.decode(key, "UTF-8"), URLDecoder.decode(checkNullString(request.getParameter(key), ""), "UTF-8"));
		}
		return data;
	}

	public void add(String key, T data) {
		super.put(key, data);
	}
	
	public T get(String key, T defaultValue) {
		T t = get(key);
		if (t == null) return defaultValue;
		else return t;
	}

	public T get(String key) {
		Object o = super.get(key);
		if (o instanceof ArrayList) {
			return (T) new DataList((List) o);
		} else if (o instanceof LinkedTreeMap) {
			return (T) new Data((Map)o);
		}
		return (T) o;
	}

	public T get(int i) {
		DataList<String> keyList = getKeyList();
		T value = get(keyList.get(i));
		return value;
	}

	public Object remove(String key) {
		return super.remove(key.toUpperCase());
	}

	public DataList<String> getKeyList() {
		DataList<String> keyList = new DataList<String>();

		Set<String> keySet = super.keySet();

		for (String key : keySet) {
			keyList.add(key);
		}

		return keyList;
	}

	public String toJson() {
		return gson.toJson(this);
	}

	public void merge(Data<T> data) {
		DataList<String> keys = data.getKeyList();
		for (String key: keys) {
			add(key, data.get(key));
		}
	}

	@Override
	public T put(String key, T value) {
		return super.put(key, value);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public Data<T> clone() {
		return new Data<T>((Map<String, T>) super.clone());
	}
	
	public static Type getType(Type type) {
		return TypeToken.getParameterized(Data.class, type).getType();
	}

	public static String checkNullString(String paramstr, String repstr) {

		if (paramstr == null || paramstr.trim().equals("") || paramstr.equals("null")) {
			return repstr;
		} else {
			return paramstr;
		}
	}

}

package com.sjinc.bss.framework.data;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.internal.LinkedTreeMap;
import com.google.gson.reflect.TypeToken;

public class DataList<T> extends ArrayList<T> implements java.io.Serializable, List<T> {

	private static final long serialVersionUID = 1L;

	private Gson gson = new GsonBuilder().disableHtmlEscaping().serializeNulls().create();

	public DataList() {
		super();
	}

	public static <T> DataList<T> fromJson(String js) {
		TypeToken<T> paramTypeToken = new TypeToken<T>() {};
		Type finalType;
		if (paramTypeToken.getRawType() == Data.class) 
			finalType = TypeToken.getParameterized(DataList.class, paramTypeToken.getType()).getType();
		else
			finalType = TypeToken.getParameterized(DataList.class, Data.class).getType();
		return new GsonBuilder().disableHtmlEscaping().serializeNulls().create().fromJson(js, finalType);
	}

	public static <T> DataList<T> fromJson(String js, Type type) {
		Type finalType = TypeToken.getParameterized(DataList.class, type).getType();
		return new GsonBuilder().disableHtmlEscaping().serializeNulls().create().fromJson(js, finalType);
	}
	
	public DataList(List<T> list) {
		super(list);
	}
	
	public T get(int i) {
		Object o = super.get(i);
		if (o instanceof ArrayList) {
			return (T) new DataList((List)o);
		} else if (o instanceof LinkedTreeMap) {
			return (T) new Data((Map)o);
		}
		return (T) o;
	}
	
	public String get(int i, String key) {
		Object o = get(i);
		if (o instanceof Data<?>) {
			Object s = ((Data) o).get(key);
			if (s instanceof String) {
				return (String) s;
			}
		}
		return null;
	}

	public String toJson() {
		return gson.toJson(this);
	}
	
	public T[] toArray() {
		T[] result = (T[]) new Object[size()];
		for (int i = 0; i < size(); i++) {
			result[i] = this.get(i);
		}
		return result;
	}
	
	public static <T> DataList<T> Create(T... ts) {
		DataList<T> result = new DataList<T>();
		for (T t: ts) {
			result.add(t);
		}
		return result;
	}

	public static Type getType(Type type) {
		return TypeToken.getParameterized(DataList.class, type).getType();
	}
}

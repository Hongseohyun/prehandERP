package com.sjinc.bss.framework.data;

import org.apache.commons.lang3.builder.ToStringBuilder;

import java.io.Serializable;

public class DefaultVO implements Serializable {

	private static final long serialVersionUID = 1105465278135340655L;

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}
}

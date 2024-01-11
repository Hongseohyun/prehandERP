package com.sjinc.bss.framework.db;

import org.springframework.stereotype.Component;

import java.lang.annotation.*;

/**
 * Primary Data Base Mapper ( 주 데이터베이스 )
 */
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Component
public @interface PrimaryConnectMapper {
    String value() default "";
}

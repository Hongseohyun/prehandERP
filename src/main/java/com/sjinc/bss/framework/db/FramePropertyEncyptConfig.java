package com.sjinc.bss.framework.db;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.SimpleStringPBEConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * spring boot properties string encoding
 */
@Configuration
@EnableEncryptableProperties
public class FramePropertyEncyptConfig {

    public static final String PROP_ALGORITHM = "PBEWithMD5AndDES";
    public static final String PROP_PSWD = "SJINC_PASS";

    @Bean("jasyptStringEncryptor")
    public PooledPBEStringEncryptor stringEncryptor() {

        PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
        SimpleStringPBEConfig config = new SimpleStringPBEConfig();
        config.setPassword(PROP_PSWD);
        config.setAlgorithm(PROP_ALGORITHM);
        config.setPoolSize(1); // 인스턴스 pool
        encryptor.setConfig(config);
        System.out.println(encryptor.encrypt("password"));
        return encryptor;
    }
}

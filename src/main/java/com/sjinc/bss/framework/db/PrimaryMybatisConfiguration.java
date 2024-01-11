package com.sjinc.bss.framework.db;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.mybatis.spring.boot.autoconfigure.SpringBootVFS;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

/**
 * primary data source, mybatis config
 */
@Configuration
@MapperScan(value = "com.sjinc.bss", annotationClass = PrimaryConnectMapper.class, sqlSessionFactoryRef = "primarySqlSessionFactory")
@EnableTransactionManagement
public class PrimaryMybatisConfiguration {

    @Value("${bss.mapperDir}")
    private String mapperDir;

    @Bean
    @Primary
    @Qualifier("primaryConfig")
    @ConfigurationProperties(prefix = "spring.primary.datasource") //application.properties에서 datasource prefix
    public HikariConfig primaryConfig() {
        return new HikariConfig();
    }

    @Bean
    @Primary
    @Qualifier("primaryDataSource")
    public DataSource primaryDataSource() throws Exception {
        return new HikariDataSource(primaryConfig());
    }

//    @Primary
//    @Bean(name = "primarySqlSessionFactory")
//    public SqlSessionFactory primarySqlSessionFactory(@Qualifier("primaryDataSource") DataSource dataSource,
//                                                      ApplicationContext applicationContext) throws Exception {
//        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
//        sqlSessionFactoryBean.setDataSource(dataSource);
//        sqlSessionFactoryBean.setConfigLocation(applicationContext.getResource("classpath:mybatis-config.xml"));
//        sqlSessionFactoryBean.setMapperLocations(applicationContext.getResources("classpath*:mapper/nara/**/*.xml"));
//
//        return sqlSessionFactoryBean.getObject();
//    }

    @Primary
    @Bean(name = "primarySqlSessionFactory")
    public SqlSessionFactory primarySqlSessionFactory(@Qualifier("primaryDataSource") DataSource dataSource,
                                                      ApplicationContext applicationContext) throws Exception {
        FrameRefreshableSqlSessionFactory sqlSessionFactoryBean = new FrameRefreshableSqlSessionFactory();

        sqlSessionFactoryBean.setDataSource(dataSource);
        sqlSessionFactoryBean.setVfs(SpringBootVFS.class);

        sqlSessionFactoryBean.setConfigLocation(applicationContext.getResource("classpath:mybatis-config.xml"));
        ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        //Resource[] resource = resolver.getResources("classpath*:mapper/nara/**/*.xml");
        Resource[] resource = resolver.getResources(mapperDir);

        sqlSessionFactoryBean.setMapperLocations(resource);

        return sqlSessionFactoryBean.getObject();
    }

    @Primary
    @Bean(name = "primarySqlSessionTemplate")
    public SqlSessionTemplate sqlSessionTemplate(@Qualifier("primarySqlSessionFactory") SqlSessionFactory sqlSessionFactory) {
        return new SqlSessionTemplate(sqlSessionFactory);
    }

    @Primary
    @Bean(name = "txManagerPrimary")
    public PlatformTransactionManager txManagerPrimary() throws Exception {
        return new DataSourceTransactionManager(primaryDataSource());
    }

}

package com.sjinc.bss.framework;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

/**
 * MVC Intercept Config
 */
@Slf4j
@Configuration
public class FrameWebMVCConfig implements WebMvcConfigurer {

    @Value("${server.error.path:${error.path:/error}}")
    private String errorUrl;

    @Value("${interceptor.excludePaths}")
    private List<String> interceptorExcludes;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        interceptorExcludes.add(errorUrl);

        log.info("errorUrl : {}", errorUrl);
        log.info("interceptorExcludes urls : {}", interceptorExcludes);

        registry.addInterceptor(new FrameHandlerInterceptor())
                .addPathPatterns("/*")
                .excludePathPatterns(interceptorExcludes);

    }

    /**
     * 다국어 지원을 위한 Message Resouce
     *
     * @return
     */
    @Bean
    public ReloadableResourceBundleMessageSource messageSource() {
        ReloadableResourceBundleMessageSource source = new ReloadableResourceBundleMessageSource();

        source.setBasename("classpath:/messages/message"); //메세지 프로퍼티파일의 위치와 이름을 지정한다.
        source.setDefaultEncoding("UTF-8"); //기본 인코딩

        // 프로퍼티 파일의 변경을 감지할 시간 간격을 지정한다. (어플리케이션 실행 중)
        source.setCacheSeconds(180);

        // 없는 메세지일 경우 예외를 발생시키는 대신 코드를 기본 메세지로 한다.
        source.setUseCodeAsDefaultMessage(true);

        return source;
    }
}

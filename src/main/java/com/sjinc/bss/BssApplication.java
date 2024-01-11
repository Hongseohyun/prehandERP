package com.sjinc.bss;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BssApplication {

	public static void main(String[] args) {
		SpringApplication.run(BssApplication.class, args);
	}

	/*@Bean
	public WebServerFactoryCustomizer<ConfigurableServletWebServerFactory>
	webServerFactoryCustomizer() {
		return factory -> factory.setContextPath("/bss");
	}*/

}

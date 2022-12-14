package com.vander.weather.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
        @GetMapping("/hello")
        public String hello(@RequestParam(name = "vip") String name) {
            return "Hello " + name;
        }
}

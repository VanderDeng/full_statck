package com.vander.weather.controller;

import org.apiguardian.api.API;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@SpringBootTest
class HelloWorldControllerTest {

    private MockMvc mockMvc;

    @BeforeEach
    void setUp(){
        mockMvc = MockMvcBuilders.standaloneSetup(new HelloWorldController()).build();

    }

    @Test
    void hello() throws Exception {
//        mockMvc.perform(MockMvcRequestBuilders.post("/hello?name=fiona").accept(MediaType.APPLICATION_JSON_UTF8)).andDo(print());

        mockMvc.perform(get("/hello?vip=vander"))
                .andDo(print());
//                .andExpect(MockmvcResultMatchers.status().is);


    }

}
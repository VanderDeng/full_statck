package com.vander.weather.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    private int id;
    @NotBlank
    private String email;
    @NotBlank
    private String password;
}


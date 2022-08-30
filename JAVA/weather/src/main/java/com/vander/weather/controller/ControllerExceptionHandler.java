package com.vander.weather.controller;

import com.vander.weather.model.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class ControllerExceptionHandler {


//    @ExceptionHandler(MethodArgumentNotValidException.class)
//    public ResponseEntity<ErrorResponse> handleBadRequest(Exception exception, WebRequest request) {
//        return new ResponseEntity(new ErrorResponse(exception.getMessage(), request.getDescription(false)), HttpStatus.BAD_REQUEST);
//    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleBadRequest(Exception exception, WebRequest request) {
        return new ResponseEntity(new ErrorResponse(exception.getMessage(), request.getDescription(false)), HttpStatus.BAD_REQUEST);
    }
}

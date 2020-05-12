package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserService service;
    @PostMapping("/")
    public HttpStatus authenticate(@RequestBody User user){
        Boolean flag= service.findbycredentials(user);
        if(flag==true){
            System.out.println(HttpStatus.OK);
            return HttpStatus.OK;
        }
        else{
            System.out.println(HttpStatus.NOT_FOUND);
            return HttpStatus.NOT_FOUND;
        }
    }
}

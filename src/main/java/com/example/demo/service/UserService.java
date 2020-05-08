package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService  {
    @Autowired
    UserRepository repo;
    public Boolean findbycredentials(User user){
        System.out.println(user.getPasswd());
        System.out.println(user.getUsername());
        System.out.println(repo.getOne(user.getUsername()).getPasswd());
        if(repo.getOne(user.getUsername())!=null){
            System.out.println("username matchd");
            if(repo.getOne(user.getUsername()).getPasswd().equals(user.getPasswd())){

                System.out.println("username matchd");
                return true;
            }
            else{
                return false;
            }
        }else{
            return false;
        }
    }

}

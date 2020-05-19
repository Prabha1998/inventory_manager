package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService  {
    @Autowired
    UserRepository repo;
    public Boolean findbycredentials(User user){
        try {
            if (repo.getOne(user.getUsername()) != null) {
                System.out.println("username matchd");
                if (repo.getOne(user.getUsername()).getPasswd().equals(user.getPasswd())) {

                    System.out.println("username matchd");
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
        catch(Exception e){
            return false;
        }
    }
    public List<User> getusers(){
        return repo.findAll();
    }

}

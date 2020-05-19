package com.example.demo.service;

import com.example.demo.model.Inspectionform;
import com.example.demo.repository.InspectionformRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InspectionformService {
    @Autowired
    InspectionformRepository repo;
    public List<Inspectionform> getFormComponents(String inspid,int formid){
       return repo.findByInspplanidAndFormid(inspid,formid);
    }
}

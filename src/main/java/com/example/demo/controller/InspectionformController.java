package com.example.demo.controller;

import com.example.demo.model.Inspectionform;
import com.example.demo.service.InspectionformService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class InspectionformController {
    @Autowired
    InspectionformService service;
    @GetMapping("/getform/{inspid}/{formid}")
    public List<Inspectionform> getbyInspidAndFormid(@PathVariable("inspid") String inspid, @PathVariable("formid") int formid){
        return service.getFormComponents(inspid,formid);
    }
}

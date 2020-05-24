package com.example.demo.controller;

import com.example.demo.model.Inspectionform;
import com.example.demo.service.InspectionformService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class InspectionformController {

    @Autowired
    InspectionformService service;

    @GetMapping("/getform/{inspid}/{formid}")
    public List<Inspectionform> getbyInspidAndFormid(@PathVariable("inspid") String inspid, @PathVariable("formid") int formid){
        return service.getFormComponents(inspid,formid);
    }

//    @PostMapping("/formcomponent")
//    public HttpStatus post{}
//
//    {

}

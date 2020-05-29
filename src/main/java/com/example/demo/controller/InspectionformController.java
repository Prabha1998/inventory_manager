package com.example.demo.controller;

import com.example.demo.model.Inspectionform;
import com.example.demo.service.InspectionformService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
public class InspectionformController {

    @Autowired
    InspectionformService service;

    @GetMapping("/getform/{inspid}/{formid}")
    public List<Inspectionform> getbyInspidAndFormid(@PathVariable("inspid") String inspid, @PathVariable("formid") int formid){
        return service.getFormComponents(inspid,formid);
    }
    @Modifying
    @Transactional
    @PutMapping("/updateform")
    public HttpStatus updateform(@RequestBody List<Inspectionform> inspectionforms){

        for(Inspectionform form:inspectionforms){
            service.delete(form);
            service.saveOrUpdate(form);
        }
        return HttpStatus.OK;
    }

//    @PostMapping("/formcomponent")
//    public HttpStatus post{}
//
//    {

}

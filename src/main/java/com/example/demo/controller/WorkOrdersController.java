package com.example.demo.controller;

import com.example.demo.model.CustomWO;
import com.example.demo.model.Workorders;
import com.example.demo.service.WorkOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RestController
public class WorkOrdersController {
    @Autowired
    WorkOrdersService service;
    @GetMapping("/getwo")
    public List<Workorders> getwo(){
        return service.getwo();
    }
    @GetMapping("/names")
    public List<CustomWO> names(){
        System.out.println("hello");
        List<Workorders> wos=service.getwo();
        List<CustomWO> customWo=new ArrayList<CustomWO>();
        for(Workorders wo:wos){
            customWo.add(new CustomWO(wo.getInspplanid(),wo.getInspector(),wo.getPlanneddate()));
        }
        return customWo;
    }

    @PostMapping("/addwo")
    public HttpStatus addwo(@RequestBody Workorders workorder){
        return returnstatus(service.addwo(workorder));
    }
    @Transactional
    @DeleteMapping("/delwo")
    public void deleteWo(@RequestBody Workorders workorder){
        System.out.println(workorder);
        //return returnstatus(service.deletebyid(workorder));
    }
    @DeleteMapping("/delwobyid/{formid}")
    public HttpStatus deleteWo(@PathVariable int formid){
        return returnstatus(service.deletebyformid(formid));
    }
    private HttpStatus returnstatus(Boolean flag){
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

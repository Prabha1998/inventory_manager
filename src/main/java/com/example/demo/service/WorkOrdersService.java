package com.example.demo.service;

import com.example.demo.model.Workorders;
import com.example.demo.repository.WorkOrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class WorkOrdersService {
    @Autowired
    WorkOrdersRepository repo;
    public List<Workorders> getwo() {
        return repo.findAll();
    }

    public Boolean deleteWo(String inspid, int formid) {
        Long i = repo.count();
        repo.deleteByInspplanidAndFormid(inspid,formid);
        if(repo.count()==i-1){
            return true;
        }
        else{
            return false;
        }
    }
}

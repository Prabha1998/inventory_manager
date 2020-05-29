package com.example.demo.service;

import com.example.demo.model.Inspectionform;
import com.example.demo.repository.InspectionformRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class InspectionformService {
    @Autowired
    InspectionformRepository repo;
    public List<Inspectionform> getFormComponents(String inspid,int formid){
       return repo.findByInspplanidAndFormid(inspid,formid);
    }

//    public int updateAll(List<Inspectionform> inspectionforms) {
//        int j=0;
//        for(Inspectionform i:inspectionforms){
//            System.out.println( i.getCompid());
//            repo.deleteByCompid(i.getCompid());
//            repo.save(i);
//            j++;
//        }
//        return j;
//    }

    public void deleteAll(List<Inspectionform> inspectionforms){
        repo.deleteAll(inspectionforms);
    }
    public int saveAll(List<Inspectionform> inspectionforms){
        repo.saveAll(inspectionforms);
        return inspectionforms.size();
    }
    public void saveOrUpdate(Inspectionform inspectionform){
        repo.save(inspectionform);
    }
    public void delete(Inspectionform inspectionform){
        repo.delete(inspectionform);
    }
}

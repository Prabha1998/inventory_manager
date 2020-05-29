package com.example.demo.repository;

import com.example.demo.model.Inspectionform;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InspectionformRepository extends JpaRepository<Inspectionform,Integer> {

  //  @Query("SELECT * from inspectionform e where e.inspplanid =:inspid AND e.formid =:formid")
    public List<Inspectionform> findByInspplanidAndFormid(String inspid, int formid);

}

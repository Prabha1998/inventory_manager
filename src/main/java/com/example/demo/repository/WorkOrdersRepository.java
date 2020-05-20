package com.example.demo.repository;

import com.example.demo.model.Workorders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkOrdersRepository extends JpaRepository<Workorders,String > {
    public void deleteByInspplanidAndFormid(String inspid, int formid);
    public void deleteByFormid(int formid);
}

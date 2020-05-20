package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Workorders {
    String inspplanid;
    @Id
    int formid;
    String inspector;
    String planneddate;
    String location;
    String descript;
    String inspectionmethod;
    String percentcompletion;
    String lastupdateddate;

}

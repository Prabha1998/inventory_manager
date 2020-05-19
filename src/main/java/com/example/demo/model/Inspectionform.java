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
public class Inspectionform {
    @Id
    String inspplanid;
    int formid;
    int compid;
    String component;
    String findings;
    String description;
    String damagetype;
    String severity;
    String defectsizinglength;
    String defectsizingwidth;
    String defectsizingdepth;
    String ffsL1;
    Byte[] lengthphoto;
    Byte[] widthphoto;

}

package net.mdjava.springbootbackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "medicines")

public class Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "med_name")
    private String med_name;

    @Column(name = "description")
    private String description;

    @Column(name = "quantity")
    private BigDecimal quantity;

    @Column(name = "type")
    private String type;

    @Column(name = "expiration_date")
    private Date expiration_date;

}

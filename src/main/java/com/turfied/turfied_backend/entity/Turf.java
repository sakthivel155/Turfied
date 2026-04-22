package com.turfied.turfied_backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "turfs")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Turf {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String area;

    private String city;

    @Column(columnDefinition = "TEXT")
    private String address;

    @Column(columnDefinition = "TEXT")
    private String about;

    private String contactNo;

    @Column(columnDefinition = "TEXT")
    private String amenities;

    private String sports;




    @Column(columnDefinition = "TEXT")
    private String imageUrl;

    private String distance;

    private String avgRating;

    private String noOfRating;

    @Column(columnDefinition = "TEXT")
    private String openingHour;

    @Column(columnDefinition = "TEXT")
    private String mapUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = false)
    @JsonIgnore
    private User owner;

    @OneToMany(mappedBy = "turf", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Court> courts;
}

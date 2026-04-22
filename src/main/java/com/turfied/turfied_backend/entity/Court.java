package com.turfied.turfied_backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "courts")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Court {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Example: "9 a side Court 1"
    @Column(nullable = false, length = 100)
    private String name;

    // Example: "9_A_SIDE", "7_A_SIDE", "11_A_SIDE"
    @Column(nullable = false, length = 50)
    private String courtType;

    // Price for one slot on this court
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal pricePerSlot;

    @Column(nullable = false)
    private Boolean isActive = true;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "turf_id", nullable = false)
    @JsonIgnore
    private Turf turf;

    @OneToMany(mappedBy = "court", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Slot> slots;
}

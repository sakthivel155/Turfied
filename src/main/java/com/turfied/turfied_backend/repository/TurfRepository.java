package com.turfied.turfied_backend.repository;

import com.turfied.turfied_backend.entity.Turf;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;

public interface TurfRepository extends JpaRepository<Turf, Long> {
    Page<Turf> findBySports(String turf_sports, Pageable pageable);
    Page<Turf> findByCity(String location, Pageable pageable);
    Page<Turf> findBySportsAndCity(String turf_sports, String location, Pageable pageable);
    List<Turf> findByOwnerId(Long ownerId);
}
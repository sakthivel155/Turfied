package com.turfied.turfied_backend.repository;

import com.turfied.turfied_backend.entity.Court;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourtRepository extends JpaRepository<Court, Long> {
    List<Court> findByTurfId(Long turfId);
}
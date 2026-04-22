package com.turfied.turfied_backend.repository;

import com.turfied.turfied_backend.entity.Slot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SlotRepository extends JpaRepository<Slot, Long> {
    List<Slot> findByCourtId(Long courtId);

    List<Slot> findByCourtTurfId(Long turfId);
}

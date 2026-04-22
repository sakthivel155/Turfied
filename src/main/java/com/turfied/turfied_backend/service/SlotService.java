package com.turfied.turfied_backend.service;

import com.turfied.turfied_backend.entity.Court;
import com.turfied.turfied_backend.entity.Slot;
import com.turfied.turfied_backend.exception.ResourceNotFoundException;
import com.turfied.turfied_backend.repository.CourtRepository;
import com.turfied.turfied_backend.repository.SlotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SlotService {

    private final SlotRepository slotRepository;
    private final CourtRepository courtRepository;

    public Slot createSlot(Slot slot, Long courtId) {
        Court court = courtRepository.findById(courtId)
                .orElseThrow(() -> new ResourceNotFoundException("Court not found: " + courtId));

        slot.setCourt(court);
        return slotRepository.save(slot);
    }

    public List<Slot> getSlotsByCourt(Long courtId) {
        courtRepository.findById(courtId)
                .orElseThrow(() -> new ResourceNotFoundException("Court not found: " + courtId));

        return slotRepository.findByCourtId(courtId);
    }

    public List<Slot> getSlotsByTurf(Long turfId) {
        return slotRepository.findByCourtTurfId(turfId);
    }
}
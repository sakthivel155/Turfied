package com.turfied.turfied_backend.service;

import com.turfied.turfied_backend.entity.Court;
import com.turfied.turfied_backend.entity.Turf;
import com.turfied.turfied_backend.entity.User;
import com.turfied.turfied_backend.enums.Role;
import com.turfied.turfied_backend.exception.ResourceNotFoundException;
import com.turfied.turfied_backend.exception.UnauthorizedException;
import com.turfied.turfied_backend.repository.CourtRepository;
import com.turfied.turfied_backend.repository.TurfRepository;
import com.turfied.turfied_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CourtService {

    private final CourtRepository courtRepository;
    private final TurfRepository turfRepository;
    private final UserRepository userRepository;

    public Court createCourt(Court court, Long turfId, Long ownerId) {
        Turf turf = turfRepository.findById(turfId)
                .orElseThrow(() -> new ResourceNotFoundException("Turf not found: " + turfId));

        User owner = userRepository.findById(ownerId)
                .orElseThrow(() -> new ResourceNotFoundException("Owner not found: " + ownerId));

        validateOwnerAccess(owner, turf);

        court.setTurf(turf);
        Court saved = courtRepository.save(court);

        log.info("Court created - id: {}, turfId: {}, name: {}", saved.getId(), turfId, saved.getName());
        return saved;
    }

    public Court getCourtById(Long courtId) {
        return courtRepository.findById(courtId)
                .orElseThrow(() -> new ResourceNotFoundException("Court not found: " + courtId));
    }

    public List<Court> getCourtsByTurf(Long turfId) {
        turfRepository.findById(turfId)
                .orElseThrow(() -> new ResourceNotFoundException("Turf not found: " + turfId));

        return courtRepository.findByTurfId(turfId);
    }

    public Court updateCourt(Long courtId, Court court, Long ownerId) {
        Court existingCourt = courtRepository.findById(courtId)
                .orElseThrow(() -> new ResourceNotFoundException("Court not found: " + courtId));

        User owner = userRepository.findById(ownerId)
                .orElseThrow(() -> new ResourceNotFoundException("Owner not found: " + ownerId));

        validateOwnerAccess(owner, existingCourt.getTurf());

        if (court.getName() != null && !court.getName().isBlank()) {
            existingCourt.setName(court.getName());
        }

        if (court.getCourtType() != null && !court.getCourtType().isBlank()) {
            existingCourt.setCourtType(court.getCourtType());
        }

        if (court.getPricePerSlot() != null) {
            existingCourt.setPricePerSlot(court.getPricePerSlot());
        }

        if (court.getIsActive() != null) {
            existingCourt.setIsActive(court.getIsActive());
        }

        Court updated = courtRepository.save(existingCourt);
        log.info("Court updated - id: {}, name: {}", updated.getId(), updated.getName());
        return updated;
    }

    public void deleteCourt(Long courtId, Long ownerId) {
        Court court = courtRepository.findById(courtId)
                .orElseThrow(() -> new ResourceNotFoundException("Court not found: " + courtId));

        User owner = userRepository.findById(ownerId)
                .orElseThrow(() -> new ResourceNotFoundException("Owner not found: " + ownerId));

        validateOwnerAccess(owner, court.getTurf());

        courtRepository.delete(court);
        log.info("Court deleted - id: {}, name: {}", court.getId(), court.getName());
    }

    private void validateOwnerAccess(User owner, Turf turf) {
        if (owner.getRole() != Role.OWNER) {
            throw new UnauthorizedException("Only OWNER can manage courts");
        }

        if (!turf.getOwner().getId().equals(owner.getId())) {
            throw new UnauthorizedException("You are not the owner of this turf");
        }
    }
}

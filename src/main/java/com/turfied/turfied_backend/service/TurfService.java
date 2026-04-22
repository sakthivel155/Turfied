package com.turfied.turfied_backend.service;

import com.turfied.turfied_backend.dto.response.CourtDetailResponse;
import com.turfied.turfied_backend.dto.response.SlotDetailResponse;
import com.turfied.turfied_backend.dto.response.TurfDetailResponse;
import com.turfied.turfied_backend.entity.Court;
import com.turfied.turfied_backend.entity.Slot;
import com.turfied.turfied_backend.entity.Turf;
import com.turfied.turfied_backend.entity.User;
import com.turfied.turfied_backend.enums.Role;
import com.turfied.turfied_backend.exception.ResourceNotFoundException;
import com.turfied.turfied_backend.exception.UnauthorizedException;
import com.turfied.turfied_backend.repository.TurfRepository;
import com.turfied.turfied_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TurfService {

    private final TurfRepository turfRepository;
    private final UserRepository userRepository;

    public Turf createTurf(Turf turf, Long ownerId) {

        // Step 1: Fetch user
        User owner = userRepository.findById(ownerId)
                .orElseThrow(() -> new ResourceNotFoundException("Owner not found: " + ownerId));

        // Step 2: 🔐 Role check (IMPORTANT)
        if (owner.getRole() != Role.OWNER) {
            throw new UnauthorizedException("Only OWNER can create turf");
        }

        // Step 3: Set owner
        turf.setOwner(owner);

        // Step 4: Save
        Turf saved = turfRepository.save(turf);

        log.info("Turf created: id={}, name={}", saved.getId(), saved.getName());

        return saved;
    }

    public Turf updateTurf(Long id, Turf turf, Long ownerId) {

        // Step 1: Fetch turf
        Turf existingTurf = turfRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Turf not found: " + id));

        // Step 2: Fetch user
        User owner = userRepository.findById(ownerId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + ownerId));

        // Step 3: Role check
        if (owner.getRole() != Role.OWNER) {
            throw new UnauthorizedException("Only OWNER can update turf");
        }

        // Step 4: Ownership check (VERY IMPORTANT 🔥)
        if (!existingTurf.getOwner().getId().equals(ownerId)) {
            throw new UnauthorizedException("You are not the owner of this turf");
        }

        // Step 5: Update fields (PATCH logic)
        if (turf.getName() != null && !turf.getName().isBlank()) {
            existingTurf.setName(turf.getName());
        }

        if (turf.getArea() != null && !turf.getArea().isBlank()) {
            existingTurf.setArea(turf.getArea());
        }

        if (turf.getCity() != null && !turf.getCity().isBlank()) {
            existingTurf.setCity(turf.getCity());
        }

        if (turf.getAddress() != null && !turf.getAddress().isBlank()) {
            existingTurf.setAddress(turf.getAddress());
        }

        if (turf.getAbout() != null && !turf.getAbout().isBlank()) {
            existingTurf.setAbout(turf.getAbout());
        }

        if (turf.getContactNo() != null && !turf.getContactNo().isBlank()) {
            existingTurf.setContactNo(turf.getContactNo());
        }

        if (turf.getAmenities() != null && !turf.getAmenities().isBlank()) {
            existingTurf.setAmenities(turf.getAmenities());
        }


        if (turf.getSports() != null && !turf.getSports().isBlank()) {
            existingTurf.setSports(turf.getSports());
        }

//        if (turf.getCourtsAndPricePerSlot() != null && !turf.getCourtsAndPricePerSlot().isBlank()) {
//            existingTurf.setCourtsAndPricePerSlot(turf.getCourtsAndPricePerSlot());
//        }

        if (turf.getImageUrl() != null && !turf.getImageUrl().isBlank()) {
            existingTurf.setImageUrl(turf.getImageUrl());
        }

        if (turf.getDistance() != null && !turf.getDistance().isBlank()) {
            existingTurf.setDistance(turf.getDistance());
        }

        if (turf.getAvgRating() != null && !turf.getAvgRating().isBlank()) {
            existingTurf.setAvgRating(turf.getAvgRating());
        }

        if (turf.getNoOfRating() != null && !turf.getNoOfRating().isBlank()) {
            existingTurf.setNoOfRating(turf.getNoOfRating());
        }

        if (turf.getOpeningHour() != null && !turf.getOpeningHour().isBlank()) {
            existingTurf.setOpeningHour(turf.getOpeningHour());
        }

        if (turf.getMapUrl() != null && !turf.getMapUrl().isBlank()) {
            existingTurf.setMapUrl(turf.getMapUrl());
        }



        return turfRepository.save(existingTurf);
    }

    public void deleteTurf(Long id, Long ownerId) {

        // Step 1: Fetch turf
        Turf existingTurf = turfRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Turf not found: " + id));

        // Step 2: Fetch user
        User owner = userRepository.findById(ownerId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + ownerId));

        // Step 3: Role check
        if (owner.getRole() != Role.OWNER) {
            throw new UnauthorizedException("Only OWNER can delete turf");
        }

        // Step 4: Ownership check
        if (!existingTurf.getOwner().getId().equals(ownerId)) {
            throw new UnauthorizedException("You are not the owner of this turf");
        }

        // Step 5: Delete
        turfRepository.deleteById(id);

        log.info("Turf deleted: id={}, name={}", existingTurf.getId(), existingTurf.getName());
    }

    public Turf getTurfById(Long id) {
        return turfRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Turf not found: " + id));
    }

    @Transactional(readOnly = true)
    public TurfDetailResponse getTurfDetailById(Long id) {
        Turf turf = turfRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Turf not found: " + id));

        List<CourtDetailResponse> courts = turf.getCourts()
                .stream()
                .map(this::toCourtDetailResponse)
                .toList();

        return new TurfDetailResponse(
                turf.getId(),
                turf.getName(),
                turf.getArea(),
                turf.getCity(),
                turf.getAddress(),
                turf.getAbout(),
                turf.getContactNo(),
                turf.getAmenities(),
                turf.getSports(),
                turf.getImageUrl(),
                turf.getDistance(),
                turf.getAvgRating(),
                turf.getNoOfRating(),
                turf.getOpeningHour(),
                turf.getMapUrl(),
                courts
        );
    }

    public Page<Turf> searchTurfs(String turfSports, String city, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        if (turfSports != null && city != null)
            return turfRepository.findBySportsAndCity(turfSports, city, pageable);
        if (turfSports != null)
            return turfRepository.findBySports(turfSports, pageable);
        if (city != null)
            return turfRepository.findByCity(city, pageable);
        return turfRepository.findAll(pageable);
    }

    public List<Turf> getOwnerTurfs(Long ownerId) {
        return turfRepository.findByOwnerId(ownerId);
    }

    private CourtDetailResponse toCourtDetailResponse(Court court) {
        List<SlotDetailResponse> slots = court.getSlots()
                .stream()
                .map(this::toSlotDetailResponse)
                .toList();

        return new CourtDetailResponse(
                court.getId(),
                court.getName(),
                court.getCourtType(),
                court.getPricePerSlot(),
                court.getIsActive(),
                slots
        );
    }

    private SlotDetailResponse toSlotDetailResponse(Slot slot) {
        return new SlotDetailResponse(
                slot.getId(),
                slot.getStartTime(),
                slot.getEndTime()
        );
    }
}

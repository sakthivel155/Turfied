package com.turfied.turfied_backend.service;

import com.turfied.turfied_backend.dto.request.BookingRequest;
import com.turfied.turfied_backend.dto.response.BookingResponse;
import com.turfied.turfied_backend.entity.Booking;
import com.turfied.turfied_backend.entity.Court;
import com.turfied.turfied_backend.entity.Slot;
import com.turfied.turfied_backend.entity.Turf;
import com.turfied.turfied_backend.entity.User;
import com.turfied.turfied_backend.enums.BookingStatus;
import com.turfied.turfied_backend.enums.Role;
import com.turfied.turfied_backend.exception.ResourceNotFoundException;
import com.turfied.turfied_backend.exception.SlotNotAvailableException;
import com.turfied.turfied_backend.exception.UnauthorizedException;
import com.turfied.turfied_backend.repository.BookingRepository;
import com.turfied.turfied_backend.repository.SlotRepository;
import com.turfied.turfied_backend.repository.TurfRepository;
import com.turfied.turfied_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookingService {

    private final BookingRepository bookingRepository;
    private final UserRepository userRepository;
    private final TurfRepository turfRepository;
    private final SlotRepository slotRepository;

    @Transactional
    public BookingResponse createBooking(BookingRequest request) {
        User user = userRepository.findById(request.userId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "User not found: " + request.userId()));

        if (user.getRole() != Role.USER) {
            throw new UnauthorizedException("Only USER can create bookings");
        }

        Turf turf = turfRepository.findById(request.turfId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Turf not found: " + request.turfId()));

        Slot slot = slotRepository.findById(request.slotId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Slot not found: " + request.slotId()));

        Court court = slot.getCourt();
        if (court == null || !court.getId().equals(request.courtId())) {
            throw new ResourceNotFoundException(
                    "Slot " + request.slotId() + " does not belong to court " + request.courtId());
        }

        if (court.getTurf() == null || !court.getTurf().getId().equals(turf.getId())) {
            throw new ResourceNotFoundException(
                    "Court " + request.courtId() + " does not belong to turf " + request.turfId());
        }

        boolean alreadyBooked = bookingRepository.existsBySlotIdAndBookingDateAndStatusNot(
                slot.getId(),
                request.bookingDate(),
                BookingStatus.CANCELLED
        );

        if (alreadyBooked) {
            throw new SlotNotAvailableException(
                    "Court " + court.getName()
                            + " slot " + slot.getStartTime() + " - " + slot.getEndTime()
                            + " is already booked on " + request.bookingDate()
            );
        }

        Booking booking = Booking.builder()
                .user(user)
                .slot(slot)
                .bookingDate(request.bookingDate())
                .status(BookingStatus.CONFIRMED)
                .build();

        Booking saved = bookingRepository.save(booking);

        log.info(
                "Booking created - id: {}, turf: {}, court: {}, slot: {}-{}, date: {}",
                saved.getId(),
                turf.getName(),
                court.getName(),
                slot.getStartTime(),
                slot.getEndTime(),
                request.bookingDate()
        );

        return toResponse(saved);
    }

    public List<BookingResponse> getUserBookings(Long userId) {
        userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + userId));

        return bookingRepository.findByUserId(userId)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    @Transactional
    public BookingResponse cancelBooking(Long bookingId, Long userId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Booking not found: " + bookingId));

        if (!booking.getUser().getId().equals(userId)) {
            throw new RuntimeException("You can only cancel your own bookings");
        }

        if (booking.getStatus() == BookingStatus.CANCELLED) {
            throw new RuntimeException("Booking is already cancelled");
        }

        booking.setStatus(BookingStatus.CANCELLED);
        Booking updated = bookingRepository.save(booking);

        log.info("Booking cancelled - id: {}", bookingId);

        return toResponse(updated);
    }

    public List<Slot> getAvailableSlots(Long turfId, LocalDate date) {
        turfRepository.findById(turfId)
                .orElseThrow(() -> new ResourceNotFoundException("Turf not found: " + turfId));

        List<Slot> allSlots = slotRepository.findByCourtTurfId(turfId);

        List<Long> bookedSlotIds = bookingRepository
                .findActiveBookingsByTurfAndDate(turfId, date)
                .stream()
                .map(booking -> booking.getSlot().getId())
                .toList();

        return allSlots.stream()
                .filter(slot -> !bookedSlotIds.contains(slot.getId()))
                .toList();
    }

    private BookingResponse toResponse(Booking booking) {
        Turf turf = booking.getSlot().getCourt().getTurf();

        return new BookingResponse(
                booking.getId(),
                turf.getName(),
                booking.getSlot().getCourt().getName(),
                turf.getCity(),
                turf.getSports(),
                booking.getSlot().getStartTime(),
                booking.getSlot().getEndTime(),
                booking.getBookingDate(),
                booking.getStatus()
        );
    }
}

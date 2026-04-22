package com.turfied.turfied_backend.repository;

import com.turfied.turfied_backend.entity.Booking;
import com.turfied.turfied_backend.enums.BookingStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    boolean existsBySlotIdAndBookingDateAndStatusNot(
            Long slotId,
            LocalDate bookingDate,
            BookingStatus status
    );

    List<Booking> findByUserId(Long userId);

    @Query("""
        SELECT b FROM Booking b
        WHERE b.slot.court.turf.id = :turfId
        AND b.bookingDate = :date
        AND b.status != 'CANCELLED'
    """)
    List<Booking> findActiveBookingsByTurfAndDate(
            @Param("turfId") Long turfId,
            @Param("date") LocalDate date
    );
}

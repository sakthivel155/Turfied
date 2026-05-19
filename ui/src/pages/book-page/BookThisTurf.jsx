import Breadcrumb from "../../components/ui/Breadcrumb";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { MdOutlineShoppingCart, MdClose, MdDelete, MdCheckCircleOutline } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import { apiPost } from "../../utils/apiClient";

const BookThisTurf = () => {
    const { turf_id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext) || {};
    
    const [singleTurfBook, setSingleTurfBook] = useState(null);
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [availableSlotIds, setAvailableSlotIds] = useState([]);
    
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isBooking, setIsBooking] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth >= 600) {
                setIsCheckoutOpen(true);
            }
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        const fetchTurf = async () => {
            try {
                const response = await fetch(`/api/v1/turfs/${turf_id}`);
                if (!response.ok) throw new Error("Failed to fetch turf");
                const data = await response.json();
                setSingleTurfBook(data);
            } catch (error) {
                console.error("Error fetching turf details:", error);
            }
        };
        if (turf_id) {
            fetchTurf();
        }
    }, [turf_id]);

    useEffect(() => {
        if (selectedDate && turf_id) {
            const fetchAvailableSlots = async () => {
                try {
                    const response = await fetch(`/api/v1/bookings/available-slots?turfId=${turf_id}&date=${selectedDate}`);
                    if (response.ok) {
                        const data = await response.json();
                        setAvailableSlotIds(data.map(slot => slot.id));
                    }
                } catch (error) {
                    console.error("Error fetching available slots:", error);
                }
            };
            fetchAvailableSlots();
            setSelectedSlots([]);
        } else {
            setAvailableSlotIds([]);
            setSelectedSlots([]);
        }
    }, [selectedDate, turf_id]);

    if (!singleTurfBook) {
        return null;
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    const convertToArray = (str) => {
        if (Array.isArray(str)) return str;
        if (typeof str !== 'string') return [];
        return str.replace(/^{|}$/g, '')
            .split(',')
            .map(item => item.replace(/"/g, '').trim())
            .filter(item => item.length > 0);
    };

    const sportsArray = convertToArray(singleTurfBook.sports);

    const handleSlotToggle = (court, slot) => {
        if (!selectedDate) {
            alert("Please select a date first");
            return;
        }
        if (!availableSlotIds.includes(slot.id)) {
            return; // Slot is booked
        }

        const exists = selectedSlots.findIndex(s => s.court.id === court.id && s.slot.id === slot.id);
        if (exists >= 0) {
            setSelectedSlots(prev => prev.filter((_, i) => i !== exists));
        } else {
            setSelectedSlots(prev => [...prev, { court, slot }]);
        }
    };

    const removeCheckoutItem = (courtId, slotId) => {
        setSelectedSlots(prev => prev.filter(s => !(s.court.id === courtId && s.slot.id === slotId)));
    };

    const checkoutTotal = selectedSlots.reduce((acc, item) => acc + item.court.pricePerSlot, 0);

    const handleCheckout = async () => {
        if (!user) {
            alert("Please login to book slots.");
            return;
        }
        if (selectedSlots.length === 0) {
            alert("Please select at least one time slot.");
            return;
        }
        
        setIsBooking(true);
        try {
            const promises = selectedSlots.map(selection => {
                return apiPost('/api/v1/bookings', {
                    userId: user.id,
                    turfId: parseInt(turf_id),
                    courtId: selection.court.id,
                    slotId: selection.slot.id,
                    bookingDate: selectedDate
                });
            });
            
            await Promise.all(promises);
            alert("Booking successful!");
            setSelectedSlots([]);
            
            // Refresh available slots for the selected date
            const response = await fetch(`/api/v1/bookings/available-slots?turfId=${turf_id}&date=${selectedDate}`);
            if (response.ok) {
                const data = await response.json();
                setAvailableSlotIds(data.map(slot => slot.id));
            }
        } catch (error) {
            console.error("Error booking:", error);
            alert("Failed to book some slots. They might have been already booked.");
        } finally {
            setIsBooking(false);
        }
    };

    const checkoutContent = (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto pr-2">
                {selectedSlots.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {selectedSlots.map((item, idx) => {
                            const startH = parseInt(item.slot.startTime.split(':')[0]);
                            let endH = parseInt(item.slot.endTime.split(':')[0]);
                            if (endH === 0 && item.slot.endTime === '00:00:00') endH = 24;
                            const durationHrs = endH - startH;
                            const displayDuration = durationHrs >= 1 ? durationHrs : 1;
                            const displaySlot = `${item.slot.startTime.substring(0,5)} - ${item.slot.endTime.substring(0,5)}`;
                            
                            // Use first sport as fallback since we removed the sport selector
                            const sportName = sportsArray.length > 0 ? sportsArray[0] : "Sport";

                            return (
                                <div key={`${item.court.id}-${item.slot.id}`} className="border border-gray-200 rounded-lg p-3 bg-gray-50 relative">
                                    <button 
                                        type="button"
                                        onClick={() => removeCheckoutItem(item.court.id, item.slot.id)}
                                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <MdDelete className="text-xl" />
                                    </button>
                                    <div className="font-bold text-gray-800 mb-1 capitalize">{sportName}</div>
                                    <div className="text-sm text-gray-600 mb-2 font-medium flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {selectedDate}
                                    </div>
                                    <div className="flex justify-between items-center bg-white border border-gray-200 rounded px-2 py-2 shadow-sm mb-2">
                                        <span className="text-[11px] font-bold text-gray-700">{item.court.name}</span>
                                        <span className="text-[10px] bg-[#02B661] bg-opacity-10 text-[#02B661] px-1.5 py-0.5 rounded font-mono font-semibold">{displaySlot}</span>
                                    </div>
                                    <div className="flex justify-between items-end pt-2 border-t border-gray-100">
                                        <div className="text-[11px] text-gray-500 font-medium tracking-wide">
                                            {formatPrice(item.court.pricePerSlot / displayDuration)} × {displayDuration} hr
                                        </div>
                                        <div className="font-black text-base text-[#02B661]">
                                            {formatPrice(item.court.pricePerSlot)}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 py-10 flex flex-col items-center">
                        <MdCheckCircleOutline className="text-4xl text-gray-300 mb-2" />
                        <p>No slots selected</p>
                    </div>
                )}
            </div>
            {selectedSlots.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-gray-700">Total:</span>
                        <span className="font-black text-xl text-[#02B661]">{formatPrice(checkoutTotal)}</span>
                    </div>
                    <button 
                        onClick={handleCheckout} 
                        disabled={isBooking}
                        className={`w-full font-bold py-3 rounded-lg shadow-md transition-colors ${isBooking ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#02B661] hover:bg-primary-green text-white'}`}
                    >
                        {isBooking ? 'Booking...' : 'Confirm Booking'}
                    </button>
                </div>
            )}
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen pb-24 tablet:pb-8">
            <main className="max-w-7xl mx-auto px-4 pt-3">
                <Breadcrumb />
                <div className="flex flex-col tablet:flex-row gap-6 mt-4 relative">
                    <div className="flex-1 border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden mb-20 tablet:mb-0">
                        <div className="px-5 py-4 border-b border-gray-100 bg-white">
                            <h2 className="font-black text-2xl text-gray-800">{singleTurfBook.name}</h2>
                            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {singleTurfBook.city}
                            </p>
                        </div>
                        <div className="flex items-center w-full px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#4DD320] to-[#02B661]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
                            </svg>
                            Earn 3 karma points on every booking!
                        </div>
                        <div className="px-5 py-6 space-y-5">
                            <div className="w-full">
                                <label htmlFor="date" className="block mb-2 text-sm font-semibold text-gray-700">Select Booking Date</label>
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#02B661] focus:border-transparent"
                                />
                            </div>

                            {selectedDate && (
                                <div className="mt-6">
                                    <label className="block mb-3 text-sm font-semibold text-gray-700">Available Courts & Time Slots</label>
                                    <div className="flex flex-col gap-4">
                                        {singleTurfBook.courts && singleTurfBook.courts.map((court, idx) => (
                                            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                                <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-2">
                                                    <div className="flex flex-col">
                                                        <h3 className="font-bold text-gray-800 text-sm">{court.name}</h3>
                                                        {court.courtType && <span className="text-[10px] text-gray-500">{court.courtType.replace(/_/g, ' ')}</span>}
                                                    </div>
                                                    <span className="text-xs font-semibold text-[#02B661] bg-[#02B661] bg-opacity-10 px-2 py-1 rounded">
                                                        {formatPrice(court.pricePerSlot)} / slot
                                                    </span>
                                                </div>
                                                
                                                {court.slots && court.slots.length > 0 ? (
                                                    <div className="flex flex-wrap gap-2">
                                                        {court.slots.map((slot, sIdx) => {
                                                            const isAvailable = availableSlotIds.includes(slot.id);
                                                            const isSelected = selectedSlots.some(s => s.court.id === court.id && s.slot.id === slot.id);
                                                            
                                                            const sH = parseInt(slot.startTime.split(':')[0]);
                                                            const sM = slot.startTime.split(':')[1];
                                                            const eH = parseInt(slot.endTime.split(':')[0]);
                                                            const eM = slot.endTime.split(':')[1];
                                                            
                                                            const formatTime = (h, m) => {
                                                                const ampm = h >= 12 && h < 24 ? 'PM' : 'AM';
                                                                const hour12 = h % 12 || 12;
                                                                return `${hour12}:${m} ${ampm}`;
                                                            };
                                                            
                                                            const displayS = formatTime(sH, sM);
                                                            const displayE = formatTime(eH, eM);
                                                            
                                                            return (
                                                                <button
                                                                    type="button"
                                                                    key={sIdx}
                                                                    onClick={() => handleSlotToggle(court, slot)}
                                                                    disabled={!isAvailable}
                                                                    className={`px-3 py-2 rounded-md text-[11px] font-semibold border transition-all ${
                                                                        !isAvailable
                                                                            ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed line-through'
                                                                            : isSelected 
                                                                                ? 'bg-[#02B661] border-[#02B661] text-white shadow-md transform scale-105' 
                                                                                : 'bg-gray-50 border-gray-300 text-gray-600 hover:border-[#02B661] hover:text-[#02B661] hover:bg-white hover:shadow-sm'
                                                                    }`}
                                                                    title={!isAvailable ? "Already booked" : "Available to book"}
                                                                >
                                                                    {displayS} - {displayE}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                ) : (
                                                    <p className="text-xs text-gray-400 italic">No slots available for this court.</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {!selectedDate && (
                                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-blue-700 text-sm flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    Please select a date to view available courts and time slots.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Desktop/Tablet Checkout */}
                    <div className="hidden tablet:block w-80 shrink-0">
                        <div className="sticky top-20 bg-white border border-gray-200 shadow-sm rounded-xl p-5 h-[calc(100vh-120px)] flex flex-col">
                            <h3 className="font-black text-xl border-b border-gray-100 pb-3 mb-4 text-gray-800">
                                Checkout <span className="text-[#02B661]">({selectedSlots.length})</span>
                            </h3>
                            {checkoutContent}
                        </div>
                    </div>

                    {/* Mobile Checkout Overlay */}
                    {isCheckoutOpen && (
                        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex flex-col justify-end tablet:hidden transition-opacity">
                            <div className="bg-white w-full rounded-t-2xl p-5 max-h-[85vh] flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
                                <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                                    <h3 className="font-black text-xl text-gray-800">
                                        Checkout <span className="text-[#02B661]">({selectedSlots.length})</span>
                                    </h3>
                                    <button 
                                        onClick={() => setIsCheckoutOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <MdClose className="text-2xl text-gray-500" />
                                    </button>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    {checkoutContent}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Mobile sticky bottom bar */}
            {!isCheckoutOpen && (
                <div className="fixed z-40 bottom-0 left-0 py-3 px-5 w-full bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] tablet:hidden flex justify-between items-center">
                    <div>
                        <p className="text-xs text-gray-500 font-medium mb-0.5">{selectedSlots.length} slots</p>
                        <p className="font-black text-lg text-gray-800">{formatPrice(checkoutTotal)}</p>
                    </div>
                    <button 
                        onClick={() => setIsCheckoutOpen(true)} 
                        className="flex items-center gap-2 bg-[#02B661] hover:bg-primary-green text-white px-6 py-2.5 rounded-lg font-bold shadow-md transition-colors"
                    >
                        <MdCheckCircleOutline className="text-xl" />
                        View Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default BookThisTurf;
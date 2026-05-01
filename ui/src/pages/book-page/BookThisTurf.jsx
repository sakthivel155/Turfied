import Breadcrumb from "../../components/ui/Breadcrumb";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { MdOutlineShoppingCart, MdClose, MdCheck, MdDelete } from "react-icons/md";

const BookThisTurf = ({ turfs }) => {
    const { turf_id } = useParams();
    const [singleTurfBook, setSingleTurfBook] = useState(null);
    const [selectedSlots, setSelectedSlots] = useState([]);



    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const dropdownRef = useRef(null);

    const handleCartSubmit = (e) => {
        e.preventDefault();

        if (selectedSlots.length === 0) {
            alert("Please select at least one time slot.");
            return;
        }

        if (!e.target.date.value) {
            alert("Please select a date.");
            return;
        }

        const newCartItems = selectedSlots.map(selection => {
            const startH = parseInt(selection.slot.startTime.split(':')[0]);
            let endH = parseInt(selection.slot.endTime.split(':')[0]);
            if (endH === 0 && selection.slot.endTime === '00:00:00') endH = 24;
            const durationHrs = endH - startH;
            
            return {
                id: Date.now() + Math.random(),
                Sport: e.target.sports.value,
                Date: e.target.date.value,
                CourtName: selection.court.name,
                SlotString: `${selection.slot.startTime.substring(0,5)} - ${selection.slot.endTime.substring(0,5)}`,
                Price: selection.court.pricePerSlot,
                Duration: durationHrs >= 1 ? durationHrs : 1
            };
        });

        setCartItems([...cartItems, ...newCartItems]);
        setSelectedSlots([]);
    };

    const removeCartItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const cartTotal = cartItems.reduce((acc, item) => acc + item.Price, 0);

    const handleSlotToggle = (court, slot) => {
        const exists = selectedSlots.findIndex(s => s.court.id === court.id && s.slot.id === slot.id);
        if (exists >= 0) {
            setSelectedSlots(prev => prev.filter((_, i) => i !== exists));
        } else {
            setSelectedSlots(prev => [...prev, { court, slot }]);
        }
    };
    useEffect(() => {

        const checkScreenSize = () => {

            if (window.innerWidth >= 600) {
                setIsCartOpen(true);
            }
        };

        // Check initial screen size
        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup event listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    useEffect(() => {
        const fetchTurf = async () => {
            try {
                const response = await fetch(`/api/v1/turfs/${turf_id}`);
                if (!response.ok) throw new Error("Failed to fetch turf");
                const data = await response.json();
                setSingleTurfBook(data);
                // auto-select handled via UI render
            } catch (error) {
                console.error("Error fetching turf details:", error);
            }
        };

        fetchTurf();

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsCourtOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [turf_id]);

    if (!singleTurfBook) {
        return null;
    }

    // Slots explicitly handled via selection logic

    const handleCartOpen = () => {

        setIsCartOpen(!isCartOpen);

    };



    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };
    const convertToArray = (str) => {
        if (Array.isArray(str)) return str; // If already an array, return as is

        if (typeof str !== 'string') return []; // If not a string, return empty array

        // Remove curly braces at beginning and end
        const withoutBraces = str.replace(/^{|}$/g, '');

        // Split by comma, clean up each item
        return withoutBraces
            .split(',')
            .map(item => item.replace(/"/g, '').trim())
            .filter(item => item.length > 0);
    };

    // Parse the availableSport string into an array
    const sportsArray = convertToArray(singleTurfBook.sports);

    const cartContent = (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto pr-2">
                {cartItems.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="border border-gray-200 rounded-lg p-3 bg-gray-50 relative">
                                <button 
                                    type="button"
                                    onClick={() => removeCartItem(item.id)}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                                >
                                    <MdDelete className="text-xl" />
                                </button>
                                <div className="font-bold text-gray-800 mb-1">{item.Sport}</div>
                                <div className="text-sm text-gray-600 mb-2 font-medium flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {item.Date}
                                </div>
                                <div className="flex justify-between items-center bg-white border border-gray-200 rounded px-2 py-2 shadow-sm mb-2">
                                    <span className="text-[11px] font-bold text-gray-700">{item.CourtName}</span>
                                    <span className="text-[10px] bg-[#02B661] bg-opacity-10 text-[#02B661] px-1.5 py-0.5 rounded font-mono font-semibold">{item.SlotString}</span>
                                </div>
                                <div className="flex justify-between items-end pt-2 border-t border-gray-100">
                                    <div className="text-[11px] text-gray-500 font-medium tracking-wide">
                                        {formatPrice(item.Price / item.Duration)} × {item.Duration} hr
                                    </div>
                                    <div className="font-black text-base text-[#02B661]">
                                        {formatPrice(item.Price)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 py-10 flex flex-col items-center">
                        <MdOutlineShoppingCart className="text-4xl text-gray-300 mb-2" />
                        <p>Your cart is empty</p>
                    </div>
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-gray-700">Total:</span>
                        <span className="font-black text-xl text-[#02B661]">{formatPrice(cartTotal)}</span>
                    </div>
                    <button className="w-full bg-[#02B661] hover:bg-primary-green text-white font-bold py-3 rounded-lg shadow-md transition-colors">
                        Proceed to Checkout
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
                        <form method="post" className="px-5 py-6 space-y-5" onSubmit={handleCartSubmit}>
                            <div>
                                <label htmlFor="sports" className="block mb-2 text-sm font-semibold text-gray-700">Sports</label>
                                <div className="relative">
                                    <select
                                        id="sports"
                                        name="sports"
                                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg capitalize outline-none focus:ring-2 focus:ring-[#02B661] focus:border-transparent appearance-none"
                                    >
                                        {sportsArray.map((sport, index) => (
                                            <option className="capitalize" key={index} value={sport}>{sport}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full">
                                <label htmlFor="date" className="block mb-2 text-sm font-semibold text-gray-700">Date</label>
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#02B661] focus:border-transparent"
                                />
                            </div>

                            <div className="mt-6">
                                <label className="block mb-3 text-sm font-semibold text-gray-700">Select Courts & Time Slots</label>
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
                                                                className={`px-3 py-2 rounded-md text-[11px] font-semibold border transition-all ${
                                                                    isSelected 
                                                                        ? 'bg-[#02B661] border-[#02B661] text-white shadow-md transform scale-105' 
                                                                        : 'bg-gray-50 border-gray-300 text-gray-600 hover:border-[#02B661] hover:text-[#02B661] hover:bg-white hover:shadow-sm'
                                                                }`}
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



                            <div className="pt-4">
                                <button type="submit" className="w-full bg-[#02B661] hover:bg-primary-green text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2">
                                    <MdOutlineShoppingCart className="text-xl" />
                                    Add To Cart
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Desktop/Tablet Cart */}
                    <div className="hidden tablet:block w-80 shrink-0">
                        <div className="sticky top-20 bg-white border border-gray-200 shadow-sm rounded-xl p-5 h-[calc(100vh-120px)] flex flex-col">
                            <h3 className="font-black text-xl border-b border-gray-100 pb-3 mb-4 text-gray-800">
                                Cart <span className="text-[#02B661]">({cartItems.length})</span>
                            </h3>
                            {cartContent}
                        </div>
                    </div>

                    {/* Mobile Cart Overlay */}
                    {isCartOpen && (
                        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex flex-col justify-end tablet:hidden transition-opacity">
                            <div className="bg-white w-full rounded-t-2xl p-5 max-h-[85vh] flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
                                <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                                    <h3 className="font-black text-xl text-gray-800">
                                        Cart <span className="text-[#02B661]">({cartItems.length})</span>
                                    </h3>
                                    <button 
                                        onClick={() => setIsCartOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <MdClose className="text-2xl text-gray-500" />
                                    </button>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    {cartContent}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Mobile sticky bottom bar */}
            {!isCartOpen && (
                <div className="fixed z-40 bottom-0 left-0 py-3 px-5 w-full bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] tablet:hidden flex justify-between items-center">
                    <div>
                        <p className="text-xs text-gray-500 font-medium mb-0.5">{cartItems.length} items</p>
                        <p className="font-black text-lg text-gray-800">{formatPrice(cartTotal)}</p>
                    </div>
                    <button 
                        onClick={() => setIsCartOpen(true)} 
                        className="flex items-center gap-2 bg-[#02B661] hover:bg-primary-green text-white px-6 py-2.5 rounded-lg font-bold shadow-md transition-colors"
                    >
                        <MdOutlineShoppingCart className="text-xl" />
                        View Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default BookThisTurf;
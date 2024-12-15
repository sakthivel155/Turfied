import Breadcrumb from "../../components/ui/Breadcrumb";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { turfs } from "../../data/turfDetails";
import { MdOutlineShoppingCart, MdClose, MdCheck } from "react-icons/md";

const BookThisTurf = () => {
    const { turf_id } = useParams();
    const [singleTurfBook, setSingleTurfBook] = useState(null);
    const [duration, setDuration] = useState(1);
    const [selectedTime, setSelectedTime] = useState('00:00');
    const [isCourtOpen, setIsCourtOpen] = useState(false);
    const [selectedCourts, setSelectedCourts] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);



    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const dropdownRef = useRef(null);

    const handleCartSubmit = (e) => {
        e.preventDefault();
        setCartItems([...cartItems, {
            id: cartItems.length + 1,
            Sport: e.target.sports.value,
            Date: e.target.date.value,
            Time: e.target.time.value,    
            Courts: selectedCourts,
        }]);
        setSelectedCourts([])


    }
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
       

        const numericId = Number(turf_id);
        const foundTurf = turfs.find((turf) => turf.turf_id === numericId);
        setSingleTurfBook(foundTurf);

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

    const courts = Object.entries(singleTurfBook.turf_courts_and_price).map(([court, price]) => ({
        name: court,
        price: price
    }));

    const handleDurationChange = (increment) => {
        setDuration(prev => {
            const newValue = prev + increment;
            return newValue >= 1 ? newValue : 1;
        });
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleCourtSelect = (court, price) => {
        if (selectedCourts.includes(court)) {
            setSelectedCourts(selectedCourts.filter(c => c !== court));
            setSelectedPrices(selectedPrices.filter(p => p !== price));
        } else {
            setSelectedCourts([...selectedCourts, court]);
            setSelectedPrices([...selectedPrices, price]);
        }
    };

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

    return (
        <div>

        
            <main className="mt-3 ">
                <Breadcrumb /> 
              <div className="tablet:flex">  
                <div className="w-[95%] mx-auto border-2 border-gray-300 mt-3 rounded-lg mb-20">
                    <div className="px-3 py-3">
                        <h2 className="font-black text-sm">{singleTurfBook.turf_name}</h2>
                        <p className="text-sm">{singleTurfBook.turf_place}</p>
                    </div>
                    <div className="flex items-center w-full px-4 py-1 text-md font-medium text-white bg-gradient-to-r from-[#4DD320] to-[#02B661]">
                        Earn 3 karma points on every booking!
                    </div>
                    <form method="post" className="px-3 py-4 " onSubmit={handleCartSubmit}>
                        <label htmlFor="sports" className="block mb-2 text-md">Sports</label>
                        <div className="p-2 bg-white rounded-lg border mb-3">
                            <select
                                id="sports"
                                name="sports"
                                className="w-full capitalize outline-none"
                            >
                                {singleTurfBook.turf_sports.map((sport, index) => (
                                    <option className="capitalize" key={index} value={sport}>{sport}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="block mb-2 text-md">Date</label>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="time" className="block mb-2 text-md">Time</label>
                            <input
                                id="time"
                                name="time"
                                type="time"
                                value={selectedTime}
                                onChange={handleTimeChange}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="duration" className="block mb-2 text-md">Duration</label>
                            <div className="flex items-center ml-12 gap-3">
                                <button
                                    type="button"
                                    onClick={() => handleDurationChange(-1)}
                                    className="px-3 py-1 border border-gray-300 rounded-full bg-[#02B661] hover:bg-primary-green text-white"
                                >
                                    -
                                </button>
                                <span>{duration}hr</span>
                                <button
                                    type="button"
                                    onClick={() => handleDurationChange(1)}
                                    className="px-3 py-1 border border-gray-300 rounded-full bg-[#02B661] hover:bg-primary-green text-white"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="mb-3 relative" ref={dropdownRef}>
                            <label htmlFor="court" className="block mb-2 text-md">Court</label>
                            <div className="relative">
                                <input
                                    id="court"
                                    name="court"
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none cursor-pointer pr-10"
                                    placeholder="--Select Court(s)--"
                                    value=""
                                    onClick={() => setIsCourtOpen(!isCourtOpen)}
                                    readOnly
                                />
                                <div 
                                    className={`absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-200 ${
                                        isCourtOpen ? 'rotate-180' : ''
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {isCourtOpen && (
                                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-[205px] overflow-auto scrollbar">
                                    {courts.map((court, index) => (
                                        <div
                                            key={index}
                                            className={ selectedCourts.includes(court.name) ? "bg-[#02B661] text-white px-4 py-2 flex items-center justify-between m-1 rounded-lg" : " mb-1 px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between "}
                                            onClick={() => handleCourtSelect(court.name, court.price)}
                                        >
                                            <div className="flex items-center">
                                                <span>{court.name}</span>
                                            </div>
                                            <span className="text-[#02B661] font-medium flex items-center">
                                                {selectedCourts.includes(court.name) ? <MdCheck className="ml-2 text-white hover:text-red-500 cursor-pointer text-2xl"/> : formatPrice(court.price)}
                                            </span>
                                            
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            {selectedCourts.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {selectedCourts.map((court, index) => (
                                        <div
                                            key={index}
                                            className="px-2 py-1 border border-gray-500  bg-gray-300 text-xs rounded-full flex items-center"
                                        >
                                            <span>{court}</span>
                                            <MdClose
                                                className="ml-2 cursor-pointer hover:text-red-500"
                                                onClick={() => handleCourtSelect(court, selectedPrices[index])}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="w-full bg-[#02B661] hover:bg-primary-green text-white font-black py-2 px-4 rounded">
                                Add To Cart
                            </button>
                        </div>
                    </form>
                </div>
                {isCartOpen && (
                <div className="fixed z-40 top-[50%] left-0 w-full bg-white shadow-lg rounded-lg p-4 max-h-60 overflow-y-scroll scrollbar tablet:relative" >
                    {cartItems.length > 0 ? (
                        <div>
                            {cartItems.map((item, index) => (
                                
                                <div key={index} >
                                    
                                    <div className="flex justify-between">
                                            <h3>Cart({cartItems.length})</h3>
                                            <MdClose className="text-2xl hover:text-red-500 cursor-pointer" onClick={() => setCartItems([])} />
                                        </div>
                                    <div className="">
                                        
                                        {item.Sport}
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500">Cart is empty</div>
                    )}
                </div>
            )}
                </div>
            </main>
            <div className="sticky z-30 bottom-0 left-0 py-5 px-4 w-full bg-white tablet:hidden flex justify-between items-center">
                <MdOutlineShoppingCart className="text-2xl" onClick={handleCartOpen} />
               
            </div>
        </div>
    );
};

export default BookThisTurf;
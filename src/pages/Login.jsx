import  { useState, useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import PropTypes from 'prop-types';

function Login({ onClose }) {
    const [countryCode, setCountryCode] = useState("+91");
    const [mobileNo, setMobileNo] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const mobileInputRef = useRef(null);
    const loginFormRef = useRef(null);

    useEffect(() => {
        if (mobileInputRef.current) {
            mobileInputRef.current.focus();
        }
        const timer = setTimeout(() => setIsVisible(true), 100);
        
        const handleClickOutside = (event) => {
            if (loginFormRef.current && !loginFormRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            clearTimeout(timer);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-end tablet:pr-10 bg-black bg-opacity-50">
            <div 
                ref={loginFormRef}
                className={`relative w-full bg-white shadow-lg transform 
                    ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} 
                    transition-all duration-300 ease-out
                    h-screen tablet:h-auto tablet:max-w-md tablet:rounded-lg tablet:mt-20 laptop:mt-24 laptop:w-96    
                    ${isVisible ? 'top-down-slide-enter-active' : 'top-down-slide-enter'}`}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 left-4 text-gray-600 hover:text-gray-800 laptop:hidden"
                    aria-label="Close"
                >
                    <FaArrowLeft className="text-xl" />
                </button>
                <div className="px-8 py-12 h-full overflow-y-auto">
                    <h2 className="font-black text-3xl mb-8">Get Started with Turfied</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="flex border-2 p-3 outline-none gap-2 text-lg rounded-lg mb-4">
                            <input
                                type="text"
                                name="countryCode"
                                id="countryCode"
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="w-[35px] outline-none font-semibold"
                            />
                            <div className="text-[#8e8e8e]">|</div>
                            <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                value={mobileNo}
                                onChange={(e) => setMobileNo(e.target.value)}
                                className="w-full outline-none placeholder:text-[1rem] placeholder:font-normal font-semibold"
                                placeholder="Enter mobile number"
                                ref={mobileInputRef}
                            />
                        </div>
                        <button type="submit" className="font-semibold text-white bg-[#1AB65C] w-full py-3 rounded-md mb-6 hover:bg-[#159c4d] transition-colors duration-200">
                            Continue
                        </button>
                    </form>
                    <div className="flex items-center mb-6">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-4 text-sm text-gray-500">OR</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>
                    <button className="flex items-center justify-center w-full border-2 p-3 rounded-lg mb-6 hover:bg-gray-50 transition-colors duration-200">
                        <FcGoogle className="text-2xl mr-2" />
                        <span className="font-semibold text-sm">Continue with Google</span>
                    </button>
                    <p className="text-center text-sm text-gray-600">
                        By continuing, you agree to our <span className="font-bold">Terms</span> and <span className="font-bold">Conditions</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

Login.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default Login;
import { useState, useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import PropTypes from 'prop-types';
import OtpInput from "../components/ui/OtpInput";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Login({ onClose }) {
    const [phoneNo, setPhoneNo] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    const phoneInputRef = useRef(null);
    const loginFormRef = useRef(null);

    useEffect(() => {
        if (phoneInputRef.current) {
            phoneInputRef.current.focus();
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
    
    const handlePhoneInputClick = (event) => {
        // Prevent the click event from propagating to the document
        event.stopPropagation();
        if (phoneInputRef.current) {
            phoneInputRef.current.focus();
        }
    };

    const handleSubmit = () => {
    
        const regex = /[^0-9]/g;
        if (phoneNo.length < 10 || regex.test(phoneNo) ) {
            alert("Invalid phone number");
            return;
        }
        console.log(phoneNo)
        setShowOtpInput(true) // show otp
    };

    const onOtpSubmit = (otp) => {
        console.log("Successfully logged in", otp);
        // OTP Validation logic here
    };


    return (
        <div className="fixed inset-0 z-50 flex items-start justify-end tablet:pr-10 bg-black bg-opacity-50">
            <div
                ref={loginFormRef}
                className={`relative w-full bg-white shadow-lg transform 
                ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} 
                transition-all duration-300 ease-out
                h-screen tablet:h-auto tablet:w-96 tablet:rounded-lg tablet:mt-20 laptop:w-96    
                ${isVisible ? 'top-down-slide-enter-active' : 'top-down-slide-enter'}`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-8 left-5 text-gray-600 hover:text-gray-800 tablet:hidden"
                    aria-label="Close"
                >
                    <FaArrowLeft className="text-xl" />
                </button>
                <div className="px-8 py-12 h-full overflow-y-auto">
                    <h2 className="font-black text-[2rem] my-10 w-[94%] tablet:mt-0">Get Started with Turfied</h2>
                    {!showOtpInput ? (
                        <div >
                            <div onClick={handlePhoneInputClick}>
                                <PhoneInput
                                    country={'in'}
                                    value={phoneNo}
                                    onChange={(phone) => {
                                        setPhoneNo(phone)
                                        if (phoneInputRef.current) {
                                            phoneInputRef.current.focus()
                                        }
                                    }}
                                    placeholder={"Enter mobile number"}
                                    inputProps={{
                                        ref: phoneInputRef,
                                        required: true,
                                        autoFocus: true
                                    }}
                                    containerStyle={{
                                        width: '100%',
                                        marginBottom:'20px'
                                    }}
                                    inputStyle={{
                                        width: '100%',
                                        height: '40px',
                                        paddingLeft: '42px',
                                        borderRadius: '5px',
                                        border: '1px solid #e2e8f0',
                                        backgroundColor: '#f8fafc',
                                        transition: 'all 0.3s ease'
                                    }}
                                    buttonStyle={{
                                        width: '100%',
                                        Left:'8px',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        borderRight: '1px solid #e2e8f0',
                                        borderTopLeftRadius: '8px',
                                        borderBottomLeftRadius: '8px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    dropdownStyle={{
                                        width: '100%',
                                        padding:'8px',
                                        borderRadius: '5px',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                        border: '1px solid #e2e8f0'
                                    }}
                                />
                            </div>
                            <button onClick={handleSubmit} type="submit" className="font-semibold text-white bg-[#1AB65C] w-full py-3 rounded-md mb-6 hover:bg-[#159c4d] transition-colors duration-200">
                                Continue
                            </button>
                        </div>
                    ) : (
                        <div className="mt-5">
                            <p className="font-semibold text-center">Enter OTP sent to {phoneNo}</p>
                            <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
                        </div>
                    )}

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
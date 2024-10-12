import { useState, useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Login() {
    const [countryCode, setCountryCode] = useState("+91");
    const [mobileNo, setMobileNo] = useState("");
    const navigate = useNavigate();
    const mobileInputRef = useRef(null);

    useEffect(() => {
        // Focus on the mobile number input when the component mounts
        if (mobileInputRef.current) {
            mobileInputRef.current.focus();
        }
    }, []);

    const handleBackClick = () => {
        navigate(-1); // This will navigate to the previous route
    };

    return (
        <section className="absolute z-20 top-0 h-[100vh] w-full bg-white px-5 py-10">
            <FaArrowLeft className="text-xl cursor-pointer" onClick={handleBackClick} />
            <h2 className="font-black text-3xl mt-10">Get Started with Turfied</h2>
            <div className="flex border-2 p-3 outline-none gap-2 text-lg rounded-lg mt-8">
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
                    className="w-full outline-none placeholder:text-[1rem]"
                    placeholder="Enter mobile number"
                    ref={mobileInputRef}
                />
            </div>
            <button className="font-semibold text-white bg-[#1AB65C] w-full py-3 rounded-md mt-3 active:bg-primary-green">
                Continue
            </button>
            <div className="flex justify-between items-center mt-8">
                <div className="bg-gray-300 h-[1.2px] w-[40%]" />
                <span className="text-sm text-[#8e8e8e]">OR</span>
                <div className="bg-gray-300 h-[1.2px] w-[40%]" />
            </div>
            <div className="flex items-center justify-center border-2 p-3 outline-none gap-3 text-md rounded-lg mt-10">
                <FcGoogle className="text-2xl" />
                <button className="font-semibold text-sm">Continue with google</button>
            </div>
            <p className=" text-center w-[80%] mx-auto mt-10">By continuing, you agree to our <span className="font-bold">Terms</span> and <span className="font-bold">Conditions</span></p>
        </section>
    );
}

export default Login;
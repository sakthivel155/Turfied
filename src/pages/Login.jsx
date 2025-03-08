import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash, FaUser, FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import PropTypes from 'prop-types';

function AuthComponent({ onClose }) {
    // Authentication state
    const [authMode, setAuthMode] = useState("login"); // "login" or "signup"
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState("error"); // "error" or "success"

    // User input fields
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [usernameOrEmail, setUsernameOrEmail] = useState(''); 
    
    // UI states
    const [isVisible, setIsVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    // Refs
    const emailInputRef = useRef(null);
    const authFormRef = useRef(null);
    const messageTimerRef = useRef(null);

    useEffect(() => {
        if (emailInputRef.current) {
            emailInputRef.current.focus();
        }
        
        const timer = setTimeout(() => setIsVisible(true), 100);
        
        const handleClickOutside = (event) => {
            if (authFormRef.current && !authFormRef.current.contains(event.target)) {
                onClose();
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            clearTimeout(timer);
            document.removeEventListener('mousedown', handleClickOutside);
            clearTimeout(messageTimerRef.current);
        };
    }, [onClose]);

    // Clear message after 5 seconds
    useEffect(() => {
        if (message) {
            messageTimerRef.current = setTimeout(() => {
                setMessage(null);
            }, 5000);
        }
        return () => clearTimeout(messageTimerRef.current);
    }, [message]);

    const showNotification = (msg, type = "error") => {
        setMessage(msg);
        setMessageType(type);
        
        // Clear any existing timers
        if (messageTimerRef.current) {
            clearTimeout(messageTimerRef.current);
        }
        
        // Set new timer to clear message after 5 seconds
        messageTimerRef.current = setTimeout(() => {
            setMessage(null);
        }, 5000);
    };

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            showNotification("Please enter a valid email address");
            return false;
        }
        return true;
    };

    const validatePassword = () => {
        if (password.length < 8) {
            showNotification("Password must be at least 8 characters long");
            return false;
        }
        return true;
    };

    const validateSignupForm = () => {
        if (!validateEmail()) {
            return false;
        }
        
        if (username.length < 4) {
            showNotification("Username must be at least 4 characters long");
            return false;
        }

        if (!validatePassword()) {
            return false;
        }

        if (password !== confirmPassword) {
            showNotification("Passwords do not match");
            return false;
        }

        return true;
    };

    const handleSubmit = async () => {
        try {
            if (authMode === "login") {
                if (validateEmail() && validatePassword()) {
                    setLoading(true);
                    // Here you would handle email-based login
                    try {
                        const response = await fetch('http://localhost:3000/api/user/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ email, password })
                        });
                        
                        const data = await response.json();
                        
                        if (response.ok) {
                            showNotification(data.message || "Login successful!", "success");
                            // Handle successful login (e.g., redirect, set auth context, etc.)
                            setTimeout(() => {
                                onClose();
                                // Any navigation or auth state updates would go here
                            }, 1500);
                        } else {
                            showNotification(data.message || "Login failed. Please check your credentials.");
                        }
                    } catch (error) {
                        console.error("Login error:", error);
                        showNotification("Connection error. Please try again later.");
                    } finally {
                        setLoading(false);
                    }
                }
            } else if (authMode === "signup") {
                if (validateSignupForm()) {
                    setLoading(true);
                    const newUser = { email, username, password };
                    
                    try {
                        const response = await fetch('http://localhost:3000/api/user/signup', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        });
                        
                        const data = await response.json();
                     
                        if (response.ok) {
                            
                            showNotification(data.message || "Account created successfully!", "success");
                            // Auto-switch to login mode after successful signup
                            setTimeout(() => {
                                setMessage(null);
                            }, 5000);
                        } else {
                    
                            showNotification(data.message || "Signup failed. Please try again.");
                        }
                    } catch (error) {
                        console.error("Signup error:", error);
                        showNotification("Connection error. Please try again later.");
                    } finally {
                        setLoading(false);
                    }
                }
            }
        } catch (error) {
            console.error("Form submission error:", error);
            showNotification("An unexpected error occurred. Please try again.");
            setLoading(false);
        }
    };

    const handleGoogleAuth = () => {
        setLoading(true);
        // Implement Google authentication logic
        try {
            // Simulate Google auth process
            setTimeout(() => {
                showNotification("Google authentication is not implemented yet.", "error");
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error("Google auth error:", error);
            showNotification("Google authentication failed. Please try again.");
            setLoading(false);
        }
    };

    const switchAuthMode = () => {
        setAuthMode(authMode === "login" ? "signup" : "login");
        setPassword("");
        setConfirmPassword("");
        setMessage(null);
    };

    return (
        <div className=" fixed inset-0 z-50 flex items-start justify-end tablet:pr-10  bg-black bg-opacity-50">
            {/* Message Toast */}
            {message && (
                <div className={`fixed top-2 right-0 px-3 w-full py-2 tablet:rounded-l-md tablet:border-l-8 shadow-md z-50 transform transition-all duration-300 animate-fadeIn ${
                    messageType === "success" ? "bg-green-200 tablet:border-green-500 text-green-900 text-lg" : "bg-red-200 tablet:border-red-500 text-red-900 text-lg"
                }`}>
                    {message}
                </div>
            )}

            <div
                ref={authFormRef}
                className={`relative w-full bg-white shadow-lg transform 
                ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} 
                transition-all duration-300 ease-out
                h-screen tablet:h-auto tablet:w-96 tablet:rounded-lg tablet:mt-6 laptop:w-96    
                ${isVisible ? 'top-down-slide-enter-active' : 'top-down-slide-enter'}`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-8 left-5 text-gray-600 hover:text-gray-800 tablet:hidden"
                    aria-label="Close"
                    disabled={loading}
                >
                    <FaArrowLeft className="text-xl" />
                </button>
                <div className="px-8 py-12 h-full overflow-y-auto">
                    <h2 className="font-black text-[2rem] my-6 w-[94%] tablet:mt-0">
                        {authMode === "login" ? "Login to Turfied" : "Sign Up for Turfied"}
                    </h2>
                    
                    <div className="space-y-4 mb-4">
                        {/* Email field - always shown */}
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={`Email `}
                                ref={emailInputRef}
                                className="w-full py-2 px-3 pl-10 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                required
                                disabled={loading}
                                autoComplete="email"
                            />
                            <MdEmail className="absolute left-3 top-3 text-gray-400" />
                        </div>
                        
                        
                        {authMode === "signup" && (
                            <div className="relative">
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Username"
                                    className="w-full py-2 px-3 pl-10 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    required
                                    disabled={loading}
                                    autoComplete="username"
                                />
                                <FaUser className="absolute left-3 top-3 text-gray-400" />
                            </div>
                        )}
                        
                        {/* Password field - always shown */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full py-2 px-3 pl-10 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                required
                                disabled={loading}
                            />
                            <FaLock className="absolute left-3 top-3 text-gray-400" />
                            <button 
                                type="button" 
                                className="absolute right-3 top-3 text-gray-400"
                                onClick={() => setShowPassword(!showPassword)}
                                disabled={loading}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        
                        {/* Confirm Password field - shown only in signup mode */}
                        {authMode === "signup" && (
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                    className="w-full py-2 px-3 pl-10 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    required
                                    disabled={loading}
                                />
                                <FaLock className="absolute left-3 top-3 text-gray-400" />
                                <button 
                                    type="button" 
                                    className="absolute right-3 top-3 text-gray-400"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    disabled={loading}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Forgot Password link - shown only in login mode */}
                    {authMode === "login" && (
                        <div className="flex justify-end mb-4">
                            <button 
                                className="text-sm text-[#1AB65C] hover:underline"
                                disabled={loading}
                            >
                                Forgot Password?
                            </button>
                        </div>
                    )}
                    <button 
                        onClick={handleSubmit} 
                        type="submit" 
                        className={`font-semibold text-white bg-[#1AB65C] w-full py-3 rounded-md mb-4 hover:bg-[#159c4d] transition-colors duration-200 ${
                            loading ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : (authMode === "login" ? "Login" : "Sign Up")}
                    </button>
                    
                    <p className="text-center mb-4">
                        {authMode === "login" 
                            ? "Don't have an account?" 
                            : "Already have an account?"
                        } 
                        <button 
                            onClick={switchAuthMode}
                            className="text-[#1AB65C] font-semibold ml-1 hover:underline"
                            disabled={loading}
                        >
                            {authMode === "login" ? "Sign Up" : "Login"}
                        </button>
                    </p>

                    <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-4 text-sm text-gray-500">OR</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>
                    
                    <button 
                        onClick={handleGoogleAuth}
                        className={`flex items-center justify-center w-full border-2 p-3 rounded-lg mb-6 hover:bg-gray-50 transition-colors duration-200 ${
                            loading ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                        disabled={loading}
                    >
                        <FcGoogle className="text-2xl mr-2" />
                        <span className="font-semibold text-sm">
                            {authMode === "login" 
                                ? "Login with Google" 
                                : "Sign up with Google"
                            }
                        </span>
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        By continuing, you agree to our <span className="font-bold">Terms</span> and <span className="font-bold">Conditions</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

AuthComponent.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default AuthComponent;
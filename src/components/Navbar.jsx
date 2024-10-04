import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/app-logo.svg'
import { IoMenu,IoClose } from "react-icons/io5";
import { Link } from "react-router-dom"



function Navbar() {
    const [menuBtn, setMenuBtn] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setMenuBtn(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);


    function handleMenuBtn() {
        setMenuBtn(!menuBtn)
    }


    function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    }
    return (
        <header ref={wrapperRef} className="sticky top-0 z-[20] bg-lite-gray shadow-md">
            <div className=" relative flex justify-between items-center px-4 py-4 laptop:max-w-[90%] laptop:mx-auto">
                <img src={logo} alt="" className="w-28" />
                <nav className={classNames("absolute top-[70px] left-0 w-full text-center bg-lite-gray shadow-lg rounded-b-2xl laptop:flex laptop:relative laptop:top-0 laptop:rounded-none laptop:bg-lite-gray laptop:shadow-none ", !menuBtn && 'hidden')}> 
                    <ul className="flex flex-col gap-3 py-6 laptop:flex-row laptop:justify-end laptop:p-0 laptop:gap-5 laptop:items-center laptop:ml-auto font-bold">
                        <li><Link to={'/'} >Home</Link></li>
                        <li><Link to={'/Play'} >Play</Link></li>
                        <li><Link to={'/Book'} >Book</Link></li>
                        <li><Link to={'/Learn'} >Learn</Link></li>
                    </ul>
                    <ul className="mb-5 laptop:flex laptop:gap-3 laptop:ml-auto laptop:m-0">
                        <li className="font-bold px-10 py-2 rounded-md laptop:border laptop:border-primary-green laptop:text-primary-green laptop:hover:text-white laptop:hover:bg-primary-green laptop:transition-all hover:delay-75 cursor-pointer"><Link to={'/Login'} >Login</Link></li>
                        <li className="font-bold laptop:bg-primary-green laptop:text-white px-10 py-2 rounded-md cursor-pointer"><Link to={'/Signup'} >Signup</Link></li>
                    </ul>
                </nav>
                <button onClick={handleMenuBtn} className=" outline-none laptop:hidden">
                    {menuBtn?<IoClose style={{ fontSize:'2rem', paddingTop:'3px'}}/> :<IoMenu style={{ fontSize:'2rem', paddingTop:'3px'}}/>} 
                </button>
            </div>
        </header>
    )

}

export default Navbar
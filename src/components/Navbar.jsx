import { useState } from "react";
import logo from '../assets/app-logo.svg'
import { IoMenu,IoClose } from "react-icons/io5";
import { Link } from "react-router-dom"



function Navbar() {
    const [menuBtn, setMenuBtn] = useState(false);

    function handleMenuBtn() {
        setMenuBtn(!menuBtn)
    }


    function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    }
    return (
        <header className="sticky top-0 z-[20] bg-lite-gray shadow-md">
            <div className=" relative flex justify-between items-center px-4 py-4">
                <img src={logo} alt="" className="w-28" />
                <nav className={classNames("absolute top-[70px] left-0 w-full text-center bg-lite-gray shadow-lg rounded-b-2xl", !menuBtn && 'hidden')}> 
                    <ul className="flex flex-col gap-3 py-6">
                        <li><Link to={'/'} >Home</Link></li>
                        <li><Link to={'/Play'} >Play</Link></li>
                        <li><Link to={'/Book'} >Book</Link></li>
                        <li><Link to={'/Learn'} >Learn</Link></li>
                        <li><Link to={'/Login'} >Login</Link></li>
                        <li><Link to={'/Signup'} >Signup</Link></li>
                    </ul>
                </nav>
                <button onClick={handleMenuBtn} className=" outline-none">
                    {menuBtn?<IoClose style={{ fontSize:'2rem', paddingTop:'3px'}}/> :<IoMenu style={{ fontSize:'2rem', paddingTop:'3px'}}/>} 
                </button>
            </div>
        </header>
    )

}

export default Navbar
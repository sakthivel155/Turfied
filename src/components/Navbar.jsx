import { Link } from "react-router-dom";
import logo from '../assets/app-logo.svg';
import homeIcon from '../assets/icons/menu-icons/home.svg';
import playIcon from '../assets/icons/menu-icons/play.svg';
import bookIcon from '../assets/icons/menu-icons/book.svg';
import learnIcon from '../assets/icons/menu-icons/learn.svg';
import login from '../assets/icons/menu-icons/login-signup.svg';
import PropTypes from 'prop-types';

function Navbar({ toggleLogin }) {
  return (
    <header className="sticky top-0 z-[30] bg-white tablet:shadow-lg ">
      <div className="flex justify-between items-center px-4 py-4 laptop:max-w-[90%] laptop:mx-auto">
        <img src={logo} alt="Logo" className="w-28" />
        <nav className="fixed flex z-20 bottom-0 left-0 w-full justify-between text-center bg-white shadow-lg rounded-t-2xl tablet:flex tablet:relative tablet:top-0 tablet:rounded-none tablet:shadow-none">
          <ul className="flex items-center justify-between font-bold px-5 py-2 w-full tablet:justify-center tablet:p-0 tablet:gap-5">
            <li className='tablet:ml-auto'><Link to={'/'} className='flex flex-col items-center tablet:flex-row tablet:gap-1'> <img src={homeIcon} alt='Home icon' className='w-6'/>Home</Link></li>
            <li><Link to={'/Play'} className='flex flex-col items-center tablet:flex-row tablet:gap-1'><img src={playIcon} alt='Play icon' className='w-6'/>Play</Link></li>
            <li><Link to={'/Book'} className='flex flex-col items-center tablet:flex-row tablet:gap-1'><img src={bookIcon} alt='Book icon' className='w-6'/>Book</Link></li>
            <li><Link to={'/Learn'} className='flex flex-col items-center tablet:flex-row tablet:gap-1'><img src={learnIcon} alt='Learn icon' className='w-6'/>Learn</Link></li>
            <li className="tablet:ml-auto">
              <button onClick={toggleLogin} className='flex flex-col items-center tablet:flex-row tablet:gap-1'>
                <img src={login} alt='Login icon' className='w-6'/>
                <span className="tablet:hidden">Login</span>
                <span className="hidden tablet:inline">Login / SignUp</span>
              </button>
            </li>
          </ul>
        </nav>
        <button className="font-light border border-primary-green text-primary-green px-3 py-[6px] rounded-[13px] transition-colors duration-75 active:bg-primary-green-lite active:text-white outline-none tablet:hidden">
          <Link to={'/Book'}>Book now</Link>
        </button>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  toggleLogin: PropTypes.func.isRequired
};

export default Navbar;
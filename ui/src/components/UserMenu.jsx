import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaRightFromBracket, FaGear, FaChevronDown } from 'react-icons/fa6';

export function UserMenu() {
  const { user, logout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setIsOpen(false);
  };

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-primary-green to-green-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
          {user.name?.charAt(0).toUpperCase()}
        </div>
        <span className="hidden tablet:inline text-sm font-semibold text-gray-800">{user.name}</span>
        <FaChevronDown className={`text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-xs text-gray-500">Signed in as</p>
            <p className="font-semibold text-gray-800 truncate">{user.email}</p>
          </div>

          <button
            onClick={handleProfileClick}
            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition text-gray-800"
          >
            <FaUser className="text-primary-green" />
            <span>Profile</span>
          </button>

          <button
            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition text-gray-800"
          >
            <FaGear className="text-primary-green" />
            <span>Settings</span>
          </button>

          <div className="border-t border-gray-100 mt-2 pt-2">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-2 hover:bg-red-50 transition text-red-600 font-semibold"
            >
              <FaRightFromBracket />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

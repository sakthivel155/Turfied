import { useState, useEffect } from 'react';
import { useAuth } from '../context/useAuth';
import { FaUser, FaPhone, FaEnvelope, FaPen, FaRightFromBracket , FaShield  } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    // TODO: Implement API call to update user profile
    setIsEditing(false);
  };

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-green-700 rounded-full flex items-center justify-center">
                <FaUser className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                <p className="text-gray-500">{user.role?.charAt(0).toUpperCase() + user.role?.slice(1).toLowerCase()}</p>
              </div>
            </div>
            <button
              onClick={() => handleLogout()}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              <FaRightFromBracket  /> Logout
            </button>
          </div>
        </div>

        {/* Profile Information */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-opacity-90 transition"
            >
              <FaPen /> {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>

          <div className="p-6 space-y-4">
            {/* Email */}
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
              <FaEnvelope className="text-primary-green text-xl" />
              <div className="flex-1">
                <p className="text-gray-500 text-sm">Email Address</p>
                <p className="text-gray-800 font-semibold">{user.email}</p>
              </div>
            </div>

            {/* Name */}
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
              <FaUser className="text-primary-green text-xl" />
              <div className="flex-1">
                <p className="text-gray-500 text-sm">Full Name</p>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-800 font-semibold">{user.name}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 pb-4">
              <FaPhone className="text-primary-green text-xl" />
              <div className="flex-1">
                <p className="text-gray-500 text-sm">Phone Number</p>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={editData.phone}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-800 font-semibold">{user.phone || 'Not provided'}</p>
                )}
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="px-6 pb-6 flex gap-3">
              <button
                onClick={handleSaveEdit}
                className="flex-1 px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-opacity-90 transition font-semibold"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Security Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <div className="flex items-center gap-2 mb-4">
            <FaShield  className="text-primary-green text-xl" />
            <h2 className="text-xl font-bold text-gray-800">Security</h2>
          </div>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition font-semibold">
            Change Password
          </button>
        </div>

        {/* Bookings Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Your Bookings</h2>
          <div className="text-center py-8">
            <p className="text-gray-500">No bookings yet. Start booking turfs now!</p>
            <button
              onClick={() => navigate('/Book')}
              className="mt-4 px-6 py-2 bg-primary-green text-white rounded-lg hover:bg-opacity-90 transition font-semibold"
            >
              Book a Turf
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

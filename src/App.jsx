import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Play from './pages/Play';
import Book from './pages/Book';
import TurfDetailPage from './pages/book-page/TurfDetailPage';
import BookThisTurf from './pages/book-page/BookThisTurf';
import NotFound from './pages/NotFound';
import Login from '../src/pages/Login';
import './App.css';


function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [currentCity, setCurrentCity] = useState('');
  const [turfs, setTurfs] = useState([]); //the turf data fetch from the API and that call from searchcontainer component


  useEffect(() => {
    
    const fetchLocation = async () => {
      try {
        const district = await getGeolocation();
        setCurrentCity(district);
      } catch (error) {
        console.error("Location fetch failed:", error);
      }
    };

    fetchLocation();
  }, []); // Empty dependency array means this runs once on component mount

  async function getGeolocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Geolocation is not supported by this browser.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(response => response.json())
            .then(data => {
              const district = data.address.county || data.address.district || 'Nearby';
              resolve(district);
            })
            .catch(error => {
              console.error("Error getting location details:", error);
              reject(error);
            });
        },
        (error) => {
          console.error("Error getting location:", error);
          reject(error);
        }
      );
    });
  }

  const toggleLogin = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <BrowserRouter
    future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      
      <Navbar toggleLogin={toggleLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Play' element={<Play currentCity={currentCity}/>} />
        <Route path='/Book' element={<Book currentCity={currentCity} setCurrentCity={setCurrentCity}
          turfs={turfs} setTurfs={setTurfs} />} />
        <Route path='/Book/:turf_id' element={<TurfDetailPage turfs={turfs} />} />
        <Route path='/Book/:turf_id/book-this-turf' element={<BookThisTurf turfs={turfs}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isLoginVisible && <Login onClose={toggleLogin} />}
    </BrowserRouter>
  );
}

export default App;
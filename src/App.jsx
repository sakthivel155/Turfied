import { useState ,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Play from './pages/Play';
import Book from './pages/Book';
import Learn from './pages/Learn';
import NotFound from './pages/NotFound';
import Login from '../src/pages/Login';
import './App.css';

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [ currentCity , setCurrentCity ] = useState('');
  useEffect(() => {
    getGeolocation();
  }, []); 

  
  function getGeolocation() {
    
    return [new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
            
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                    .then(response => response.json())
                    .then(data => {
      
                      const district = data.address.county || data.address.district || 'N/A'
                    
                    
          
                      setCurrentCity(district)
                      resolve(district);
                  
                    })
                    .catch(error => {
                        console.error("Error getting location details:", error);
                        reject(error);
                    });
            }, (error) => {
                console.error("Error getting location:", error);
                reject(error);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
            reject("Geolocation not supported");
        }
    }) , currentCity]; 
}
  
  const toggleLogin = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <BrowserRouter>
      <Navbar toggleLogin={toggleLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Play' element={<Play currentCity={currentCity}/>} />
        <Route path='/Book' element={<Book currentCity={currentCity} setCurrentCity={setCurrentCity}/>} />
        <Route path='/Learn' element={<Learn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isLoginVisible && <Login onClose={toggleLogin} />}
    </BrowserRouter>
  );
}

export default App;
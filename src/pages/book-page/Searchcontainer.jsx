import React, { useState, useEffect } from 'react';
import locationIcon from '../../assets/icons/book-page/location-select.svg';
import  geoLocationIcon from '../../assets/icons/book-page/detect-location-icon.svg';
import searchIcon from '../../assets/icons/book-page/search-icon.svg';

import MultiSelect from './SearchTurfPage/Multiselect';
import StateCitySelectCard from './SearchTurfPage/StateCitySelectCard';

import { state } from '../../data/cityStates'

const SearchContainer = ({ setDisplayTurfs, setCurrentCity }) => {
  
  const [ turfs, setTurfs ] = useState([]);
  const [cityNameInput, setCityNameInput] = useState('');
  const [venueNameInput, setVenueNameInput] = useState('');
  
  const fetchTurfs = async () => { 
    try {
      const response = await fetch('http://localhost:3000/api/getTurfs'); 
      const data = await response.json();
      setTurfs(data);
      setDisplayTurfs(data);
      setStoreFilteredTurfsForSearchVenues(data);
    }
    catch (error) {
      console.error('Error fetching turfs:', error);
    }
}; 

useEffect(() => { 
  fetchTurfs();
}, []); 
  

  useEffect(() => {
    dropDownCityFilter(cityNameInput);
  }, [cityNameInput]);

  useEffect(() => {
    searchVenue(venueNameInput)
  }, [venueNameInput]);



  const [filteredTurfs, setFilteredLocations] = useState([]); //filter the control City-state 
  const [storeFilteredTurfsForSearchVenues, setStoreFilteredTurfsForSearchVenues] = useState(turfs); //control the venue-state

  const [itemShow, setItemShow] =useState(true) //hidden when select finnaly city
  

  function dropDownCityFilter(textInput) {
    if (textInput.includes(',')) {
      textInput = textInput.split(',')[0].trim();
    }
    if (textInput === "") {
      setDisplayTurfs(turfs);
      setStoreFilteredTurfsForSearchVenues(turfs)
      setVenueNameInput('')
    }else{
      const filtered = Object.entries(state).reduce((acc, [stateName, cities]) => {
        const filteredCities = cities.filter(city =>
          city.toLowerCase().includes(textInput.toLowerCase()) 
        );
        if (textInput === filteredCities[0]) { 
          filterTurf(textInput)
          setItemShow(!itemShow)
        } else if(filteredCities.length > 0) {
          acc.push([stateName, filteredCities]);
        }
        return acc;
      }, []);
      
      if (filtered.length === 0) {
        setFilteredLocations([['City Not Found', ['']]]);
      } else{
        setFilteredLocations(filtered);
      }
    }
  }
  
  function searchVenue(textInput) {
    if (textInput === "") {
      setDisplayTurfs(storeFilteredTurfsForSearchVenues); //continue here
    }else if (textInput === "" && cityNameInput === ""){
      setDisplayTurfs(turfs)
    }else if (textInput.length >= 2) {
      const finnalTurfs = storeFilteredTurfsForSearchVenues.filter(turf =>
        turf.turf_name.toLowerCase().includes(textInput.toLowerCase())
      );
      setDisplayTurfs(finnalTurfs);
    }
  }

  function filterTurf(city) {
    const displayTurfs = turfs.filter(turf => turf.turf_area.toLowerCase() === city.toLowerCase());
    if (displayTurfs.length > 0) {
      setStoreFilteredTurfsForSearchVenues(displayTurfs)
      setDisplayTurfs(displayTurfs);
    } else {
        console.log(`No turfs found for ${city}`);
    }
  }


  function getGeolocation() {
    
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
            
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                    .then(response => response.json())
                    .then(data => {
      
                      const district = data.address.county || data.address.district || 'N/A'
                      const state = data.address.state || 'N/A'
                    
          
                      setCityNameInput(`${district}, ${state}`)
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
    }); 
}

  
  return (
    <div className="w-[90%] mx-auto my-3 flex flex-col gap-3 laptop:flex-row laptop:h-12 laptop:justify-end laptop:w-[60%]">
      <div className='relative laptop:w-80'>
        <div className="flex items-center bg-white gap-3 p-3 border border-gray-600 rounded-lg">
          <img className="w-5 h-5" src={locationIcon} alt="location-icon" />
          <input
            type="text"
            className="w-full outline-none "
            id="search-area"
            autoComplete="off"
            placeholder="Search for a city, place..."
            value={cityNameInput}
            onChange={(e) => {
              setCityNameInput(e.target.value)

            setItemShow(true)//if any modify happen then state city show until click 
            }}
          />
          <img src={geoLocationIcon} alt="" onClick={() => {
            getGeolocation()
          }
          }/>
        </div>
        { itemShow && cityNameInput && (
          <ul className='absolute z-10 bg-white w-full top-11 border border-gray-600 rounded-lg border-t-0 rounded-t-none max-h-[277px] overflow-auto'>
            {filteredTurfs.flatMap(([stateName, cities], stateIndex) =>
              cities.map((city, cityIndex) => (
                <StateCitySelectCard
                  key={`${stateIndex}-${cityIndex}`}
                  city={city}
                  state={stateName}
                  onClick={(city, state) => {
                    setCityNameInput(`${city} ,${state}`) 
                    setCurrentCity(city)
                    filterTurf(city)
                  }
                
                  }
                />
              ))
            )}
          </ul>
        )}
      </div>
      <div className="flex items-center bg-white gap-3 p-3 border border-gray-600 rounded-lg">
        <img className="w-5 h-5" src={searchIcon} alt="search-icon" />
        <input
          type="text"
          className="w-full outline-none"
          autoComplete="off"
          name='searchVenue'
          placeholder="Search venue name"
          value={venueNameInput}
          onChange={(e) => setVenueNameInput(e.target.value)}
        />
      </div>
      <MultiSelect storeFilteredTurfsForSearchVenues={storeFilteredTurfsForSearchVenues} setDisplayTurfs={setDisplayTurfs} />
    </div>
  );
};




export default SearchContainer;

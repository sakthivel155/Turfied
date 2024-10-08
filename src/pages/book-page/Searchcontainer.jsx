import React, { useState, useEffect } from 'react';
import locationIcon from '../../assets/icons/book-page/location-select.svg';
import searchIcon from '../../assets/icons/book-page/search-icon.svg';

import MultiSelect from './Multiselect';
import StateCitySelectCard from './StateCitySelectCard';
import { turfs } from '../../data/turfDetails';
import { state } from '../../data/cityStates'

const SearchContainer = ({setDisplayTurfs }) => {
  const [cityNameInput, setCityNameInput] = useState('');
  const [venueNameInput, setVenueNameInput] = useState('');

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
    if (textInput === "") {
      setDisplayTurfs(turfs);
      setStoreFilteredTurfsForSearchVenues(turfs)
      setVenueNameInput('')
    } else {
      const filtered = Object.entries(state).reduce((acc, [stateName, cities]) => {
        const filteredCities = cities.filter(city =>
          city.toLowerCase().includes(textInput.toLowerCase()) 
        );
        if (filteredCities.length > 0) {
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

  return (
    <div className="w-[90%] mx-auto flex flex-col gap-3 laptop:flex-row laptop:h-12 laptop:justify-end">
      <div className='relative laptop:w-80'>
        <div className="flex items-center bg-white gap-3 p-3 border border-slate-400 rounded-lg">
          <img className="w-5 h-5" src={locationIcon} alt="location-icon" />
          <input
            type="text"
            className="w-full outline-none"
            id="search-area"
            autoComplete="off"
            placeholder="Search for a city, place..."
            value={cityNameInput}
            onChange={(e) => {
              setCityNameInput(e.target.value)
              setItemShow(true) //if any modify happen then state city show until click 
            }}
          />
        </div>
        { itemShow && cityNameInput && (
          <ul className='absolute z-10 bg-white w-full top-11 border border-slate-400 rounded-lg border-t-0 rounded-t-none max-h-[277px] overflow-auto'>
            {filteredTurfs.flatMap(([stateName, cities], stateIndex) =>
              cities.map((city, cityIndex) => (
                <StateCitySelectCard
                  key={`${stateIndex}-${cityIndex}`}
                  city={city}
                  state={stateName}
                  onClick={(city, state) => {
                    setCityNameInput(`${city} ,${state}`) 
                    filterTurf(city)
                    setItemShow(!itemShow)
                  }
                  
                  }
                />
              ))
            )}
          </ul>
        )}
      </div>
      <div className="flex items-center bg-white gap-3 p-3 border border-slate-400 rounded-lg">
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
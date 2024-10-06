import React, { useState, useEffect } from 'react';
import locationIcon from '../../assets/icons/book-page/location-select.svg';
import searchIcon from '../../assets/icons/book-page/search-icon.svg';

import MultiSelect from './Multiselect';
import StateCitySelectCard from './StateCitySelectCard';
import { turfs } from '../../data/turfDetails';
import { state } from '../../data/cityStates'

const SearchContainer = ({ setFilteredTurfs }) => {
  const [venueNameInput, setVenueNameInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [itemShow, setItemShow] =useState(true)
  useEffect(() => {
    searchVenue(venueNameInput)
  }, [venueNameInput]);

  useEffect(() => {
    filterLocations(locationInput);
    
  }, [locationInput]);

  function searchVenue(searchTerm) {
    if (searchTerm === "") {
      setFilteredTurfs(turfs);
    } else if (searchTerm.length >= 3) {
      const filteredTurfs = turfs.filter(turf =>
        turf.turf_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTurfs(filteredTurfs);
    }
  }

  function filterLocations(searchTerm) {
    if (searchTerm === "") {
      setFilteredLocations([]);
    } else {
      const filtered = Object.entries(state).reduce((acc, [stateName, cities]) => {
        const filteredCities = cities.filter(city =>
          city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          stateName.toLowerCase().includes(searchTerm.toLowerCase())
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

  return (
    <div className="w-[90%] mx-auto flex flex-col gap-3 laptop:flex-row laptop:h-12 laptop:justify-end">
      <div className='relative w-80'>
        <div className="flex items-center bg-white gap-3 p-3 border border-slate-400 rounded-lg">
          <img className="w-5 h-5" src={locationIcon} alt="location-icon" />
          <input
            type="text"
            className="w-full outline-none"
            id="search-area"
            autoComplete="off"
            placeholder="Search for a city, place..."
            value={locationInput}
            onChange={(e) => {
              setLocationInput(e.target.value)
              setItemShow(true)
            }}
          />
        </div>
        { itemShow && locationInput && (
          <ul className='absolute z-10 bg-white w-full top-11 border border-slate-400 rounded-lg border-t-0 rounded-t-none max-h-[277px] overflow-auto'>
            {filteredLocations.flatMap(([stateName, cities], stateIndex) =>
              cities.map((city, cityIndex) => (
                <StateCitySelectCard
                  key={`${stateIndex}-${cityIndex}`}
                  city={city}
                  state={stateName}
                  onClick={(city, state) => {
                    setLocationInput(`${city} ,${state}`) 
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
          placeholder="Search venue name"
          value={venueNameInput}
          onChange={(e) => setVenueNameInput(e.target.value)}
        />
      </div>
      <MultiSelect setFilteredTurfs={setFilteredTurfs} />
    </div>
  );
};

export default SearchContainer;
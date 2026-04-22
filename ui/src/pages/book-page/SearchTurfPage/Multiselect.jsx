import React, { useState, useRef, useEffect } from 'react';
import dropDownArrow from '../../../assets/icons/book-page/dropdown-arrow-svgrepo-com.svg';

const MultiSelect = ({storeFilteredTurfsForSearchVenues ,setDisplayTurfs}) => {
  const sports = [
    { value: 'football', label: 'Football' },
    { value: 'basketball', label: 'Basketball' },
    { value: 'volleyball', label: 'Volleyball' },
    { value: 'cricket', label: 'Cricket' },
    { value: 'tennis', label: 'Tennis' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSports, setSelectedSports] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function filterTurfsBySports(selectedSports) {
    return storeFilteredTurfsForSearchVenues.filter(turf => 
      selectedSports.length === 0 || selectedSports.some(sport => turf.turf_sports.includes(sport))
    );
  }

  const handleSportChange = (event) => {
    const sport = event.target.value;
    const newSelectedSports = event.target.checked ? [...selectedSports, sport] : selectedSports.filter(s => s !== sport);

    setSelectedSports(newSelectedSports);
    const newFilteredTurfs = filterTurfsBySports(newSelectedSports);
    setDisplayTurfs(newFilteredTurfs);
  };

  return (
    <div ref={wrapperRef} className="relative bg-white px-3 py-3 border border-gray-600 rounded-lg min-w-[260px]">
      <div className="flex justify-between items-center" onClick={()=> setIsOpen(!isOpen)}>
        {selectedSports.length > 0 ? selectedSports.join(', ') : 'All sports'}
        <img
          className="w-5"
          src={dropDownArrow}
          alt="dropdown arrow"
        />
      </div>

      {isOpen && (
        <div className="absolute w-[100.5%] top-13 left-[-1px] border border-t-0 border-gray-600 z-10">
          {sports.map(sport => (
            <label key={sport.value} className="flex gap-2 bg-white px-3 py-3">
              <input
                type="checkbox"
                value={sport.value}
                checked={selectedSports.includes(sport.value)}
                onChange={handleSportChange}
              />
              {sport.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
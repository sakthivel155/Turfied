import starIcon from '../../assets/icons/turf-card/star-icon.svg'
import SportIconImg from './SearchTurfPage/SportIconImg'


import basketball from '../../assets/icons/turf-card/basketball.png'
import cricket from '../../assets/icons/turf-card/cricket.png'
import football from '../../assets/icons/turf-card/football.png'
import tennis from '../../assets/icons/turf-card/tennis.png'
import volleyball from '../../assets/icons/turf-card/volleyball.png'

const sportIcons = {
  basketball: basketball,
  cricket: cricket,
  football: football,
  tennis: tennis,
  volleyball: volleyball
}

export const TurfCard = (turf) => {
  function convertToArray(str) {
    // Remove the curly braces at the beginning and end
    const withoutBraces = str.replace(/^{|}$/g, '');
    
    // Split by comma, then clean up each item (remove quotes, trim whitespace)
    const array = withoutBraces.split(',')
      .map(item => item.replace(/"/g, '').trim())
      .filter(item => item.length > 0); // Remove any empty items
    
    return array;
  }

  // Parse the sports string into an array
  const sportsArray = turf.sports ? convertToArray(turf.sports) : [];
  
  return (
    <div className='bg-white flex rounded-lg laptop:flex-col laptop:transition-all laptop:duration-300 laptop:hover:scale-[105%]'>
      <div className=' relative w-[40%] laptop:w-[100%]'>
        <img
          src={turf.imageUrl}
          alt={turf.name}
          className='h-[130px] w-full object-cover rounded-l-lg laptop:h-[180px] laptop:rounded-t-lg laptop:rounded-bl-none'
        />
        <span className='absolute right-0 bottom-0 text-white bg-primary-green px-2 py-1 text-xs rounded-tl-md laptop:text-base laptop:px-3 laptop:py-1'>
          Bookable
        </span>
      </div>
      <div className='w-[60%] p-2 flex flex-col justify-between laptop:w-[100%] laptop:p-4 laptop:min-h-[120px]'>
        <div className='laptop:flex laptop:justify-between'>
          <div className='font-semibold text-sm laptop:text-[1rem]'>{turf.name}</div>
          <div className='flex items-center gap-0.5 text-xs laptop:text-[14px]'>
            <img src={starIcon} alt="Rating" className='w-3 h-3 laptop:w-5 laptop:h-5'/>
            <span className="font-semibold">{turf.rating}</span>
            <span>({turf.reviewCount})</span>
          </div>
        </div>
        <div className='flex gap-1 text-sm laptop:text-[1rem]'>
          <div>{turf.location}</div>
          <div>(~ {turf.distance} km)</div>
        </div>
        <div className='flex'>
          {sportsArray.map((sport, index) => (
            <SportIconImg
              key={index}
              src={sportIcons[sport]}
              alt={sport}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
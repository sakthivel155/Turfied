import basketball from '../../../assets/icons/turf-card/basketball.png'
import cricket from '../../../assets/icons/turf-card/cricket.png'
import football from '../../../assets/icons/turf-card/football.png'
import tennis from '../../../assets/icons/turf-card/tennis.png'
import volleyball from '../../../assets/icons/turf-card/volleyball.png'

const sportIcons = {
  basketball: basketball,
  cricket: cricket,
  football: football,
  tennis: tennis,
  volleyball: volleyball
}
const SportAvailableSection = ({ availableSport }) => {
  // Convert the string format to array if it's not already an array
  const convertToArray = (str) => {
    if (Array.isArray(str)) return str; // If already an array, return as is
    
    if (typeof str !== 'string') return []; // If not a string, return empty array
    
    // Remove curly braces at beginning and end
    const withoutBraces = str.replace(/^{|}$/g, '');
    
    // Split by comma, clean up each item
    return withoutBraces
      .split(',')
      .map(item => item.replace(/"/g, '').trim())
      .filter(item => item.length > 0);
  };

  // Parse the availableSport string into an array
  const sportsArray = convertToArray(availableSport);
  
  return (
    <section className="mt-5 border border-gray-300 px-4 py-3 rounded-md">
      <h3 className="text-md font-black mb-2">Sports Available</h3>
      <div className="flex flex-wrap gap-5 mt-3 ">
        {sportsArray.map((sport, index) => (
          <div 
            key={index} 
            className="text-gray-700 text-sm border-gray-400 border shadow-inner shadow-gray-300 w-28 rounded-md flex flex-col items-center py-2"
          >
            <img src={sportIcons[sport]} alt={sport} className='w-12 h-12 capitalize'/>
            <p>{sport}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SportAvailableSection;
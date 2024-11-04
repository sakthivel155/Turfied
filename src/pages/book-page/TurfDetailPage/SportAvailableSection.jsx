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
const SportAvailableSection = ({ availableSport }) => (
    <section className="mt-5 border border-gray-300 px-4 py-3 rounded-md">
        <h3 className="text-md font-black mb-2">Sports Available</h3>
        <div className="flex flex-wrap gap-5 mt-3 ">
            {availableSport.map((sport, index) => (
              <div key = { index } className = "text-gray-700 text-sm  border-gray-400 border shadow-inner shadow-gray-300 w-28 rounded-md flex flex-col items-center py-2" >
                
                  <img src={sportIcons[sport]} alt="" className='w-12 h-12 capitalize'/>    
                  <p>{sport} </p>
              </div>
            ))}
          
      </div>
    </section>
);

export default SportAvailableSection;
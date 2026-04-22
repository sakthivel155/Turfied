import correctIcon from '../../../assets/icons/turf-card/correct-icon.svg';
const AmenitiesSection = ({availableAmenities}) => (
    <section className="mt-5 border border-gray-300 px-4 py-3 rounded-md">
    <h3 className="text-md font-black mb-2">Amenities</h3>
        <div className="flex flex-wrap gap-3 my-4">
            {availableAmenities.map((amenity, index) => (
                <div key = { index } className = "flex items-center gap-2 mt-2  " >
                        <img src={correctIcon} alt="correct-icon" className='w-4 h-4' />                
                        <p>{amenity}</p>
                    </div>    
            ))}
        </div>
    </section>
);
  
export default AmenitiesSection;
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { turfs } from "../../data/turfDetails";
import Breadcrumb from "../../components/ui/Breadcrumb";
import starIcon from '../../assets/icons/turf-card/star-icon.svg';
import shareIcon from '../../assets/icons/turf-card/share-icon.svg';
import Footer from "../../components/Footer";

import TimingSection from "./TurfDetailPage/TimingSection";
import LocationSection from "./TurfDetailPage/LocationSection";
import SportAvailableSection from "./TurfDetailPage/SportAvailableSection";
import AmenitiesSection from "./TurfDetailPage/AmenitiesSection";
import AboutVenueSection from "./TurfDetailPage/AboutVenueSection";
function TurfDetailPage() {
  const { turf_id } = useParams();
  const [singleTurfDetail, setSingleTurfDetail] = useState(null);

  useEffect(() => {
    const numericId = Number(turf_id);
    const foundTurf = turfs.find((turf) => turf.turf_id === numericId);
    setSingleTurfDetail(foundTurf);
  }, [turf_id]);

  if (!singleTurfDetail) {
    return null;
  }

  return (
    <>
      <main className="py-4">
      <Breadcrumb />
      <div className="w-[88%] mx-auto py-3 ">
        <div>
          <img 
            src={singleTurfDetail.turf_imgurl1} 
            alt={singleTurfDetail.turf_name}
            className="w-full h-40 rounded-lg my-4 object-cover"
          />
        </div>
        
        <h2 className="text-2xl font-black my-2">
          {singleTurfDetail.turf_name}
        </h2>
        
        <p className="text-gray-600">
          {singleTurfDetail.turf_place}
        </p>
        
        <div className="flex items-center gap-1 my-1">
          <img src={starIcon} alt="Rating" className="w-5 h-5"/>
          <span className="font-semibold text-[0.9rem]">
            {singleTurfDetail.turf_avg_rating}
          </span>
          <span className="text-[0.8rem] text-gray-700">
            ({singleTurfDetail.turf_no_of_rating} ratings)
          </span>
        </div>
        
        <button className="bg-[#00B562] text-white py-3 px-4 rounded-lg w-full mt-4">
          Book Now
        </button>
        
        <div className="flex justify-between gap-2 mt-3">
          <button className="flex items-center gap-1 font-bold border-gray-300 border-2 py-2 w-[50%] rounded-lg justify-center">
            <img src={shareIcon} alt="Share" className="w-7"/>
            Share
          </button>
          <button className="font-bold border-[#00B562] border py-2 rounded-lg text-[#00B562] w-[50%]">
            Bulk / Corporate
          </button>
        </div>

        <TimingSection openingHours={singleTurfDetail.turf_openingHours} />
        
        <LocationSection 
          address={singleTurfDetail.turf_address}
          mapUrl={singleTurfDetail.turf_map}
              />
        <SportAvailableSection availableSport={singleTurfDetail.turf_sports} />
        
        <AmenitiesSection availableAmenities={singleTurfDetail.turf_amenities} />
        
        
        <AboutVenueSection aboutVenue={singleTurfDetail.turf_about} />
      </div>
      </main>
      <Footer/>
    </>
    
    
  );
}

export default TurfDetailPage;
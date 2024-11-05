import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { turfs } from "../../data/turfDetails";
import Breadcrumb from "../../components/ui/Breadcrumb";
import starIcon from '../../assets/icons/turf-card/star-icon.svg';
import shareIcon from '../../assets/icons/turf-card/share-icon.svg';
import offerCard from '../../assets/images/offerCard.svg'
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
        <section className="w-[88%] mx-auto py-3 ">
        <h2 className="hidden tablet:block text-[32px] font-black my-2">
          {singleTurfDetail.turf_name}
          </h2> 
        {/* first section */}  
  <div className="tablet:flex tablet:justify-between tablet:gap-8"> 
      <div className="tablet:w-[70%]">
          <div className="hidden tablet:flex tablet:gap-3 ">
            <p className="text-gray-600 ">
              {singleTurfDetail.turf_place}
            </p>   
            <div className="flex items-center gap-1 ">
              <img src={starIcon} alt="Rating" className="w-5 h-5"/>
              <span className="font-semibold text-[0.9rem]">
                {singleTurfDetail.turf_avg_rating}
              </span>
              <span className="text-[0.8rem] text-gray-700">
                ({singleTurfDetail.turf_no_of_rating} ratings)
                </span>
              </div>     
          </div>
          
      {/* Turf Image */}
          <div className="w-full h-[50vw] tablet:h-[35vw] ">
            <img 
              src={singleTurfDetail.turf_imgurl1} 
              alt={singleTurfDetail.turf_name}
              className="w-full h-full rounded-lg my-4 object-cover"
            />
              </div>
      <div className="hidden tablet:block">   
        <SportAvailableSection availableSport={singleTurfDetail.turf_sports} />
        <AmenitiesSection availableAmenities={singleTurfDetail.turf_amenities} /> 
        <AboutVenueSection aboutVenue={singleTurfDetail.turf_about} />
      </div> 
      </div>   
        <h2 className="tablet:hidden text-2xl font-black my-2">
          {singleTurfDetail.turf_name}
        </h2>
        
        <div className="tablet:hidden">
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
        </div>
          {/* second section */} 
            <div className="tablet:w-[30%]">
                <img src={offerCard} alt="" className="w-full my-10 object-cover hidden laptop:block" />
                <button className="bg-[#00B562] text-white py-3 px-4 rounded-lg w-full mt-4 tablet:mt-0">
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
          </div>
        </div>
      <div className="tablet:hidden">   
        <SportAvailableSection availableSport={singleTurfDetail.turf_sports} />
        <AmenitiesSection availableAmenities={singleTurfDetail.turf_amenities} /> 
        <AboutVenueSection aboutVenue={singleTurfDetail.turf_about} />
      </div> 
        
          <div className="tablet:hidden">
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
        </div>
      </section>
      </main>
      <Footer/>
    </>
    
    
  );
}

export default TurfDetailPage;
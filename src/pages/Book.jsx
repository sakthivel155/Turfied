import SearchContainer from "./book-page/Searchcontainer"
import Footer from '../components/Footer'
import { TurfCard } from "./book-page/TurfCard";
import { useState } from "react";
import Breadcrumb from "../components/ui/Breadcrumb";


function Book({currentCity,setCurrentCity}) {
    const [displayTurfs, setDisplayTurfs] = useState([]);


    return (
        <>
            <main>
                <div className="bg-gray-400 pb-3 tablet:flex tablet:flex-col laptop:pb-0 tablet:items-center laptop:tablet:flex-row laptop:px-5">
                    <h2 className="font-black  max-w-[300px] text-lg text-center mx-auto py-3 tablet:py-3 tablet:mx-3 laptop:text-left laptop:text-xl">Discover and Book Top Sports venues in {currentCity} Online</h2>
                    <SearchContainer displayTurfs={displayTurfs} setDisplayTurfs={setDisplayTurfs} setCurrentCity={setCurrentCity} />
                </div>
                <Breadcrumb/>
                <div className="grid gap-5 w-[90%] mx-auto my-3 tablet:grid-cols-[repeat(auto-fill,minmax(390px,1fr))] laptop:w-[95%] laptop:my-10 laptop:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] ">
                    {displayTurfs.map((turf,id=id+1) => {
                        return(
                        <TurfCard
                                key={id}
                                imageUrl={turf.turf_imgurl1}
                                name={turf.turf_name}
                                rating={turf.turf_avg_rating}
                                reviewCount={turf.turf_no_of_rating}
                                location={turf.turf_area}
                                distance={turf.turf_distance}
                                sports={turf.turf_sports}
                                className="w-full"
                        />)
                    })}
                </div>
                <Footer />
            </main>
        </>
    )

}

export default Book
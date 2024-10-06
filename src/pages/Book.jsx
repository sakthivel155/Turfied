import SearchContainer from "./book-page/Searchcontainer"
import Footer from '../components/Footer'
import { turfs } from "../data/turfDetails";
import { TurfCard } from "./book-page/TurfCard";
import { useState } from "react";


function Book() {
    const [displayTurfs, setDisplayTurfs] = useState(turfs);


    return (
        <>
            <main>
                <div className="bg-filter-bar-gray pb-3 tablet:flex tablet:flex-col laptop:pb-0 tablet:items-center laptop:tablet:flex-row laptop:px-5">
                    <h2 className="font-semibold  max-w-[225px] text-center mx-auto py-3 tablet:py-3 tablet:mx-3 laptop:text-left">Discover and Book Top Sports venues in Chennai Online</h2>
            <SearchContainer displayTurfs={displayTurfs} setDisplayTurfs={setDisplayTurfs} />
                </div>
                <div className="grid gap-5 w-[95%] mx-auto my-3 tablet:grid-cols-[repeat(auto-fill,minmax(390px,1fr))] laptop:w-[95%] laptop:my-10 laptop:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] ">
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
                        />)
                    })}
                </div>
                <Footer />
            </main>
        </>
    )

}

export default Book
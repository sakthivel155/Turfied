import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import Sportcard from "../components/ui/Sportcard"
import Featurecard from "../components/ui/Featurecard"
import { landingPageImage, appFeature, popularSportData } from "../data/imgLocalUrl"
import offerCard from '../assets/images/offerCard.svg'
import sideOfferCard from '../assets/images/offerCard.png'
function Home() {


    return (

        <>
            <main>
                <section className='bg-white mb-5 rounded-b-2xl laptop:py-10 '>
            <div className="flex flex-col tablet:items-center tablet:flex-row tablet:justify-between laptop:max-w-[90%] laptop:m-auto">             
                <div className="px-4 py-10 tablet:max-w-[40%] laptop:max-w-[30%]">
                    <h1 className="text-[1.4rem] font-black tablet:text-[1.5rem] laptop:text-[1.9rem]">FIND PLAYERS & VENUES NEARBY</h1>
                    <p className="my-5 text-lg font-medium text-slate-500 laptop:text-lg">
                        Seamlessly explore sports venues and play with sports enthusiasts
                        just like you!
                    </p>
                    <div>
                                <button className="px-5 py-2 bg-primary-green font-medium text-lg text-white rounded-lg transition-colors duration-300 active:bg-primary-green-lite outline-none">
                                    <Link to={'/Book'} >Book now</Link>
                                </button>
                    </div>
                </div>
                <div className="flex px-4 py-4 laptop:max-w-[50%]"> 
                    <div>
                        <img
                            className="rounded-l-lg"
                            src={landingPageImage[0]}
                            alt="hero_left"
                        />
                    </div>
                    <div>
                        <img
                            className=" rounded-tr-lg"
                            src={landingPageImage[1]}
                            alt="hero_right_top"
                        />
                        <img 
                            className="rounded-br-lg"
                            src={landingPageImage[2]}
                            alt="hero_right_bottom"
                        />
                    </div>
                </div>
            </div>
                </section>
                <section className="bg-white m-5 px-5 py-4 rounded-xl laptop:max-w-[90%] laptop:m-auto">
                <h2 className='font-semibold laptop:text-xl'>Popular Sports</h2>
                <div className="py-5 grid grid-cols-2 gap-4 mobile:grid-cols-3 tablet:grid-cols-6 ">
                        {popularSportData.map((item,key=0) => <Sportcard key={key+1} sportName = {item.sportName} imgUrl={item.url} />)}
                </div>
                </section>
                <div className="grid gap-5 tablet:grid-cols-2 max-w-[90%] mx-auto tablet:my-5">
                    <section className="flex flex-col justify-between gap-5 ">
                        <img src={sideOfferCard} alt=""  className="hidden tablet:block laptop:hidden rounded-xl"/>
                        <img src={offerCard} alt="" className="w-full h-[100%] object-contain tablet:hidden laptop:block" />
                    </section>
                    <section className="bg-white  p-4 rounded-xl w-full">
                        <h2 className='font-semibold laptop:text-xl'>Your one-stop platform for sports</h2>
                    <div className="grid laptop:grid-cols-2  ">
                        {appFeature.map((item,key=0) => <Featurecard key={key+1} imgUrl={item.imgUrl} appFeature = {item.content} />)}
                        </div>     
                    </section>
                    </div>
            </main>
            <Footer />
        </>
        
        )
}

export default Home
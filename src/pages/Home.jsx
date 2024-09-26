import Footer from "../components/Footer"
import Sportcard from "../components/ui/Sportcard"
import Featurecard from "../components/ui/Featurecard"
import { landingPageImage , appFeature , popularSportData } from "../data/imgLocalUrl"
function Home() {


    return (

        <>
            <main>
        <section className='bg-white pb-4 mb-5 rounded-b-2xl'>
            <div className="px-4 py-10">
                <h1 className="text-[1.4rem] font-black">FIND PLAYERS & VENUES NEARBY</h1>
                <p className="my-5 text-md">
                    Seamlessly explore sports venues and play with sports enthusiasts
                    just like you!
                </p>
            <div>
                        <button className="px-5 py-2 bg-primary-green font-medium text-lg text-white rounded-lg transition-colors duration-300 active:bg-primary-green-lite outline-none">
                            Book now</button>
            </div>
            </div>
            <div className="flex px-4">
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
        </section>
            <section className="bg-white m-4 px-5 py-4 rounded-xl">
            <h2 className='font-semibold'>Popular Sports</h2>
            <div className="py-2 grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,116px),1fr))] ">
                    {popularSportData.map((item,key=0) => <Sportcard key={key+1} sportName = {item.sportName} imgUrl={item.url} />)}
            </div>
            </section>
            <section className="bg-white m-4 p-4 rounded-xl">
                <h2 className='font-semibold'>Your one-stop platform for sports</h2>
                <div className="grid tablet:grid-cols-2 ">
                    {appFeature.map((item,key=0) => <Featurecard key={key+1} imgUrl={item.imgUrl} appFeature = {item.content} />)}
                </div>
            </section>
            </main>
            <Footer />
        </>
        
        )
}

export default Home
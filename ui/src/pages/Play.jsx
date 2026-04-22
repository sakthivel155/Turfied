import Breadcrumb from "../components/ui/Breadcrumb"

function Play({currentCity}) {

    return (
        <main className="">
            <div className="w-[88%] mx-auto">
                <h2 className="text-center font-black text-xl py-2 tablet:text-left">
                    Game Players in {currentCity?currentCity:'Nearby'}</h2>
                
            </div>
            <Breadcrumb/>
        </main>
    )

}

export default Play
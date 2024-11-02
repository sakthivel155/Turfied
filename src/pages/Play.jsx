import Breadcrumb from "../components/ui/Breadcrumb"

function Play({currentCity}) {

    return (
        <main>
            <div className="bg-filter-bar-gray pb-3 tablet:flex tablet:flex-col laptop:pb-0 tablet:items-center laptop:tablet:flex-row laptop:px-5">
                <h2 className="font-black text-lg font-xl  max-w-[225px] text-center mx-auto py-3 tablet:py-3 tablet:mx-3 laptop:text-left">
                    Game Players in {currentCity}</h2>
                
            </div>
            <Breadcrumb/>
        </main>
    )

}

export default Play
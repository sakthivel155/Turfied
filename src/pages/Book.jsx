import Footer from "../components/Footer"
import SearchContainer from "./book page/Searchcontainer"

function Book() {

    return (
        <>
            <main>
                <div className="bg-filter-bar-gray">
                    <h2 className="font-semibold">Discover and Book Top Sports venues in Chennai Online</h2>
                    <SearchContainer />
                </div>
            </main>
        </>
    )

}

export default Book
import Footerlinks from "./Footerlinks"
function Footercard({ linkHeader, linkNames }) {

    return (
        <div>
            <h3>{linkHeader}</h3>
            <div className="flex flex-col">
                {linkNames.map((linkName, key = 0) => <Footerlinks key={key + 1} linkName={linkName} /> )}
            </div>
            </div>
    )
}

export default Footercard
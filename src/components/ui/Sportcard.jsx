
function Sportcard(item) {
    return (
        <div className="relative flex">
            <h3 className=" absolute bottom-3 left-2 text-white font-bold text-[.7rem]">{item.sportName}</h3>
            <img src={item.imgUrl} alt="badminton" className="w-24 " />
        </div>
    )
}

export default Sportcard
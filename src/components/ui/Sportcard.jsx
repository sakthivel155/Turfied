
function Sportcard(item) {
    return (
        <div className=" flex justify-center">
            <div className="relative w-28 laptop:w-36">
            <h3 className=" absolute bottom-3 left-2 text-white font-bold text-[.7rem]">{item.sportName}</h3>
            <img src={item.imgUrl} alt="badminton"  />
            </div>
        </div>
    )
}

export default Sportcard
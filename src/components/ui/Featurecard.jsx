function Featurecard(item) {
    return (
        <div className="flex items-center gap-2 mt-5 ">
            <img src={item.imgUrl} alt="" className=" w-14 "/>
            <p className="text-md">{item.appFeature}</p>
        </div>
    )
}

export default Featurecard